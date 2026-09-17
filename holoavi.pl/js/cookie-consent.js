const CONSENT_KEY = "holoavi_cookie_consent";

export function initCookieConsent(navigateFn) {
  if (localStorage.getItem(CONSENT_KEY)) return;

  const banner = document.getElementById("cookieBanner");
  if (!banner) return;

  setTimeout(() => banner.classList.add("visible"), 600);

  function dismiss(value) {
    localStorage.setItem(CONSENT_KEY, value);
    banner.classList.remove("visible");
    setTimeout(() => (banner.style.display = "none"), 400);
  }

  document
    .getElementById("cookieAccept")
    .addEventListener("click", () => dismiss("accepted"));
  document
    .getElementById("cookieDecline")
    .addEventListener("click", () => dismiss("declined"));

  banner
    .querySelector(".cookie-policy-link")
    ?.addEventListener("click", (e) => {
      e.preventDefault();
      navigateFn("polityka.html");
    });
}
