let currentPage = "home";
let api_url =
  // "https://script.google.com/macros/s/AKfycbw_SyqFrfO4WA9HjrX6TQf4HUhcMxpNCQuYaEI-Cwe6mB7D-toubQcZXMglLi0J1vg/exec";
  // "https://localhost:4000";
  "https://zmigrs-api.newadvanceapp.workers.dev";
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

// Pagination states to keep track of offsets and loading status for each content type.
// This allows managing infinite scroll and loading states separately for news, resolutions, and reports.
const paginationState = {
  news: { offset: 0, loading: false },
  resolutions: { offset: 0, loading: false },
  reports: { offset: 0, loading: false },
};

/**
 * Generates and appends link buttons for municipality or city members into a target DOM container.
 * @param {Array<{name: string, path: string}>} list - Array of member objects with name and URL.
 * @param {string} containerId - Target DOM container element ID.
 */
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

/**
 * Converts a date string into Polish localized long date format (e.g., "poniedziałek, 15 marca 2024").
 * @param {string} dateString - ISO or parseable date string.
 * @returns {string} Formatted localized date string, or empty string if input is empty.
 */
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

/**
 * Truncates text to a maximum length without cutting words in half.
 * Cleans up trailing punctuation and adds an ellipsis if truncated.
 * @param {string} text - Input text string.
 * @param {number} [maxLength=150] - Maximum character limit.
 * @returns {string} Clean truncated string.
 */
function truncateText(text, maxLength = 150) {
  if (!text) return "";
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  const sub = normalized.slice(0, maxLength);
  const lastSpace = sub.lastIndexOf(" ");
  const clean = (lastSpace > 20 ? sub.slice(0, lastSpace) : sub).replace(
    /[,.;:!?\- ]+$/,
    "",
  );
  return clean + "…";
}

/**
 * Performs an HTTP GET request with client-side caching in sessionStorage to reduce API requests and avoid rate limits.
 * @param {string} url - The URL endpoint to fetch.
 * @param {number} [ttlMs=120000] - Time-to-live in milliseconds for cached response (default: 2 minutes).
 * @returns {Promise<any>} Parsed JSON response.
 */
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

/**
 * Displays a global loading toast indicator with a spinning indicator and custom status text.
 * @param {string} [message="Ładowanie danych..."] - Status message to display.
 */
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

/**
 * Hides and removes the active loading toast indicator with an exit fade animation.
 */
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

/**
 * Configures an IntersectionObserver sentinel at the bottom of a list container to trigger infinite scroll pagination.
 * @param {string} type - Content type identifier ('news', 'resolutions', 'reports').
 * @param {string} sentinelId - DOM ID of the sentinel element observed.
 * @param {string} containerId - Target DOM container ID where newly loaded items are appended.
 */
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

/**
 * Checks whether the horizontal gallery has overflowing content and shows/hides prev/next scroll buttons accordingly.
 */
