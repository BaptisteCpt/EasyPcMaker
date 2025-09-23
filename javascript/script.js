
async function replaceCPU(){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les CPUs Disponibles</h4>
  <p>Filtres : </p>
  <input type="radio" name="filtre" id="AM5" value="AM5"/> <label for="AM5">AM5</label>
  <input type="radio" name="filtre" id="AM4" value="AM4"/> <label for="AM4">AM4</label>
  <input type="radio" name="filtre" id="LGA1700" value="LGA1700"/> <label for="LGA1700">LGA1700</label>
  <input type="radio" name="filtre" id="LGA1200" value="LGA1200"/> <label for="LGA1200">LGA1400</label>
  <input type="radio" name="filtre" id="TR4" value="TR4"/> <label for="TR4">TR4</label>
  `;
  newSection.append(headerproduit);

  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/cpu");
  const data = await response.json();

  data.forEach(element => {
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/${element.nom_cpu}.jpg"/>
        <div>
             <p id="nom">Nom : ${element.nom_cpu}</p>
             <p id="brand">Marque : ${element.brand_cpu}</p>
             <h5 id="conso">Conso : ${element.conso_cpu} Watt</h5>
           </div>`;
    newSection.append(article);
  });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


async function replaceRAM(){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les RAMs Disponibles</h4>
  <p>Filtres : </p>
  <input type="radio" name="filtre" id="DDR5" value="DDR5"/> <label for="DDR5">DDR5</label>
  <input type="radio" name="filtre" id="DDR4" value="DDR4"/> <label for="DDR4">DDR4</label>
  <input type="radio" name="filtre" id="DDR3" value="DDR3"/> <label for="DDR3">DDR3</label>
  <input type="radio" name="filtre" id="DDR2" value="DDR2"/> <label for="DDR2">DDR2</label>
  <input type="radio" name="filtre" id="LPDDR5" value="LPDDR5"/> <label for="LPDDR5">LPDDR5</label>
  `;
  newSection.append(headerproduit);
  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/ram");
  const data = await response.json();

  data.forEach(element => {
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/${element.nom_ram}.jpg"/>
        <div>
             <p id="nom">Nom : ${element.nom_ram}</p>
             <p id="brand">Marque : ${element.brand_ram}</p>
             <h5 id="conso">Conso : ${element.conso_ram} Watt</h5>
           </div>`;
    newSection.append(article);
  });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


async function replaceMotherboard(){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les Cartes Mères Disponibles</h4>
  <p>Filtres : </p>
  <input type="radio" name="filtre" id="AM5" value="AM5"/> <label for="AM5">AM5</label>
  <input type="radio" name="filtre" id="AM4" value="AM4"/> <label for="AM4">AM4</label>
  <input type="radio" name="filtre" id="LGA1700" value="LGA1700"/> <label for="LGA1700">LGA1700</label>
  <input type="radio" name="filtre" id="LGA1200" value="LGA1200"/> <label for="LGA1200">LGA1400</label>
  <input type="radio" name="filtre" id="TR4" value="TR4"/> <label for="TR4">TR4</label>

  <input type="radio" name="filtre" id="DDR5" value="DDR5"/> <label for="DDR5">DDR5</label>
  <input type="radio" name="filtre" id="DDR4" value="DDR4"/> <label for="DDR4">DDR4</label>
  <input type="radio" name="filtre" id="DDR3" value="DDR3"/> <label for="DDR3">DDR3</label>
  <input type="radio" name="filtre" id="DDR2" value="DDR2"/> <label for="DDR2">DDR2</label>
  <input type="radio" name="filtre" id="LPDDR5" value="LPDDR5"/> <label for="LPDDR5">LPDDR5</label>

  <input type="radio" name="filtre" id="PCIe 5.0 x16" value="PCIe 5.0 x16"/> <label for="PCIe 5.0 x16">PCIe 5.0 x16</label>
  <input type="radio" name="filtre" id="PCIe 4.0 x16" value="PCIe 4.0 x16"/> <label for="PCIe 4.0 x16">PCIe 4.0 x16</label>
  <input type="radio" name="filtre" id="PCIe 4.0 x8" value="PCIe 4.0 x8"/> <label for="PCIe 4.0 x8">PCIe 4.0 x8</label>
  <input type="radio" name="filtre" id="PCIe 3.0 x16" value="PCIe 3.0 x16"/> <label for="PCIe 3.0 x16">PCIe 3.0 x16</label>
  <input type="radio" name="filtre" id="PCIe 2.0 x16" value="PCIe 2.0 x16"/> <label for="PCIe 2.0 x16">PCIe 2.0 x16</label>
  `;
  newSection.append(headerproduit);

    const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/motherboard");
  const data = await response.json();

  data.forEach(element => {
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/${element.nom_mb}.jpg"/>
        <div>
             <p id="nom">Nom : ${element.nom_mb}</p>
             <p id="brand">Marque : ${element.brand_mb}</p>
           </div>`;
    newSection.append(article);
  });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


