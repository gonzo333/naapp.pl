# ZMiGRS — Raport z przeglądu technicznego i status wdrożenia (Google Drive / Cloudflare)

> Data review: 2026-09-25  
> Ostatnia aktualizacja statusu: 2026-10-02  
> Zakres: Cloudflare Worker `zmigrs-api`, baza D1 `zmigrs-db`, frontend `zmigrs/page`, integracja z Google Drive i Google Sign-In.  
> Status integracji: **Pliki przechowywane na Google Drive**, serwowane bezserwerowo przez Cloudflare Worker z buforowaniem Edge Cache.

Priorytety: **P0** — bezpieczeństwo krytyczne, **P1** — stabilność/architektura, **P2** — jakość i porządki.

---

## Podsumowanie Postępu Wdrożenia (Stan na 2026-10-02)

| Obszar                 | Zadanie                                          |     Status      | Gdzie zrealizowano                       |
| ---------------------- | ------------------------------------------------ | :-------------: | ---------------------------------------- |
| **1.1 Bezpieczeństwo** | Weryfikacja `aud` i tokenu Google                | **[UKOŃCZONE]** | `worker.ts` (`verifyGoogleUser`)         |
| **1.2 Bezpieczeństwo** | Biała lista redaktorów (lowercase)               | **[UKOŃCZONE]** | `worker.ts` (`ALLOWED_ADMIN_EMAILS`)     |
| **1.3 Bezpieczeństwo** | Blokada obcych `folderId` w attachments          | **[UKOŃCZONE]** | `worker.ts` (`handleAttachments`)        |
| **1.4 Bezpieczeństwo** | Blokada obcych `fileId` w attachment_file        | **[UKOŃCZONE]** | `worker.ts` (`handleAttachmentFile`)     |
| **1.6 Bezpieczeństwo** | Usunięcie arbitralnego pobierania edytora        | **[UKOŃCZONE]** | `admin/editor.html` w repozytorium       |
| **1.7 Bezpieczeństwo** | Ścisłe originy CORS (brak wildcardów)            | **[UKOŃCZONE]** | `worker.ts` (`ALLOWED_ORIGINS`)          |
| **1.8 Formularz**      | Cloudflare Turnstile + walidacja + e-mail        | **[UKOŃCZONE]** | `worker.ts` (Turnstile + Resend API)     |
| **2.1 Google Drive**   | Streaming `/files/:id` z Cache API               | **[UKOŃCZONE]** | `worker.ts` (`handleFileStream`)         |
| **2.2 Google Drive**   | Cache tokenu konta usługi (SA)                   | **[UKOŃCZONE]** | `worker.ts` (zmienna modułowa)           |
| **2.4 Google Drive**   | Prywatność plików (brak publicznych linków)      | **[UKOŃCZONE]** | `worker.ts` (serwowanie kontem usługi)   |
| **2.5 Google Drive**   | Ochrona limitu 50 subrequestów                   | **[UKOŃCZONE]** | `worker.ts` (`MAX_FILES_PER_SAVE = 20`)  |
| **3.1 Wdrożenie**      | Przeniesienie edytora do repo                    | **[UKOŃCZONE]** | `admin/editor.html` + `admin/index.html` |
| **3.4 Architektura**   | Refaktoryzacja SRP w `worker.ts`                 | **[UKOŃCZONE]** | `worker.ts` (Router, Handlery, D1 Repo)  |
| **4.1 Frontend**       | Routing URL / Deep Linking (`#/aktualnosci/:id`) | **[UKOŃCZONE]** | `script.js` (History API / Hash router)  |
| **4.2 Frontend**       | SEO i podgląd Open Graph dla artykułów           | **[UKOŃCZONE]** | `worker.ts` (`handleArticleSeo`)         |
| **4.3 Frontend**       | Sanityzacja treści i formularza                  | **[UKOŃCZONE]** | `script.js` + `worker.ts` (DOMPurify)    |
| **4.4 Frontend**       | Dostępność cyfrowa (WCAG 2.1 AA) i BIP           | **[UKOŃCZONE]** | `index.html` + `assets/images/bip.svg`   |
| **5.1 Porządki**       | Aktualizacja specyfikacji technicznej            | **[UKOŃCZONE]** | `wkladka-techniczna.html`                |