function checkGalleryNavigation() {
  const container = document.getElementById("article-gallery-div");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (!container || !prevBtn || !nextBtn) return;

  const articleDiv = document.getElementById("article-div");
  if (articleDiv && articleDiv.classList.contains("gallery-hero-grid")) {
    prevBtn.style.visibility = "hidden";
    prevBtn.style.opacity = "0";
    nextBtn.style.visibility = "hidden";
    nextBtn.style.opacity = "0";
    return;
  }

  const hasItems = container.querySelectorAll("a").length > 0;

  // If gallery width exceeds visible client width, show scroll navigation buttons
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

/**
 * Scrolls the article photo gallery horizontally by the width of one thumbnail item.
 * @param {number} direction - Direction multiplier (-1 for left/previous, 1 for right/next).
 */
function moveGallery(direction) {
  const container = document.getElementById("article-gallery-div");
  const itemWidth = container.querySelector("a").offsetWidth + 15;

  container.scrollBy({
    left: direction * itemWidth,
    behavior: "smooth",
  });
}

/**
 * Loads and renders full article details from Cloudflare Worker API by ID, including metadata, sanitized content, and gallery attachments.
 * @param {number|string} id - Article database ID.
 */
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

    const hasContent = Boolean(
      content &&
      (content
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, "")
        .trim().length > 0 ||
        /<(img|iframe|video|audio)/i.test(content)),
    );

    const articleDiv = document.getElementById("article-div");

    if (hasContent) {
      if (articleDiv) articleDiv.classList.remove("gallery-hero-grid");

      const bodyEl = document.createElement("div");
      bodyEl.className = "article-body article-segment";

      if (description && description.trim()) {
        const leadDiv = document.createElement("div");
        leadDiv.className = "article-lead";
        leadDiv.textContent = description;
        bodyEl.appendChild(leadDiv);
      }

      const contentDiv = document.createElement("div");
      contentDiv.className = "article-content";
      contentDiv.innerHTML =
        typeof DOMPurify !== "undefined"
          ? DOMPurify.sanitize(content)
          : content;
      bodyEl.appendChild(contentDiv);
      articleEl.appendChild(bodyEl);
    } else {
      // Empty content: switch article container to enlarged hero + grid gallery layout
      if (articleDiv) articleDiv.classList.add("gallery-hero-grid");

      // Display description if provided as a clean standalone lead without the empty body segment
      if (description && description.trim()) {
        const leadDiv = document.createElement("div");
        leadDiv.className = "article-lead article-lead-standalone";
        leadDiv.textContent = description;
        articleEl.appendChild(leadDiv);
      }
    }

    const footerEl = document.createElement("footer");
    footerEl.className = "article-footer";

    const metaGroup = document.createElement("div");
    metaGroup.className = "article-meta-group";

    const authorItem = document.createElement("div");
    authorItem.className = "article-meta-item";
    const authorSpan = document.createElement("span");
    authorSpan.innerHTML =
      '<span class="material-symbols-outlined" style="font-size: 16px; vertical-align: -3px; margin-right: 3px;">person</span>Autor: ';
    const authorStrong = document.createElement("strong");
    authorStrong.textContent = author ? author.trim() : "Zarząd ZMiGRS";
    authorItem.appendChild(authorSpan);
    authorItem.appendChild(authorStrong);
    metaGroup.appendChild(authorItem);

    if (sourceTrimmed) {
      const srcItem = document.createElement("div");
      srcItem.className = "article-meta-item";
      const srcSpan = document.createElement("span");
      srcSpan.innerHTML =
        '<span class="material-symbols-outlined" style="font-size: 16px; vertical-align: -3px; margin-right: 3px;">link</span>Źródło: ';
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
      photosSpan.innerHTML =
        '<span class="material-symbols-outlined" style="font-size: 16px; vertical-align: -3px; margin-right: 3px;">photo_camera</span>Zdjęcia: ';
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
      fetchAttachmentsRecursive(
        id,
        galleryContainer,
        0,
        folder_id,
        [],
        metaGroup,
      ).then(() => {
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

/**
 * Checks whether a given attachment file is an image.
 * @param {Object} file - Attachment file metadata object.
 * @returns {boolean} True if the file is an image, false otherwise.
 */
function isImageFile(file) {
  if (!file) return false;
  const mime = (file.mime_type || "").toLowerCase();
  if (mime.startsWith("image/") || mime.includes("image")) return true;
  const name = (file.file_name || file.file_path || "").toLowerCase();
  const ext = name.split(".").pop().split("?")[0];
  return [
    "jpg",
    "jpeg",
    "png",
    "webp",
    "gif",
    "svg",
    "bmp",
    "avif",
    "heic",
    "tiff",
    "ico",
  ].includes(ext);
}

/**
 * Checks whether a given attachment file is gallery media (image or video).
 * @param {Object} file - Attachment file metadata object.
 * @returns {boolean} True if the file is media (image or video), false otherwise.
 */
function isGalleryMedia(file) {
  if (!file) return false;
  if (isImageFile(file)) return true;
  const mime = (file.mime_type || "").toLowerCase();
  if (mime.startsWith("video/") || mime.includes("video")) return true;
  const name = (file.file_name || file.file_path || "").toLowerCase();
  const ext = name.split(".").pop().split("?")[0];
  return ["mp4", "webm", "ogg", "mov", "avi", "mkv", "m4v"].includes(ext);
}

/**
 * Returns a Google Material Symbols icon name based on file extension and MIME type.
 * @param {string} [fileName=""] - File name or path.
 * @param {string} [mimeType=""] - MIME type of the file.
 * @returns {string} Material Symbols icon name.
 */
function getFileIcon(fileName = "", mimeType = "") {
  const ext = (fileName || "").split(".").pop().toLowerCase().split("?")[0];
  const mime = (mimeType || "").toLowerCase();
  if (ext === "pdf" || mime.includes("pdf")) return "picture_as_pdf";
  if (
    ["doc", "docx", "odt", "rtf", "txt"].includes(ext) ||
    mime.includes("word") ||
    mime.includes("text")
  )
    return "description";
  if (
    ["xls", "xlsx", "ods", "csv"].includes(ext) ||
    mime.includes("sheet") ||
    mime.includes("excel") ||
    mime.includes("csv")
  )
    return "table_chart";
  if (
    ["ppt", "pptx", "odp"].includes(ext) ||
    mime.includes("presentation") ||
    mime.includes("powerpoint")
  )
    return "slideshow";
  if (
    ["zip", "rar", "7z", "tar", "gz"].includes(ext) ||
    mime.includes("zip") ||
    mime.includes("compressed")
  )
    return "folder_zip";
  if (
    ["mp3", "wav", "flac", "m4a", "aac"].includes(ext) ||
    mime.startsWith("audio/")
  )
    return "audio_file";
  if (
    ["mp4", "webm", "mov", "avi", "mkv", "m4v"].includes(ext) ||
    mime.startsWith("video/")
  )
    return "video_file";
  if (
    ["jpg", "jpeg", "png", "webp", "gif", "svg", "bmp", "avif"].includes(ext) ||
    mime.startsWith("image/")
  )
    return "image";
  return "attach_file";
}

/**
 * Renders or updates the document attachments button inside the article meta group.
 * @param {number|string} id - Article database ID.
 * @param {string} folderId - Google Drive folder ID containing attachments.
 * @param {number} count - Number of document attachments found.
 * @param {HTMLElement} metaGroup - DOM container for metadata badges.
 */
function renderArticleAttachmentsButton(id, folderId, count, metaGroup) {
  if (!metaGroup || count <= 0) return;

  let btn = metaGroup.querySelector(".article-meta-attach");
  if (!btn) {
    btn = document.createElement("a");
    btn.href = "#";
    btn.className = "article-meta-item article-meta-attach";
    btn.setAttribute("role", "button");
    btn.setAttribute("title", "Pokaż załączniki dokumentowe do artykułu");
    btn.innerHTML = `<span class="material-symbols-outlined" style="font-size: 16px; vertical-align: -3px; margin-right: 4px;">attach_file</span>Załączniki: <strong>(${count})</strong>`;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openAttachmentModal(id, "news", folderId || "", {
        excludeMedia: true,
        title: `Załączniki do artykułu (${count})`,
      });
    });
    metaGroup.appendChild(btn);
  } else {
    const strong = btn.querySelector("strong");
    if (strong) strong.textContent = `(${count})`;
    btn.onclick = (e) => {
      e.preventDefault();
      openAttachmentModal(id, "news", folderId || "", {
        excludeMedia: true,
        title: `Załączniki do artykułu (${count})`,
      });
    };
  }
}

/**
 * Creates and initializes the gallery loading status badge inside the article meta group.
 * @param {number} total - Estimated or exact total number of gallery images.
 * @param {HTMLElement} metaGroup - DOM container for article metadata items.
 * @param {HTMLElement} container - Gallery images container.
 * @param {Function} tryLoadSingleImage - Function to attempt loading a single image.
 * @returns {Object} Tracker object containing state and DOM references.
 */
function createGalleryTracker(total, metaGroup, container, tryLoadSingleImage) {
  const badge = document.createElement("div");
  badge.className = "article-meta-item article-meta-gallery status-loading";
  badge.id = "article-gallery-badge";

  const leadIcon = document.createElement("span");
  leadIcon.className = "material-symbols-outlined gallery-lead-icon";
  leadIcon.style.cssText =
    "font-size: 16px; vertical-align: -3px; margin-right: 4px; opacity: 0.85;";
  leadIcon.textContent = "photo_library";

  const textSpan = document.createElement("span");
  textSpan.className = "gallery-badge-text";
  textSpan.innerHTML = `Galeria: <strong>0 z ${total}</strong>`;

  const statusContainer = document.createElement("span");
  statusContainer.className = "gallery-badge-status-container";
  statusContainer.style.cssText =
    "display: inline-flex; align-items: center; margin-left: 6px;";

  const spinIcon = document.createElement("span");
  spinIcon.className = "material-symbols-outlined gallery-badge-icon spinning";
  spinIcon.style.cssText =
    "font-size: 16px; color: #38bdf8; vertical-align: middle;";
  spinIcon.title = "Wczytywanie zdjęć...";
  spinIcon.textContent = "sync";
  statusContainer.appendChild(spinIcon);

  badge.appendChild(leadIcon);
  badge.appendChild(textSpan);
  badge.appendChild(statusContainer);

  metaGroup.appendChild(badge);

  return {
    total: total,
    loaded: 0,
    failedItems: [],
    badge: badge,
    textSpan: textSpan,
    statusContainer: statusContainer,
    container: container,
    tryLoadSingleImage: tryLoadSingleImage,
    isRetrying: false,
  };
}

/**
 * Updates the gallery status badge text, icon, and visual state.
 * @param {Object} tracker - Gallery loading tracker object.
 * @param {'loading'|'success'|'error'} state - Current state of gallery loading.
 */
function updateGalleryStatusBadge(tracker, state) {
  if (!tracker || !tracker.badge) return;

  const { total, loaded, failedItems, badge, textSpan, statusContainer } =
    tracker;

  // Always keep counter text up to date
  textSpan.innerHTML = `Galeria: <strong>${loaded} z ${total}</strong>`;

  // Reset status classes
  badge.classList.remove("status-loading", "status-success", "status-error");
  statusContainer.replaceChildren();

  if (state === "loading") {
    badge.classList.add("status-loading");
    badge.title = `Wczytywanie zdjęć: ${loaded} z ${total}`;

    const spinIcon = document.createElement("span");
    spinIcon.className =
      "material-symbols-outlined gallery-badge-icon spinning";
    spinIcon.style.cssText =
      "font-size: 16px; color: #38bdf8; vertical-align: middle;";
    spinIcon.title = "Wczytywanie zdjęć...";
    spinIcon.textContent = "sync";
    statusContainer.appendChild(spinIcon);
  } else if (state === "success") {
    badge.classList.add("status-success");
    badge.title = "Wszystkie zdjęcia zostały załadowane";

    const checkIcon = document.createElement("span");
    checkIcon.className =
      "material-symbols-outlined gallery-badge-icon gallery-badge-success-icon";
    checkIcon.style.cssText =
      "font-size: 16px; color: #10b981; vertical-align: middle;";
    checkIcon.title = "Wszystkie zdjęcia zostały pomyślnie załadowane";
    checkIcon.textContent = "check_circle";
    statusContainer.appendChild(checkIcon);
  } else if (state === "error") {
    badge.classList.add("status-error");
    const count = failedItems.length;
    const msg = `Nie udało się załadować ${count} ${count === 1 ? "zdjęcia" : "zdjęć"}. Kliknij, aby ponowić próbę`;
    badge.title = msg;

    const retryBtn = document.createElement("button");
    retryBtn.type = "button";
    retryBtn.className = "gallery-retry-btn";
    retryBtn.title = msg;
    retryBtn.setAttribute("aria-label", msg);

    const refreshIcon = document.createElement("span");
    refreshIcon.className = "material-symbols-outlined gallery-badge-icon";
    refreshIcon.style.cssText =
      "font-size: 16px; color: #ef4444; vertical-align: middle;";
    refreshIcon.textContent = "refresh";
    retryBtn.appendChild(refreshIcon);

    retryBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      retryFailedGalleryImages(tracker);
    });

    statusContainer.appendChild(retryBtn);
  }
}

/**
 * Retries loading any failed gallery images when user clicks the red reload icon.
 * @param {Object} tracker - Gallery loading tracker object.
 */
async function retryFailedGalleryImages(tracker) {
  if (
    !tracker ||
    tracker.isRetrying ||
    !tracker.failedItems ||
    tracker.failedItems.length === 0
  ) {
    return;
  }

  tracker.isRetrying = true;
  updateGalleryStatusBadge(tracker, "loading");

  const toRetry = [...tracker.failedItems];
  tracker.failedItems = [];

  for (const item of toRetry) {
    let fileId = item.file_id;
    if (!fileId && item.file_path) {
      const match = item.file_path.match(/[-\w]{25,}/);
      if (match) fileId = match[0];
    }

    const imgResult = await tracker.tryLoadSingleImage(fileId, item.file_path);

    if (imgResult.success) {
      tracker.loaded++;
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
      tracker.container.appendChild(a);
      checkGalleryNavigation();
    } else {
      tracker.failedItems.push(item);
    }

    updateGalleryStatusBadge(tracker, "loading");
  }

  tracker.isRetrying = false;
  if (typeof initLightbox === "function") {
    initLightbox();
  }

  if (tracker.failedItems.length === 0) {
    updateGalleryStatusBadge(tracker, "success");
  } else {
    updateGalleryStatusBadge(tracker, "error");
  }
}

/**
 * Randomly shuffles an array in place using the Fisher-Yates (Knuth) algorithm.
 * @param {Array} array - Array to shuffle.
 * @returns {Array} Shuffled array reference.
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Recursively queries attachments for an article from the Cloudflare Worker API,
 * loads image dimensions with fallback proxy retry, and populates the PhotoSwipe gallery DOM container.
 * Also discovers non-media attachments and triggers rendering of an attachment button if present.
 * @param {number|string} id - Article database ID.
 * @param {HTMLElement} container - DOM element where image anchor tags are appended.
 * @param {number} [offset=0] - Starting offset for pagination.
 * @param {string} [folderId=""] - Google Drive folder ID containing attachments.
 * @param {Array} [nonMediaCollector=[]] - Array accumulating non-media attachment objects.
 * @param {HTMLElement|null} [metaGroup=null] - DOM element where the attachment button is mounted.
 * @param {Object|null} [galleryTracker=null] - Tracker object maintaining gallery loading status.
 * @returns {Promise<Array>} Collected non-media attachments.
 */
