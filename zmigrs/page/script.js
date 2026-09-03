let currentPage = "home";
let api_url =
  // "https://script.google.com/macros/s/AKfycbw_SyqFrfO4WA9HjrX6TQf4HUhcMxpNCQuYaEI-Cwe6mB7D-toubQcZXMglLi0J1vg/exec";
  "https://localhost:4000";
const cities = [
  {
    name: "Ostrowiec Świętokrzyski",
    path: "https://um.ostrowiec.pl",
  },
  { name: "Sandomierz", path: "https://sandomierz.eu" },
  { name: "Skarzysko-Kamienna", path: "https://um.skarzysko.pl" },
  { name: "Starachowice", path: "https://starachowice.eu" },
];

const cities_and_municipalities = [
  { name: "Bodzentyn", path: "https://e-bodzentyn.pl" },
  { name: "Bogoria", path: "https://www.bogoria.pl" },
  { name: "Busko-Zdrój", path: "https://busko.com.pl" },
  { name: "Chęciny", path: "https://www.checiny.pl" },
  { name: "Chmielnik", path: "https://www.chmielnik.com" },
  { name: "Ćmielów", path: "https://www.cmielow.pl" },
  { name: "Daleszyce", path: "https://www.daleszyce.pl" },
  { name: "Działoszyce", path: "https://dzialoszyce.pl" },
  { name: "Gowarczów", path: "https://gowarczow.pl" },
  { name: "Iwaniska", path: "https://www.iwaniska.eu" },
  { name: "Kazimierza Wielka", path: "https://www.kazimierzawielka.pl" },
  { name: "Klimontóww", path: "https://klimontow.pl" },
  { name: "Końskie", path: "https://umkonskie.pl" },
  { name: "Koprzywnica", path: "https://koprzywnica.eu" },
  { name: "Kunów", path: "https://www.kunow.pl" },
  { name: "Łagów", path: "https://www.lagowgmina.pl" },
  { name: "Łopuszno", path: "https://www.lopuszno.pl" },
  { name: "Małogoszcz", path: "https://www.malogoszcz.pl" },
  { name: "Morawica", path: "https://www.morawica.pl" },
  { name: "Nowa Słupia", path: "https://nowaslupia.pl" },
  { name: "Nowy Korczyn", path: "https://ug.nowykorczyn.pl" },
  { name: "Oleśnica", path: "https://gminaolesnica.pl" },
  { name: "Opatów", path: "https://www.umopatow.pl" },
  { name: "Opatowiec", path: "https://umig.opatowiec.pl" },
  { name: "Osiek", path: "https://gmina-osiek.pl/" },
  { name: "Ożarów", path: "https://www.ozarow.pl" },
  { name: "Pacanów", path: "https://pacanow.pl" },
  { name: "Piekoszów", path: "https://www.piekoszow.pl" },
  { name: "Pierzchnica", path: "https://www.pierzchnica.pl" },
  { name: "Pinczów", path: "https://pinczow.com.pl" },
  { name: "Polaniec", path: "https://polaniec.com.pl" },
  { name: "Radoszyce", path: "https://www.radoszyce.pl" },
  { name: "Sędziszów", path: "https://sedziszow.pl" },
  { name: "Skalbmierz", path: "https://www.skalbmierz.eu" },
  { name: "Stąporków", path: "https://staporkow.pl" },
  { name: "Staszów", path: "https://staszow.pl" },
  { name: "Stopnica", path: "https://umig.stopnica.pl" },
  { name: "Suchedniów", path: "https://suchedniow.pl" },
  { name: "Szydłów", path: "https://www.szydlow.pl" },
  { name: "Wąchock", path: "https://wachock.pl" },
  { name: "Wodzisław", path: "https://ugwodzislaw.pl" },
  { name: "Włoszczowa", path: "https://wloszczowa.pl" },
  { name: "Zawichost", path: "https://www.zawichost.pl" },
];

