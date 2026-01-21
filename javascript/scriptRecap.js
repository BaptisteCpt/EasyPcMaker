const composants = [
  "cpu",
  "ram",
  "motherboard",
  "ssd",
  "gpu",
  "aio",
  "case",
  "alim",
];

ComposantSelected = {};
const section = document.querySelector("#recap");

composants.forEach((comp) => {
  const recup = localStorage.getItem(comp);
  ComposantSelected[comp] = JSON.parse(recup);
});

window.addEventListener("DOMContentLoaded", () => {
  for (let comp in ComposantSelected) {
    let nom = `nom_${comp}`;
    let marque = `brand_${comp}`;
    let conso = `conso_${comp}`;
    let watt = `watt_alim`;

    if (comp == "aio") {
      nom = `nom_ref`;
      marque = "brand_ref";
      conso = "conso_ref";
    }

    let h2 = document.createElement("h2");
    h2.textContent = comp.toUpperCase();

    let article = document.createElement("article");
    article.className = "composants";
    article.innerHTML = `
      <img class="image" src="img/${ComposantSelected[comp][nom]}.jpg"/>
      <p>Nom : ${ComposantSelected[comp][nom]}</p>
      <p>Marque : ${ComposantSelected[comp][marque]}</p>
      <h5>${comp == "alim" ? `Capacité : ` + ComposantSelected[comp][watt] + ` Watt` : `Consommation : ${comp == "motherboard" ? 0 : ComposantSelected[comp][conso]}`}</h5>
    `;

    section.appendChild(article);
  }
});