async function fetchAttachmentsRecursive(
  id,
  container,
  offset = 0,
  folderId = "",
  nonMediaCollector = [],
  metaGroup = null,
  galleryTracker = null,
) {
  try {
    const data = await fetchWithCache(
      `${api_url}?action=attachments&type=news&id=${encodeURIComponent(id)}&folderId=${encodeURIComponent(folderId)}&offset=${offset}`,
    );

    const items = data.items || [];

    // Collect non-media attachments (PDF, DOC, XLS, ZIP, etc.)
    for (const item of items) {
      if (!isGalleryMedia(item)) {
        nonMediaCollector.push(item);
      }
    }

    // Immediately render or update document attachments button if found
    if (metaGroup && nonMediaCollector.length > 0) {
      renderArticleAttachmentsButton(
        id,
        folderId,
        nonMediaCollector.length,
        metaGroup,
      );
    }

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const failedItemsQueue = [];

    const tryLoadSingleImage = (fileId, fallbackUrl) => {
      return new Promise((resolve) => {
        let currentUrl = fallbackUrl || "";
        if (fileId && api_url) {
          currentUrl = `${api_url}/files/${fileId}`;
        } else if (fileId) {
          currentUrl = `https://lh3.googleusercontent.com/d/${fileId}=w1200`;
        }

        const loader = new Image();
        let timer = setTimeout(() => {
          resolve({
            success: false,
            finalUrl: currentUrl,
            width: 1600,
            height: 900,
          });
        }, 8000);

        loader.onload = () => {
          clearTimeout(timer);
          resolve({
            success: true,
            finalUrl: currentUrl,
            width: loader.naturalWidth || 1600,
            height: loader.naturalHeight || 900,
          });
        };

        loader.onerror = () => {
          clearTimeout(timer);
          resolve({
            success: false,
            finalUrl: currentUrl,
            width: 1600,
            height: 900,
          });
        };

        loader.src = currentUrl;
      });
    };

    // Calculate image items and initialize gallery tracker if photos exist
    const imageItems = items.filter(isImageFile);
    if (!galleryTracker && metaGroup) {
      let totalImages = imageItems.length;
      if (data.hasMore && data.total) {
        totalImages = Math.max(
          imageItems.length,
          data.total - nonMediaCollector.length,
        );
      }
      if (totalImages > 0) {
        galleryTracker = createGalleryTracker(
          totalImages,
          metaGroup,
          container,
          tryLoadSingleImage,
        );
      }
    } else if (galleryTracker && !data.hasMore) {
      galleryTracker.total = Math.max(
        galleryTracker.total,
        galleryTracker.loaded + imageItems.length,
      );
      updateGalleryStatusBadge(galleryTracker, "loading");
    }

    // STEP 1: MAIN PASS (Flat 2-second delay between images)
    for (const item of items) {
      if (!isImageFile(item)) continue;

      let fileId = item.file_id;
      if (!fileId && item.file_path) {
        const match = item.file_path.match(/[-\w]{25,}/);
        if (match) fileId = match[0];
      }

      const imgResult = await tryLoadSingleImage(fileId, item.file_path);

      if (imgResult.success) {
        if (galleryTracker) {
          galleryTracker.loaded++;
          updateGalleryStatusBadge(galleryTracker, "loading");
        }

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

      await delay(100);
    }

    // STEP 2: PROCESS FAILED ITEMS QUEUE (Two quick passes if any image fails)
    if (failedItemsQueue.length > 0) {
      for (let pass = 1; pass <= 2; pass++) {
        if (failedItemsQueue.length === 0) break;

        await delay(1500);

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
            if (galleryTracker) {
              galleryTracker.loaded++;
              updateGalleryStatusBadge(galleryTracker, "loading");
            }

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

    if (galleryTracker && failedItemsQueue.length > 0) {
      galleryTracker.failedItems.push(...failedItemsQueue);
    }

    if (data.hasMore) {
      await fetchAttachmentsRecursive(
        id,
        container,
        offset + items.length,
        folderId,
        nonMediaCollector,
        metaGroup,
        galleryTracker,
      );
    } else {
      setTimeout(checkGalleryNavigation, 200);

      // Conclude gallery tracker when all recursive pages finish
      if (galleryTracker) {
        galleryTracker.total =
          galleryTracker.loaded + galleryTracker.failedItems.length;
        if (galleryTracker.failedItems.length > 0) {
          updateGalleryStatusBadge(galleryTracker, "error");
        } else {
          updateGalleryStatusBadge(galleryTracker, "success");
        }
      }
    }

    return nonMediaCollector;
  } catch (e) {
    console.error("Błąd pobierania załączników graficznych:", e);
    if (galleryTracker) {
      updateGalleryStatusBadge(galleryTracker, "error");
    }
    return nonMediaCollector;
  }
}

/**
 * Creates and returns a glassmorphic notification container indicating an empty section or connection error.
 * @param {string} [title="Przepraszamy, brak wpisów do wyświetlenia"] - Header text.
 * @param {string} [message="W tej chwili ta sekcja nie zawiera jeszcze żadnych materiałów..."] - Descriptive message.
 * @returns {HTMLDivElement} Rendered DOM card element.
 */
function createEmptyState(
  title = "Przepraszamy, brak wpisów do wyświetlenia",
  message = "W tej chwili ta sekcja nie zawiera jeszcze żadnych materiałów. Zajrzyj do nas ponownie za chwilę!",
) {
  const card = document.createElement("div");
  card.className = "about-text glass empty-state-card";
  card.style.cssText =
    "grid-column: 1 / -1; text-align: center; padding: 40px 25px; margin: 10px 0;";

  const iconDiv = document.createElement("div");
  iconDiv.style.cssText = "margin-bottom: 12px;";
  iconDiv.innerHTML =
    '<span class="material-symbols-outlined" style="font-size: 3rem; color: #94a3b8;">folder_open</span>';

  const h3 = document.createElement("h3");
  h3.style.cssText = "margin-bottom: 10px; font-size: 1.25rem; color: #ffffff;";
  h3.textContent = title;

  const p = document.createElement("p");
  p.style.cssText =
    "color: rgba(255, 255, 255, 0.85); font-size: 0.9375rem; max-width: 600px; margin: 0 auto; line-height: 1.6;";
  p.textContent = message;

  card.appendChild(iconDiv);
  card.appendChild(h3);
  card.appendChild(p);
  return card;
}

// ── ARTICLES: SEARCH, FILTERING, AND INFINITE SCROLL ──

const NEWS_PAGE_SIZE = 6;

/**
 * Global state for news search, filtering, and infinite scroll.
 */
const newsSearchState = {
  allItems: [], // Complete collection of loaded articles
  filteredItems: [], // Filtered results by query, year, and sorting
  visibleCount: 6, // Count of currently rendered cards in DOM
  query: "",
  selectedYear: "all",
  sortOrder: "date-desc",
  isInitialized: false,
  isLoading: false,
};

/**
 * Sanitizes text to prevent Cross-Site Scripting (XSS) attacks.
 * @param {string} str - Input text to sanitize.
 * @returns {string} Sanitized safe HTML string.
 */
function escapeHTML(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Normalizes search query text by stripping Polish diacritic characters.
 * Converts accented characters to their base Latin forms (e.g., ą->a, ł->l, ś->s),
 * allowing users to match articles regardless of whether diacritics were typed.
 * @param {string} str - Input search text.
 * @returns {string} Normalized lowercase string without diacritics.
 */
function normalizePolishText(str) {
  if (!str) return "";
  return String(str)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .replace(/Ł/g, "l")
    .trim();
}

/**
 * Highlights matched keywords in text using <mark class="search-highlight"> tags.
 * Accounts for variants both with and without Polish diacritics.
 * @param {string} text - Original source text.
 * @param {string} query - Active search query string.
 * @returns {string} HTML string with highlighted keywords.
 */
function highlightSearchTerms(text, query) {
  if (!text) return "";
  if (!query || !query.trim()) return escapeHTML(text);

  const rawWords = query
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0);
  if (rawWords.length === 0) return escapeHTML(text);

  const charMap = {
    a: "[aąAĄ]",
    c: "[cćCĆ]",
    e: "[eęEĘ]",
    l: "[lłLŁ]",
    n: "[nńNŃ]",
    o: "[oóOÓ]",
    s: "[sśSŚ]",
    z: "[zźżZŹŻ]",
  };

  const patternParts = rawWords.map((word) => {
    const normalized = normalizePolishText(word);
    return normalized
      .split("")
      .map((ch) => charMap[ch] || ch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("");
  });

  try {
    const regex = new RegExp(`(${patternParts.join("|")})`, "gi");
    const safeText = escapeHTML(text);
    return safeText.replace(regex, '<mark class="search-highlight">$1</mark>');
  } catch (err) {
    return escapeHTML(text);
  }
}

/**
 * Creates an article card DOM element with accessibility support and search term highlighting.
 * @param {Object} item - Article data object from database/API.
 * @param {string} query - Active search query string.
 * @returns {HTMLElement} Rendered article card element.
 */
function createNewsCard(item, query = "") {
  const { news_id, name, publication_date, author, description } = item;

  const card = document.createElement("div");
  card.className = "about-text glass clickable-card content-card-item";
  card.setAttribute("role", "article");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `Artykuł: ${name || "Brak tytułu"}`);
  card.addEventListener("click", () => loadArticle(news_id));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      loadArticle(news_id);
    }
  });

  const h3 = document.createElement("h3");
  const a = document.createElement("a");
  a.href = "#article";
  a.innerHTML = highlightSearchTerms(name || "Brak tytułu", query);
  a.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    loadArticle(news_id);
  });
  h3.appendChild(a);
  card.appendChild(h3);

  const metaRow = document.createElement("div");
  metaRow.className = "card-meta";

  if (publication_date) {
    const dateSpan = document.createElement("span");
    dateSpan.className = "meta-date";
    dateSpan.innerHTML = `<span class="material-symbols-outlined meta-icon" aria-hidden="true">calendar_today</span>${formatDateToPolish(publication_date)}`;
    metaRow.appendChild(dateSpan);
  }

  const authorSpan = document.createElement("span");
  authorSpan.className = "meta-author";
  authorSpan.innerHTML = `<span class="material-symbols-outlined meta-icon" aria-hidden="true">person</span>${escapeHTML(author || "Zarząd ZMiGRS")}`;
  metaRow.appendChild(authorSpan);

  card.appendChild(metaRow);

  if (description && description.trim()) {
    const descP = document.createElement("p");
    descP.className = "article-card-desc";
    descP.innerHTML = highlightSearchTerms(
      truncateText(description, 160),
      query,
    );
    card.appendChild(descP);
  }

  const readMore = document.createElement("div");
  readMore.className = "card-readmore";
  readMore.innerHTML = `<span>Czytaj artykuł</span><span class="material-symbols-outlined readmore-arrow" aria-hidden="true">arrow_forward</span>`;
  card.appendChild(readMore);

  return card;
}