const municipalities = [
  { name: "Baćkowice", path: "http://www.backowice-gmina.pl" },
  { name: "Bałtów", path: "https://www.gminabaltow.pl" },
  { name: "Bejsce", path: "https://bejsce.eu" },
  { name: "Bieliny", path: "https://www.bieliny.pl" },
  { name: "Bliżyn", path: "https://www.blizyn.pl" },
  { name: "Bodzechów", path: "https://samorzad.gov.pl/web/gmina-bodzechow" },
  { name: "Brody", path: "https://brody.info.pl" },
  { name: "Czarnocin", path: "https://czarnocin.com.pl" },
  { name: "Dwikozy", path: "https://dwikozy.gmina.pl" },
  { name: "Falków", path: "https://www.falkow.pl" },
  { name: "Gnojno", path: "https://gnojno.com.pl" },
  { name: "Górno", path: "https://www.gorno.pl" },
  { name: "Imielno", path: "https://imielno.pl" },
  { name: "Kije", path: "https://kije.pl" },
  { name: "Kluczewsko", path: "https://kluczewsko.pl" },
  { name: "Krasocin", path: "https://www.krasocin.com.pl" },
  { name: "Łączna", path: "https://www.laczna.pl" },
  { name: "Lipnik", path: "https://www.lipnik.pl" },
  { name: "Łoniów", path: "https://loniow.pl" },
  { name: "Łubnice", path: "https://www.lubnice.eu" },
  { name: "Masłów", path: "https://www.maslow.pl" },
  { name: "Michałów", path: "https://www.michalow.pl" },
  { name: "Miedziana Góra", path: "https://miedziana-gora.pl" },
  { name: "Mirzec", path: "https://mirzec.pl" },
  { name: "Mniów", path: "https://www.mniow.pl" },
  { name: "Moskorzew", path: "https://moskorzew.pl" },
  { name: "Nagłowice", path: "https://naglowice.pl" },
  { name: "Nowiny", path: "https://www.nowiny.com.pl" },
  { name: "Obrazów", path: "https://www.obrazow.pl" },
  { name: "Oksa", path: "https://oksa.pl" },
  { name: "Pawłów", path: "https://gmina.pawlow.pl" },
  { name: "Radków", path: "https://radkow.pl" },
  { name: "Raków", path: "https://rakow.pl" },
  {
    name: "Ruda Maleniecka",
    path: "https://samorzad.gov.pl/web/gmina-ruda-maleniecka",
  },
  { name: "Rytwiany", path: "https://www.rytwiany.com.pl" },
  { name: "Sadowie", path: "https://sadowie.pl" },
  { name: "Samborzec", path: "https://www.samborzec.pl" },
  { name: "Secemin", path: "https://www.secemin.pl" },
  { name: "Skarżysko-Kościelne", path: "https://www.skarzysko.com.pl" },
  { name: "Smyków", path: "https://samorzad.gov.pl/web/gmina-smykow" },
  { name: "Sobków", path: "https://www.sobkow.pl" },
  { name: "Solec Zdrój", path: "https://solec-zdroj.pl" },
  { name: "Strawczyn", path: "https://www.strawczyn.pl" },
  { name: "Słupia", path: "https://slupia.pl" },
  { name: "Słupia Jędrzejowska", path: "https://slupia.pl" },
  { name: "Tarłów", path: "https://tarlow.pl" },
  { name: "Tuczępy", path: "https://www.tuczepy.pl" },
  { name: "Waśniów", path: "https://www.wasniow.pl" },
  { name: "Wilczyce", path: "https://wilczyce.pl" },
  { name: "Wojciechowice", path: "https://www.wojciechowice.com.pl" },
  { name: "Zagnańsk", path: "https://www.zagnansk.pl" },
  { name: "Złota", path: "https://gminazlota.pl" },
];

// Pagination states to keep track of offsets and loading status for each content type. This allows us to manage infinite scroll and loading states separately for news, resolutions, and reports.
const paginationState = {
  news: { offset: 0, loading: false },
  resolutions: { offset: 0, loading: false },
  reports: { offset: 0, loading: false },
};

// Generate Members links from static tables for now. Will be moved to the database if requested.
function generateLinks(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  list.forEach((item) => {
    const a = document.createElement("a");
    a.href = item.path;
    a.className = "link-button";
    a.target = "_blank";
    a.title = item.name;
    a.textContent = item.name;
    container.appendChild(a);
  });
}

// Change the date MM/DD/YYYY to Polish format.
function formatDateToPolish(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("pl-PL", options).format(date);
}

// Helper function to cache API calls in sessionStorage for 2 minutes to prevent HTTP 429 rate limiting
async function fetchWithCache(url, ttlMs = 120000) {
  const cacheKey = `zmigrs_cache_${url}`;
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      const { timestamp, data } = JSON.parse(cached);
      if (Date.now() - timestamp < ttlMs) {
        return data;
      }
    }
  } catch (e) {}

  const response = await fetch(url);
  const data = await response.json();
  if (data && !data.error) {
    try {
      sessionStorage.setItem(
        cacheKey,
        JSON.stringify({ timestamp: Date.now(), data }),
      );
    } catch (e) {}
  }
  return data;
}

let currentLoadingToast = null;

function showLoadingToast(message = "Ładowanie danych...") {
  hideLoadingToast();

  const toast = document.createElement("div");
  toast.className = "loading-toast show";

  const spinner = document.createElement("span");
  spinner.className = "loading-spinner";

  const msgSpan = document.createElement("span");
  msgSpan.textContent = message;

  toast.appendChild(spinner);
  toast.appendChild(msgSpan);

  document.body.appendChild(toast);
  currentLoadingToast = toast;
}

function hideLoadingToast() {
  if (currentLoadingToast) {
    const toast = currentLoadingToast;
    currentLoadingToast = null;
    toast.classList.remove("show");
    toast.classList.add("hide");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }
}

function setupInfiniteScroll(type, sentinelId, containerId) {
  const sentinel = document.getElementById(sentinelId);
  if (!sentinel) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !paginationState[type].loading) {
        observer.unobserve(sentinel);
        if (type === "news") {
          generateNews(containerId, false);
        } else {
          generateDataList(type, containerId, false);
        }
      }
    },
    { rootMargin: "200px" },
  );

  observer.observe(sentinel);
}

// Helper function to check if gallery has enough items to scroll and show or hide buttons if needed.
function checkGalleryNavigation() {
  const container = document.getElementById("article-gallery-div");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (!container || !prevBtn || !nextBtn) return;
  const hasItems = container.querySelectorAll("a").length > 0;

  // If enough width to scroll, show buttons without layout reflow shift
  if (hasItems && container.scrollWidth > container.clientWidth) {
    prevBtn.style.visibility = "visible";
    prevBtn.style.opacity = "1";
    nextBtn.style.visibility = "visible";
    nextBtn.style.opacity = "1";
  } else {
    prevBtn.style.visibility = "hidden";
    prevBtn.style.opacity = "0";
    nextBtn.style.visibility = "hidden";
    nextBtn.style.opacity = "0";
  }
}

// Gallery scroll functionality, moves the gallery left or right by the width of one item.
function moveGallery(direction) {
  const container = document.getElementById("article-gallery-div");
  const itemWidth = container.querySelector("a").offsetWidth + 15;

  container.scrollBy({
    left: direction * itemWidth,
    behavior: "smooth",
  });
}

