const composants = [
    "cpu", "ram", "motherboard", "ssd",
    "gpu", "aio", "case", "alim"
];
let ComposantSelected = {};

composants.forEach(comp => {
    const recup = localStorage.getItem(comp);
    ComposantSelected[comp] = recup ? JSON.parse(recup) : null;
});




async function replaceCPU(filter = "all"){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les CPUs Disponibles</h4>
  <input type="radio" name="filtre" id="AM5" value="AM5" onclick="filtrerCPU(value)" ${filter === "AM5" ? "checked" : ""}/> <label for="AM5">AM5</label>
  <input type="radio" name="filtre" id="AM4" value="AM4" onclick="filtrerCPU(value)" ${filter === "AM4" ? "checked" : ""}/> <label for="AM4">AM4</label>
  <input type="radio" name="filtre" id="LGA1700" value="LGA1700" onclick="filtrerCPU(value)" ${filter === "LGA1700" ? "checked" : ""}/> <label for="LGA1700">LGA1700</label>
  <input type="radio" name="filtre" id="LGA1200" value="LGA1200" onclick="filtrerCPU(value)"  ${filter === "LGA1200" ? "checked" : ""}/> <label for="LGA1200">LGA1400</label>
  <input type="radio" name="filtre" id="TR4" value="TR4" onclick="filtrerCPU(value)"  ${filter === "TR4" ? "checked" : ""}/> <label for="TR4">TR4</label>
  <input type="reset" name ="reset" value="reset" onclick="filtrerCPU('all')"/>
  `;
  newSection.append(headerproduit);

  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/cpu");
  let data = await response.json();

  if (filter !== "all") {
      data = data.filter(cpu => cpu.nom_socket === filter);
  }

  data.forEach(element => {
      let article = document.createElement("article");
      article.classList.add("unproduit");
      article.innerHTML = `
      <img id="image" src="img/${element.nom_cpu}.jpg"/>
          <div>
              <p id="nom">Nom : ${element.nom_cpu}</p>
              <p id="brand">Marque : ${element.brand_cpu}</p>
              <h5 id="conso">Conso : ${element.conso_cpu} Watt</h5>
              <button onclick='choisirCPU(${JSON.stringify(element)})'>
                  Choisir ce CPU
              </button>
          </div>`;

      if (ComposantSelected.cpu && ComposantSelected.cpu.nom_cpu === element.nom_cpu) {
        article.classList.add("selected");
      }
      newSection.append(article);
    });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


const ramCompatibilite = {
  "AM5": ["DDR5"],
  "AM4": ["DDR4"],
  "LGA1700": ["DDR5"],
  "LGA1200": ["DDR4"],
  "TR4": ["DDR4"]
};

async function replaceRAM(filter = "all"){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les RAMs Disponibles</h4>
  <input type="radio" name="filtre" id="DDR5" value="DDR5" onclick="filtrerRAM(value)" ${filter === "DDR5" ? "checked" : ""}/> <label for="DDR5">DDR5</label>
  <input type="radio" name="filtre" id="DDR4" value="DDR4" onclick="filtrerRAM(value)" ${filter === "DDR4" ? "checked" : ""}/> <label for="DDR4">DDR4</label>
  <input type="radio" name="filtre" id="DDR3" value="DDR3" onclick="filtrerRAM(value)" ${filter === "DDR3" ? "checked" : ""}/> <label for="DDR3">DDR3</label>
  <input type="radio" name="filtre" id="DDR2" value="DDR2" onclick="filtrerRAM(value)" ${filter === "DDR2" ? "checked" : ""}/> <label for="DDR2">DDR2</label>
  <input type="radio" name="filtre" id="LPDDR5" value="LPDDR5" onclick="filtrerRAM(value)" ${filter === "LPDDR5" ? "checked" : ""}/> <label for="LPDDR5">LPDDR5</label>
  <input type="reset" name ="reset" value="reset" onclick="filtrerRAM('all')"/>
  `;
  newSection.append(headerproduit);
  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/ram");
  let data = await response.json();

  if (ComposantSelected.cpu) {
        const compatibles = ramCompatibilite[ComposantSelected.cpu.nom_socket] || []; // fait gaffe si le nom est pas trouvé
        data = data.filter(ram => compatibles.includes(ram.type));
    }

  if (filter !== "all") {
        data = data.filter(ram => ram.type === filter);
    }

  data.forEach(element => {
      let article = document.createElement("article");
      article.classList.add("unproduit");
      article.innerHTML = `
      <img id="image" src="img/${element.nom_ram}.jpg"/>
          <div>
              <p id="nom">Nom : ${element.nom_ram}</p>
              <p id="brand">Marque : ${element.brand_ram}</p>
              <h5 id="conso">Conso : ${element.conso_ram} Watt</h5>
              <button onclick='choisirRAM(${JSON.stringify(element)})'>
                Choisir cette RAM
              </button>
          </div>`;
      if (ComposantSelected.ram && ComposantSelected.ram.nom_ram === element.nom_ram) {
        article.classList.add("selected");
      }
      newSection.append(article);
    });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


async function replaceMotherboard(filter = "all"){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les Cartes Mères Disponibles</h4>
  <input type="radio" name="filtre" id="AM5" value="AM5" onclick="filtrerMotherboard(value)" ${filter === "AM5" ? "checked" : ""}/> <label for="AM5">AM5</label>
  <input type="radio" name="filtre" id="AM4" value="AM4" onclick="filtrerMotherboard(value)" ${filter === "AM4" ? "checked" : ""}/> <label for="AM4">AM4</label>
  <input type="radio" name="filtre" id="LGA1700" value="LGA1700" onclick="filtrerMotherboard(value)" ${filter === "LGA1700" ? "checked" : ""}/> <label for="LGA1700">LGA1700</label>
  <input type="radio" name="filtre" id="LGA1200" value="LGA1200" onclick="filtrerMotherboard(value)" ${filter === "LGA1200" ? "checked" : ""}/> <label for="LGA1200">LGA1200</label>
  <input type="radio" name="filtre" id="TR4" value="TR4" onclick="filtrerMotherboard(value)" ${filter === "TR4" ? "checked" : ""}/> <label for="TR4">TR4</label>

  <input type="radio" name="filtre" id="DDR5" value="DDR5" onclick="filtrerMotherboard(value)" ${filter === "DDR5" ? "checked" : ""}/> <label for="DDR5">DDR5</label>
  <input type="radio" name="filtre" id="DDR4" value="DDR4" onclick="filtrerMotherboard(value)" ${filter === "DDR4" ? "checked" : ""}/> <label for="DDR4">DDR4</label>
  <input type="radio" name="filtre" id="DDR3" value="DDR3" onclick="filtrerMotherboard(value)" ${filter === "DDR3" ? "checked" : ""}/> <label for="DDR3">DDR3</label>
  <input type="radio" name="filtre" id="DDR2" value="DDR2" onclick="filtrerMotherboard(value)" ${filter === "DDR2" ? "checked" : ""}/> <label for="DDR2">DDR2</label>
  <input type="radio" name="filtre" id="LPDDR5" value="LPDDR5" onclick="filtrerMotherboard(value)" ${filter === "LPDDR5" ? "checked" : ""}/> <label for="LPDDR5">LPDDR5</label>

  <input type="radio" name="filtre" id="PCIe 5.0 x16" value="PCIe 5.0 x16" onclick="filtrerMotherboard(value)" ${filter === "PCIe 5.0 x16" ? "checked" : ""}/> <label for="PCIe 5.0 x16">PCIe 5.0 x16</label>
  <input type="radio" name="filtre" id="PCIe 4.0 x16" value="PCIe 4.0 x16" onclick="filtrerMotherboard(value)" ${filter === "PCIe 4.0 x16" ? "checked" : ""}/> <label for="PCIe 4.0 x16">PCIe 4.0 x16</label>
  <input type="radio" name="filtre" id="PCIe 4.0 x8" value="PCIe 4.0 x8" onclick="filtrerMotherboard(value)" ${filter === "PCIe 4.0 x8" ? "checked" : ""}/> <label for="PCIe 4.0 x8">PCIe 4.0 x8</label>
  <input type="radio" name="filtre" id="PCIe 3.0 x16" value="PCIe 3.0 x16" onclick="filtrerMotherboard(value)" ${filter === "PCIe 3.0 x16" ? "checked" : ""}/> <label for="PCIe 3.0 x16">PCIe 3.0 x16</label>
  <input type="radio" name="filtre" id="PCIe 2.0 x16" value="PCIe 2.0 x16" onclick="filtrerMotherboard(value)" ${filter === "PCIe 2.0 x16" ? "checked" : ""}/> <label for="PCIe 2.0 x16">PCIe 2.0 x16</label>

  <input type="radio" name="filtre" id="ATX" value="ATX" onclick="filtrerMotherboard(value)" ${filter === "ATX" ? "checked" : ""}/> <label for="ATX">ATX</label>
  <input type="radio" name="filtre" id="MicroATX" value="MicroATX" onclick="filtrerMotherboard(value)" ${filter === "MicroATX" ? "checked" : ""}/> <label for="MicroATX">MicroATX</label>
  <input type="radio" name="filtre" id="MiniITX" value="MiniITX" onclick="filtrerMotherboard(value)" ${filter === "MiniITX" ? "checked" : ""}/> <label for="MiniITX">MiniITX</label>
  <input type="radio" name="filtre" id="EATX" value="EATX" onclick="filtrerMotherboard(value)" ${filter === "EATX" ? "checked" : ""}/> <label for="EATX">EATX</label>
  <input type="radio" name="filtre" id="XL-ATX" value="XL-ATX" onclick="filtrerMotherboard(value)" ${filter === "XL-ATX" ? "checked" : ""}/> <label for="XL-ATX">XL-ATX</label>

  <input type="reset" name ="reset" value="reset" onclick="filtrerMotherboard('all')"/>
  `;
  newSection.append(headerproduit);

  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/motherboard");
  let data = await response.json();

  if (ComposantSelected.cpu) {
      data = data.filter(mb => mb.nom_socket === ComposantSelected.cpu.nom_socket);
  }
  if (ComposantSelected.ram) {
      data = data.filter(mb => mb.type === ComposantSelected.ram.type);
  }

  if (filter !== "all") {
      data = data.filter(mb => 
          mb.nom_socket === filter || 
          mb.type === filter || 
          mb.pcie === filter || 
          mb.size_mb === filter
      );
  }

    data.forEach(element => {
      let article = document.createElement("article");
      article.classList.add("unproduit");
      article.innerHTML = `
      <img id="image" src="img/${element.nom_motherboard}.jpg"/>
          <div>
              <p id="nom">Nom : ${element.nom_motherboard}</p>
              <p id="brand">Marque : ${element.brand_motherboard}</p>
              <h5 id="conso">Taille : ${element.size_mb}</h5>
              <button onclick='choisirMotherboard(${JSON.stringify(element)})'>
                Choisir cette Carte Mère
              </button>
          </div>`;
      if (ComposantSelected.motherboard && ComposantSelected.motherboard.nom_motherboard === element.nom_motherboard) {
        article.classList.add("selected");
      }
      newSection.append(article);
    });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


async function replaceSSD(filter = "all"){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les SSDs Disponibles</h4>
  <input type="radio" name="filtre" id="Samsung" value="Samsung" onclick="filtrerSSD(value)" ${filter === "Samsung" ? "checked" : ""}/> <label for="Samsung">Samsung</label>
  <input type="radio" name="filtre" id="WD" value="WD" onclick="filtrerSSD(value)" ${filter === "WD" ? "checked" : ""}/> <label for="WD">WD</label>
  <input type="radio" name="filtre" id="Crucial" value="Crucial" onclick="filtrerSSD(value)" ${filter === "Crucial" ? "checked" : ""}/> <label for="Crucial">Crucial</label>
  <input type="radio" name="filtre" id="Kingston" value="Kingston" onclick="filtrerSSD(value)" ${filter === "Kingston" ? "checked" : ""}/> <label for="Kingston">Kingston</label>
  <input type="radio" name="filtre" id="Seagate" value="Seagate" onclick="filtrerSSD(value)" ${filter === "Seagate" ? "checked" : ""}/> <label for="Seagate">Seagate</label>
  <input type="reset" name ="reset" value="reset" onclick="filtrerSSD('all')"/>
  `;
  newSection.append(headerproduit);

  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/ssd");
  let data = await response.json();

  if (filter !== "all") {
      data = data.filter(ssd => ssd.brand_ssd === filter);
  }

  data.forEach(element => {
      let article = document.createElement("article");
      article.classList.add("unproduit");
      article.innerHTML = `
      <img id="image" src="img/${element.nom_ssd}.jpg"/>
          <div>
              <p id="nom">Nom : ${element.nom_ssd}</p>
              <p id="brand">Marque : ${element.brand_ssd}</p>
              <h5 id="conso">Conso : ${element.conso_ssd} Watt</h5>
              <button onclick='choisirSSD(${JSON.stringify(element)})'>
                  Choisir ce SSD
              </button>
          </div>`;
      if (ComposantSelected.ssd && ComposantSelected.ssd.nom_ssd === element.nom_ssd) {
        article.classList.add("selected");
      }
      newSection.append(article);
    });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


async function replaceCG(filter = "all"){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les Cartes Graphiques Disponibles</h4>
  <input type="radio" name="filtre" id="PCIe 5.0" value="PCIe 5.0" onclick="filtrerGPU(value)" ${filter === "PCIe 5.0" ? "checked" : ""}/> <label for="PCIe 5.0">PCIe 5.0</label>
  <input type="radio" name="filtre" id="PCIe 4.0" value="PCIe 4.0" onclick="filtrerGPU(value)" ${filter === "PCIe 4.0" ? "checked" : ""}/> <label for="PCIe 4.0">PCIe 4.0</label>
  <input type="radio" name="filtre" id="PCIe 3.0" value="PCIe 3.0" onclick="filtrerGPU(value)" ${filter === "PCIe 3.0" ? "checked" : ""}/> <label for="PCIe 3.0">PCIe 3.0</label>
  <input type="radio" name="filtre" id="PCIe 2.0" value="PCIe 2.0" onclick="filtrerGPU(value)" ${filter === "PCIe 2.0" ? "checked" : ""}/> <label for="PCIe 2.0">PCIe 2.0</label>
  <input type="reset" name ="reset" value="reset" onclick="filtrerCG('all')"/>
  `;
  newSection.append(headerproduit);
  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/gpu");
  let data = await response.json();

  if (ComposantSelected.motherboard) {
    data = data.filter(gpu => gpu.pcie === ComposantSelected.motherboard.pcie );
  }

  if (filter !== "all") {
      data = data.filter(gpu => gpu.brand_gpu === filter);
  }

 data.forEach(element => {
      let article = document.createElement("article");
      article.classList.add("unproduit");
      article.innerHTML = `
      <img id="image" src="img/${element.nom_gpu}.jpg"/>
          <div>
              <p id="nom">Nom : ${element.nom_gpu}</p>
              <p id="brand">Marque : ${element.brand_gpu}</p>
              <h5 id="conso">Conso : ${element.conso_gpu} Watt</h5>
              <button onclick='choisirGPU(${JSON.stringify(element)})'>
                  Choisir cette Carte Graphique
              </button>
          </div>`;
      if (ComposantSelected.gpu && ComposantSelected.gpu.nom_gpu === element.nom_gpu) {
        article.classList.add("selected");
      }
      newSection.append(article);
    });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}



async function replaceAIO(filter = "all"){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les Refroidissements Disponibles</h4>
  <input type="radio" name="filtre" id="0" value="0" onclick="filtrerAIO(value)" ${filter === "0" ? "checked" : ""}/> <label for="0">Ventirad (0cm)</label>
  <input type="radio" name="filtre" id="240" value="240" onclick="filtrerAIO(value)" ${filter === "240" ? "checked" : ""}/> <label for="240">240cm</label>
  <input type="radio" name="filtre" id="360" value="360" onclick="filtrerAIO(value)" ${filter === "360" ? "checked" : ""}/> <label for="360">360cm</label>
  <input type="radio" name="filtre" id="280" value="280" onclick="filtrerAIO(value)" ${filter === "280" ? "checked" : ""}/> <label for="280">280cm</label>
  <input type="reset" name ="reset" value="reset" onclick="filtrerAIO('all')"/>
  `;
  newSection.append(headerproduit);
const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/cooler");
  let data = await response.json();

  if (ComposantSelected.cpu) {
    data = data.filter(aio => aio.sockets_compatibles.includes(ComposantSelected.cpu.nom_socket));
  }

  if (filter !== "all") {
      data = data.filter(aio => aio.size_aio === filter);
  }

  data.forEach(element => {
      let article = document.createElement("article");
      article.classList.add("unproduit");
      article.innerHTML = `
      <img id="image" src="img/${element.nom_ref}.jpg"/>
          <div>
              <p id="nom">Nom : ${element.nom_ref}</p>
              <p id="brand">Marque : ${element.brand_ref}</p>
              <h5 id="conso">Taille : ${element.size_aio}cm</h5>
              <button onclick='choisirAIO(${JSON.stringify(element)})'>
                  Choisir ce Refroidissement
              </button>
          </div>`;
      if (ComposantSelected.aio && ComposantSelected.aio.nom_ref === element.nom_ref) {
        article.classList.add("selected");
      }
      newSection.append(article);
    });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


async function replaceCASE(filter = "all"){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les Boitiers Disponibles</h4>
  <input type="radio" name="filtre" id="ATX" value="ATX" onclick="filtrerCase(value)" ${filter === "ATX" ? "checked" : ""}/> <label for="ATX">ATX</label>
  <input type="radio" name="filtre" id="MicroATX" value="MicroATX" onclick="filtrerCase(value)" ${filter === "MicroATX" ? "checked" : ""}/> <label for="MicroATX">MicroATX</label>
  <input type="radio" name="filtre" id="MiniITX" value="MiniITX" onclick="filtrerCase(value)" ${filter === "MiniITX" ? "checked" : ""}/> <label for="MiniITX">Mini-ITX</label>
  <input type="radio" name="filtre" id="EATX" value="EATX" onclick="filtrerCase(value)" ${filter === "EATX" ? "checked" : ""}/> <label for="EATX">E-ATX</label>
  <input type="radio" name="filtre" id="XL-ATX" value="XL-ATX" onclick="filtrerCase(value)" ${filter === "XL-ATX" ? "checked" : ""}/> <label for="XL-ATX">XL-ATX</label>
  <input type="reset" name ="reset" value="reset" onclick="filtrerCase('all')"/>
  `;
  newSection.append(headerproduit);

  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/case");
  let data = await response.json();

  if (ComposantSelected.motherboard) {
    data = data.filter(cas => cas.sizes_motherboard.includes(ComposantSelected.motherboard.size_mb));
  }

  if (filter !== "all") {
    data = data.filter(cas => cas.sizes_motherboard.includes(filter));
  }

  data.forEach(element => {
      let article = document.createElement("article");
      article.classList.add("unproduit");
      article.innerHTML = `
      <img id="image" src="img/${element.nom_case}.jpg"/>
          <div>
              <p id="nom">Nom : ${element.nom_case}</p>
              <p id="brand">Marque : ${element.brand_case}</p>
              <h5 id="conso">Conso : ${element.conso_case} Watt</h5>
              <button onclick='choisirCase(${JSON.stringify(element)})'>
                  Choisir ce Boîtier
              </button>
          </div>`;
      if (ComposantSelected.case && ComposantSelected.case.nom_case === element.nom_case) {
        article.classList.add("selected");
      }
      newSection.append(article);
    });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


async function replaceALIM(filter = "all"){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les Alimentations Disponibles</h4>
  <input type="radio" name="filtre" id="1000" value="1000" onclick="filtrerAlim(value)" ${filter === "1000" ? "checked" : ""}/> <label for="1000">1000Watt</label>
  <input type="radio" name="filtre" id="850" value="850" onclick="filtrerAlim(value)" ${filter === "850" ? "checked" : ""}/> <label for="850">850Watt</label>
  <input type="radio" name="filtre" id="750" value="750" onclick="filtrerAlim(value)" ${filter === "750" ? "checked" : ""}/> <label for="750">750Watt</label>
  <input type="radio" name="filtre" id="650" value="650" onclick="filtrerAlim(value)" ${filter === "650" ? "checked" : ""}/> <label for="650">650Watt</label>
  <input type="radio" name="filtre" id="550" value="550" onclick="filtrerAlim(value)" ${filter === "550" ? "checked" : ""}/> <label for="550">550Watt</label>
  <input type="reset" name ="reset" value="reset" onclick="filtrerAlim('all')"/>
  `;
  newSection.append(headerproduit);
  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/power-supply");
  let data = await response.json();

  if (ComposantSelected.cpu && ComposantSelected.ram && ComposantSelected.ssd && ComposantSelected.gpu && ComposantSelected.aio && ComposantSelected.case){
    const minWatt = ComposantSelected.cpu.conso_cpu + ComposantSelected.ram.conso_ram + ComposantSelected.ssd.conso_ssd + ComposantSelected.gpu.conso_gpu + ComposantSelected.aio.conso_ref + ComposantSelected.case.conso_case;
    data = data.filter(alim => alim.watt_alim >= minWatt);
  }

  data.forEach(element => {
      let article = document.createElement("article");
      article.classList.add("unproduit");
      article.innerHTML = `
      <img id="image" src="img/${element.nom_alim}.jpg"/>
          <div>
              <p id="nom">Nom : ${element.nom_alim}</p>
              <p id="brand">Marque : ${element.brand_alim}</p>
              <h5 id="conso">Capacité : ${element.watt_alim} Watt</h5>
              <button onclick='choisirAlim(${JSON.stringify(element)})'>
                  Choisir cette Alimentation
              </button>
          </div>`;
      if (ComposantSelected.alim && ComposantSelected.alim.nom_alim === element.nom_alim) {
        article.classList.add("selected");
      }
      newSection.append(article);
    });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}

async function filtrerCPU(thefilter){
  replaceCPU(thefilter);
}

async function filtrerRAM(thefilter){
  replaceRAM(thefilter);
}

async function filtrerMotherboard(thefilter){
  replaceMotherboard(thefilter);
}

async function filtrerSSD(thefilter){
  replaceSSD(thefilter);
}
async function filtrerCG(thefilter){
  replaceCG(thefilter);
}

async function filtrerAIO(thefilter){
  replaceAIO(thefilter);
}

async function filtrerCase(thefilter){
  replaceCASE(thefilter);
}

async function filtrerAlim(thefilter){
  replaceALIM(thefilter);
}


function choisirCPU(cpu) {
    ComposantSelected.cpu = cpu;
    localStorage.setItem("cpu", JSON.stringify(cpu));
    Popup("CPU sélectionné : " + cpu.nom_cpu);

    document.querySelectorAll("#lesproduits article").forEach(article => {
        article.classList.remove("selected");
    });

    const articles = document.querySelectorAll("#lesproduits article");
    articles.forEach(article => {
        if (article.querySelector("#nom").textContent.includes(cpu.nom_cpu)) {
            article.classList.add("selected");
        }
    });

    updateButtons();
}

function choisirRAM(ram) {
    ComposantSelected.ram = ram;
    localStorage.setItem("ram", JSON.stringify(ram));
    Popup("RAM sélectionnée : " + ram.nom_ram);

    document.querySelectorAll("#lesproduits article").forEach(article => {
        article.classList.remove("selected");
    });

    const articles = document.querySelectorAll("#lesproduits article");
    articles.forEach(article => {
        if (article.querySelector("#nom").textContent.includes(ram.nom_ram)) {
            article.classList.add("selected");
        }
    });

    updateButtons();
}

function choisirMotherboard(mb) {
    ComposantSelected.motherboard = mb;
    localStorage.setItem("motherboard", JSON.stringify(mb));
    Popup("Carte mère sélectionnée : " + mb.nom_motherboard);

    document.querySelectorAll("#lesproduits article").forEach(article => {
        article.classList.remove("selected");
    });

    const articles = document.querySelectorAll("#lesproduits article");
    articles.forEach(article => {
        if (article.querySelector("#nom").textContent.includes(mb.nom_motherboard)) {
            article.classList.add("selected");
        }
    });

    updateButtons();
}

function choisirSSD(ssd) {
    ComposantSelected.ssd = ssd;
    localStorage.setItem("ssd", JSON.stringify(ssd));
    Popup("SSD sélectionné : " + ssd.nom_ssd);

    document.querySelectorAll("#lesproduits article").forEach(article => {
        article.classList.remove("selected");
    });

    const articles = document.querySelectorAll("#lesproduits article");
    articles.forEach(article => {
        if (article.querySelector("#nom").textContent.includes(ssd.nom_ssd)) {
            article.classList.add("selected");
        }
    });

    updateButtons();
}

function choisirGPU(gpu) {
    ComposantSelected.gpu = gpu;
    localStorage.setItem("gpu", JSON.stringify(gpu));
    Popup("Carte graphique sélectionnée : " + gpu.nom_gpu);

    document.querySelectorAll("#lesproduits article").forEach(article => {
        article.classList.remove("selected");
    });

    const articles = document.querySelectorAll("#lesproduits article");
    articles.forEach(article => {
        if (article.querySelector("#nom").textContent.includes(gpu.nom_gpu)) {
            article.classList.add("selected");
        }
    });

    updateButtons();
}

function choisirAIO(aio) {
    ComposantSelected.aio = aio;
    localStorage.setItem("aio", JSON.stringify(aio));
    Popup("Refroidissement sélectionné : " + aio.nom_ref);

    document.querySelectorAll("#lesproduits article").forEach(article => {
        article.classList.remove("selected");
    });

    const articles = document.querySelectorAll("#lesproduits article");
    articles.forEach(article => {
        if (article.querySelector("#nom").textContent.includes(aio.nom_ref)) {
            article.classList.add("selected");
        }
    });

    updateButtons();
}

function choisirCase(cas) {
    ComposantSelected.case = cas;
    localStorage.setItem("case", JSON.stringify(cas));
    Popup("Boîtier sélectionné : " + cas.nom_case);

    document.querySelectorAll("#lesproduits article").forEach(article => {
        article.classList.remove("selected");
    });

    const articles = document.querySelectorAll("#lesproduits article");
    articles.forEach(article => {
        if (article.querySelector("#nom").textContent.includes(cas.nom_case)) {
            article.classList.add("selected");
        }
    });

    updateButtons();
}

function choisirAlim(alim) {
    ComposantSelected.alim = alim;
    localStorage.setItem("alim", JSON.stringify(alim));
    Popup("Alimentation sélectionnée : " + alim.nom_alim);

    document.querySelectorAll("#lesproduits article").forEach(article => {
        article.classList.remove("selected");
    });

    const articles = document.querySelectorAll("#lesproduits article");
    articles.forEach(article => {
        if (article.querySelector("#nom").textContent.includes(alim.nom_alim)) {
            article.classList.add("selected");
        }
    });

    updateButtons();
}

function reset() {
  composants.forEach(comp => localStorage.removeItem(comp));
  composants.forEach(comp => ComposantSelected[comp] = null);
  document.querySelectorAll("#lesproduits article").forEach(article => {
      article.classList.remove("selected");
  });

  updateButtons();

  location.reload();
}


function Popup(message) {
  let duration = 3000;
  const popup = document.createElement("p");
  popup.id = "popup";
  popup.textContent = message;
  document.getElementById("pop_info").appendChild(popup);

  requestAnimationFrame(() => popup.style.opacity = "0.75");
  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => popup.remove(), 300);
  }, duration);
}

function updateButtons() {
    for (let i = 0; i < composants.length; i++) {
        const current = composants[i];
        const btn = document.getElementById(`${current}`);
        
        if (i === 0) {
            btn.disabled = false;
        } else {
            const previous = composants[i - 1];
            btn.disabled = !ComposantSelected[previous];
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    updateButtons();
});