/**
 * Filters and sorts articles, then renders the initial batch with infinite scroll support.
 * @param {boolean} [resetPagination=true] - Whether to reset pagination counter back to NEWS_PAGE_SIZE.
 */
function applyNewsFilters(resetPagination = true) {
  const { allItems, query, selectedYear, sortOrder } = newsSearchState;
  const contentDiv = document.getElementById("article-list-content");
  const statusEl = document.getElementById("news-search-status");
  const clearBtn = document.getElementById("news-search-clear");

  if (!contentDiv) return;

  if (clearBtn) {
    clearBtn.style.display = query.length > 0 ? "inline-flex" : "none";
  }

  let filtered = allItems.slice();

  // 1. Text search filtering by query
  if (query) {
    const queryTokens = normalizePolishText(query)
      .split(/\s+/)
      .filter((t) => t.length > 0);

    filtered = filtered.filter((item) => {
      const target = item._searchIndex || "";
      return queryTokens.every((token) => target.includes(token));
    });
  }

  // 2. Year filtering
  if (selectedYear !== "all") {
    filtered = filtered.filter(
      (item) =>
        item.publication_date && item.publication_date.startsWith(selectedYear),
    );
  }

  // 3. Sorting
  filtered.sort((a, b) => {
    if (sortOrder === "date-asc") {
      return (a.publication_date || "").localeCompare(b.publication_date || "");
    }
    if (sortOrder === "title-asc") {
      return (a.name || "").localeCompare(b.name || "", "pl", {
        sensitivity: "base",
      });
    }
    if (sortOrder === "title-desc") {
      return (b.name || "").localeCompare(a.name || "", "pl", {
        sensitivity: "base",
      });
    }
    // Default: newest first
    return (b.publication_date || "").localeCompare(a.publication_date || "");
  });

  newsSearchState.filteredItems = filtered;

  if (resetPagination) {
    newsSearchState.visibleCount = NEWS_PAGE_SIZE;
  }

  // Remove previous sentinel element before re-rendering
  const oldSentinel = document.getElementById("news-sentinel");
  if (oldSentinel) oldSentinel.remove();

  contentDiv.replaceChildren();

  // Empty state when no matching results are found
  if (filtered.length === 0) {
    const emptyBox = document.createElement("div");
    emptyBox.className = "empty-search-state glass";
    emptyBox.innerHTML = `
      <span class="material-symbols-outlined empty-search-icon" aria-hidden="true">search_off</span>
      <h3>Nie znaleziono aktualności</h3>
      <p>Żaden artykuł nie pasuje do wybranych kryteriów wyszukiwania${
        query ? ` („<strong>${escapeHTML(query)}</strong>”)` : ""
      }${selectedYear !== "all" ? ` w roku ${escapeHTML(selectedYear)}` : ""}.</p>
      <button type="button" class="cta-button" onclick="resetNewsFilters()">Wyczyść filtry i pokaż wszystkie</button>
    `;
    contentDiv.appendChild(emptyBox);

    if (statusEl) {
      statusEl.innerHTML = `Znaleziono: <strong>0</strong> z ${allItems.length} aktualności`;
    }
    return;
  }

  // Render initial batch (Infinite Scroll)
  const currentChunk = filtered.slice(0, newsSearchState.visibleCount);
  const fragment = document.createDocumentFragment();
  for (const item of currentChunk) {
    const card = createNewsCard(item, query);
    fragment.appendChild(card);
  }
  contentDiv.appendChild(fragment);

  // If more articles remain to be loaded, insert the infinite scroll sentinel
  if (newsSearchState.visibleCount < filtered.length) {
    contentDiv.insertAdjacentHTML(
      "afterend",
      `<div id="news-sentinel" style="grid-column:1/-1; height:20px;"></div>`,
    );
    setupInfiniteScroll("news", "news-sentinel", "news-div");
  }

  // Update status bar
  if (statusEl) {
    const isFiltered = query.length > 0 || selectedYear !== "all";
    const showing = Math.min(newsSearchState.visibleCount, filtered.length);
    if (!isFiltered) {
      if (showing < filtered.length) {
        statusEl.innerHTML = `Wyświetlanie: <strong>${showing} z ${filtered.length}</strong> aktualności (przewiń w dół, aby wczytać kolejne)`;
      } else {
        statusEl.innerHTML = `Łącznie opublikowanych: <strong>${filtered.length}</strong> aktualności`;
      }
    } else {
      let statusText = `Znaleziono: <strong>${filtered.length}</strong> z ${allItems.length} aktualności`;
      if (query) {
        statusText += ` dla frazy „<strong>${escapeHTML(query)}</strong>”`;
      }
      if (selectedYear !== "all") {
        statusText += ` (rok: <strong>${escapeHTML(selectedYear)}</strong>)`;
      }
      if (showing < filtered.length) {
        statusText += ` — widoczne ${showing}`;
      }
      statusEl.innerHTML = statusText;
    }
  }
}

/**
 * Loads the next batch of articles for infinite scroll when the sentinel enters viewport.
 */
function appendNextNewsBatch() {
  const { filteredItems, visibleCount, query } = newsSearchState;
  const contentDiv = document.getElementById("article-list-content");
  const statusEl = document.getElementById("news-search-status");

  if (!contentDiv || visibleCount >= filteredItems.length) return;

  const oldSentinel = document.getElementById("news-sentinel");
  if (oldSentinel) oldSentinel.remove();

  const nextBatch = filteredItems.slice(
    visibleCount,
    visibleCount + NEWS_PAGE_SIZE,
  );
  newsSearchState.visibleCount += nextBatch.length;

  const fragment = document.createDocumentFragment();
  for (const item of nextBatch) {
    const card = createNewsCard(item, query);
    fragment.appendChild(card);
  }
  contentDiv.appendChild(fragment);

  // If more items remain, move the sentinel to the bottom
  if (newsSearchState.visibleCount < filteredItems.length) {
    contentDiv.insertAdjacentHTML(
      "afterend",
      `<div id="news-sentinel" style="grid-column:1/-1; height:20px;"></div>`,
    );
    setupInfiniteScroll("news", "news-sentinel", "news-div");
  }

  // Update status bar
  if (statusEl) {
    const isFiltered =
      query.length > 0 || newsSearchState.selectedYear !== "all";
    const showing = Math.min(
      newsSearchState.visibleCount,
      filteredItems.length,
    );
    if (!isFiltered) {
      if (showing < filteredItems.length) {
        statusEl.innerHTML = `Wyświetlanie: <strong>${showing} z ${filteredItems.length}</strong> aktualności (przewiń w dół, aby wczytać kolejne)`;
      } else {
        statusEl.innerHTML = `Łącznie opublikowanych: <strong>${filteredItems.length}</strong> aktualności`;
      }
    } else {
      statusEl.innerHTML = `Znaleziono: <strong>${filteredItems.length}</strong> z ${newsSearchState.allItems.length} aktualności — widoczne ${showing}`;
    }
  }
}

/**
 * Resets all search and filter controls to default values and scrolls to list top.
 */
function resetNewsFilters() {
  const searchInput = document.getElementById("news-search-input");
  const yearSelect = document.getElementById("news-year-filter");
  const sortSelect = document.getElementById("news-sort-filter");

  if (searchInput) searchInput.value = "";
  if (yearSelect) yearSelect.value = "all";
  if (sortSelect) sortSelect.value = "date-desc";

  newsSearchState.query = "";
  newsSearchState.selectedYear = "all";
  newsSearchState.sortOrder = "date-desc";

  applyNewsFilters(true);
}
window.resetNewsFilters = resetNewsFilters;
window.applyNewsFilters = applyNewsFilters;

/**
 * Initializes event listeners for the news search bar, filters, and reset button.
 */