// Load full content of the article from Google Sheets.
async function loadArticle(id) {
  showLoadingToast("Wczytywanie artykułu...");
  const articleContainer = document.getElementById("article-text-div");
  const galleryContainer = document.getElementById("article-gallery-div");

  // Clear previous content
  galleryContainer.replaceChildren();
  document.querySelectorAll(".prev-btn, .next-btn").forEach((btn) => {
    btn.style.visibility = "hidden";
    btn.style.opacity = "0";
  });

  try {
    const item = await fetchWithCache(
      `${api_url}?action=article&id=${encodeURIComponent(id)}`,
    );
    const [article] = item.items || [];

    if (!article) {
      hideLoadingToast();
      return;
    }

    const {
      name = "Brak tytułu",
      publication_date,
      author,
      source,
      photos_credit,
      description,
      content,
      folder_id,
      attachments_count,
    } = article;

    const sourceTrimmed = source && source.trim() !== "" ? source.trim() : null;
    const photosCreditTrimmed =
      photos_credit && photos_credit.trim() !== ""
        ? photos_credit.trim()
        : null;

    articleContainer.replaceChildren();

    const articleEl = document.createElement("article");
    articleEl.className = "article-detail";

    const headerEl = document.createElement("header");
    headerEl.className = "article-header";

    const titleEl = document.createElement("h2");
    titleEl.className = "article-title";
    titleEl.textContent = name;

    const dateP = document.createElement("p");
    dateP.className = "article-date";
    const dateSmall = document.createElement("small");
    dateSmall.textContent = formatDateToPolish(publication_date);
    dateP.appendChild(dateSmall);

    const divider = document.createElement("hr");
    divider.className = "article-divider";

    headerEl.appendChild(titleEl);
    headerEl.appendChild(dateP);
    headerEl.appendChild(divider);
    articleEl.appendChild(headerEl);

    const bodyEl = document.createElement("div");
    bodyEl.className = "article-body article-segment";

    if (description && description.trim()) {
      const leadDiv = document.createElement("div");
      leadDiv.className = "article-lead";
      leadDiv.textContent = description;
      bodyEl.appendChild(leadDiv);
    }

    if (content && content.trim()) {
      const contentDiv = document.createElement("div");
      contentDiv.className = "article-content";
      contentDiv.innerHTML =
        typeof DOMPurify !== "undefined"
          ? DOMPurify.sanitize(content)
          : content;
      bodyEl.appendChild(contentDiv);
    }
    articleEl.appendChild(bodyEl);

    const footerEl = document.createElement("footer");
    footerEl.className = "article-footer";

    const metaGroup = document.createElement("div");
    metaGroup.className = "article-meta-group";

    const authorItem = document.createElement("div");
    authorItem.className = "article-meta-item";
    const authorSpan = document.createElement("span");
    authorSpan.textContent = "👤 Autor: ";
    const authorStrong = document.createElement("strong");
    authorStrong.textContent = author ? author.trim() : "Zarząd ZMiGRS";
    authorItem.appendChild(authorSpan);
    authorItem.appendChild(authorStrong);
    metaGroup.appendChild(authorItem);

    if (sourceTrimmed) {
      const srcItem = document.createElement("div");
      srcItem.className = "article-meta-item";
      const srcSpan = document.createElement("span");
      srcSpan.textContent = "🌐 Źródło: ";
      const srcStrong = document.createElement("strong");
      srcStrong.textContent = sourceTrimmed;
      srcItem.appendChild(srcSpan);
      srcItem.appendChild(srcStrong);
      metaGroup.appendChild(srcItem);
    }

    if (photosCreditTrimmed) {
      const photosItem = document.createElement("div");
      photosItem.className = "article-meta-item";
      const photosSpan = document.createElement("span");
      photosSpan.textContent = "📷 Zdjęcia: ";
      const photosStrong = document.createElement("strong");
      photosStrong.textContent = photosCreditTrimmed;
      photosItem.appendChild(photosSpan);
      photosItem.appendChild(photosStrong);
      metaGroup.appendChild(photosItem);
    }

    footerEl.appendChild(metaGroup);
    articleEl.appendChild(footerEl);

    articleContainer.appendChild(articleEl);

    showPage("article");
    hideLoadingToast();

    if (folder_id || attachments_count > 0) {
      fetchAttachmentsRecursive(id, galleryContainer, 0, folder_id).then(() => {
        initLightbox();
      });
    } else {
      initLightbox();
    }
  } catch (e) {
    console.error("Błąd ładowania artykułu:", e);
    hideLoadingToast();
  }
}

