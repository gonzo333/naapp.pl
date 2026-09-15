# Projekt: Migracja ZMiGRS z Oracle APEX na Google Sheets + Google Drive

> **Zleceniodawca:** ZMiGRS — Związek Miast i Gmin Regionu Świętokrzyskiego
> **Typ projektu:** Migracja backendu strony informacyjnej
> **Strona:** statyczny HTML/CSS/JS, hosting dowolny (np. GitHub Pages)

---

## Cel projektu

Zastąpienie backendu Oracle APEX prostym, bezpłatnym systemem opartym na Google Sheets
(metadane artykułów) i Google Drive (pliki, zdjęcia). Strona pozostaje statycznym
HTML/CSS/JS — zmienia się tylko źródło danych i sposób ich pobierania.

---

## Architektura: obecna vs nowa

```
OBECNA:
Frontend (HTML/JS) ──fetch──▶ Oracle APEX (ORDS) ──SQL──▶ Oracle DB
                                                             ↓
                                                       Google Drive (obrazy)

NOWA:
Frontend (HTML/JS) ──fetch──▶ Google Sheets API ──▶ Arkusz kalkulacyjny
                  ──fetch──▶ Google Drive API   ──▶ Foldery z plikami
```

---

## Struktura danych w Google Sheets

Jeden plik Google Sheets z czterema arkuszami (zakładkami):

### Arkusz 1: `artykuly`

| news_id | name | publication_date | author | description | content | folder_id | published |
|---|---|---|---|---|---|---|---|
| 1 | Zebranie zarządu | 2025-03-01 | Zarząd ZMiGRS | Krótki opis... | Pełna treść HTML... | `1a2b3c...` | TRUE |

- `folder_id` — ID folderu w Google Drive zawierającego zdjęcia do tego artykułu
- `content` — może zawierać podstawowy HTML (nagłówki, paragrafy, pogrubienie)
- `published` — checkbox; tylko wiersze z `TRUE` pojawiają się na stronie

### Arkusz 2: `uchway`

| resolution_id | name | publication_date | description | folder_id | published |
|---|---|---|---|---|---|
| 1 | Uchwała nr 1/2025 | 2025-01-15 | Opis uchwały | `4d5e6f...` | TRUE |

### Arkusz 3: `sprawozdania`

| report_id | name | publication_date | description | folder_id | published |
|---|---|---|---|---|---|
| 1 | Sprawozdanie 2024 | 2025-02-01 | Opis roczny | `7g8h9i...` | TRUE |

### Arkusz 4: `kontakt` *(formularz — zapis automatyczny)*

| timestamp | name | email | message |
|---|---|---|---|
| 2025-03-01 12:00 | Jan Kowalski | jan@... | Treść wiadomości |

Ten arkusz jest zapisywany przez Google Apps Script (patrz sekcja Apps Script).

---

## Struktura Google Drive

```
📁 ZMiGRS  (folder główny, udostępniony "Każdy z linkiem może wyświetlać")
├── 📁 artykuly
│   ├── 📁 1_zebranie-zarzadu        ← folder_id wpisany w arkuszu
│   │   ├── 🖼 foto1.jpg
│   │   └── 🖼 foto2.jpg
│   └── 📁 2_konferencja
│       └── 🖼 zdjecie.jpg
├── 📁 uchway
│   ├── 📁 1_uchwala-1-2025
│   │   └── 📄 uchwala.pdf
│   └── 📁 2_uchwala-2-2025
│       └── 📄 uchwala.pdf
└── 📁 sprawozdania
    └── 📁 1_sprawozdanie-2024
        └── 📄 sprawozdanie.pdf
```

Każdy podfolder musi mieć nadane uprawnienie **"Każdy z linkiem może wyświetlać"**,
żeby frontend mógł listować jego zawartość przez Drive API.

---

## Jak to działa — przepływ danych

### Wyświetlanie listy artykułów

