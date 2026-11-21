
(() => {
  // Base de dados dos jogadores guineenses.
  // Acrescentaremos jogadores com informações confirmadas.

  const players = [];

  let activeFilter = "all";
  let searchText = "";
  let selectedPosition = "all";

  const $ = id => document.getElementById(id);

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[char]);
  }

  function playerCard(player) {
    const location = player.location === "national"
      ? "Guiné-Bissau"
      : "Estrangeiro";

    const flag = player.location === "national" ? "🇬🇼" : "🌍";

    return `
      <article class="player-card">
        <div class="player-avatar">
          ${player.photo
            ? `<img src="${escapeHTML(player.photo)}" alt="${escapeHTML(player.name)}" loading="lazy">`
            : `<span>⚽</span>`}
        </div>

        <div class="player-info">
          <h3>${escapeHTML(player.name)}</h3>
          <p>${escapeHTML(player.position || "Posição não confirmada")}</p>
          <p>${escapeHTML(player.club || "Clube não confirmado")}</p>
          <small>${flag} ${location}</small>
          ${player.djurtus ? '<small class="player-national">Seleção Djurtus</small>' : ""}
        </div>
      </article>
    `;
  }

  function getFilteredPlayers() {
    return players.filter(player => {
      const text = [
        player.name,
        player.club,
        player.position,
        player.country
      ].join(" ").toLocaleLowerCase("pt");

      const matchesSearch = text.includes(searchText);
      const matchesPosition =
        selectedPosition === "all" ||
        player.position === selectedPosition;

      const matchesLocation =
        activeFilter === "all" ||
        player.location === activeFilter;

      return matchesSearch && matchesPosition && matchesLocation;
    });
  }

  function render() {
    const container = $("playersList");
    const count = $("playersCount");

    if (!container) return;

    const filtered = getFilteredPlayers();

    if (count) {
      count.textContent = `${filtered.length} jogador(es) encontrado(s)`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="favorite-box">
          <span>⚽</span>
          <h3>A nossa base de jogadores está a ser preparada.</h3>
          <p>Os jogadores guineenses serão apresentados aqui com informações verificadas.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(playerCard).join("");
  }

  function renderDjurtus() {
    const container = $("djurtusPlayers");
    if (!container) return;

    const selected = players.filter(player => player.djurtus);

    if (selected.length === 0) {
      container.innerHTML = `
        <div class="favorite-box">
          <span>🇬🇼</span>
          <h3>Informações dos Djurtus em preparação.</h3>
          <p>Esta área apresentará os jogadores da seleção nacional.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = selected.map(playerCard).join("");
  }

  function setupFilters() {
    const search = $("playerSearch");
    const position = $("positionFilter");

    if (search) {
      search.addEventListener("input", event => {
        searchText = event.target.value.trim().toLocaleLowerCase("pt");
        render();
      });
    }

    if (position) {
      position.addEventListener("change", event => {
        selectedPosition = event.target.value;
        render();
      });
    }

    document.querySelectorAll("[data-player-filter]").forEach(button => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.playerFilter;

        document.querySelectorAll("[data-player-filter]").forEach(item => {
          item.classList.toggle("active", item === button);
        });

        render();
      });
    });
  }

  function init() {
    setupFilters();
    render();
    renderDjurtus();
  }

  window.MedbiPlayers = {
    init,
    render,
    renderDjurtus
  };
})();
    
