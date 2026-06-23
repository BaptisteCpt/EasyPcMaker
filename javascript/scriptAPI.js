const API = "https://easy-pc-maker.yoanc.dev/baptiste";

const composants = ["cpu", "ram", "motherboard", "ssd", "gpu", "aio", "case", "alim"];

const ComposantSelected = {};
composants.forEach((comp) => {
  const stored = localStorage.getItem(comp);
  ComposantSelected[comp] = stored ? JSON.parse(stored) : null;
});

const ramCompatibilite = {
  AM5: ["DDR5"],
  AM4: ["DDR4"],
  LGA1700: ["DDR5"],
  LGA1200: ["DDR4"],
  TR4: ["DDR4"],
};

function saveComp(key, value) {
  ComposantSelected[key] = value;
  localStorage.setItem(key, JSON.stringify(value));
}

function buildFilters(groups) {
  const html = groups
    .map(({ name, values }) => {
      const radios = values
        .map(
          (v) =>
            `<input type="radio" name="filtre" id="f-${v}" value="${v}"/><label for="f-${v}">${v}</label>`,
        )
        .join("");
      return `<div class="filter-group">${radios}</div>`;
    })
    .join("");
  return `${html}<button class="btn-filter-reset" onclick="resetFilter()">✕ Tout afficher</button>`;
}

function resetFilter() {
  document
    .querySelectorAll('#headerproduit input[type="radio"]')
    .forEach((r) => (r.checked = false));
  currentFilter = "all";
  currentReplaceFunc();
}

let currentFilter = "all";
let currentReplaceFunc = null;

function applyFilter(val) {
  currentFilter = val;
  currentReplaceFunc(val);
}

function setActiveNav(id) {
  document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
  const btn = document.getElementById(id);
  if (btn) btn.classList.add("active");
}

function markDone(id) {
  const btn = document.getElementById(id);
  if (btn) btn.classList.add("done");
}

function createSection(title, filterHtml, warnHtml = "") {
  const sec = document.createElement("section");
  sec.id = "lesproduits";

  const header = document.createElement("section");
  header.id = "headerproduit";
  header.innerHTML = `<h4>${title}</h4>${filterHtml}`;

  sec.appendChild(header);
  if (warnHtml) {
    const warn = document.createElement("div");
    warn.className = "compat-warn";
    warn.innerHTML = warnHtml;
    sec.appendChild(warn);
  }

  const grid = document.createElement("div");
  grid.className = "produits-grid";
  grid.id = "produits-grid";
  sec.appendChild(grid);

  return { sec, grid };
}

function renderCards(grid, data, getImgName, getNom, onChoose, selectedNom) {
  grid.innerHTML = "";
  if (!data.length) {
    grid.innerHTML =
      '<p class="no-results">😕 Aucun composant disponible pour cette configuration.</p>';
    return;
  }
  data.forEach((el) => {
    const isSel = selectedNom && selectedNom === getNom(el);
    const article = document.createElement("article");
    article.className = "unproduit" + (isSel ? " selected" : "");

    const imgName = getImgName(el);
    article.innerHTML = `
      ${isSel ? '<span class="sel-badge">✓ Sélectionné</span>' : ""}
      <img src="img/${imgName}.jpg" alt="${imgName}" onerror="this.classList.add('img-error')"/>
      <div class="prod-info">
        <span class="prod-brand">${el.brand_cpu || el.brand_ram || el.brand_motherboard || el.brand_ssd || el.brand_gpu || el.brand_ref || el.brand_case || el.brand_alim || ""}</span>
        <span class="prod-name">${getNom(el)}</span>
        <span class="prod-detail">${getDetail(el)}</span>
      </div>
      <button onclick='(${onChoose})(${JSON.stringify(el)})'>${isSel ? "✓ Sélectionné" : "Choisir"}</button>
    `;
    grid.appendChild(article);
  });
}

function getDetail(el) {
  if (el.conso_cpu !== undefined) return `Socket: ${el.nom_socket} · ${el.conso_cpu}W`;
  if (el.conso_ram !== undefined) return `${el.type} · ${el.conso_ram}W`;
  if (el.size_mb !== undefined) return `${el.nom_socket} · ${el.type} · ${el.size_mb}`;
  if (el.conso_ssd !== undefined) return `${el.conso_ssd}W`;
  if (el.conso_gpu !== undefined) return `PCIe: ${el.pcie} · ${el.conso_gpu}W`;
  if (el.size_aio !== undefined) return el.size_aio == 0 ? "Ventirad" : `AIO ${el.size_aio}mm`;
  if (el.conso_case !== undefined) return `Formats: ${el.sizes_motherboard}`;
  if (el.watt_alim !== undefined) return `${el.watt_alim}W`;
  return "";
}