function initNewsSearch() {
  if (newsSearchState.isInitialized) return;

  const searchInput = document.getElementById("news-search-input");
  const clearBtn = document.getElementById("news-search-clear");
  const yearSelect = document.getElementById("news-year-filter");
  const sortSelect = document.getElementById("news-sort-filter");
  const resetBtn = document.getElementById("news-reset-filters");

  let debounceTimer = null;

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        newsSearchState.query = e.target.value.trim();
        applyNewsFilters(true);
      }, 150);
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        newsSearchState.query = "";
        applyNewsFilters(true);
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      newsSearchState.query = "";
      applyNewsFilters(true);
    });
  }

  if (yearSelect) {
    yearSelect.addEventListener("change", (e) => {
      newsSearchState.selectedYear = e.target.value;
      applyNewsFilters(true);
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      newsSearchState.sortOrder = e.target.value;
      applyNewsFilters(true);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", resetNewsFilters);
  }

  newsSearchState.isInitialized = true;
}

/**
 * Main function fetching news articles from the Cloudflare Worker API.
 * Handles initial data loading, indexing for live search,
 * and subsequent batches triggered by infinite scroll (isInitialLoad = false).
 * @param {string} containerId - Target DOM container ID.
 * @param {boolean} [isInitialLoad=true] - True for initial load, false for infinite scroll batches.
 */
async function generateNews(containerId, isInitialLoad = true) {
  const contentDiv = document.getElementById("article-list-content");
  const statusEl = document.getElementById("news-search-status");

  // If triggered by infinite scroll sentinel: load next batch
  if (!isInitialLoad) {
    appendNextNewsBatch();
    return;
  }

  initNewsSearch();

  // If articles are already fetched in memory, render with active filters
  if (newsSearchState.allItems.length > 0) {
    applyNewsFilters(true);
    return;
  }

  if (statusEl) {
    statusEl.innerHTML = `<span class="material-symbols-outlined" style="font-size: 16px; vertical-align: -3px; animation: spin 1s linear infinite;">sync</span> Pobieranie aktualności z serwera...`;
  }

  try {
    let offset = 0;
    let hasMore = true;
    const allFetched = [];

    // Fetch data batches from API (so search has full dataset available)
    while (hasMore) {
      const data = await fetchWithCache(
        `${api_url}?action=articles&offset=${offset}`,
      );
      const list = data.items || [];
      allFetched.push(...list);
      offset += list.length;
      hasMore = Boolean(data.hasMore && list.length > 0);
      if (offset > 500) break; // Loop guard / safety cutoff
    }

    // Index articles for instant client-side live search
    for (const item of allFetched) {
      const cleanContent = (item.content || "")
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/g, " ");
      item._searchIndex = normalizePolishText(
        `${item.name || ""} ${item.description || ""} ${item.author || ""} ${cleanContent}`,
      );
    }

    newsSearchState.allItems = allFetched;

    // Dynamically populate publication year filter options
    const yearSelect = document.getElementById("news-year-filter");
    if (yearSelect) {
      const years = [
        ...new Set(
          allFetched
            .map((it) =>
              it.publication_date ? it.publication_date.substring(0, 4) : null,
            )
            .filter((y) => y && /^\d{4}$/.test(y)),
        ),
      ]
        .sort()
        .reverse();

      yearSelect.innerHTML = `<option value="all">Wszystkie lata (${allFetched.length})</option>`;
      for (const y of years) {
        const count = allFetched.filter(
          (it) => it.publication_date && it.publication_date.startsWith(y),
        ).length;
        const opt = document.createElement("option");
        opt.value = y;
        opt.textContent = `Rok ${y} (${count})`;
        yearSelect.appendChild(opt);
      }
    }

    applyNewsFilters(true);
  } catch (e) {
    console.error("Błąd ładowania aktualności:", e);
    if (contentDiv) {
      contentDiv.replaceChildren(
        createEmptyState(
          "Przepraszamy, wystąpił problem podczas ładowania aktualności",
          "Nie udało się pobrać danych z serwera. Spróbuj odświeżyć stronę lub zajrzyj do nas za chwilę.",
        ),
      );
    }
    if (statusEl) {
      statusEl.textContent = "Błąd pobierania danych z serwera.";
    }
  }
}

// ── RESOLUTIONS & REPORTS: SEARCH, FILTERING, AND INFINITE SCROLL ──

const resolutionsSearchState = {
  allItems: [],
  filteredItems: [],
  visibleCount: 6,
  query: "",
  selectedYear: "all",
  sortOrder: "date-desc",
  isInitialized: false,
  isLoading: false,
};

const reportsSearchState = {
  allItems: [],
  filteredItems: [],
  visibleCount: 6,
  query: "",
  selectedYear: "all",
  sortOrder: "date-desc",
  isInitialized: false,
  isLoading: false,
};

const dataSearchStates = {
  news: newsSearchState,
  resolutions: resolutionsSearchState,
  reports: reportsSearchState,
};

const dataConfigs = {
  resolutions: {
    type: "resolutions",
    title: "Uchwały",
    titlePlural: "uchwały",
    titleGenitive: "uchwał",
    contentId: "resolutions-list-content",
    containerId: "resolutions-div",
    apiAction: "resolutions",
  },
  reports: {
    type: "reports",
    title: "Sprawozdania",
    titlePlural: "sprawozdania",
    titleGenitive: "sprawozdań",
    contentId: "reports-list-content",
    containerId: "reports-div",
    apiAction: "reports",
  },
};

/**
 * Creates a card element for a resolution or report with attachment support and search highlighting.
 * @param {'resolutions'|'reports'} type - Content resource type ('resolutions' or 'reports').
 * @param {Object} item - Data item object.
 * @param {string} [query=""] - Active search query string.
 * @returns {HTMLElement} Rendered card DOM element.
 */
function createDataCard(type, item, query = "") {
  const itemId =
    item[`${type}_id`] || item[`${type.replace(/s$/, "")}_id`] || item.id;
  const { name, description, attachments_count, folder_id, publication_date } =
    item;
  const hasAttachments = Boolean(
    folder_id || (attachments_count && attachments_count > 0),
  );

  const card = document.createElement("div");
  card.className = "about-text glass content-card-item";

  if (hasAttachments) {
    card.classList.add("clickable-card");
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    const typeLabel = type === "resolutions" ? "Uchwała" : "Sprawozdanie";
    card.setAttribute(
      "aria-label",
      `${typeLabel}: ${name || "Brak nazwy"}. Kliknij, aby zobaczyć załączniki.`,
    );

    const openModalHandler = (e) => {
      if (
        e.target.closest("a") &&
        !e.target.closest(".card-title-link, .card-attach-btn")
      ) {
        return;
      }
      e.preventDefault();
      openAttachmentModal(itemId, type, folder_id || "");
    };

    card.addEventListener("click", openModalHandler);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openAttachmentModal(itemId, type, folder_id || "");
      }
    });
  }

  const h3 = document.createElement("h3");
  if (hasAttachments) {
    const a = document.createElement("a");
    a.href = "#";
    a.className = "card-title-link";
    a.innerHTML = highlightSearchTerms(name || "Brak nazwy", query);
    a.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openAttachmentModal(itemId, type, folder_id || "");
    });
    h3.appendChild(a);
  } else {
    h3.innerHTML = highlightSearchTerms(name || "Brak nazwy", query);
  }
  card.appendChild(h3);

  const metaRow = document.createElement("div");
  metaRow.className = "card-meta";

  if (publication_date) {
    const dateSpan = document.createElement("span");
    dateSpan.className = "meta-date";
    dateSpan.innerHTML = `<span class="material-symbols-outlined meta-icon" aria-hidden="true">calendar_today</span>${formatDateToPolish(publication_date)}`;
    metaRow.appendChild(dateSpan);
  }

  if (hasAttachments) {
    const attachSpan = document.createElement("span");
    attachSpan.className = "meta-author";
    const countText = attachments_count ? ` (${attachments_count})` : "";
    attachSpan.innerHTML = `<span class="material-symbols-outlined meta-icon" aria-hidden="true">attach_file</span>Załączniki${countText}`;
    metaRow.appendChild(attachSpan);
  }

  card.appendChild(metaRow);

  if (description && description.trim()) {
    const descP = document.createElement("p");
    descP.className = "article-card-desc";
    descP.innerHTML = highlightSearchTerms(
      truncateText(description, 200),
      query,
    );
    card.appendChild(descP);
  }

  if (hasAttachments) {
    const readMore = document.createElement("div");
    readMore.className = "card-readmore card-attach-btn";
    const countText = attachments_count ? ` (${attachments_count})` : "";
    readMore.innerHTML = `<span>Pobierz załączniki${countText}</span><span class="material-symbols-outlined readmore-arrow" aria-hidden="true">arrow_forward</span>`;
    card.appendChild(readMore);
  }

  return card;
}

/**
 * Filters and sorts resolutions or reports, then renders a batch with infinite scroll support.
 * @param {'resolutions'|'reports'} type - Content resource type ('resolutions' or 'reports').
 * @param {boolean} [resetPagination=true] - Whether to reset pagination counter back to NEWS_PAGE_SIZE.
 */
