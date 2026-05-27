function applyLanguage(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-zh][data-en]").forEach((element) => {
    const text = lang === "zh" ? element.dataset.zh : element.dataset.en;
    element.textContent = text;
  });

  const toggle = document.querySelector("#langToggle");
  if (toggle) toggle.textContent = lang === "zh" ? "English" : "中文";

  localStorage.setItem("preferredLang", lang);
}

function setupLanguageToggle() {
  const toggle = document.querySelector("#langToggle");
  let currentLang = localStorage.getItem("preferredLang") || "zh";
  applyLanguage(currentLang);

  if (toggle) {
    toggle.addEventListener("click", () => {
      currentLang = currentLang === "zh" ? "en" : "zh";
      applyLanguage(currentLang);
    });
  }
}

function setupMobileMenu() {
  const button = document.querySelector("#menuToggle");
  const nav = document.querySelector("#navLinks");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

setupLanguageToggle();
setupMobileMenu();