1. Przy starcie strony `script.js` wykonuje jeden request do Sheets API:
   ```
   GET https://sheets.googleapis.com/v4/spreadsheets/{SHEET_ID}/values/artykuly
       ?key={API_KEY}
   ```
2. API zwraca wszystkie wiersze arkusza jako tablicę tablic.
3. JS filtruje wiersze gdzie `published === "TRUE"`, sortuje malejąco po dacie.
4. Dane trzymane są w pamięci — brak kolejnych requestów przy scrollowaniu.
5. Paginacja (infinite scroll) realizowana lokalnie — JS "odkrywa" kolejne karty
   z lokalnej tablicy po 10 sztuk.

### Wyświetlanie pełnego artykułu

1. Kliknięcie w tytuł — JS odczytuje dane wiersza już pobranego przy starcie.
2. Treść (`content`) wstawiana do DOM **po sanityzacji przez DOMPurify**.
3. Pobierana lista plików z folderu Drive artykułu:
   ```
   GET https://www.googleapis.com/drive/v3/files
       ?q='{folder_id}'+in+parents&fields=files(id,name,mimeType)
       &key={API_KEY}
   ```
4. Pliki z `mimeType` obrazkowym ładowane do galerii PhotoSwipe.
5. Pozostałe pliki (PDF, DOCX) wyświetlane jako przyciski pobierania.

### URL do pliku w Drive

```
Podgląd obrazu:   https://drive.google.com/uc?export=view&id={file_id}
Pobranie pliku:   https://drive.google.com/uc?export=download&id={file_id}
```

### Formularz kontaktowy

1. `fetch POST` do Google Apps Script Web App (publiczny endpoint HTTPS).
2. Apps Script zapisuje wiersz do arkusza `kontakt`.
3. Apps Script wysyła e-mail powiadomienie na skrzynkę administratora.

---

## Google Apps Script

### Skrypt 1: Web App — odbiór formularza (`webApp.gs`)

Deployowany jako **Web App** (Execute as: Me, Who has access: Anyone).
Generuje publiczny URL typu `https://script.google.com/macros/s/{ID}/exec`.

```javascript
const SHEET_ID = "TUTAJ_WKLEJ_ID_ARKUSZA";
const ADMIN_EMAIL = "biuro@zmigrs.pl";

function doPost(e) {
  // Weryfikacja tokenu CSRF
  const data = JSON.parse(e.postData.contents);
  if (data.token !== PropertiesService.getScriptProperties().getProperty("CSRF_TOKEN")) {
    return ContentService.createTextOutput("Forbidden").setMimeType(ContentService.MimeType.TEXT);
  }

  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("kontakt");
  sheet.appendRow([new Date(), data.name, data.email, data.message]);

  // Powiadomienie e-mail
  MailApp.sendEmail({
    to: ADMIN_EMAIL,
    subject: "ZMiGRS: nowa wiadomość z formularza kontaktowego",
    body: `Od: ${data.name} <${data.email}>\n\n${data.message}\n\nData: ${new Date()}`
  });

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Obsługa preflight CORS (przeglądarka wysyła OPTIONS przed POST)
function doGet(e) {
  return ContentService.createTextOutput("OK");
}
```

### Skrypt 2: Wyzwalacz e-mail przy nowym wpisie (`onFormSubmit.gs`)

Alternatywa lub uzupełnienie — wyzwalacz na zdarzenie edycji arkusza:

```javascript
function onNewContact(e) {
  if (e.range.getSheet().getName() !== "kontakt") return;
  if (e.range.getRow() < 2) return; // Pomiń nagłówek

  const row = e.range.getValues()[0];
  MailApp.sendEmail({
    to: "biuro@zmigrs.pl",
    subject: "ZMiGRS: nowa wiadomość z formularza",
    body: `Od: ${row[1]} (${row[2]})\n\n${row[3]}\n\nData: ${row[0]}`
  });
}
```

---

## Bezpieczeństwo — wymagania obowiązkowe

### 1. XSS — sanityzacja treści artykułów (KRYTYCZNE)