function applyDataFilters(type, resetPagination = true) {
  const config = dataConfigs[type];
  const state = dataSearchStates[type];
  if (!config || !state) return;

  const { allItems, query, selectedYear, sortOrder } = state;
  const contentDiv = document.getElementById(config.contentId);
  const statusEl = document.getElementById(`${type}-search-status`);
  const clearBtn = document.getElementById(`${type}-search-clear`);

  if (!contentDiv) return;

  if (clearBtn) {
    clearBtn.style.display = query.length > 0 ? "inline-flex" : "none";
  }

  let filtered = allItems.slice();

  // 1. Text search filtering by query
  if (query) {
    const queryTokens = normalizePolishText(query)
      .split(/\s+/)
      .filter((t) => t.length > 0);

    filtered = filtered.filter((item) => {
      const target = item._searchIndex || "";
      return queryTokens.every((token) => target.includes(token));
    });
  }

  // 2. Year filtering
  if (selectedYear !== "all") {
    filtered = filtered.filter(
      (item) =>
        item.publication_date && item.publication_date.startsWith(selectedYear),
    );
  }

  // 3. Sorting
  filtered.sort((a, b) => {
    if (sortOrder === "date-asc") {
      return (a.publication_date || "").localeCompare(b.publication_date || "");
    }
    if (sortOrder === "title-asc") {
      return (a.name || "").localeCompare(b.name || "", "pl", {
        sensitivity: "base",
      });
    }
    if (sortOrder === "title-desc") {
      return (b.name || "").localeCompare(a.name || "", "pl", {
        sensitivity: "base",
      });
    }
    // Default: newest first
    return (b.publication_date || "").localeCompare(a.publication_date || "");
  });

  state.filteredItems = filtered;

  if (resetPagination) {
    state.visibleCount = NEWS_PAGE_SIZE;
  }

  // Remove previous sentinel element before re-rendering
  const oldSentinel = document.getElementById(`${type}-sentinel`);
  if (oldSentinel) oldSentinel.remove();

  contentDiv.replaceChildren();

  // Empty state when no matching results are found
  if (filtered.length === 0) {
    const emptyBox = document.createElement("div");
    emptyBox.className = "empty-search-state glass";

    if (allItems.length === 0) {
      emptyBox.innerHTML = `
        <span class="material-symbols-outlined empty-search-icon" aria-hidden="true">folder_open</span>
        <h3>Brak opublikowanych ${config.titleGenitive}</h3>
        <p>W tej chwili w bazie nie ma jeszcze zarejestrowanych ${config.titleGenitive}. Zajrzyj do nas ponownie wkrótce!</p>
      `;
    } else {
      emptyBox.innerHTML = `
        <span class="material-symbols-outlined empty-search-icon" aria-hidden="true">search_off</span>
        <h3>Nie znaleziono ${config.titleGenitive}</h3>
        <p>Żaden wpis nie pasuje do wybranych kryteriów wyszukiwania${
          query ? ` („<strong>${escapeHTML(query)}</strong>”)` : ""
        }${selectedYear !== "all" ? ` w roku ${escapeHTML(selectedYear)}` : ""}.</p>
        <button type="button" class="cta-button" onclick="reset${type.charAt(0).toUpperCase() + type.slice(1)}Filters()">Wyczyść filtry i pokaż wszystkie</button>
      `;
    }
    contentDiv.appendChild(emptyBox);

    if (statusEl) {
      statusEl.innerHTML = `Znaleziono: <strong>0</strong> z ${allItems.length} ${config.titleGenitive}`;
    }
    return;
  }

  // Render batch (Infinite Scroll)
  const currentChunk = filtered.slice(0, state.visibleCount);
  const fragment = document.createDocumentFragment();
  for (const item of currentChunk) {
    const card = createDataCard(type, item, query);
    fragment.appendChild(card);
  }
  contentDiv.appendChild(fragment);

  // Insert infinite scroll sentinel
  if (state.visibleCount < filtered.length) {
    contentDiv.insertAdjacentHTML(
      "afterend",
      `<div id="${type}-sentinel" style="grid-column:1/-1; height:20px;"></div>`,
    );
    setupInfiniteScroll(type, `${type}-sentinel`, config.containerId);
  }

  // Update status bar
  if (statusEl) {
    const isFiltered = query.length > 0 || selectedYear !== "all";
    const showing = Math.min(state.visibleCount, filtered.length);
    if (!isFiltered) {
      if (showing < filtered.length) {
        statusEl.innerHTML = `Wyświetlanie: <strong>${showing} z ${filtered.length}</strong> ${config.titleGenitive} (przewiń w dół, aby wczytać kolejne)`;
      } else {
        statusEl.innerHTML = `Łącznie opublikowanych: <strong>${filtered.length}</strong> ${config.titleGenitive}`;
      }
    } else {
      let statusText = `Znaleziono: <strong>${filtered.length}</strong> z ${allItems.length} ${config.titleGenitive}`;
      if (query) {
        statusText += ` dla frazy „<strong>${escapeHTML(query)}</strong>”`;
      }
      if (selectedYear !== "all") {
        statusText += ` (rok: <strong>${escapeHTML(selectedYear)}</strong>)`;
      }
      if (showing < filtered.length) {
        statusText += ` — widoczne ${showing}`;
      }
      statusEl.innerHTML = statusText;
    }
  }
}

/**
 * Loads the next batch of resolutions or reports for infinite scroll.
 * @param {'resolutions'|'reports'} type - Content resource type ('resolutions' or 'reports').
 */
function appendNextDataBatch(type) {
  const config = dataConfigs[type];
  const state = dataSearchStates[type];
  if (!config || !state) return;

  const { filteredItems, visibleCount, query } = state;
  const contentDiv = document.getElementById(config.contentId);
  const statusEl = document.getElementById(`${type}-search-status`);

  if (!contentDiv || visibleCount >= filteredItems.length) return;

  const oldSentinel = document.getElementById(`${type}-sentinel`);
  if (oldSentinel) oldSentinel.remove();

  const nextBatch = filteredItems.slice(
    visibleCount,
    visibleCount + NEWS_PAGE_SIZE,
  );
  state.visibleCount += nextBatch.length;

  const fragment = document.createDocumentFragment();
  for (const item of nextBatch) {
    const card = createDataCard(type, item, query);
    fragment.appendChild(card);
  }
  contentDiv.appendChild(fragment);

  if (state.visibleCount < filteredItems.length) {
    contentDiv.insertAdjacentHTML(
      "afterend",
      `<div id="${type}-sentinel" style="grid-column:1/-1; height:20px;"></div>`,
    );
    setupInfiniteScroll(type, `${type}-sentinel`, config.containerId);
  }

  if (statusEl) {
    const isFiltered = query.length > 0 || state.selectedYear !== "all";
    const showing = Math.min(state.visibleCount, filteredItems.length);
    if (!isFiltered) {
      if (showing < filteredItems.length) {
        statusEl.innerHTML = `Wyświetlanie: <strong>${showing} z ${filteredItems.length}</strong> ${config.titleGenitive} (przewiń w dół, aby wczytać kolejne)`;
      } else {
        statusEl.innerHTML = `Łącznie opublikowanych: <strong>${filteredItems.length}</strong> ${config.titleGenitive}`;
      }
    } else {
      statusEl.innerHTML = `Znaleziono: <strong>${filteredItems.length}</strong> z ${state.allItems.length} ${config.titleGenitive} — widoczne ${showing}`;
    }
  }
}

/**
 * Resets all search and filter controls for resolutions or reports to defaults.
 * @param {'resolutions'|'reports'} type - Content resource type ('resolutions' or 'reports').
 */
function resetDataFilters(type) {
  const state = dataSearchStates[type];
  if (!state) return;

  const searchInput = document.getElementById(`${type}-search-input`);
  const yearSelect = document.getElementById(`${type}-year-filter`);
  const sortSelect = document.getElementById(`${type}-sort-filter`);

  if (searchInput) searchInput.value = "";
  if (yearSelect) yearSelect.value = "all";
  if (sortSelect) sortSelect.value = "date-desc";

  state.query = "";
  state.selectedYear = "all";
  state.sortOrder = "date-desc";

  applyDataFilters(type, true);
}

function resetResolutionsFilters() {
  resetDataFilters("resolutions");
}
function resetReportsFilters() {
  resetDataFilters("reports");
}

function applyResolutionsFilters(resetPagination = true) {
  applyDataFilters("resolutions", resetPagination);
}
function applyReportsFilters(resetPagination = true) {
  applyDataFilters("reports", resetPagination);
}

window.resetResolutionsFilters = resetResolutionsFilters;
window.resetReportsFilters = resetReportsFilters;
window.applyResolutionsFilters = applyResolutionsFilters;
window.applyReportsFilters = applyReportsFilters;

/**
 * Initializes search bar and filter event listeners for resolutions or reports.
 * @param {'resolutions'|'reports'} type - Content resource type ('resolutions' or 'reports').
 */
function initDataSearch(type) {
  const state = dataSearchStates[type];
  if (!state || state.isInitialized) return;

  const searchInput = document.getElementById(`${type}-search-input`);
  const clearBtn = document.getElementById(`${type}-search-clear`);
  const yearSelect = document.getElementById(`${type}-year-filter`);
  const sortSelect = document.getElementById(`${type}-sort-filter`);
  const resetBtn = document.getElementById(`${type}-reset-filters`);

  let debounceTimer = null;

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        state.query = e.target.value.trim();
        applyDataFilters(type, true);
      }, 150);
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        state.query = "";
        applyDataFilters(type, true);
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      state.query = "";
      applyDataFilters(type, true);
    });
  }

  if (yearSelect) {
    yearSelect.addEventListener("change", (e) => {
      state.selectedYear = e.target.value;
      applyDataFilters(type, true);
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortOrder = e.target.value;
      applyDataFilters(type, true);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => resetDataFilters(type));
  }

  state.isInitialized = true;
}

