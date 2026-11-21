
(() => {
  const players = [
    {
      id: 1,
      name: "Manuel Baldé",
      position: "Guarda-redes",
      club: "C.D. Trofense",
      country: "Portugal",
      location: "abroad",
      djurtus: true,
      caps: 18,
      goals: 0
    },
    {
      id: 2,
      name: "Fernando Embadje",
      position: "Guarda-redes",
      club: "Lugo",
      country: "Espanha",
      location: "abroad",
      djurtus: true,
      caps: 6,
      goals: 0
    },
    {
      id: 3,
      name: "Manuel Issufe Djaló",
      position: "Guarda-redes",
      club: "Balzan",
      country: "Malta",
      location: "abroad",
      djurtus: true,
      caps: 2,
      goals: 0
    },
    {
      id: 4,
      name: "Opa Sanganté",
      position: "Defesa",
      club: "Dunkerque",
      country: "França",
      location: "abroad",
      djurtus: true,
      caps: 40,
      goals: 0
    },
    {
      id: 5,
      name: "Jefferson Encada",
      position: "Defesa",
      club: "Estrela da Amadora",
      country: "Portugal",
      location: "abroad",
      djurtus: true,
      caps: 36,
      goals: 0
    },
    {
      id: 6,
      name: "Mauro Rodrigues",
      position: "Defesa",
      club: "Botev Plovdiv",
      country: "Bulgária",
      location: "abroad",
      djurtus: true,
      caps: 28,
      goals: 2
    },
    {
      id: 7,
      name: "Víctor Rofino",
      position: "Defesa",
      club: "Famalicão",
      country: "Portugal",
      location: "abroad",
      djurtus: true,
      caps: 11,
      goals: 0
    },
    {
      id: 8,
      name: "Adramane Cassamá",
      position: "Defesa",
      club: "AC Oulu",
      country: "Finlândia",
      location: "abroad",
      djurtus: true,
      caps: 5,
      goals: 0
    },
    {
      id: 9,
      name: "Iano Imbeni",
      position: "Defesa",
      club: "Penafiel",
      country: "Portugal",
      location: "abroad",
      djurtus: true,
      caps: 6,
      goals: 1
    },
    {
      id: 10,
      name: "Gilberto Batista",
      position: "Defesa",
      club: "Moreirense",
      country: "Portugal",
      location: "abroad",
      djurtus: true,
      caps: 3,
      goals: 0
    },
    {
      id: 11,
      name: "Fallou Mendy",
      position: "Defesa",
      club: "FAR Rabat",
      country: "Marrocos",
      location: "abroad",
      djurtus: true,
      caps: 0,
      goals: 0
    },
    {
      id: 12,
      name: "Bura Nogueira",
      position: "Médio",
      club: "Lusitano de Évora",
      country: "Portugal",
      location: "abroad",
      djurtus: true,
      caps: 41,
      goals: 2
    },
    {
      id: 13,
      name: "Alfa Semedo",
      position: "Médio",
      club: "Al-Fayha",
      country: "Arábia Saudita",
      location: "abroad",
      djurtus: true,
      caps: 38,
      goals: 2
    },
    {
      id: 14,
      name: "Dálcio",
      position: "Médio",
      club: "APOEL",
      country: "Chipre",
      location: "abroad",
      djurtus: true,
      caps: 32,
      goals: 0
    },
    {
      id: 15,
      name: "Renato Nhaga",
      position: "Médio",
      club: "Galatasaray",
      country: "Turquia",
      location: "abroad",
      djurtus: true,
      caps: 11,
      goals: 1
    },
    {
      id: 16,
      name: "Mamadi Camará",
      position: "Médio",
      club: "Kayserispor",
      country: "Turquia",
      location: "abroad",
      djurtus: true,
      caps: 10,
      goals: 0
    },
    {
      id: 17,
      name: "Panutche Camará",
      position: "Médio",
      club: "Dundee United",
      country: "Escócia",
      location: "abroad",
      djurtus: true,
      caps: 8,
      goals: 1
    },
    {
      id: 18,
      name: "Ronaldo Vieira",
      position: "Médio",
      club: "San Jose Earthquakes",
      country: "Estados Unidos",
      location: "abroad",
      djurtus: true,
      caps: 6,
      goals: 0
    },
    {
      id: 19,
      name: "Mama Baldé",
      position: "Avançado",
      club: "Brest",
      country: "França",
      location: "abroad",
      djurtus: true,
      caps: 40,
      goals: 9
    },
    {
      id: 20,
      name: "Beto",
      position: "Avançado",
      club: "Fiorentina",
      country: "Itália",
      location: "abroad",
      djurtus: true,
      caps: 13,
      goals: 1
    },
    {
      id: 21,
      name: "Tamble Monteiro",
      position: "Avançado",
      club: "Rio Ave",
      country: "Portugal",
      location: "abroad",
      djurtus: true,
      caps: 12,
      goals: 1
    },
    {
      id: 22,
      name: "Steve Ambri",
      position: "Avançado",
      club: "Omonia 29M",
      country: "Chipre",
      location: "abroad",
      djurtus: true,
      caps: 5,
      goals: 0
    },
    {
      id: 23,
      name: "Álvaro Djaló",
      position: "Avançado",
      club: "Athletic Club",
      country: "Espanha",
      location: "abroad",
      djurtus: true,
      caps: 6,
      goals: 1
    },
    {
      id: 24,
      name: "Flávio Silva",
      position: "Avançado",
      club: "Kaizer Chiefs",
      country: "África do Sul",
      location: "abroad",
      djurtus: true,
      caps: 3,
      goals: 0
    },
    {
      id: 25,
      name: "Flinto Costa",
      position: "Avançado",
      club: "Braga B",
      country: "Portugal",
      location: "abroad",
      djurtus: true,
      caps: 1,
      goals: 0
    }
  ];

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
    return `
      <article class="player-card">
        <div class="player-avatar">
          <span>⚽</span>
        </div>
        <div class="player-info">
          <h3>${escapeHTML(player.name)}</h3>
          <p>${escapeHTML(player.position)}</p>
          <p>${escapeHTML(player.club)}</p>
          <small>🌍 ${escapeHTML(player.country)}</small>
          ${player.djurtus
            ? '<small class="player-national">🇬🇼 Djurtus</small>'
            : ''}
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
          <h3>Nenhum jogador encontrado.</h3>
          <p>Experimenta outra pesquisa ou filtro.</p>
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

    container.innerHTML = selected.map(playerCard).join("");
  }

  function renderHome() {
    const container = $("homePlayers");
    if (!container) return;

    container.innerHTML = players
      .filter(player => player.djurtus)
      .slice(0, 4)
      .map(playerCard)
      .join("");
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
    renderHome();
  }

  window.MedbiPlayers = {
    init,
    render,
    renderDjurtus,
    renderHome,
    getAll: () => players
  };
})();
        