---

## 1. Bezpieczeństwo (P0)

### 1.1 Weryfikacja `aud` w tokenie Google — [UKOŃCZONE]

**Rozwiązanie:** Wdrożono w `worker.ts` w funkcji `verifyGoogleUser()`:

```ts
if (data.aud !== GOOGLE_CLIENT_ID) return null;
if (data.email_verified !== true && data.email_verified !== "true") return null;
const email = String(data.email || "").toLowerCase();
if (!email || !ALLOWED_ADMIN_EMAILS.includes(email)) return null;
```

Token jest akceptowany wyłącznie wtedy, gdy został wyemitowany przez Google dokładnie dla aplikacji ZMiGRS, a adres e-mail został zweryfikowany.

### 1.2 Lista redaktorów — [UKOŃCZONE]

- Wdrożono tablicę `ALLOWED_ADMIN_EMAILS` z porównywaniem w małych literach (`toLowerCase()`).
- Aktualne konta z uprawnieniami administracyjnymi: `f53181168@gmail.com`, `newadvanceapp@gmail.com`.
- **Zalecenie organizacyjne:** Wymuszenie włączenia weryfikacji dwuetapowej (2FA) na kontach redaktorskich Google.

### 1.3 Publiczny endpoint `?action=attachments` — [UKOŃCZONE]

**Rozwiązanie:** Endpoint `handleAttachments()` weryfikuje w bazie Cloudflare D1, czy podany `folderId` lub `id` wpisu faktycznie występuje w kolumnie `folder_id` odpowiedniej tabeli (`news`, `resolutions`, `reports`). Obce identyfikatory folderów są natychmiast odrzucane z kodem 404.

### 1.4 Publiczny endpoint `?action=attachment_file&fileId=...` — [UKOŃCZONE]

**Rozwiązanie:** `handleAttachmentFile()` pobiera metadane pliku z Drive wraz z polem `parents`. Jeśli żaden z rodziców pliku nie jest powiązany z rekordem w bazie D1, żądanie zwraca 404 Not Found.

### 1.5 Zastąpienie `?action=image&id=...` — [UKOŃCZONE]

Zastąpiono bezpiecznym endpointem strumieniującym `/files/:fileId` z weryfikacją rodzica w D1 oraz buforowaniem w Cloudflare Cache API (patrz pkt 2.1).

### 1.6 Eliminacja arbitralnego ładowania edytora — [UKOŃCZONE]

Edytor HTML został w całości przeniesiony do repozytorium (`admin/editor.html`). Wyeliminowano podatność wstrzykiwania kodu z Dysku Google do ramki iframe.

### 1.7 Dozwolone pochodzenia (CORS) — [UKOŃCZONE]

W `worker.ts` zdefiniowano ścisłą listę `ALLOWED_ORIGINS`:

- `https://zmigrs.pl`, `https://www.zmigrs.pl`
- Lokalne środowiska programistyczne z konkretnymi portami: `http://localhost:63342`, `http://localhost:8787`, `http://127.0.0.1:8787`
- Zoptymalizowano `getCorsHeaders(origin)` do pojedynczego helpera współdzielonego przez wszystkie kontrolery.

### 1.8 Zabezpieczenie formularza kontaktowego — [UKOŃCZONE]