**Problem:** Obecny kod wstawia treść z bazy bezpośrednio do `innerHTML`:
```javascript
// NIEBEZPIECZNE — tak jest teraz:
articleContainer.innerHTML = `<p>${content}</p>`;
```
Złośliwy skrypt w treści artykułu wykona się w przeglądarce każdego użytkownika.

**Rozwiązanie:** Biblioteka DOMPurify — sanityzuje HTML przed wstawieniem do DOM.

```html
<!-- Dodać do index.html w <head> -->
<script src="https://cdn.jsdelivr.net/npm/dompurify@3/dist/purify.min.js"></script>
```

```javascript
// BEZPIECZNE — tak ma być po migracji:
articleContainer.innerHTML = DOMPurify.sanitize(`<p>${content}</p>`);
```

DOMPurify usuwa `<script>`, `onerror=`, `javascript:` i inne wektory ataku,
zachowując bezpieczne tagi HTML (`<b>`, `<p>`, `<ul>`, `<a>` itp.).

---

### 2. Ograniczenie API Key (KRYTYCZNE)

API Key do Google Sheets i Drive będzie widoczny w kodzie JS — to akceptowalne
**tylko jeśli** klucz ma ustawione ograniczenia w Google Cloud Console.

**Wymagane ustawienia klucza:**

- **Application restrictions:** HTTP referrers (websites)
  - Dozwolone domeny: `https://zmigrs.pl/*` oraz `https://www.zmigrs.pl/*`
  - Na czas developmentu dodać: `http://localhost:*`
- **API restrictions:** Restrict key
  - Zezwolić tylko na: `Google Sheets API` i `Google Drive API`

Klucz skonfigurowany w ten sposób jest bezużyteczny dla kogoś kto go skopiuje,
bo zapytania z innych domen zostaną odrzucone przez Google.

---

### 3. Zabezpieczenie formularza kontaktowego przed spamem (WYMAGANE)

Formularz wystawiony publicznie bez zabezpieczeń będzie spamowany botami.

**Metoda A — Honeypot field (prosta, bez UX-owego kosztu):**

Ukryte pole, które boty wypełniają, a ludzie nie widzą:

```html
<!-- Dodać do formularza w index.html -->
<input
  type="text"
  name="website"
  autocomplete="off"
  style="display:none; position:absolute; left:-9999px;"
  tabindex="-1"
  aria-hidden="true"
>
```

```javascript
// Dodać przed wysłaniem formularza w script.js
const honeypot = document.querySelector('input[name="website"]');
if (honeypot && honeypot.value !== "") {
  // Bot wypełnił pole — cicho ignoruj
  return;
}
```

**Metoda B — Rate limiting po stronie Apps Script:**

```javascript
function doPost(e) {
  const cache = CacheService.getScriptCache();
  const ip = e.parameter.userIp || "unknown";
  const key = `rate_${ip}`;
  const count = parseInt(cache.get(key) || "0");

  if (count >= 3) {
    return ContentService.createTextOutput("Too many requests");
  }

  cache.put(key, String(count + 1), 3600); // Limit: 3 wysłania na godzinę z jednego IP
  // ... reszta logiki zapisu
}
```

**Zalecenie:** Wdrożyć obie metody — honeypot po stronie frontendu, rate limiting po stronie Apps Script.

---

### 4. CSRF Token dla formularza (WYMAGANE)

Bez tokenu CSRF ktoś może wymusić wysłanie formularza z obcej strony (Cross-Site Request Forgery).

**Implementacja:**

W Apps Script ustawić stały token jako właściwość skryptu (nie w kodzie):
```
Script Properties → Dodaj: CSRF_TOKEN = losowy_ciag_64_znakow
```

W `index.html` — osadzić token przy ładowaniu strony (może być hardcoded, bo strona jest publiczna):
```javascript
const CSRF_TOKEN = "losowy_ciag_64_znakow"; // Ten sam co w Apps Script Properties

async function submitForm(data) {
  await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({ ...data, token: CSRF_TOKEN }),
  });
}
```