// Helper function for array shuffling (Fisher-Yates Shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function fetchAttachmentsRecursive(
  id,
  container,
  offset = 0,
  folderId = "",
) {
  try {
    const data = await fetchWithCache(
      `${api_url}?action=attachments&type=news&id=${encodeURIComponent(id)}&folderId=${encodeURIComponent(folderId)}&offset=${offset}`,
    );

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const failedItemsQueue = [];

    const tryLoadSingleImage = (fileId, fallbackUrl) => {
      return new Promise((resolve) => {
        const currentUrl = fileId
          ? `https://lh3.googleusercontent.com/d/${fileId}=w1200`
          : fallbackUrl;

        const loader = new Image();
        loader.referrerPolicy = "no-referrer"; // Trying to avoid 403 Forbidden on Google Drive
        let timer = setTimeout(() => {
          handleError();
        }, 4500);

        const handleSuccess = () => {
          clearTimeout(timer);
          resolve({
            success: true,
            finalUrl: currentUrl,
            width: loader.naturalWidth || 1600,
            height: loader.naturalHeight || 900,
          });
        };

        const handleError = async () => {
          clearTimeout(timer);
          // Fallback read via Apps Script API (Base64) if lh3 is blocked
          if (fileId && api_url) {
            try {
              const proxyData = await fetchWithCache(
                `${api_url}?action=image&id=${encodeURIComponent(fileId)}`,
              );
              if (proxyData?.dataUri) {
                const proxyLoader = new Image();
                proxyLoader.onload = () => {
                  resolve({
                    success: true,
                    finalUrl: proxyData.dataUri,
                    width: proxyLoader.naturalWidth || 1600,
                    height: proxyLoader.naturalHeight || 900,
                  });
                };
                proxyLoader.onerror = () => {
                  resolve({
                    success: false,
                    finalUrl: currentUrl,
                    width: 1600,
                    height: 900,
                  });
                };
                proxyLoader.src = proxyData.dataUri;
                return;
              }
            } catch (err) {}
          }

          resolve({
            success: false,
            finalUrl: currentUrl,
            width: 1600,
            height: 900,
          });
        };

        loader.onload = handleSuccess;
        loader.onerror = handleError;
        loader.src = currentUrl;
      });
    };

    // STEP 1: MAIN PASS (Flat 2-second delay between images)
    for (const item of data.items || []) {
      if (
        !item.mime_type ||
        (!item.mime_type.startsWith("image/") &&
          !item.mime_type.includes("image"))
      )
        continue;

      let fileId = item.file_id;
      if (!fileId && item.file_path) {
        const match = item.file_path.match(/[-\w]{25,}/);
        if (match) fileId = match[0];
      }

      const imgResult = await tryLoadSingleImage(fileId, item.file_path);

      if (imgResult.success) {
        const a = document.createElement("a");
        a.href = imgResult.finalUrl;
        a.dataset.pswpWidth = imgResult.width;
        a.dataset.pswpHeight = imgResult.height;
        a.style.animation = "galleryFadeIn 0.3s ease-out";

        const img = document.createElement("img");
        img.alt = item.file_name || "Zdjęcie";
        img.loading = "lazy";
        img.referrerPolicy = "no-referrer"; // Remove Referer header to prevent Google Drive 403 Forbidden errors
        img.src = imgResult.finalUrl;

        a.appendChild(img);
        container.appendChild(a);
        checkGalleryNavigation();
      } else {
        // On error, immediately queue the image into failedItemsQueue
        failedItemsQueue.push(item);
      }

      await delay(2000);
    }

    // STEP 2: PROCESS FAILED ITEMS QUEUE (Two passes with 10s pause and 5s delay between files in random order)
    if (failedItemsQueue.length > 0) {
      for (let pass = 1; pass <= 2; pass++) {
        if (failedItemsQueue.length === 0) break;

        console.warn(
          `Próba #${pass} dla ${failedItemsQueue.length} nieudanych zdjęć. Wstrzymanie na 10 sekund...`,
        );
        await delay(10000);

        shuffleArray(failedItemsQueue);

        const currentBatch = [...failedItemsQueue];
        failedItemsQueue.length = 0;

        for (const item of currentBatch) {
          let fileId = item.file_id;
          if (!fileId && item.file_path) {
            const match = item.file_path.match(/[-\w]{25,}/);
            if (match) fileId = match[0];
          }

          const imgResult = await tryLoadSingleImage(fileId, item.file_path);

          if (imgResult.success) {
            const a = document.createElement("a");
            a.href = imgResult.finalUrl;
            a.dataset.pswpWidth = imgResult.width;
            a.dataset.pswpHeight = imgResult.height;
            a.style.animation = "galleryFadeIn 0.3s ease-out";

            const img = document.createElement("img");
            img.alt = item.file_name || "Zdjęcie";
            img.loading = "lazy";
            img.referrerPolicy = "no-referrer";
            img.src = imgResult.finalUrl;

            a.appendChild(img);
            container.appendChild(a);
            checkGalleryNavigation();
          } else {
            failedItemsQueue.push(item);
          }

          await delay(5000);
        }
      }
    }

    if (data.hasMore) {
      await fetchAttachmentsRecursive(
        id,
        container,
        offset + (data.items ? data.items.length : 0),
        folderId,
      );
    } else {
      setTimeout(checkGalleryNavigation, 200);
    }
  } catch (e) {
    console.error("Błąd pobierania załączników graficznych:", e);
  }
}

// Helper function to render a beautiful glass notification card when a section is empty or an error occurs
function createEmptyState(
  title = "Przepraszamy, brak wpisów do wyświetlenia",
  message = "W tej chwili ta sekcja nie zawiera jeszcze żadnych materiałów. Zajrzyj do nas ponownie za chwilę!",
) {
  const card = document.createElement("div");
  card.className = "about-text glass empty-state-card";
  card.style.cssText =
    "grid-column: 1 / -1; text-align: center; padding: 40px 25px; margin: 10px 0;";

  const iconDiv = document.createElement("div");
  iconDiv.style.cssText = "font-size: 2.5rem; margin-bottom: 12px;";
  iconDiv.textContent = "📑";

  const h3 = document.createElement("h3");
  h3.style.cssText = "margin-bottom: 10px; font-size: 20px; color: #ffffff;";
  h3.textContent = title;

  const p = document.createElement("p");
  p.style.cssText =
    "color: rgba(255, 255, 255, 0.85); font-size: 15px; max-width: 600px; margin: 0 auto; line-height: 1.6;";
  p.textContent = message;

  card.appendChild(iconDiv);
  card.appendChild(h3);
  card.appendChild(p);
  return card;
}