- **Cloudflare Turnstile:** Worker weryfikuje token Turnstile w endpointzie `https://challenges.cloudflare.com/turnstile/v0/siteverify` przed zapisem do tabeli `contacts`.
- **Walidacja po stronie API:** Sprawdzanie długości pól (imię ≤ 100 znaków, e-mail ≤ 200 + regex, temat ≤ 200, treść ≤ 5000) oraz odrzucanie pustych zgłoszeń.
- **Powiadomienia e-mail:** Wdrożono usługę `EmailNotificationService` w `worker.ts` wysyłającą automatyczne powiadomienie o nowym zapytaniu na adres `biuro@zmigrs.kielce.com.pl` za pośrednictwem Resend API.
- **RODO:** Utworzono podstronę `#rodo` z pełną klauzulą informacyjną (art. 13 RODO).

---

## 2. Google Drive — stabilność i wydajność (P1)

### 2.1 Strumień plików `/files/:fileId` z Cache API — [UKOŃCZONE]

- Wdrożono endpoint `GET /files/:fileId` strumieniujący zawartość pliku bezpośrednio z Google Drive API v3 kontem usługi.
- Odpowiedzi buforowane są w brzegowej pamięci podręcznej `caches.default` z nagłówkiem `Cache-Control: public, max-age=86400, s-maxage=2592000, immutable`.
- Drugie i kolejne pobranie pliku nie obciąża czasu CPU Workera ani limitu Google Drive API.

### 2.2 Pamięć podręczna tokenu konta usługi (SA) — [UKOŃCZONE]

W module `worker.ts` wdrożono zmienną `cachedServiceAccountToken` przechowującą ważny token JWT wraz ze znacznikiem wygaśnięcia `expiresAt`. Worker pobiera nowy token z `oauth2.googleapis.com` tylko raz na godzinę, oszczędzając CPU i subrequesty.

### 2.3 Własność folderów i pojemność Dysku — [UKOŃCZONE]

- Foldery nadrzędne (`DRIVE_PARENT_FOLDERS`) znajdują się na centralnym koncie Google.
- **Zalecenie:** Po zakończeniu migracji upewnić się, że konto nadrzędne należy do domeny Związku (nie do prywatnej osoby).

### 2.4 Bezpieczeństwo uprawnień plików — [UKOŃCZONE]

Dzięki serwowaniu załączników i miniatur przez endpoint `/files/:id` z użyciem Konta Usługi, pliki na Dysku Google nie wymagają publicznego linku („każdy z linkiem ma dostęp”). Szkice artykułów pozostają niewidoczne dla osób postronnych.

### 2.5 Ochrona przed limitem 50 subrequestów — [UKOŃCZONE]

W `worker.ts` wprowadzono twardy limit bezpieczeństwa:

- `MAX_FILES_PER_SAVE = 20` – edytor blokuje próbę zapisu wpisu z więcej niż 20 załącznikami na raz.
- `MAX_SUBREQUESTS = 45` – licznik żądań w transakcji zapisu zapobiega przekroczeniu bezpłatnego limitu Cloudflare Workers (50 subrequestów).

---

## 3. Utrzymanie i architektura (P1)

### 3.1 Edytor w repozytorium — [UKOŃCZONE]

Plik `admin/editor.html` znajduje się w repozytorium kodu. Zapewnia to pełną kontrolę wersji, audyt zmian w Git oraz eliminację zależności od zewnętrznego pliku na Dysku Google.

### 3.2 Schemat bazy danych w repozytorium — [ZALECANE DO WYKONANIA]

- Schemat D1 w pełni funkcjonuje na produkcji.
- Rekomendowane utworzenie pliku migracji `migrations/0001_init.sql` poleceniem `npx wrangler d1 export zmigrs-db --remote --no-data`.

### 3.3 Architektura kodu Workera (SRP) — [UKOŃCZONE]

Monolityczny plik `worker.ts` został zrefaktoryzowany zgodnie z zasadą Single Responsibility Principle:

- **Router / Dispatcher:** Główna funkcja `fetch()` to zwięzła tablica tras (< 60 linii kodu).
- **Kontrolery:** `handlePublicFeed`, `handleArticleDetail`, `handleArticleSeo`, `handleFileStream`, `handleContactSubmit`, `handleSaveContent`, `handleDeleteContent`.
- **Repozytoria:** `ContentRepository` hermetyzujące zapytania SQL do bazy D1.
- **Usługi:** `DriveService`, `AuthService`, `EmailNotificationService`.

### 3.4 Domena API — [OPCJONALNIE NA PRZYSZŁOŚĆ]

Aktualnie API działa pod domeną `zmigrs-api.newadvanceapp.workers.dev`. W przyszłości można podpiąć niestandardową trasę `zmigrs.pl/api/*` po delegacji strefy DNS do Cloudflare.

---

## 4. Frontend (P2)

### 4.1 Routing URL i Deep Linking — [UKOŃCZONE]

W [script.js](file:///C:/dev/naapp/naapp.pl/zmigrs/page/script.js) zaimplementowano pełny router SPA:

- Adresy artykułów w formacie: `#/aktualnosci/:id` (z aliasami polskimi i angielskimi).
- Obsługa nawigacji wstecz/dalej w przeglądarce (`popstate` / `hashchange`).
- Przycisk udostępniania kopiujący bezpośredni link do schowka.
- Dedykowany, minimalistyczny przycisk powrotu do listy ze strzałką u góry po lewej stronie nad tytułem.

### 4.2 SEO i podgląd linków (Open Graph) — [UKOŃCZONE]

Punkt końcowy `handleArticleSeo()` w `worker.ts` generuje dla botów indeksujących (Facebook, Twitter, LinkedIn, Googlebot) pełny kod HTML z metatagami:

- `<title>`, `<meta name="description">`
- `<meta property="og:title">`, `<meta property="og:description">`, `<meta property="og:image">`, `<meta property="og:url">`
- Skrypt natychmiastowego przekierowania do widoku aplikacji SPA dla zwykłych użytkowników.

### 4.3 Dostępność cyfrowa (WCAG 2.1 AA) i BIP — [UKOŃCZONE]

- Wdrożono pasek dostępności (A11y Toolbar): wysoki kontrast (7:1), 3 rozmiary czcionek, wyłączenie animacji ruchu.
- Dodano klawiaturowy "Skip link".
- Opracowano pełną Deklarację Dostępności (`#accessibility`).
- Zintegrowano urzędowy znak wektorowy BIP z pliku `assets/images/bip.svg` w pasku górnym oraz w nagłówku sekcji `#bip`.

---

## 5. Checklista testów wdrożeniowych

- [x] Logowanie kontem z listy redaktorów → edytor poprawnie się ładuje.
- [x] Token Google wydany dla innej aplikacji (`aud != GOOGLE_CLIENT_ID`) → odmowa dostępu (401/403).
- [x] Próba pobrania załączników z niepowiązanego folderu (`?action=attachments&folderId=...`) → 404 Not Found.
- [x] Pobranie pliku przez `/files/:id` z nagłówkiem `Cache-Control: immutable` → streaming działa, ponowne żądanie zwraca HIT z cache.
- [x] Formularz kontaktowy: walidacja pól, weryfikacja Cloudflare Turnstile, powiadomienie e-mail Resend.
- [x] Bezpośrednie wejście w link artykułu `#/aktualnosci/:id` → automatyczne załadowanie artykułu i aktualizacja tytułu karty.
- [x] Kopiowanie linku do artykułu (przycisk udostępniania obok daty) → zapis linku w schowku z powiadomieniem toast.
- [x] Przycisk powrotu ze strzałką nad tytułem → powrót do listy aktualności z zachowaniem stanu filtrowania.
- [x] Test trybu wysokiego kontrastu oraz paska WCAG 2.1 AA.
- [x] Weryfikacja wyświetlania oficjalnej ikony wektorowej `bip.svg`.
