
(() => {
  const $ = (id) => document.getElementById(id);

  function showPage(page) {
    const main = $("mainContent");

    if (main) main.classList.toggle("hidden", page !== "home");

    document.querySelectorAll(".page-view").forEach((section) => {
      section.classList.toggle("hidden", section.id !== `page-${page}`);
    });

    document.querySelectorAll(".nav-item").forEach((button) => {
      button.classList.toggle("active", button.dataset.page === page);
    });

    if (page === "players" && window.MedbiPlayers) {
      window.MedbiPlayers.render();
    }

    if (page === "djurtus" && window.MedbiPlayers) {
      window.MedbiPlayers.renderDjurtus();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setupNavigation() {
    document.querySelectorAll("[data-page]").forEach((button) => {
      button.addEventListener("click", () => {
        showPage(button.dataset.page);
      });
    });

    document.querySelectorAll("[data-go]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        showPage(button.dataset.go);
      });
    });
  }

  function setupSearch() {
    const toggle = $("searchToggle");
    const panel = $("searchPanel");
    const input = $("searchInput");

    if (toggle && panel) {
      toggle.addEventListener("click", () => {
        panel.classList.toggle("hidden");
        if (!panel.classList.contains("hidden") && input) input.focus();
      });
    }

    if (input) {
      input.addEventListener("input", () => {
        const query = input.value.trim().toLocaleLowerCase("pt");

        document.querySelectorAll(
          ".player-card, .league-card, .news-card"
        ).forEach((card) => {
          const content = card.textContent.toLocaleLowerCase("pt");
          card.classList.toggle("hidden", query !== "" && !content.includes(query));
        });
      });
    }
  }

  function setup() {
    const status = $("connectionStatus");
    if (status) {
      status.innerHTML = "<i></i> Futebol guineense";
    }

    setupNavigation();
    setupSearch();

    if (window.MedbiPlayers) {
      window.MedbiPlayers.init();
    }

    showPage("home");
  }

  document.addEventListener("DOMContentLoaded", setup);
})();
