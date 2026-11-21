(() => {
  const config = window.MEDBI_CONFIG;
  const api = {
    async request(path) {
      if (!config.API_BASE_URL) throw new Error("BACKEND_NOT_CONFIGURED");
      const response = await fetch(`${config.API_BASE_URL.replace(/\/$/, "")}/${path}`, {
        headers: { "Accept": "application/json" }
      });
      if (!response.ok) throw new Error(`HTTP_${response.status}`);
      return response.json();
    },
    async getLiveMatches() {
      return this.request("fixtures?live=all");
    },
    async getMatchesByDate(date) {
      return this.request(`fixtures?date=${encodeURIComponent(date)}`);
    },
    async getLeagues() {
      return this.request("leagues");
    }
  };
  window.MedbiAPI = api;
})();