Apps Script weryfikuje token przy każdym POST (pokazane w `webApp.gs` wyżej).

---

### 5. Uprawnienia Google Drive — zasada minimalnych uprawnień (WYMAGANE)

| Zasób | Uprawnienie | Komentarz |
|---|---|---|
| Folder główny ZMiGRS | Tylko wyświetlanie (anyone with link) | NIE edytowanie |
| Arkusz Google Sheets | Tylko wyświetlanie (anyone with link) | Edytują tylko admini przez konto Google |
| API Key | Tylko read, tylko z domeny zmigrs.pl | Skonfigurowane w Google Cloud Console |
| Konto administratora | 2FA obowiązkowo włączone | Przejęcie konta = przejęcie całej strony |

**Ważne:** Arkusz `kontakt` z danymi osobowymi (RODO) powinien być dostępny
**wyłącznie** dla kont administratorów — NIE udostępniać go publicznie.
Zapis do niego odbywa się przez Apps Script, który działa z uprawnieniami właściciela.

---

### 6. Nagłówki bezpieczeństwa HTTP (WYMAGANE przy wdrożeniu)

Jeśli strona hostowana na własnym serwerze (Apache/Nginx), dodać nagłówki:

```
Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.jsdelivr.net https://photoswipe.com; style-src 'self' 'unsafe-inline'; img-src 'self' https://drive.google.com https://lh3.googleusercontent.com data:; connect-src 'self' https://sheets.googleapis.com https://www.googleapis.com https://script.google.com; frame-ancestors 'none';
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

Jeśli hosting na GitHub Pages — nagłówki HTTP nie są konfigurowalne;
w takim wypadku wystarczy meta tag CSP w `<head>`:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; ...">
```

---

### 7. Walidacja danych formularza (WYMAGANE)

Po stronie frontendu (JS) i po stronie Apps Script — niezależnie od siebie.

**Frontend (`script.js`):**
```javascript
function validateForm(name, email, message) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || name.trim().length < 2 || name.trim().length > 100) return false;
  if (!emailRegex.test(email)) return false;
  if (!message || message.trim().length < 10 || message.trim().length > 2000) return false;
  return true;
}
```

**Apps Script (`webApp.gs`):**
```javascript
function sanitizeInput(str, maxLen) {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, maxLen).replace(/[<>]/g, ""); // Usuń < i >
}

// Użyć przy zapisie:
const name = sanitizeInput(data.name, 100);
const email = sanitizeInput(data.email, 200);
const message = sanitizeInput(data.message, 2000);
```

---

## Stos technologiczny

| Warstwa | Technologia | Uwagi |
|---|---|---|
| Frontend | HTML, CSS, Vanilla JS | Bez zmian strukturalnych |
| Dane (metadane) | Google Sheets API v4 | Bezpłatne, limit 300 req/min |
| Pliki i zdjęcia | Google Drive API v3 | Bezpłatne do 15GB |
| Formularz backend | Google Apps Script (Web App) | Bezpłatne, limit 20k wywołań/dzień |
| Sanityzacja XSS | DOMPurify 3.x (CDN) | Biblioteka open source |
| Lightbox zdjęć | PhotoSwipe v5 | Bez zmian |
| Hosting | GitHub Pages lub dowolny serwer | GitHub Pages jest bezpłatny |

---

## Zakres prac dla studenta

### Etap 1 — Konfiguracja infrastruktury Google

- [ ] Założyć projekt w Google Cloud Console
- [ ] Włączyć Google Sheets API i Google Drive API
- [ ] Wygenerować API Key z ograniczeniami (domena + wybrane API)
- [ ] Przygotować strukturę arkusza Sheets (4 zakładki z nagłówkami)
- [ ] Przygotować strukturę folderów w Google Drive
- [ ] Ustawić uprawnienia folderów (anyone with link — view only)
- [ ] Wdrożyć Apps Script jako Web App i skopiować jego URL

