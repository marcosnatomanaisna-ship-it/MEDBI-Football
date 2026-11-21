
(() => {
  const $ = (id) => document.getElementById(id);

  let pageHistory = ["home"];
  let currentPage = "home";

  function showPage(page, saveHistory = true) {
    if (!page) return;

    const target = page === "home"
      ? $("mainContent")
      : $(`page-${page}`);

    if (!target) return;

    if (page === currentPage) {
      closeMenu();
      return;
    }

    if (saveHistory) {
      pageHistory.push(page);
      window.history.pushState({ medbiPage: page }, "");
    }

    currentPage = page;

    const main = $("mainContent");

    if (main) {
      main.classList.toggle("hidden", page !== "home");
    }

    document.querySelectorAll(".page-view").forEach((section) => {
      section.classList.toggle(
        "hidden",
        section.id !== `page-${page}`
      );
    });

    document.querySelectorAll(".nav-item").forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.page === page
      );
    });

    const backButton = $("backButton");

    if (backButton) {
      backButton.classList.toggle("hidden", page === "home");
    }

    if (page === "players" && window.MedbiPlayers) {
      window.MedbiPlayers.render();
    }

    if (page === "djurtus" && window.MedbiPlayers) {
      window.MedbiPlayers.renderDjurtus();
    }

    closeMenu();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    if (pageHistory.length > 1) {
      window.history.back();
    } else {
      showPage("home", false);
    }
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

    const backButton = $("backButton");

    if (backButton) {
      backButton.addEventListener("click", goBack);
    }

    window.history.replaceState({ medbiPage: "home" }, "");
    
    window.addEventListener("popstate", () => {
      if (pageHistory.length > 1) {
        pageHistory.pop();
        const previousPage = pageHistory[pageHistory.length - 1];
        showPage(previousPage, false);
      } else {
        showPage("home", false);
      }
    });
  }

  function openMenu() {
    $("sideMenu")?.classList.add("menu-open");
    $("menuOverlay")?.classList.remove("hidden");
  }

  function closeMenu() {
    $("sideMenu")?.classList.remove("menu-open");
    $("menuOverlay")?.classList.add("hidden");
  }

  function setupMenu() {
    $("menuToggle")?.addEventListener("click", openMenu);
    $("menuClose")?.addEventListener("click", closeMenu);
    $("menuOverlay")?.addEventListener("click", closeMenu);
  }

  function setupSearch() {
    const toggle = $("searchToggle");
    const panel = $("searchPanel");
    const input = $("searchInput");

    if (toggle && panel) {
      toggle.addEventListener("click", () => {
        panel.classList.toggle("hidden");

        if (!panel.classList.contains("hidden") && input) {
          input.focus();
        }
      });
    }

    if (input) {
      input.addEventListener("input", () => {
        const query = input.value.trim().toLocaleLowerCase("pt");

        document.querySelectorAll(
          ".player-card, .league-card, .news-card"
        ).forEach((card) => {
          const content = card.textContent.toLocaleLowerCase("pt");

          card.classList.toggle(
            "hidden",
            query !== "" && !content.includes(query)
          );
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
    setupMenu();
    setupSearch();

    if (window.MedbiPlayers) {
      window.MedbiPlayers.init();
    }

    showPage("home", false);
  }

  document.addEventListener("DOMContentLoaded", setup);
})();