async function replaceSSD(){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les SSDs Disponibles</h4>
  <p>Filtres : </p>
  <input type="radio" name="filtre" id="Samsung" value="Samsung"/> <label for="Samsung">Samsung</label>
  <input type="radio" name="filtre" id="WD" value="WD"/> <label for="WD">WD</label>
  <input type="radio" name="filtre" id="Crucial" value="Crucial"/> <label for="Crucial">Crucial</label>
  <input type="radio" name="filtre" id="Kingston" value="Kingston"/> <label for="Kingston">Kingston</label>
  <input type="radio" name="filtre" id="Seagate" value="Seagate"/> <label for="Seagate">Seagate</label>
  `;
  newSection.append(headerproduit);

    const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/ssd");
  const data = await response.json();

  data.forEach(element => {
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/${element.nom_ssd}.jpg"/>
        <div>
             <p id="nom">Nom : ${element.nom_ssd}</p>
             <p id="brand">Marque : ${element.brand_ssd}</p>
             <h5 id="conso">Conso : ${element.conso_ssd} Watt</h5>
           </div>`;
    newSection.append(article);
  });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


async function replaceCG(){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les Cartes Graphiques Disponibles</h4>
  <p>Filtres : </p>
  <input type="radio" name="filtre" id="PCIe 5.0 x16" value="PCIe 5.0 x16"/> <label for="PCIe 5.0 x16">PCIe 5.0 x16</label>
  <input type="radio" name="filtre" id="PCIe 4.0 x16" value="PCIe 4.0 x16"/> <label for="PCIe 4.0 x16">PCIe 4.0 x16</label>
  <input type="radio" name="filtre" id="PCIe 4.0 x8" value="PCIe 4.0 x8"/> <label for="PCIe 4.0 x8">PCIe 4.0 x8</label>
  <input type="radio" name="filtre" id="PCIe 3.0 x16" value="PCIe 3.0 x16"/> <label for="PCIe 3.0 x16">PCIe 3.0 x16</label>
  <input type="radio" name="filtre" id="PCIe 2.0 x16" value="PCIe 2.0 x16"/> <label for="PCIe 2.0 x16">PCIe 2.0 x16</label>
  `;
  newSection.append(headerproduit);
  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/gpu");
  const data = await response.json();

  data.forEach(element => {
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/${element.nom_gpu}.jpg"/>
        <div>
             <p id="nom">Nom : ${element.nom_gpu}</p>
             <p id="brand">Marque : ${element.brand_gpu}</p>
             <h5 id="conso">Conso : ${element.conso_gpu} Watt</h5>
           </div>`;
    newSection.append(article);
  });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}



async function replaceAIO(){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les Refroidissements Disponibles</h4>
  <p>Filtres par la taille: </p>
  <input type="radio" name="filtre" id="0" value="0"/> <label for="0">0cm</label>
  <input type="radio" name="filtre" id="240" value="240"/> <label for="240">240cm</label>
  <input type="radio" name="filtre" id="360" value="360"/> <label for="360">360cm</label>
  <input type="radio" name="filtre" id="280" value="280"/> <label for="280">280cm</label>
  `;
  newSection.append(headerproduit);
const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/cooler");
  const data = await response.json();

  data.forEach(element => {
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/${element.nom_ref}.jpg"/>
        <div>
             <p id="nom">Nom : ${element.nom_ref}</p>
             <p id="brand">Marque : ${element.brand_ref}</p>
             <h5 id="size"> Taille : ${element.size_aio}cm</h5>
             <h5 id="conso">Conso : ${element.conso_ref} Watt</h5>
           </div>`;
    newSection.append(article);
  });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


async function replaceCASE(){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les Boitiers Disponibles</h4>
  <p>Filtres : </p>
  <input type="radio" name="filtre" id="ATX" value="ATX"/> <label for="ATX">ATX</label>
  <input type="radio" name="filtre" id="MicroATX" value="MicroATX"/> <label for="MicroATX">MicroATX</label>
  <input type="radio" name="filtre" id="MiniITX" value="MiniITX"/> <label for="MiniITX">MiniITX</label>
  <input type="radio" name="filtre" id="EATX" value="EATX"/> <label for="EATX">EATX</label>
  <input type="radio" name="filtre" id="XL-ATX" value="XL-ATX"/> <label for="XL-ATX">XL-ATX</label>
  `;
  newSection.append(headerproduit);
const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/case");
  const data = await response.json();

  data.forEach(element => {
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/${element.nom_case}.jpg"/>
        <div>
             <p id="nom">Nom : ${element.nom_case}</p>
             <p id="brand">Marque : ${element.brand_case}</p>
             <h5 id="conso">Conso : ${element.conso_case} Watt</h5>
           </div>`;
    newSection.append(article);
  });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


async function replaceALIM(){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les Alimentations Disponibles</h4>
  <p>Filtres : </p>
  <input type="radio" name="filtre" id="1000" value="1000"/> <label for="1000">1000Watt</label>
  <input type="radio" name="filtre" id="850" value="850"/> <label for="850">850Watt</label>
  <input type="radio" name="filtre" id="750" value="750"/> <label for="750">750Watt</label>
  <input type="radio" name="filtre" id="650" value="650"/> <label for="650">650Watt</label>
  <input type="radio" name="filtre" id="550" value="550"/> <label for="550">550Watt</label>
  `;
  newSection.append(headerproduit);
  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/power-supply");
  const data = await response.json();

  data.forEach(element => {
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/${element.nom_alim}.jpg"/>
        <div>
             <p id="nom">Nom : ${element.nom_alim}</p>
             <p id="brand">Marque : ${element.brand_alim}</p>
             <h5 id="conso">Conso : ${element.watt_alim} Watt</h5>
           </div>`;
    newSection.append(article);
  });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}