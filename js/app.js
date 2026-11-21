(() => {
  const $ = id => document.getElementById(id);
  let activeFilter = "all";
  let selectedDate = new Date();
  let refreshTimer = null;

  const isoDate = date => {
    const y = date.getFullYear(), m = String(date.getMonth()+1).padStart(2,"0"), d = String(date.getDate()).padStart(2,"0");
    return `${y}-${m}-${d}`;
  };
  function toast(message) {
    const el = $("toast"); el.textContent = message; el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 2600);
  }
  function setConnection() {
    const online = navigator.onLine;
    $("connectionStatus").innerHTML = `<i style="background:${online ? "var(--green)" : "var(--red)"}"></i>${online ? "Online" : "Sem Internet"}`;
  }
  function showPage(page) {
    document.querySelectorAll(".page-view").forEach(el => el.classList.add("hidden"));
    $("mainContent").classList.toggle("hidden", page !== "home");
    if (page !== "home") $(`page-${page}`)?.classList.remove("hidden");
    document.querySelectorAll(".nav-item").forEach(el => el.classList.toggle("active", el.dataset.page === page));
    if (page === "matches") loadDateMatches();
    if (page === "live") loadLive();
    window.scrollTo({top:0,behavior:"smooth"});
  }
  async function loadLive() {
    if (!navigator.onLine) { MedbiMatches.render("liveList", [], "É necessária uma ligação à Internet."); return; }
    try {
      const data = await MedbiAPI.getLiveMatches();
      const matches = data.response || data.matches || [];
      MedbiMatches.render("liveList", matches, "Não há jogos ao vivo neste momento.");
    } catch (e) {
      MedbiMatches.render("liveList", [], e.message === "BACKEND_NOT_CONFIGURED" ? "API por ligar" : "Sem dados disponíveis");
    }
  }
  async function loadDateMatches() {
    $("matchDate").value = isoDate(selectedDate);
    if (!navigator.onLine) { MedbiMatches.render("dateMatchList", [], "É necessária uma ligação à Internet."); return; }
    try {
      const data = await MedbiAPI.getMatchesByDate(isoDate(selectedDate));
      MedbiMatches.render("dateMatchList", data.response || data.matches || [], "Não existem jogos para esta data.");
    } catch (e) {
      MedbiMatches.render("dateMatchList", [], e.message === "BACKEND_NOT_CONFIGURED" ? "API por ligar" : "Sem dados disponíveis");
    }
  }
  async function refreshHome() {
    setConnection();
    if (!navigator.onLine) {
      MedbiMatches.render("matchList", [], "Liga-te à Internet para consultar os resultados.");
      $("lastUpdated").textContent = "Sem ligação";
      return;
    }
    try {
      const data = await MedbiAPI.getLiveMatches();
      const matches = data.response || data.matches || [];
      const filtered = activeFilter === "all" ? matches :
        matches.filter(m => {
          const s = m.fixture?.status?.short;
          if (activeFilter === "live") return ["1H","2H","ET","P","LIVE"].includes(s);
          if (activeFilter === "finished") return ["FT","AET","PEN"].includes(s);
          return !s || s === "NS";
        });
      MedbiMatches.render("matchList", filtered, "Não há jogos correspondentes neste momento.");
      $("dataNote").textContent = "Dados fornecidos pelo serviço de futebol configurado.";
      $("lastUpdated").textContent = `Atualizado às ${new Date().toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}`;
    } catch (e) {
      MedbiMatches.render("matchList", [], e.message === "BACKEND_NOT_CONFIGURED" ? "API por ligar" : "Sem dados disponíveis");
      $("lastUpdated").textContent = "Dados indisponíveis";
      $("dataNote").textContent = "Liga a API para ver resultados reais.";
    }
  }
  function setup() {
    $("todayLabel").textContent = new Intl.DateTimeFormat("pt-PT",{weekday:"long",day:"numeric",month:"long"}).format(new Date()).toUpperCase();
    $("matchDate").value = isoDate(selectedDate);
    document.querySelectorAll(".nav-item").forEach(btn => btn.addEventListener("click", () => showPage(btn.dataset.page)));
    document.querySelectorAll("[data-go]").forEach(btn => btn.addEventListener("click", () => showPage(btn.dataset.go)));
    document.querySelectorAll(".filter-tab").forEach(btn => btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach(x => x.classList.remove("active"));
      btn.classList.add("active"); activeFilter = btn.dataset.filter; refreshHome();
    }));
    $("refreshButton").addEventListener("click", () => { refreshHome(); loadLive(); toast("A atualizar dados…"); });
    $("searchToggle").addEventListener("click", () => $("searchPanel").classList.toggle("hidden"));
    $("searchInput").addEventListener("input", e => {
      const q = e.target.value.toLocaleLowerCase("pt");
      document.querySelectorAll(".league-card").forEach(card => card.classList.toggle("hidden", !card.textContent.toLocaleLowerCase("pt").includes(q)));
    });
    $("matchDate").addEventListener("change", e => { selectedDate = new Date(`${e.target.value}T12:00:00`); loadDateMatches(); });
    $("previousDay").addEventListener("click", () => { selectedDate.setDate(selectedDate.getDate()-1); loadDateMatches(); });
    $("nextDay").addEventListener("click", () => { selectedDate.setDate(selectedDate.getDate()+1); loadDateMatches(); });
    document.addEventListener("click", e => {
      const target = e.target.closest("[data-league]");
      if (target) toast(`Competição selecionada: ${target.textContent.trim()}. A consulta detalhada será adicionada na próxima etapa.`);
    });
    window.addEventListener("online", () => { setConnection(); refreshHome(); });
    window.addEventListener("offline", () => { setConnection(); refreshHome(); });
    MedbiLeagues.render();
    refreshHome();
    refreshTimer = setInterval(() => { refreshHome(); if (!$("page-live").classList.contains("hidden")) loadLive(); }, window.MEDBI_CONFIG.REFRESH_INTERVAL_MS);
  }
  document.addEventListener("DOMContentLoaded", setup);
})();