/**
 * Fetches and manages resolutions or reports from Cloudflare Worker API.
 * Handles initial loading, live search indexing, and infinite scroll pagination.
 * @param {'resolutions'|'reports'} type - Content resource type ('resolutions' or 'reports').
 * @param {string} containerId - Target DOM container ID.
 * @param {boolean} [isInitialLoad=true] - True for initial load, false for infinite scroll batches.
 */
async function generateDataList(type, containerId, isInitialLoad = true) {
  const config = dataConfigs[type];
  const state = dataSearchStates[type];
  if (!config || !state) return;

  const contentDiv = document.getElementById(config.contentId);
  const statusEl = document.getElementById(`${type}-search-status`);

  // If triggered by infinite scroll: load next batch
  if (!isInitialLoad) {
    appendNextDataBatch(type);
    return;
  }

  initDataSearch(type);

  // If data is already in memory, render with active filters
  if (state.allItems.length > 0) {
    applyDataFilters(type, true);
    return;
  }

  if (statusEl) {
    statusEl.innerHTML = `<span class="material-symbols-outlined" style="font-size: 16px; vertical-align: -3px; animation: spin 1s linear infinite;">sync</span> Pobieranie ${config.titleGenitive} z serwera...`;
  }

  try {
    let offset = 0;
    let hasMore = true;
    const allFetched = [];

    // Fetch data batches from API (for complete live search capability)
    while (hasMore) {
      const data = await fetchWithCache(
        `${api_url}?action=${config.apiAction}&offset=${offset}`,
      );
      const list = data.items || [];
      allFetched.push(...list);
      offset += list.length;
      hasMore = Boolean(data.hasMore && list.length > 0);
      if (offset > 500) break; // Loop guard / safety cutoff
    }

    // Index items for rapid live search with Polish diacritics normalization
    for (const item of allFetched) {
      item._searchIndex = normalizePolishText(
        `${item.name || ""} ${item.description || ""}`,
      );
    }

    state.allItems = allFetched;

    // Dynamically populate publication year filter options
    const yearSelect = document.getElementById(`${type}-year-filter`);
    if (yearSelect) {
      const years = [
        ...new Set(
          allFetched
            .map((it) =>
              it.publication_date ? it.publication_date.substring(0, 4) : null,
            )
            .filter((y) => y && /^\d{4}$/.test(y)),
        ),
      ]
        .sort()
        .reverse();

      yearSelect.innerHTML = `<option value="all">Wszystkie lata (${allFetched.length})</option>`;
      for (const y of years) {
        const count = allFetched.filter(
          (it) => it.publication_date && it.publication_date.startsWith(y),
        ).length;
        const opt = document.createElement("option");
        opt.value = y;
        opt.textContent = `Rok ${y} (${count})`;
        yearSelect.appendChild(opt);
      }
    }

    applyDataFilters(type, true);
  } catch (e) {
    console.error(`Błąd ładowania ${config.titleGenitive}:`, e);
    if (contentDiv) {
      contentDiv.replaceChildren(
        createEmptyState(
          `Przepraszamy, wystąpił problem podczas ładowania ${config.titleGenitive}`,
          "Nie udało się pobrać danych z serwera. Spróbuj odświeżyć stronę lub zajrzyj do nas za chwilę.",
        ),
      );
    }
    if (statusEl) {
      statusEl.textContent = "Błąd pobierania danych z serwera.";
    }
  }
}

/**
 * Fetches attachment file metadata from API and triggers direct browser download.
 * @param {string} fileId - Google Drive file ID.
 * @param {string} type - Content type associated with the file.
 */
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

/**
 * Opens the attachments modal dialog and loads all downloadable files associated with an item.
 * @param {number|string} contentId - Database ID of the content item.
 * @param {string} type - Content type identifier ('resolutions', 'reports', 'news').
 * @param {string} [folderId=""] - Google Drive folder ID containing the files.
 * @param {Object} [options={}] - Optional configuration options.
 * @param {boolean} [options.excludeMedia=false] - Whether to exclude media (images/videos) from the modal list.
 * @param {Function} [options.filterFn=null] - Custom filter function for attachments: (file) => boolean.
 * @param {string} [options.title=""] - Custom title for the modal dialog.
 */
