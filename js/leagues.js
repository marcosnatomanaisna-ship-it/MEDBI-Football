(() => {
  const competitions = [
    {id:"2",name:"UEFA Champions League",country:"Europa",icon:"🏆"},
    {id:"39",name:"Premier League",country:"Inglaterra",icon:"🏴"},
    {id:"140",name:"La Liga",country:"Espanha",icon:"🇪🇸"},
    {id:"135",name:"Serie A",country:"Itália",icon:"🇮🇹"},
    {id:"78",name:"Bundesliga",country:"Alemanha",icon:"🇩🇪"},
    {id:"61",name:"Ligue 1",country:"França",icon:"🇫🇷"},
    {id:"94",name:"Primeira Liga",country:"Portugal",icon:"🇵🇹"},
    {id:"Africa",name:"Futebol africano",country:"África",icon:"🌍"},
    {id:"Guinea-Bissau",name:"Guiné-Bissau",country:"Guiné-Bissau",icon:"🇬🇼"}
  ];
  window.MedbiLeagues = {
    all: competitions,
    render() {
      const el = document.getElementById("leagueGrid");
      if (!el) return;
      el.innerHTML = competitions.map(c => `<button class="league-card" data-league="${c.id}"><b>${c.icon}</b><strong>${c.name}</strong><small>${c.country}</small></button>`).join("");
    }
  };
})();