// Generate news from Google Sheets.
async function generateNews(containerId, isInitialLoad = true) {
  const container = document.getElementById(containerId);
  const state = paginationState.news;
  if (!container || state.loading) return;

  // Reset on initial load
  if (isInitialLoad) {
    state.offset = 0;
    container.innerHTML = `<h2 style="grid-column:1/-1">Aktualności:</h2>
                               <div id="article-list-content" class="grid-list"></div>`;
  }

  state.loading = true;
  const contentDiv = document.getElementById("article-list-content");

  try {
    const data = await fetchWithCache(
      `${api_url}?action=articles&offset=${state.offset}`,
    );
    const list = data.items || [];

    // Additional safety: descending sort by publication date (newest entries first)
    list.sort((a, b) => {
      const dateA = a.publication_date
        ? new Date(a.publication_date).getTime()
        : 0;
      const dateB = b.publication_date
        ? new Date(b.publication_date).getTime()
        : 0;
      return dateB - dateA;
    });

    if (list.length === 0 && state.offset === 0) {
      contentDiv.replaceChildren(
        createEmptyState(
          "Brak aktualności",
          "Przepraszamy, nie znaleziono jeszcze żadnych opublikowanych aktualności. Zapraszamy ponownie za chwilę!",
        ),
      );
      state.loading = false;
      return;
    }

    for (const item of list) {
      const { news_id, name, publication_date, author, description } = item;

      const card = document.createElement("div");
      card.className = "about-text glass clickable-card";
      card.addEventListener("click", () => loadArticle(news_id));

      const h3 = document.createElement("h3");
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = name || "Brak tytułu";
      a.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        loadArticle(news_id);
      });
      h3.appendChild(a);
      card.appendChild(h3);

      const dateP = document.createElement("p");
      const dateSmall = document.createElement("small");
      dateSmall.textContent = formatDateToPolish(publication_date);
      dateP.appendChild(dateSmall);
      card.appendChild(dateP);

      if (description) {
        const descP = document.createElement("p");
        descP.style.whiteSpace = "pre-line";
        descP.textContent = description;
        card.appendChild(descP);
      }

      const authorP = document.createElement("p");
      authorP.textContent = author || "Zarząd ZMiGRS";
      card.appendChild(authorP);

      contentDiv.appendChild(card);
    }

    const oldSentinel = document.getElementById("news-sentinel");
    if (oldSentinel) oldSentinel.remove();

    // Update offset for the next batch
    state.offset += list.length;

    if (data.hasMore) {
      contentDiv.insertAdjacentHTML(
        "afterend",
        `<div id="news-sentinel" style="grid-column:1/-1; height:20px;"></div>`,
      );
      setupInfiniteScroll("news", "news-sentinel", containerId);
    }
  } catch (e) {
    console.error("Błąd ładowania newsów:", e);
    if (state.offset === 0 && contentDiv) {
      contentDiv.replaceChildren(
        createEmptyState(
          "Przepraszamy, wystąpił problem podczas ładowania aktualności",
          "Nie udało się pobrać danych z serwera. Spróbuj odświeżyć stronę lub zajrzyj do nas za chwilę.",
        ),
      );
    }
  } finally {
    state.loading = false;
  }
}