function replaceContent(el) {
  const existing = document.querySelector("#produitcontenant > section");
  if (existing) existing.replaceWith(el);
}

async function fetchData(endpoint) {
  try {
    const res = await fetch(`${API}/${endpoint}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    Popup("❌ Erreur de chargement des données. Vérifie ta connexion.", "err");
    return [];
  }
}

async function replaceCPU(filter = "all") {
  currentFilter = filter;
  currentReplaceFunc = replaceCPU;
  setActiveNav("cpu");

  const filterHtml = buildFilters([
    { name: "Socket", values: ["AM5", "AM4", "LGA1700", "LGA1200", "TR4"] },
  ]);
  const { sec, grid } = createSection("🧠 Processeurs disponibles", filterHtml);
  replaceContent(sec);

  document
    .querySelectorAll(`#headerproduit input[value="${filter}"]`)
    .forEach((r) => (r.checked = true));
  document.querySelectorAll('#headerproduit input[type="radio"]').forEach((r) => {
    r.addEventListener("change", () => applyFilter(r.value));
  });

  let data = await fetchData("cpu");
  if (filter !== "all") data = data.filter((c) => c.nom_socket === filter);

  renderCards(
    grid,
    data,
    (el) => el.nom_cpu,
    (el) => el.nom_cpu,
    "choisirCPU",
    ComposantSelected.cpu?.nom_cpu,
  );
}

async function replaceRAM(filter = "all") {
  currentFilter = filter;
  currentReplaceFunc = replaceRAM;
  setActiveNav("ram");

  const filterHtml = buildFilters([
    { name: "Type", values: ["DDR5", "DDR4", "DDR3", "DDR2", "LPDDR5"] },
  ]);
  const { sec, grid } = createSection("💾 RAM disponible", filterHtml);
  replaceContent(sec);

  document
    .querySelectorAll(`#headerproduit input[value="${filter}"]`)
    .forEach((r) => (r.checked = true));
  document.querySelectorAll('#headerproduit input[type="radio"]').forEach((r) => {
    r.addEventListener("change", () => applyFilter(r.value));
  });

  let data = await fetchData("ram");

  if (ComposantSelected.cpu) {
    const compatibles = ramCompatibilite[ComposantSelected.cpu.nom_socket] || [];
    data = data.filter((r) => compatibles.includes(r.type));
  }
  if (filter !== "all") data = data.filter((r) => r.type === filter);

  renderCards(
    grid,
    data,
    (el) => el.nom_ram,
    (el) => el.nom_ram,
    "choisirRAM",
    ComposantSelected.ram?.nom_ram,
  );
}

async function replaceMotherboard(filter = "all") {
  currentFilter = filter;
  currentReplaceFunc = replaceMotherboard;
  setActiveNav("motherboard");

  const filterHtml = buildFilters([
    { name: "Socket", values: ["AM5", "AM4", "LGA1700", "LGA1200", "TR4"] },
    { name: "RAM", values: ["DDR5", "DDR4", "DDR3"] },
    { name: "PCIe", values: ["PCIe 5.0 x16", "PCIe 4.0 x16", "PCIe 3.0 x16"] },
    { name: "Format", values: ["ATX", "MicroATX", "MiniITX", "EATX"] },
  ]);
  const { sec, grid } = createSection("🔌 Cartes mères disponibles", filterHtml);
  replaceContent(sec);

  document
    .querySelectorAll(`#headerproduit input[value="${filter}"]`)
    .forEach((r) => (r.checked = true));
  document.querySelectorAll('#headerproduit input[type="radio"]').forEach((r) => {
    r.addEventListener("change", () => applyFilter(r.value));
  });

  let data = await fetchData("motherboard");

  if (ComposantSelected.cpu)
    data = data.filter((m) => m.nom_socket === ComposantSelected.cpu.nom_socket);
  if (ComposantSelected.ram) data = data.filter((m) => m.type === ComposantSelected.ram.type);
  if (filter !== "all") {
    data = data.filter(
      (m) =>
        m.nom_socket === filter || m.type === filter || m.pcie === filter || m.size_mb === filter,
    );
  }

  renderCards(
    grid,
    data,
    (el) => el.nom_motherboard,
    (el) => el.nom_motherboard,
    "choisirMotherboard",
    ComposantSelected.motherboard?.nom_motherboard,
  );
}

async function replaceSSD(filter = "all") {
  currentFilter = filter;
  currentReplaceFunc = replaceSSD;
  setActiveNav("ssd");

  const filterHtml = buildFilters([
    { name: "Marque", values: ["Samsung", "WD", "Crucial", "Kingston", "Seagate"] },
  ]);
  const { sec, grid } = createSection("💿 Stockage disponible", filterHtml);
  replaceContent(sec);

  document
    .querySelectorAll(`#headerproduit input[value="${filter}"]`)
    .forEach((r) => (r.checked = true));
  document.querySelectorAll('#headerproduit input[type="radio"]').forEach((r) => {
    r.addEventListener("change", () => applyFilter(r.value));
  });

  let data = await fetchData("ssd");
  if (filter !== "all") data = data.filter((s) => s.brand_ssd === filter);

  renderCards(
    grid,
    data,
    (el) => el.nom_ssd,
    (el) => el.nom_ssd,
    "choisirSSD",
    ComposantSelected.ssd?.nom_ssd,
  );
}

async function replaceCG(filter = "all") {
  currentFilter = filter;
  currentReplaceFunc = replaceCG;
  setActiveNav("gpu");

  const filterHtml = buildFilters([
    { name: "PCIe", values: ["PCIe 5.0", "PCIe 4.0", "PCIe 3.0", "PCIe 2.0"] },
  ]);
  const { sec, grid } = createSection("🎮 Cartes graphiques disponibles", filterHtml);
  replaceContent(sec);

  document
    .querySelectorAll(`#headerproduit input[value="${filter}"]`)
    .forEach((r) => (r.checked = true));
  document.querySelectorAll('#headerproduit input[type="radio"]').forEach((r) => {
    r.addEventListener("change", () => applyFilter(r.value));
  });

  let data = await fetchData("gpu");

  if (ComposantSelected.motherboard) {
    data = data.filter((g) => g.pcie === ComposantSelected.motherboard.pcie);
  }
  if (filter !== "all") data = data.filter((g) => g.pcie.startsWith(filter));

  renderCards(
    grid,
    data,
    (el) => el.nom_gpu,
    (el) => el.nom_gpu,
    "choisirGPU",
    ComposantSelected.gpu?.nom_gpu,
  );
}

async function replaceAIO(filter = "all") {
  currentFilter = filter;
  currentReplaceFunc = replaceAIO;
  setActiveNav("aio");

  const filterHtml = buildFilters([{ name: "Taille", values: ["0", "240", "280", "360"] }]);

  let warnHtml = "";
  if (ComposantSelected.cpu) {
    warnHtml = `⚠️ Seuls les refroidissements compatibles avec le socket <strong>${ComposantSelected.cpu.nom_socket}</strong> sont affichés.`;
  }

  const { sec, grid } = createSection("❄️ Refroidissement disponible", filterHtml, warnHtml);
  replaceContent(sec);

  document
    .querySelectorAll(`#headerproduit input[value="${filter}"]`)
    .forEach((r) => (r.checked = true));
  document.querySelectorAll('#headerproduit input[type="radio"]').forEach((r) => {
    r.addEventListener("change", () => applyFilter(r.value));
  });

  let data = await fetchData("cooler");

  if (ComposantSelected.cpu) {
    data = data.filter((a) => a.sockets_compatibles.includes(ComposantSelected.cpu.nom_socket));
  }
  if (filter !== "all") data = data.filter((a) => String(a.size_aio) === filter);

  renderCards(
    grid,
    data,
    (el) => el.nom_ref,
    (el) => el.nom_ref,
    "choisirAIO",
    ComposantSelected.aio?.nom_ref,
  );
}

async function replaceCASE(filter = "all") {
  currentFilter = filter;
  currentReplaceFunc = replaceCASE;
  setActiveNav("case");

  const filterHtml = buildFilters([
    { name: "Format", values: ["ATX", "MicroATX", "MiniITX", "EATX", "XL-ATX"] },
  ]);
  const { sec, grid } = createSection("📦 Boîtiers disponibles", filterHtml);
  replaceContent(sec);

  document
    .querySelectorAll(`#headerproduit input[value="${filter}"]`)
    .forEach((r) => (r.checked = true));
  document.querySelectorAll('#headerproduit input[type="radio"]').forEach((r) => {
    r.addEventListener("change", () => applyFilter(r.value));
  });

  let data = await fetchData("case");

  if (ComposantSelected.motherboard) {
    data = data.filter((c) => c.sizes_motherboard.includes(ComposantSelected.motherboard.size_mb));
  }
  if (filter !== "all") data = data.filter((c) => c.sizes_motherboard.includes(filter));

  renderCards(
    grid,
    data,
    (el) => el.nom_case,
    (el) => el.nom_case,
    "choisirCase",
    ComposantSelected.case?.nom_case,
  );
}

async function replaceALIM(filter = "all") {
  currentReplaceFunc = replaceALIM;
  setActiveNav("alim");

  const consoTotal = [
    ComposantSelected.cpu?.conso_cpu,
    ComposantSelected.ram?.conso_ram,
    ComposantSelected.ssd?.conso_ssd,
    ComposantSelected.gpu?.conso_gpu,
    ComposantSelected.aio?.conso_ref,
    ComposantSelected.case?.conso_case,
  ].reduce((sum, v) => sum + (v || 0), 0);

  const warnHtml =
    consoTotal > 0
      ? `⚡ Consommation estimée de la config : <strong>${consoTotal}W</strong>. Seules les alimentations suffisantes sont affichées.`
      : "";

  const { sec, grid } = createSection("⚡ Alimentations disponibles", "", warnHtml);
  replaceContent(sec);

  let data = await fetchData("power-supply");

  if (consoTotal > 0) {
    data = data.filter((a) => a.watt_alim >= consoTotal);
  }

  renderCards(
    grid,
    data,
    (el) => el.nom_alim,
    (el) => el.nom_alim,
    "choisirAlim",
    ComposantSelected.alim?.nom_alim,
  );
}

function choisirCPU(cpu) {
  saveComp("cpu", cpu);
  if (
    ComposantSelected.ram &&
    !ramCompatibilite[cpu.nom_socket]?.includes(ComposantSelected.ram.type)
  ) {
    saveComp("ram", null);
    Popup("⚠️ RAM incompatible retirée suite au changement de CPU.");
  }
  if (
    ComposantSelected.motherboard &&
    ComposantSelected.motherboard.nom_socket !== cpu.nom_socket
  ) {
    saveComp("motherboard", null);
    Popup("⚠️ Carte mère incompatible retirée.");
  }
  Popup("✅ CPU sélectionné : " + cpu.nom_cpu);
  markDone("cpu");
  updateButtons();
  replaceCPU(currentFilter);
}

function choisirRAM(ram) {
  saveComp("ram", ram);
  Popup("✅ RAM sélectionnée : " + ram.nom_ram);
  markDone("ram");
  updateButtons();
  replaceRAM(currentFilter);
}

function choisirMotherboard(mb) {
  saveComp("motherboard", mb);
  Popup("✅ Carte mère sélectionnée : " + mb.nom_motherboard);
  markDone("motherboard");
  updateButtons();
  replaceMotherboard(currentFilter);
}

function choisirSSD(ssd) {
  saveComp("ssd", ssd);
  Popup("✅ Stockage sélectionné : " + ssd.nom_ssd);
  markDone("ssd");
  updateButtons();
  replaceSSD(currentFilter);
}

function choisirGPU(gpu) {
  saveComp("gpu", gpu);
  Popup("✅ Carte graphique sélectionnée : " + gpu.nom_gpu);
  markDone("gpu");
  updateButtons();
  replaceCG(currentFilter);
}

function choisirAIO(aio) {
  saveComp("aio", aio);
  Popup("✅ Refroidissement sélectionné : " + aio.nom_ref);
  markDone("aio");
  updateButtons();
  replaceAIO(currentFilter);
}

function choisirCase(cas) {
  saveComp("case", cas);
  Popup("✅ Boîtier sélectionné : " + cas.nom_case);
  markDone("case");
  updateButtons();
  replaceCASE(currentFilter);
}

function choisirAlim(alim) {
  saveComp("alim", alim);
  Popup("✅ Alimentation sélectionnée : " + alim.nom_alim);
  markDone("alim");
  updateButtons();
  replaceALIM();
}

function validate() {
  const missing = composants.filter((c) => !ComposantSelected[c]);
  if (missing.length > 0) {
    Popup(`❌ Il manque ${missing.length} composant(s) : ${missing.join(", ")}`, "err");
    return;
  }
  location.href = "validation.html";
}

function resetAll() {
  composants.forEach((c) => {
    localStorage.removeItem(c);
    ComposantSelected[c] = null;
  });
  composants.forEach((c) => {
    const btn = document.getElementById(c);
    if (btn) btn.classList.remove("done", "active");
  });
  Popup("🔄 Configuration réinitialisée.");
  updateButtons();
  location.reload();
}

function Popup(message, type = "ok") {
  const popup = document.createElement("p");
  popup.className = `popup ${type}`;
  popup.textContent = message;
  document.getElementById("pop_info").appendChild(popup);
  requestAnimationFrame(() => popup.classList.add("show"));
  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 300);
  }, 3000);
}

function updateButtons() {
  const selCount = composants.filter((c) => ComposantSelected[c]).length;
  document.getElementById("header-progress").textContent =
    `${selCount} / ${composants.length} composants`;

  for (let i = 0; i < composants.length; i++) {
    const btn = document.getElementById(composants[i]);
    if (!btn) continue;
    if (i === 0) {
      btn.disabled = false;
    } else {
      btn.disabled = !ComposantSelected[composants[i - 1]];
    }
    if (ComposantSelected[composants[i]]) btn.classList.add("done");
    else btn.classList.remove("done");
  }

  const submitBtn = document.getElementById("soumettre");
  if (submitBtn) submitBtn.disabled = selCount < composants.length;
}

window.addEventListener("DOMContentLoaded", () => {
  updateButtons();
});
