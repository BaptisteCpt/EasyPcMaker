const composants = ["cpu", "ram", "motherboard", "ssd", "gpu", "aio", "case", "alim"];

const labels = {
  cpu: "Processeur",
  ram: "RAM",
  motherboard: "Carte mère",
  ssd: "Stockage",
  gpu: "Carte graphique",
  aio: "Refroidissement",
  case: "Boîtier",
  alim: "Alimentation",
};

const icons = {
  cpu: "🧠",
  ram: "💾",
  motherboard: "🔌",
  ssd: "💿",
  gpu: "🎮",
  aio: "❄️",
  case: "📦",
  alim: "⚡",
};

const nomKey = {
  cpu: "nom_cpu",
  ram: "nom_ram",
  motherboard: "nom_motherboard",
  ssd: "nom_ssd",
  gpu: "nom_gpu",
  aio: "nom_ref",
  case: "nom_case",
  alim: "nom_alim",
};

const brandKey = {
  cpu: "brand_cpu",
  ram: "brand_ram",
  motherboard: "brand_motherboard",
  ssd: "brand_ssd",
  gpu: "brand_gpu",
  aio: "brand_ref",
  case: "brand_case",
  alim: "brand_alim",
};

const consoKey = {
  cpu: "conso_cpu",
  ram: "conso_ram",
  motherboard: null,
  ssd: "conso_ssd",
  gpu: "conso_gpu",
  aio: "conso_ref",
  case: "conso_case",
  alim: "watt_alim",
};

const ComposantSelected = {};
composants.forEach((comp) => {
  const stored = localStorage.getItem(comp);
  ComposantSelected[comp] = stored ? JSON.parse(stored) : null;
});

window.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("#recap");
  let totalConso = 0;

  composants.forEach((comp) => {
    const el = ComposantSelected[comp];
    if (!el) return;

    const nom = el[nomKey[comp]] || "—";
    const brand = el[brandKey[comp]] || "—";
    const ck = consoKey[comp];
    const consoVal = ck ? el[ck] || 0 : 0;
    if (comp !== "alim") totalConso += consoVal;

    const detail =
      comp === "alim"
        ? `Capacité : ${el.watt_alim || 0}W`
        : comp === "motherboard"
          ? `${el.nom_socket || ""} · ${el.type || ""} · ${el.size_mb || ""}`
          : `Consommation : ${consoVal}W`;

    const article = document.createElement("article");
    article.className = "composants";
    article.innerHTML = `
      <img class="image" src="img/${nom}.jpg" alt="${nom}" onerror="this.classList.add('img-error')"/>
      <div class="comp-info">
        <div class="comp-cat">${icons[comp]} ${labels[comp]}</div>
        <div class="comp-name">${nom}</div>
        <div class="comp-brand">${brand}</div>
        <div class="comp-detail">${detail}</div>
      </div>
    `;
    section.appendChild(article);
  });

  const totalEl = document.getElementById("total-conso-val");
  if (totalEl) totalEl.textContent = `${totalConso}W`;
});

function resetAll() {
  composants.forEach((c) => localStorage.removeItem(c));
  location.href = "index.html";
}