### Etap 2 — Migracja danych

- [ ] Przenieść istniejące artykuły z Oracle APEX do arkusza Sheets
- [ ] Przenieść pliki do nowej struktury folderów Drive
- [ ] Zweryfikować że wszystkie linki i foldery są poprawnie podlinkowane

### Etap 3 — Migracja kodu `script.js`

- [ ] Zastąpić wywołania `fetch(api_url/articles)` wywołaniami Sheets API
- [ ] Zastąpić wywołania `fetch(api_url/resolutions)` wywołaniami Sheets API
- [ ] Zastąpić wywołania `fetch(api_url/reports)` wywołaniami Sheets API
- [ ] Zastąpić pobieranie załączników wywołaniami Drive API
- [ ] Przepisać paginację z server-side offset na client-side
- [ ] Naprawić formularz kontaktowy (wysyłka do Apps Script zamiast braku akcji)

### Etap 4 — Wdrożenie bezpieczeństwa

- [ ] Dodać DOMPurify do `index.html` i użyć go przy wstawianiu treści
- [ ] Skonfigurować ograniczenia API Key w Google Cloud Console
- [ ] Dodać honeypot field do formularza
- [ ] Wdrożyć rate limiting w Apps Script
- [ ] Wdrożyć CSRF token w formularzu i Apps Script
- [ ] Dodać walidację pól formularza (frontend + Apps Script)
- [ ] Skonfigurować nagłówki HTTP bezpieczeństwa na serwerze (lub meta CSP)
- [ ] Włączyć 2FA na koncie Google administratora

### Etap 5 — Testy

- [ ] Test wyświetlania artykułów, uchwał, sprawozdań
- [ ] Test galerii zdjęć i pobierania plików
- [ ] Test formularza kontaktowego (czy e-mail dochodzi)
- [ ] Test na urządzeniach mobilnych (responsywność bez zmian)
- [ ] Test z wyłączonym JS (strona powinna pokazać komunikat zamiast pustego ekranu)
- [ ] Test próby XSS — wstawić `<script>alert(1)</script>` jako treść artykułu w Sheets i zweryfikować że DOMPurify to zablokuje
- [ ] Test honeypot — ręcznie wypełnić ukryte pole i potwierdzić że formularz nie zostaje wysłany

### Etap 6 — Dokumentacja dla administratora

- [ ] Instrukcja dodawania artykułu (ze screenshotami, krok po kroku)
- [ ] Instrukcja dodawania uchwały / sprawozdania
- [ ] Instrukcja wgrywania plików do Drive i linkowania z arkuszem
- [ ] Instrukcja jak ukryć artykuł (ustawić `published = FALSE`)

---

## Co pozostaje bez zmian

- Wygląd strony — `style.css` bez żadnych modyfikacji
- Struktura `index.html` — minimalne zmiany (dodanie DOMPurify, CSRF token, honeypot)
- Lightbox PhotoSwipe — bez zmian
- Routing `showPage()` — bez zmian
- Lista członków (dane statyczne w JS) — bez zmian
- Sekcja Statut (pliki lokalne w `assets/`) — bez zmian

---

## Ograniczenia rozwiązania (świadome kompromisy)

| Ograniczenie | Skala | Komentarz |
|---|---|---|
| Google Sheets API: 300 req/min | Niskie ryzyko | Strona stowarzyszenia ma mały ruch |
| Google Drive: 15GB storage | Niskie ryzyko | Wystarczające na wiele lat dokumentów |
| Brak wyszukiwarki full-text | Akceptowalne | Artykułów jest mało; można dodać filtr JS po tytule |
| Dane ładowane przy starcie | Akceptowalne | Arkusz < 100 wierszy to ~20KB, nieodczuwalne |
| Brak wersjonowania treści | Akceptowalne | Historia zmian widoczna w historii arkusza Sheets |
| Zależność od Google | Świadoma | Google Drive/Sheets ma 99.9% uptime SLA |