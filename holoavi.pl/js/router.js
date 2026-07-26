import { initContactForm } from "./kontakt.js";
import { initHologramAnimation } from "./animacja.js?v=1";
import { initPricingPage } from "./pricing.js";
import { initCookieConsent } from "./cookie-consent.js";

const PAGE_TITLES = {
  "home.html": "HOLOAVI – Hologramy i awatary AI",
  "uslugi.html": "Usługi | HOLOAVI",
  "cennik.html": "Cennik | HOLOAVI",
  "o-nas.html": "O nas | HOLOAVI",
  "kontakt.html": "Kontakt | HOLOAVI",
  "hologramy.html": "Hologramy | HOLOAVI",
  "awatary.html": "Awatary AI | HOLOAVI",
  "regulamin.html": "Regulamin | HOLOAVI",
  "polityka.html": "Polityka Prywatności | HOLOAVI",
};

const HASH_TO_PAGE = {
  home: "home.html",
  uslugi: "uslugi.html",
  cennik: "cennik.html",
  "o-nas": "o-nas.html",
  kontakt: "kontakt.html",
  hologramy: "hologramy.html",
  awatary: "awatary.html",
  regulamin: "regulamin.html",
  polityka: "polityka.html",
};

function pageToHash(pageUrl) {
  return pageUrl.replace(".html", "");
}

document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");
  const allNavLinks = document.querySelectorAll("a[data-page]");
  const loader = document.getElementById("page-loader");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  let currentCleanup = null;

  // --- Hamburger menu ---
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navLinks.classList.toggle("nav-open");
    });

    document.addEventListener("click", (e) => {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("nav-open");
      }
    });
  }

  function closeNav() {
    if (navToggle && navLinks) {
      navToggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("nav-open");
    }
  }

  // --- Loading bar ---
  function showLoader() {
    if (loader) {
      loader.classList.remove("loaded");
      loader.classList.add("loading");
    }
  }

  function hideLoader() {
    if (loader) {
      loader.classList.remove("loading");
      loader.classList.add("loaded");
      setTimeout(() => loader.classList.remove("loaded"), 400);
    }
  }

  // --- Active nav link ---
  function setActiveNav(pageUrl) {
    allNavLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("data-page") === pageUrl,
      );
    });
  }

  function initSubpageScripts(pageUrl) {
    switch (pageUrl) {
      case "home.html":
        currentCleanup = initHologramAnimation();
        break;
      case "kontakt.html":
        initContactForm();
        break;
      case "cennik.html":
        initPricingPage();
        break;
      case "hologramy.html":
      case "awatary.html":
        if (typeof GLightbox !== "undefined") {
          GLightbox({
            selector: ".glightbox",
            touchNavigation: true,
            keyboardNavigation: true,
            loop: true,
            autoplayVideos: true,
            zoomable: true,
            moreText: "Pokaż więcej",
            moreLength: "60",
          });
          initYouTubeThumbnails();
        }
        break;
    }
  }

  // historyMode: 'push' | 'replace' | 'none'
  async function loadPage(pageUrl, historyMode = "push") {
    try {
      showLoader();
      contentDiv.classList.add("page-fade");

      const response = await fetch(`pages/${pageUrl}`);
      if (!response.ok) throw new Error("Nie znaleziono strony.");
      const html = await response.text();

      setTimeout(() => {
        if (currentCleanup) {
          currentCleanup();
          currentCleanup = null;
        }

        contentDiv.innerHTML = html;
        window.scrollTo({ top: 0 });

        document.title = PAGE_TITLES[pageUrl] || "HOLOAVI";
        setActiveNav(pageUrl);

        if (historyMode === "push") {
          history.pushState({ page: pageUrl }, "", "#" + pageToHash(pageUrl));
        } else if (historyMode === "replace") {
          history.replaceState(
            { page: pageUrl },
            "",
            "#" + pageToHash(pageUrl),
          );
        }

        initSubpageScripts(pageUrl);

        contentDiv.classList.remove("page-fade");
        hideLoader();
      }, 200);
    } catch (err) {
      console.error(err);
      loadPage("error.html", "none");
    }
  }

  async function openPageInPopup(pageUrl) {
    try {
      const response = await fetch(`pages/${pageUrl}`);
      if (!response.ok) throw new Error("Nie znaleziono zawartości popupu.");
      const html = await response.text();

      const overlay = document.createElement("div");
      overlay.className = "popup-overlay";

      overlay.innerHTML = `
        <div class="popup-card">
          <button class="popup-close-btn" aria-label="Zamknij">&times;</button>
          <div class="popup-scroll-container">
            ${html}
          </div>
        </div>
      `;

      document.body.appendChild(overlay);
      document.body.style.overflow = "hidden";

      initSubpageScripts(pageUrl);

      const closePopup = () => {
        overlay.classList.add("popup-closing");
        setTimeout(() => {
          overlay.remove();
          document.body.style.overflow = "";
        }, 250);
      };

      overlay
        .querySelector(".popup-close-btn")
        .addEventListener("click", closePopup);

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closePopup();
      });
    } catch (err) {
      console.error(err);
    }
  }

  function initYouTubeThumbnails() {
    const mediaLinks = document.querySelectorAll(".media-grid a.glightbox");
    mediaLinks.forEach((link) => {
      const url = link.getAttribute("href");
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);

      if (match && match[2].length === 11) {
        const videoId = match[2];
        const previewDiv = link.querySelector(".media-preview");
        if (previewDiv) {
          previewDiv.innerHTML = "";
          const img = document.createElement("img");
          img.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
          img.alt =
            link.querySelector(".media-caption h4")?.textContent ||
            "Miniaturka wideo";
          img.className = "auto-thumb";
          previewDiv.appendChild(img);
        }
      }
    });
  }

  // --- Navigation clicks (header) ---
  allNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      if (page) {
        closeNav();
        loadPage(page);
      }
    });
  });

  // --- Navigation clicks (content area) ---
  contentDiv.addEventListener("click", (e) => {
    const pageLink = e.target.closest("a[data-page]");
    const popupLink = e.target.closest("a[data-popup]");

    if (pageLink) {
      e.preventDefault();
      const page = pageLink.getAttribute("data-page");
      if (page) loadPage(page);
    } else if (popupLink) {
      e.preventDefault();
      const popupPage = popupLink.getAttribute("data-popup");
      if (popupPage) openPageInPopup(popupPage);
    }
  });

  // --- Browser back/forward ---
  window.addEventListener("popstate", () => {
    const hash = location.hash.slice(1);
    const pageUrl = HASH_TO_PAGE[hash] || "home.html";
    loadPage(pageUrl, "none");
  });

  // --- Initial load ---
  const initialHash = location.hash.slice(1);
  const initialPage = HASH_TO_PAGE[initialHash] || "home.html";
  loadPage(initialPage, "replace");

  initCookieConsent(loadPage);
});
