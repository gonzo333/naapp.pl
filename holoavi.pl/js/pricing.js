export function initPricingPage() {
  const triggers = document.querySelectorAll("[data-pricing-trigger]");
  const targets = document.querySelectorAll("[data-pricing-target]");

  if (triggers.length === 0 || targets.length === 0) return;

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedTab = trigger.getAttribute("data-pricing-trigger");

      targets.forEach((target) => {
        const targetView = target.getAttribute("data-pricing-target");
        if (targetView === selectedTab) {
          target.classList.add("view-active");
        } else {
          target.classList.remove("view-active");
        }
      });

      triggers.forEach((btn) => {
        if (btn === trigger) {
          btn.classList.remove("btn-tertiary");
          btn.classList.add("btn-primary", "toggle-active");
        } else {
          btn.classList.remove("btn-primary", "toggle-active");
          btn.classList.add("btn-tertiary");
        }
      });
    });
  });
}