async function openAttachmentModal(
  contentId,
  type,
  folderId = "",
  options = {},
) {
  showLoadingToast("Ładowanie załączników...");
  const modalButtons = document.getElementById("modal-buttons");
  modalButtons.replaceChildren();
  if (!contentId && !folderId) {
    hideLoadingToast();
    return;
  }

  const modalTitle = document.querySelector("#modal .modal-content h4");
  if (modalTitle) {
    modalTitle.textContent = options.title || "Wybierz załącznik";
  }

  document.getElementById("modal").style.display = "block";
  const loadingP = document.createElement("p");
  loadingP.textContent = "Ładowanie załączników...";
  modalButtons.appendChild(loadingP);

  let totalRendered = 0;

  async function fetchAll(offset = 0) {
    try {
      const data = await fetchWithCache(
        `${api_url}?action=attachments&type=${type}&id=${encodeURIComponent(contentId)}&folderId=${encodeURIComponent(folderId)}&offset=${offset}`,
      );
      let items = data.items || [];
      if (offset === 0) {
        modalButtons.replaceChildren(); // Clear loading text
      }

      // Dynamic filtering applied ONLY if explicitly specified in options (keeps all existing calls unfiltered)
      if (typeof options.filterFn === "function") {
        items = items.filter(options.filterFn);
      } else if (options.excludeMedia) {
        items = items.filter((file) => !isGalleryMedia(file));
      }

      items.forEach((file, index) => {
        totalRendered++;
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

        const iconSpan = document.createElement("span");
        iconSpan.className = "material-symbols-outlined";
        iconSpan.style.cssText =
          "font-size: 20px; vertical-align: middle; margin-right: 8px;";
        iconSpan.textContent = getFileIcon(fileName, file.mime_type);
        btn.appendChild(iconSpan);

        const labelSpan = document.createElement("span");
        labelSpan.style.verticalAlign = "middle";
        labelSpan.textContent = fileName
          ? fileName
          : `Plik ${offset + index + 1}`;
        btn.appendChild(labelSpan);

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
        await fetchAll(offset + (data.items ? data.items.length : 0));
      } else {
        if (totalRendered === 0) {
          const emptyP = document.createElement("p");
          emptyP.textContent = "Brak załączników do wyświetlenia.";
          modalButtons.appendChild(emptyP);
        }
        hideLoadingToast();
      }
    } catch (error) {
      console.error("Błąd pobierania załączników:", error);
      if (totalRendered === 0) {
        modalButtons.replaceChildren();
        const errP = document.createElement("p");
        errP.textContent = "Wystąpił błąd podczas pobierania załączników.";
        modalButtons.appendChild(errP);
      }
      hideLoadingToast();
    }
  }
  await fetchAll(0);
}

/**
 * Initializes and loads the resolutions feed.
 * @param {string} containerId - Target DOM container ID.
 */
async function generateResolutions(containerId) {
  await generateDataList("resolutions", containerId, true);
}

/**
 * Initializes and loads the reports feed.
 * @param {string} containerId - Target DOM container ID.
 */
async function generateReports(containerId) {
  await generateDataList("reports", containerId, true);
}

/**
 * Closes the slide-in mobile/tablet navigation drawer.
 */
function closeMobileDrawer() {
  const mainNav = document.getElementById("main-nav");
  const navBackdrop = document.getElementById("nav-backdrop");
  if (mainNav) mainNav.classList.remove("open");
  if (navBackdrop) navBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

/**
 * Opens the slide-in mobile/tablet navigation drawer.
 */
function openMobileDrawer() {
  const mainNav = document.getElementById("main-nav");
  const navBackdrop = document.getElementById("nav-backdrop");
  if (mainNav) mainNav.classList.add("open");
  if (navBackdrop) navBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

/**
 * Initializes the accessibility toolbar (WCAG 2.1 AA):
 * - High contrast mode (black and yellow)
 * - Font size adjustment (A, A+, A++)
 * - Background motion / animation pause
 * - Persisting and restoring state from localStorage
 */
function initAccessibilityToolbar() {
  const contrastBtn = document.getElementById("a11y-contrast");
  const fontNormalBtn = document.getElementById("a11y-font-normal");
  const fontMediumBtn = document.getElementById("a11y-font-medium");
  const fontLargeBtn = document.getElementById("a11y-font-large");
  const motionBtn = document.getElementById("a11y-motion");

  // 1. High contrast mode
  const isHighContrast = localStorage.getItem("a11y_contrast") === "true";
  if (isHighContrast) {
    document.body.classList.add("high-contrast");
    if (contrastBtn) {
      contrastBtn.setAttribute("aria-pressed", "true");
      contrastBtn.classList.add("active");
    }
  }

  if (contrastBtn) {
    contrastBtn.addEventListener("click", () => {
      const active = document.body.classList.toggle("high-contrast");
      contrastBtn.setAttribute("aria-pressed", active ? "true" : "false");
      contrastBtn.classList.toggle("active", active);
      localStorage.setItem("a11y_contrast", active ? "true" : "false");
    });
  }

  // 2. Font size adjustment
  const updateFontButtons = (size) => {
    [fontNormalBtn, fontMediumBtn, fontLargeBtn].forEach((btn) => {
      if (btn) btn.classList.remove("active");
    });
    if (size === "large" && fontLargeBtn) fontLargeBtn.classList.add("active");
    else if (size === "medium" && fontMediumBtn)
      fontMediumBtn.classList.add("active");
    else if (fontNormalBtn) fontNormalBtn.classList.add("active");
  };

  const setFontSize = (size) => {
    document.documentElement.classList.remove("font-size-md", "font-size-lg");
    document.body.classList.remove("font-size-md", "font-size-lg");
    if (size === "medium") {
      document.documentElement.classList.add("font-size-md");
      document.body.classList.add("font-size-md");
      localStorage.setItem("a11y_font", "medium");
    } else if (size === "large") {
      document.documentElement.classList.add("font-size-lg");
      document.body.classList.add("font-size-lg");
      localStorage.setItem("a11y_font", "large");
    } else {
      localStorage.setItem("a11y_font", "normal");
    }
    updateFontButtons(size);
  };

  const savedFont = localStorage.getItem("a11y_font") || "normal";
  if (savedFont !== "normal") {
    setFontSize(savedFont);
  }

  if (fontNormalBtn)
    fontNormalBtn.addEventListener("click", () => setFontSize("normal"));
  if (fontMediumBtn)
    fontMediumBtn.addEventListener("click", () => setFontSize("medium"));
  if (fontLargeBtn)
    fontLargeBtn.addEventListener("click", () => setFontSize("large"));

  // 3. Pause motion / background animations
  const isReducedMotion = localStorage.getItem("a11y_motion") === "true";
  if (isReducedMotion) {
    document.body.classList.add("reduced-motion");
    if (motionBtn) {
      motionBtn.setAttribute("aria-pressed", "true");
      motionBtn.classList.add("active");
    }
  }

  if (motionBtn) {
    motionBtn.addEventListener("click", () => {
      const active = document.body.classList.toggle("reduced-motion");
      motionBtn.setAttribute("aria-pressed", active ? "true" : "false");
      motionBtn.classList.toggle("active", active);
      localStorage.setItem("a11y_motion", active ? "true" : "false");
      if (active) {
        document.querySelectorAll(".shape").forEach((shape) => {
          shape.style.transform = "";
        });
      }
    });
  }
}

/**
 * Single Page Application (SPA) view router. Displays the specified page view and hides others.
 * Updates navigation active state, repositions footer to current view, syncs URL hash, and scrolls to top.
 * @param {string} pageId - DOM ID of the target page view container ('home', 'article', etc.).
 */
function showPage(pageId) {
  closeMobileDrawer();

  const targetEl = document.getElementById(pageId);
  if (!targetEl) return;

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
  targetEl.classList.add("active");

  // Update navigation links across header, drawer and footer
  document.querySelectorAll(".nav-links a, .footer-links a").forEach((link) => {
    link.classList.remove("active");
    const oc = link.getAttribute("onclick") || "";
    const href = link.getAttribute("href") || "";
    if (oc.includes(`'${pageId}'`) || href === `#${pageId}`) {
      link.classList.add("active");
    }
  });

  currentPage = pageId;

  // Move footer to the active page
  const footer = document.getElementById("footer");
  if (footer) {
    targetEl.appendChild(footer);
  }

  // Sync browser URL hash for bookmarking and back button navigation
  if (window.location.hash !== `#${pageId}` && pageId !== "article") {
    history.pushState(null, "", `#${pageId}`);
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Handle browser Back / Forward navigation buttons
window.addEventListener("popstate", () => {
  const hash = window.location.hash.replace(/^#/, "");
  if (hash && document.getElementById(hash)) {
    showPage(hash);
  } else if (!hash) {
    showPage("home");
  }
});

// ── APPLICATION BOOTSTRAP & EVENT LISTENERS ──
// Initialize member lists, load initial section feeds, position footer, and bind modal listeners.
window.addEventListener("DOMContentLoaded", () => {
  initAccessibilityToolbar();

  const footer = document.getElementById("footer");
  const homePage = document.getElementById("home");
  generateLinks(cities, "cities");
  generateLinks(cities_and_municipalities, "cities-and-municipalities");
  generateLinks(municipalities, "municipalities");

  generateNews("news-div");
  setTimeout(() => generateResolutions("resolutions-div"), 300);
  setTimeout(() => generateReports("reports-div"), 600);

  // Check if user navigated directly with a URL hash (e.g. #bip, #accessibility, #rodo)
  const initialHash = window.location.hash.replace(/^#/, "");
  if (
    initialHash &&
    document.getElementById(initialHash) &&
    initialHash !== "home"
  ) {
    showPage(initialHash);
  } else {
    homePage.appendChild(footer);
  }

  // Mobile / Tablet drawer navigation event listeners
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");
  const navBackdrop = document.getElementById("nav-backdrop");

  if (mobileToggle) {
    mobileToggle.addEventListener("click", openMobileDrawer);
  }
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", closeMobileDrawer);
  }
  if (navBackdrop) {
    navBackdrop.addEventListener("click", closeMobileDrawer);
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobileDrawer();
    }
  });

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

// Add interactive parallax effect to background shapes (active only when motion is enabled)
document.addEventListener("mousemove", (e) => {
  if (document.body.classList.contains("reduced-motion")) return;
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

    // Validate GDPR Consent Checkbox (Legal requirement to confirm acknowledgement of the information clause)
    const rodoConsent = document.getElementById("rodo_consent");
    if (rodoConsent && !rodoConsent.checked) {
      markError(
        rodoConsent,
        "Wymagane jest potwierdzenie zapoznania się z klauzulą informacyjną RODO.",
      );
    }

    // Validate Cloudflare Turnstile token
    const turnstileToken =
      contactForm.querySelector('[name="cf-turnstile-response"]')?.value ||
      (window.turnstile ? window.turnstile.getResponse() : "");
    const turnstileWidget = contactForm.querySelector(".cf-turnstile");
    if (!turnstileToken && turnstileWidget) {
      markError(
        turnstileWidget,
        "Proszę zaczekać na zakończenie weryfikacji antyspamowej.",
      );
    }

    // If there are errors, halt submission
    if (hasErrors) return;

    // VALIDATION OK: 3D WHITE ENVELOPE WITH PHYSICAL FLYING TEXT ANIMATION
    const submitBtn = contactForm.querySelector("button[type='submit']");
    const originalBtnText = submitBtn ? submitBtn.innerHTML : "Wyślij";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<span class="material-symbols-outlined" style="font-size: 18px; vertical-align: -3px; margin-right: 4px;">send</span>Wysyłanie listu...';
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
      consent_rodo: true,
    };

    // CREATE 3D WHITE ENVELOPE IN THE CENTER OF THE SCREEN
    const overlay = document.createElement("div");
    overlay.className = "envelope-modal-overlay";
    overlay.innerHTML = `
      <div class="real-envelope">
        <div class="env-back"></div>
        <div class="env-paper">
          <div class="env-paper-header">
            <span class="env-stamp"><span class="material-symbols-outlined" style="font-size: 14px; vertical-align: -2px; margin-right: 3px;">mail</span>Do zarządu ZMiGRS</span>
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
        <div class="env-wax-seal"><span class="material-symbols-outlined" style="font-size: 15px; vertical-align: -2px; margin-right: 3px;">verified</span>OPIECZĘTOWANE</div>
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
        const response = await fetch(api_url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "contact",
            name: name,
            email: email,
            subject: subject,
            message: message,
            b_website: b_website,
            turnstile_token: turnstileToken,
            metadata: JSON.stringify(metadata),
            client_timestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(
            errData.error || `Błąd serwera (status ${response.status})`,
          );
        }
      }
    } catch (err) {
      console.error("Błąd wysyłania formularza kontaktowego:", err);
      sendSuccess = false;
    }

    if (window.turnstile) {
      try {
        window.turnstile.reset();
      } catch {}
    }

    await delay(300);

    if (sendSuccess) {
      // STEP 2: WHITE ENVELOPE CLOSES (PAPER SLIDES INTO POCKET, FLAP CLOSES IN 3D)
      realEnvelope.classList.add("sealed");
      await delay(500);
      waxSeal.classList.add("show");

      await delay(700);

      // STEP 3: WHITE ENVELOPE FLIES UP INTO THE SKY!
      if (submitBtn)
        submitBtn.innerHTML =
          '<span class="material-symbols-outlined" style="font-size: 18px; vertical-align: -3px; margin-right: 4px;">send</span>Odlatuje...';
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
          <div style="font-size: 2.5rem; margin-bottom: 8px;"><span class="material-symbols-outlined" style="font-size: 3rem; color: #4ade80;">check_circle</span></div>
          <div>
            <div style="font-size: 1.125rem; font-weight: 700; margin-bottom: 4px; color: #ffffff;">Dziękujemy!</div>
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
            <div style="font-size: 1.125rem; font-weight: 700; margin-bottom: 4px; color: #ffffff;">Nie udało się wysłać</div>
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