async function generateDataList(type, containerId, isInitialLoad = true) {
  const container = document.getElementById(containerId);
  const state = paginationState[type];
  if (!container || state.loading) return;

  const listContentId = `${type}-list-content`;

  if (isInitialLoad) {
    state.offset = 0;
    const title = type === "resolutions" ? "Uchwały" : "Sprawozdania";
    container.innerHTML = `<h2 style="grid-column:1/-1">${title}:</h2>
                               <div id="${listContentId}" class="grid-list"></div>`;
  }

  const contentDiv = document.getElementById(listContentId);
  state.loading = true;

  try {
    const data = await fetchWithCache(
      `${api_url}?action=${type}&offset=${state.offset}`,
    );
    const list = data.items || [];

    if (list.length === 0 && state.offset === 0) {
      const sectionName = type === "resolutions" ? "uchwał" : "sprawozdań";
      contentDiv.replaceChildren(
        createEmptyState(
          `Brak ${sectionName}`,
          `Przepraszamy, nie znaleziono jeszcze żadnych opublikowanych ${sectionName}. Zapraszamy ponownie za chwilę!`,
        ),
      );
      state.loading = false;
      return;
    }

    list.forEach((item) => {
      const itemId = item[`${type}_id`] || item.id;
      const {
        name,
        description,
        attachments_count,
        folder_id,
        publication_date,
      } = item;
      const hasAttachments = folder_id || attachments_count > 0;

      const card = document.createElement("div");
      card.className = "about-text glass";

      const h3 = document.createElement("h3");
      const a = document.createElement("a");
      a.title = name || "";
      a.textContent = name || "";
      h3.appendChild(a);
      card.appendChild(h3);

      if (description) {
        const descP = document.createElement("p");
        descP.textContent = description;
        card.appendChild(descP);
      }

      if (hasAttachments) {
        const attachP = document.createElement("p");
        const attachA = document.createElement("a");
        attachA.href = "#";
        attachA.className = "link-button";
        attachA.textContent = "Załączniki";
        attachA.addEventListener("click", (e) => {
          e.preventDefault();
          openAttachmentModal(itemId, type, folder_id || "");
        });
        attachP.appendChild(attachA);
        card.appendChild(attachP);
      }

      const dateP = document.createElement("p");
      const dateSmall = document.createElement("small");
      dateSmall.textContent = formatDateToPolish(publication_date);
      dateP.appendChild(dateSmall);
      card.appendChild(dateP);

      contentDiv.appendChild(card);
    });

    const sentinelId = `${type}-sentinel`;
    const oldSentinel = document.getElementById(sentinelId);
    if (oldSentinel) oldSentinel.remove();

    state.offset += list.length;

    if (data.hasMore) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div id="${sentinelId}" style="grid-column:1/-1; height:10px;"></div>`,
      );
      setupInfiniteScroll(type, sentinelId, containerId);
    }
  } catch (e) {
    console.error(`Błąd ${type}:`, e);
    if (state.offset === 0 && contentDiv) {
      contentDiv.replaceChildren(
        createEmptyState(
          "Przepraszamy, wystąpił problem podczas ładowania danych",
          "Nie udało się połączyć z serwerem. Spróbuj odświeżyć stronę lub zajrzyj do nas za chwilę.",
        ),
      );
    }
  } finally {
    state.loading = false;
  }
}

async function downloadFile(fileId, type) {
  try {
    const res = await fetch(
      `${api_url}?action=attachment_file&type=${type}&fileId=${encodeURIComponent(fileId)}`,
    );
    const data = await res.json();
    const item = data.items && data.items[0] ? data.items[0] : null;

    if (item && item.file_path) {
      const a = document.createElement("a");
      a.href = item.file_path;
      a.target = "_blank";
      a.download = item.file_name || "plik";
      a.click();
    }
  } catch (e) {
    console.error("Błąd pobierania pliku:", e);
  }
}

async function openAttachmentModal(contentId, type, folderId = "") {
  showLoadingToast("Ładowanie załączników...");
  const modalButtons = document.getElementById("modal-buttons");
  modalButtons.replaceChildren();
  if (!contentId && !folderId) {
    hideLoadingToast();
    return;
  }

  document.getElementById("modal").style.display = "block";
  const loadingP = document.createElement("p");
  loadingP.textContent = "Ładowanie załączników...";
  modalButtons.appendChild(loadingP);

  async function fetchAll(offset = 0) {
    try {
      const data = await fetchWithCache(
        `${api_url}?action=attachments&type=${type}&id=${encodeURIComponent(contentId)}&folderId=${encodeURIComponent(folderId)}&offset=${offset}`,
      );
      const items = data.items || [];
      modalButtons.replaceChildren(); // Clear loading text

      if (items.length === 0) {
        const emptyP = document.createElement("p");
        emptyP.textContent = "Brak załączników do wyświetlenia.";
        modalButtons.appendChild(emptyP);
        hideLoadingToast();
        return;
      }

      items.forEach((file, index) => {
        const {
          file_id: itemId,
          file_name: fileName,
          date_created: file_created_date,
          file_path: filePath,
        } = file;

        const btn = document.createElement("a");
        btn.href = filePath || "#";
        btn.target = "_blank";
        btn.className = "link-button no-flex";

        const label = fileName ? fileName : `Plik ${offset + index + 1}`;
        btn.appendChild(document.createTextNode(label));

        const dateP = document.createElement("p");
        const dateSmall = document.createElement("small");
        dateSmall.textContent = formatDateToPolish(file_created_date);
        dateP.appendChild(dateSmall);
        btn.appendChild(dateP);

        if (!filePath) {
          btn.onclick = (e) => {
            e.preventDefault();
            downloadFile(itemId, type);
          };
        }

        modalButtons.appendChild(btn);
      });

      if (data.hasMore) {
        await fetchAll(offset + items.length);
      } else {
        hideLoadingToast();
      }
    } catch (error) {
      console.error("Błąd pobierania załączników:", error);
      modalButtons.replaceChildren();
      const errP = document.createElement("p");
      errP.textContent = "Wystąpił błąd podczas pobierania załączników.";
      modalButtons.appendChild(errP);
      hideLoadingToast();
    }
  }
  await fetchAll();
}

async function generateResolutions(containerId) {
  await generateDataList("resolutions", containerId, true);
}
async function generateReports(containerId) {
  await generateDataList("reports", containerId, true);
}

function showPage(pageId) {
  if (currentPage === pageId && pageId !== "article") {
    return;
  }

  if (pageId !== "article") {
    showLoadingToast("Przełączanie widoku...");
    setTimeout(hideLoadingToast, 350);
  }

  // Hide all pages
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  // Show selected page
  document.getElementById(pageId).classList.add("active");

  // Update navigation
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("onclick") === `showPage('${pageId}')`) {
      link.classList.add("active");
    }
  });

  currentPage = pageId;

  // Move footer to the active page
  const footer = document.getElementById("footer");
  const activePage = document.getElementById(pageId);
  activePage.appendChild(footer);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Initialize footer position
window.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  const homePage = document.getElementById("home");
  generateLinks(cities, "cities");
  generateLinks(cities_and_municipalities, "cities-and-municipalities");
  generateLinks(municipalities, "municipalities");

  generateNews("news-div");
  setTimeout(() => generateResolutions("resolutions-div"), 300);
  setTimeout(() => generateReports("reports-div"), 600);

  homePage.appendChild(footer);

  document.getElementById("close-modal").onclick = () => {
    document.getElementById("modal").style.display = "none";
  };

  window.onclick = (e) => {
    const modal = document.getElementById("modal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
});

// Add interactive parallax effect to background shapes
document.addEventListener("mousemove", (e) => {
  const shapes = document.querySelectorAll(".shape");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.5;
    const xPos = (x - 0.5) * speed * 20;
    const yPos = (y - 0.5) * speed * 20;
    shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
  });
});

// Add scroll-based animations
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".bg-shapes");
  const speed = scrolled * 0.5;
  parallax.style.transform = `translateY(${speed}px)`;
});

// Add click ripple effect to glass elements (excluding gallery, images, buttons, and links)
document.querySelectorAll(".glass").forEach((element) => {
  element.addEventListener("click", function (e) {
    // Exclude clicks on photos, gallery navigation buttons, links, forms, and images
    if (
      e.target.closest(
        "button, a, img, input, textarea, .prev-btn, .next-btn, .gallery-wrapper, .gallery-container, .modal, .modal-content",
      )
    ) {
      return;
    }

    const ripple = document.createElement("div");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                    z-index: 1000;
                `;

    this.style.position = "relative";
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple animation keyframes
const style = document.createElement("style");
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

let formOpenedTime = Date.now();
let userInteractedWithMouse = false;
window.addEventListener(
  "mousemove",
  () => {
    userInteractedWithMouse = true;
  },
  { once: true },
);
window.addEventListener(
  "touchstart",
  () => {
    userInteractedWithMouse = true;
  },
  { once: true },
);

const contactForm =
  document.getElementById("contact-form") || document.querySelector("form");
if (contactForm) {
  contactForm.setAttribute("novalidate", "true");

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    contactForm
      .querySelectorAll(".input-error")
      .forEach((el) => el.classList.remove("input-error"));
    contactForm.querySelectorAll(".error-text").forEach((el) => el.remove());

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const bWebsiteInput = document.getElementById("b_website");

    let hasErrors = false;

    const markError = (inputEl, errorMsg) => {
      if (!inputEl) return;
      hasErrors = true;
      inputEl.classList.remove("input-error");
      void inputEl.offsetWidth;
      inputEl.classList.add("input-error");
      const errEl = document.createElement("small");
      errEl.className = "error-text";
      errEl.textContent = errorMsg;
      inputEl.parentNode.appendChild(errEl);
    };

    // Validate Name and Surname
    if (!nameInput || !nameInput.value.trim()) {
      markError(nameInput, "Proszę wpisać imię i nazwisko.");
    }

    // Validate Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput || !emailInput.value.trim()) {
      markError(emailInput, "Proszę wpisać adres email.");
    } else if (!emailRegex.test(emailInput.value.trim())) {
      markError(
        emailInput,
        "Wprowadź poprawny adres email (np. jan@domena.pl).",
      );
    }

    // Validate Message
    if (!messageInput || !messageInput.value.trim()) {
      markError(messageInput, "Proszę wpisać treść wiadomości.");
    }

    // If there are errors, halt submission
    if (hasErrors) return;

    // VALIDATION OK: 3D WHITE ENVELOPE WITH PHYSICAL FLYING TEXT ANIMATION
    const submitBtn = contactForm.querySelector("button[type='submit']");
    const originalBtnText = submitBtn ? submitBtn.innerHTML : "Wyślij";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = "✉️ Wysyłanie listu...";
    }

    const rawName = nameInput ? nameInput.value.trim() : "";
    const rawEmail = emailInput ? emailInput.value.trim() : "";
    const rawSubject = subjectInput
      ? subjectInput.value.trim()
      : "Wiadomość z formularza";
    const rawMessage = messageInput ? messageInput.value.trim() : "";
    const rawBWebsite = bWebsiteInput ? bWebsiteInput.value.trim() : "";

    // Sanitize form inputs using DOMPurify
    const name =
      typeof DOMPurify !== "undefined" ? DOMPurify.sanitize(rawName) : rawName;
    const email =
      typeof DOMPurify !== "undefined"
        ? DOMPurify.sanitize(rawEmail)
        : rawEmail;
    const subject =
      typeof DOMPurify !== "undefined"
        ? DOMPurify.sanitize(rawSubject)
        : rawSubject;
    const message =
      typeof DOMPurify !== "undefined"
        ? DOMPurify.sanitize(rawMessage)
        : rawMessage;
    const b_website =
      typeof DOMPurify !== "undefined"
        ? DOMPurify.sanitize(rawBWebsite)
        : rawBWebsite;

    const timeOnPageSec = Math.round((Date.now() - formOpenedTime) / 1000);
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    const todayStr = formatDateToPolish(new Date());

    const metadata = {
      user_agent: navigator.userAgent,
      device_type: isMobile ? "mobile" : "desktop",
      screen_res: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language || navigator.userLanguage,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      page_url: window.location.href,
      referrer: document.referrer || "direct",
      time_on_page_sec: timeOnPageSec,
      mouse_interacted: userInteractedWithMouse,
      cores: navigator.hardwareConcurrency || "unknown",
      ram_gb: navigator.deviceMemory || "unknown",
    };

    // CREATE 3D WHITE ENVELOPE IN THE CENTER OF THE SCREEN
    const overlay = document.createElement("div");
    overlay.className = "envelope-modal-overlay";
    overlay.innerHTML = `
      <div class="real-envelope">
        <div class="env-back"></div>
        <div class="env-paper">
          <div class="env-paper-header">
            <span class="env-stamp">📬 Do zarządu ZMiGRS</span>
            <span class="env-date">${todayStr}</span>
          </div>
          <div class="env-line line-1"><strong>Od:</strong> <span class="val-name"></span></div>
          <div class="env-line line-2"><strong>E-mail:</strong> <span class="val-email"></span></div>
          <div class="env-line line-3"><strong>Temat:</strong> <span class="val-subject"></span></div>
          <div class="env-divider"></div>
          <div class="env-line line-4 val-message" style="white-space: pre-line;"></div>
        </div>
        <div class="env-front"></div>
        <div class="env-top-flap"></div>
        <div class="env-wax-seal">✉️ OPIECZĘTOWANE</div>
      </div>
    `;

    document.body.appendChild(overlay);
    void overlay.offsetWidth;
    overlay.classList.add("show");

    const envPaper = overlay.querySelector(".env-paper");
    const realEnvelope = overlay.querySelector(".real-envelope");
    const valName = overlay.querySelector(".val-name");
    const valEmail = overlay.querySelector(".val-email");
    const valSubject = overlay.querySelector(".val-subject");
    const valMessage = overlay.querySelector(".val-message");
    const waxSeal = overlay.querySelector(".env-wax-seal");

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // FUNCTION TO FLY TEXT FROM INPUT FIELD TO WHITE ENVELOPE AND CLEAR INPUT
    const flyTextFromInputToTarget = (
      inputEl,
      targetEl,
      labelText,
      textValue,
    ) => {
      return new Promise((resolve) => {
        if (!textValue) {
          resolve();
          return;
        }

        const startRect = inputEl ? inputEl.getBoundingClientRect() : null;
        const endRect = targetEl ? targetEl.getBoundingClientRect() : null;

        if (!startRect || !endRect) {
          if (inputEl) inputEl.value = "";
          targetEl.textContent = textValue;
          targetEl.parentNode.classList.add("stream-in");
          resolve();
          return;
        }

        const particle = document.createElement("div");
        particle.className = "flying-text-particle";
        particle.textContent = `${labelText}: ${textValue.length > 25 ? textValue.substring(0, 25) + "..." : textValue}`;
        particle.style.left = `${startRect.left}px`;
        particle.style.top = `${startRect.top}px`;
        particle.style.width = `${Math.min(startRect.width, 320)}px`;
        document.body.appendChild(particle);

        // Clear input field immediately after text particle launches
        if (inputEl) inputEl.value = "";

        requestAnimationFrame(() => {
          const deltaX = endRect.left - startRect.left;
          const deltaY = endRect.top - startRect.top;
          particle.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.92)`;
          particle.style.opacity = "0.95";
        });

        setTimeout(() => {
          particle.remove();
          targetEl.textContent = textValue;
          targetEl.parentNode.classList.add("stream-in");
          resolve();
        }, 450);
      });
    };

    // STEP 1: TEXT FLIES FROM FORM INPUTS INTO WHITE ENVELOPE
    await delay(300);
    await flyTextFromInputToTarget(nameInput, valName, "Od", name);
    await delay(120);
    await flyTextFromInputToTarget(emailInput, valEmail, "E-mail", email);
    await delay(120);
    await flyTextFromInputToTarget(subjectInput, valSubject, "Temat", subject);
    await delay(120);
    await flyTextFromInputToTarget(
      messageInput,
      valMessage,
      "Wiadomość",
      message,
    );

    // Background dispatch to API
    let sendSuccess = true;
    try {
      if (api_url && !api_url.includes("YOUR_SCRIPT_ID")) {
        await fetch(api_url, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "contact",
            name: name,
            email: email,
            subject: subject,
            message: message,
            b_website: b_website,
            metadata: JSON.stringify(metadata),
            client_timestamp: new Date().toISOString(),
          }),
        });
      }
    } catch (err) {
      console.error("Błąd wysyłania formularza kontaktowego:", err);
      sendSuccess = false;
    }

    await delay(300);

    if (sendSuccess) {
      // STEP 2: WHITE ENVELOPE CLOSES (PAPER SLIDES INTO POCKET, FLAP CLOSES IN 3D)
      realEnvelope.classList.add("sealed");
      await delay(500);
      waxSeal.classList.add("show");

      await delay(700);

      // STEP 3: WHITE ENVELOPE FLIES UP INTO THE SKY!
      if (submitBtn) submitBtn.innerHTML = "🚀 Odlatuje...";
      realEnvelope.classList.add("fly-away");

      await delay(700);
      overlay.classList.remove("show");

      setTimeout(() => {
        overlay.remove();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }

        // GREEN SUCCESS TOAST MODAL IN THE CENTER OF THE SCREEN
        const successMsg = document.createElement("div");
        successMsg.className = "success-toast show";
        successMsg.innerHTML = `
          <div style="font-size: 2.2rem; margin-bottom: 8px;">✅</div>
          <div>
            <div style="font-size: 18px; font-weight: 700; margin-bottom: 4px; color: #ffffff;">Dziękujemy!</div>
            <div style="color: #ffffff;">Twoje zapytanie ruszyło w drogę! Odezwiemy się niebawem.</div>
          </div>
        `;
        document.body.appendChild(successMsg);

        const closeToast = () => {
          if (successMsg.classList.contains("hide")) return;
          successMsg.classList.remove("show");
          successMsg.classList.add("hide");
          setTimeout(() => successMsg.remove(), 400);
        };
        const autoCloseTimeout = setTimeout(closeToast, 4000);
        successMsg.addEventListener("click", () => {
          clearTimeout(autoCloseTimeout);
          closeToast();
        });
      }, 300);
    } else {
      // API ERROR: UNPACK AND RESTORE DATA TO FORM INPUTS
      realEnvelope.classList.remove("sealed");
      if (nameInput) nameInput.value = name;
      if (emailInput) emailInput.value = email;
      if (subjectInput) subjectInput.value = subject;
      if (messageInput) messageInput.value = message;

      waxSeal.style.background = "#ef4444";
      waxSeal.textContent = "Błąd przesyłu zapytania!";
      waxSeal.classList.add("show");

      await delay(1200);
      overlay.classList.remove("show");

      setTimeout(() => {
        overlay.remove();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }

        const errorToast = document.createElement("div");
        errorToast.className = "error-toast show";
        errorToast.innerHTML = `
          <div style="font-size: 2.2rem; margin-bottom: 8px;">Uwaga!</div>
          <div>
            <div style="font-size: 18px; font-weight: 700; margin-bottom: 4px; color: #ffffff;">Nie udało się wysłać</div>
            <div style="color: #ffffff;">Wystąpił problem z połączeniem. Przywróciliśmy wpisane dane - spróbuj ponownie.</div>
          </div>
        `;
        document.body.appendChild(errorToast);

        const closeErr = () => {
          if (errorToast.classList.contains("hide")) return;
          errorToast.classList.remove("show");
          errorToast.classList.add("hide");
          setTimeout(() => errorToast.remove(), 400);
        };
        const errTimer = setTimeout(closeErr, 4000);
        errorToast.addEventListener("click", () => {
          clearTimeout(errTimer);
          closeErr();
        });
      }, 300);
    }
  });
}

// Add toast fade in animation
const fadeStyle = document.createElement("style");
fadeStyle.textContent = `
            @keyframes toastFadeIn {
                from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            }
        `;
document.head.appendChild(fadeStyle);
