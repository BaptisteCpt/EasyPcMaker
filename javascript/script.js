
async function replaceCPU(filter = "all"){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les CPUs Disponibles</h4>
  <p>Filtré sur : ${filter}</p>
  <input type="radio" name="filtre" id="AM5" value="AM5" onclick="filtrerCPU(value)"/> <label for="AM5">AM5</label>
  <input type="radio" name="filtre" id="AM4" value="AM4" onclick="filtrerCPU(value)"/> <label for="AM4">AM4</label>
  <input type="radio" name="filtre" id="LGA1700" value="LGA1700" onclick="filtrerCPU(value)"/> <label for="LGA1700">LGA1700</label>
  <input type="radio" name="filtre" id="LGA1200" value="LGA1200" onclick="filtrerCPU(value)"/> <label for="LGA1200">LGA1400</label>
  <input type="radio" name="filtre" id="TR4" value="TR4" onclick="filtrerCPU(value)"/> <label for="TR4">TR4</label>
  <input type="reset" name ="reset" value="reset" onclick="filtrerCPU('all')"/>
  `;
  newSection.append(headerproduit);

  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/cpu");
  const data = await response.json();

  data.forEach(element => {
    if(filter=="all"){
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
    }else{
      if(element.nom_socket==filter){
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
      }
    }
    
  });
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


async function replaceRAM(filter = "all"){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les RAMs Disponibles</h4>
  <p>Filtré sur : ${filter}</p>
  <input type="radio" name="filtre" id="DDR5" value="DDR5" onclick="filtrerRAM(value)"/> <label for="DDR5">DDR5</label>
  <input type="radio" name="filtre" id="DDR4" value="DDR4" onclick="filtrerRAM(value)"/> <label for="DDR4">DDR4</label>
  <input type="radio" name="filtre" id="DDR3" value="DDR3" onclick="filtrerRAM(value)"/> <label for="DDR3">DDR3</label>
  <input type="radio" name="filtre" id="DDR2" value="DDR2" onclick="filtrerRAM(value)"/> <label for="DDR2">DDR2</label>
  <input type="radio" name="filtre" id="LPDDR5" value="LPDDR5" onclick="filtrerRAM(value)"/> <label for="LPDDR5">LPDDR5</label>
    <input type="reset" name ="reset" value="reset" onclick="filtrerRAM('all')"/>
  `;
  newSection.append(headerproduit);
  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/ram");
  const data = await response.json();

  data.forEach(element => {
    if(filter=="all"){
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
    }else{
      if(element.type==filter){
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
      }
    }
    
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
  <p>Filtré sur : ${filter}</p>
  <input type="radio" name="filtre" id="AM5" value="AM5" onclick="filtrerMotherboard(value)"/> <label for="AM5">AM5</label>
  <input type="radio" name="filtre" id="AM4" value="AM4" onclick="filtrerMotherboard(value)"/> <label for="AM4">AM4</label>
  <input type="radio" name="filtre" id="LGA1700" value="LGA1700" onclick="filtrerMotherboard(value)"/> <label for="LGA1700">LGA1700</label>
  <input type="radio" name="filtre" id="LGA1200" value="LGA1200" onclick="filtrerMotherboard(value)"/> <label for="LGA1200">LGA1400</label>
  <input type="radio" name="filtre" id="TR4" value="TR4" onclick="filtrerMotherboard(value)"/> <label for="TR4">TR4</label>

  <input type="radio" name="filtre" id="DDR5" value="DDR5" onclick="filtrerMotherboard(value)"/> <label for="DDR5">DDR5</label>
  <input type="radio" name="filtre" id="DDR4" value="DDR4" onclick="filtrerMotherboard(value)"/> <label for="DDR4">DDR4</label>
  <input type="radio" name="filtre" id="DDR3" value="DDR3" onclick="filtrerMotherboard(value)"/> <label for="DDR3">DDR3</label>
  <input type="radio" name="filtre" id="DDR2" value="DDR2" onclick="filtrerMotherboard(value)"/> <label for="DDR2">DDR2</label>
  <input type="radio" name="filtre" id="LPDDR5" value="LPDDR5" onclick="filtrerMotherboard(value)"/> <label for="LPDDR5">LPDDR5</label>

  <input type="radio" name="filtre" id="PCIe 5.0 x16" value="PCIe 5.0 x16" onclick="filtrerMotherboard(value)"/> <label for="PCIe 5.0 x16">PCIe 5.0 x16</label>
  <input type="radio" name="filtre" id="PCIe 4.0 x16" value="PCIe 4.0 x16" onclick="filtrerMotherboard(value)"/> <label for="PCIe 4.0 x16">PCIe 4.0 x16</label>
  <input type="radio" name="filtre" id="PCIe 4.0 x8" value="PCIe 4.0 x8" onclick="filtrerMotherboard(value)"/> <label for="PCIe 4.0 x8">PCIe 4.0 x8</label>
  <input type="radio" name="filtre" id="PCIe 3.0 x16" value="PCIe 3.0 x16" onclick="filtrerMotherboard(value)"/> <label for="PCIe 3.0 x16">PCIe 3.0 x16</label>
  <input type="radio" name="filtre" id="PCIe 2.0 x16" value="PCIe 2.0 x16" onclick="filtrerMotherboard(value)"/> <label for="PCIe 2.0 x16">PCIe 2.0 x16</label>
  
  <input type="radio" name="filtre" id="ATX" value="ATX" onclick="filtrerMotherboard(value)"/> <label for="ATX">ATX</label>
  <input type="radio" name="filtre" id="MicroATX" value="MicroATX" onclick="filtrerMotherboard(value)"/> <label for="MicroATX">MicroATX</label>
  <input type="radio" name="filtre" id="MiniITX" value="MiniITX" onclick="filtrerMotherboard(value)"/> <label for="MiniITX">MiniITX</label>
  <input type="radio" name="filtre" id="EATX" value="EATX" onclick="filtrerMotherboard(value)"/> <label for="EATX">EATX</label>
  <input type="radio" name="filtre" id="XL-ATX" value="XL-ATX" onclick="filtrerMotherboard(value)"/> <label for="XL-ATX">XL-ATX</label>

    <input type="reset" name ="reset" value="reset" onclick="filtrerMotherboard('all')"/>
  `;
  newSection.append(headerproduit);

  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/motherboard");
  const data = await response.json();

    data.forEach(element => {
    if(filter=="all"){
      let article = document.createElement("article");
      article.id = "unproduit";
      article.innerHTML = `
      <img id="image" src="img/${element.nom_motherboard}.jpg"/>
          <div>
              <p id="nom">Nom : ${element.nom_motherboard}</p>
              <p id="brand">Marque : ${element.brand_motherboard}</p>
              <h5 id="conso">Taille : ${element.size_mb}</h5>
          </div>`;
      newSection.append(article);
    }else{
      if(element.nom_socket==filter || element.type==filter || element.pcie==filter || element.size_mb==filter){
        let article = document.createElement("article");
        article.id = "unproduit";
        article.innerHTML = `
        <img id="image" src="img/${element.nom_motherboard}.jpg"/>
          <div>
              <p id="nom">Nom : ${element.nom_motherboard}</p>
              <p id="brand">Marque : ${element.brand_motherboard}</p>
              <h5 id="conso">Taille : ${element.size_mb}</h5>
          </div>`;
        newSection.append(article);
      }
    }
    
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
  <p>Filtré sur : ${filter}</p>
  <input type="radio" name="filtre" id="Samsung" value="Samsung" onclick="filtrerSSD(value)"/> <label for="Samsung">Samsung</label>
  <input type="radio" name="filtre" id="WD" value="WD" onclick="filtrerSSD(value)"/> <label for="WD">WD</label>
  <input type="radio" name="filtre" id="Crucial" value="Crucial" onclick="filtrerSSD(value)"/> <label for="Crucial">Crucial</label>
  <input type="radio" name="filtre" id="Kingston" value="Kingston" onclick="filtrerSSD(value)"/> <label for="Kingston">Kingston</label>
  <input type="radio" name="filtre" id="Seagate" value="Seagate" onclick="filtrerSSD(value)"/> <label for="Seagate">Seagate</label>
    <input type="reset" name ="reset" value="reset" onclick="filtrerSSD('all')"/>
  `;
  newSection.append(headerproduit);

    const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/ssd");
  const data = await response.json();

  data.forEach(element => {
    if(filter=="all"){
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
    }else{
      if(element.brand_ssd==filter){
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
      }
    }
    
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
  <p>Filtré sur : ${filter}</p>
  <input type="radio" name="filtre" id="PCIe 5.0 x16" value="PCIe 5.0 x16" onclick="filtrerCG(value)"/> <label for="PCIe 5.0 x16">PCIe 5.0 x16</label>
  <input type="radio" name="filtre" id="PCIe 4.0 x16" value="PCIe 4.0 x16" onclick="filtrerCG(value)"/> <label for="PCIe 4.0 x16">PCIe 4.0 x16</label>
  <input type="radio" name="filtre" id="PCIe 4.0 x8" value="PCIe 4.0 x8" onclick="filtrerCG(value)"/> <label for="PCIe 4.0 x8">PCIe 4.0 x8</label>
  <input type="radio" name="filtre" id="PCIe 3.0 x16" value="PCIe 3.0 x16" onclick="filtrerCG(value)"/> <label for="PCIe 3.0 x16">PCIe 3.0 x16</label>
  <input type="radio" name="filtre" id="PCIe 2.0 x16" value="PCIe 2.0 x16" onclick="filtrerCG(value)"/> <label for="PCIe 2.0 x16">PCIe 2.0 x16</label>
    <input type="reset" name ="reset" value="reset" onclick="filtrerCG('all')"/>
  `;
  newSection.append(headerproduit);
  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/gpu");
  const data = await response.json();

 data.forEach(element => {
    if(filter=="all"){
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
    }else{
      if(element.pcie==filter){
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
      }
    }
    
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
  <p>Filtré sur : ${filter} taille</p>
  <input type="radio" name="filtre" id="0" value="0" onclick="filtrerAIO(value)"/> <label for="0">0cm</label>
  <input type="radio" name="filtre" id="240" value="240" onclick="filtrerAIO(value)"/> <label for="240">240cm</label>
  <input type="radio" name="filtre" id="360" value="360" onclick="filtrerAIO(value)"/> <label for="360">360cm</label>
  <input type="radio" name="filtre" id="280" value="280" onclick="filtrerAIO(value)"/> <label for="280">280cm</label>
    <input type="reset" name ="reset" value="reset" onclick="filtrerAIO('all')"/>
  `;
  newSection.append(headerproduit);
const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/cooler");
  const data = await response.json();

  data.forEach(element => {
    if(filter=="all"){
      let article = document.createElement("article");
      article.id = "unproduit";
      article.innerHTML = `
      <img id="image" src="img/${element.nom_ref}.jpg"/>
          <div>
              <p id="nom">Nom : ${element.nom_ref}</p>
              <p id="brand">Marque : ${element.brand_ref}</p>
              <h5 id="conso">Taille : ${element.size_aio}cm</h5>
          </div>`;
      newSection.append(article);
    }else{
      if(element.size_aio==filter){
        let article = document.createElement("article");
        article.id = "unproduit";
        article.innerHTML = `
        <img id="image" src="img/${element.nom_ref}.jpg"/>
          <div>
              <p id="nom">Nom : ${element.nom_ref}</p>
              <p id="brand">Marque : ${element.brand_ref}</p>
              <h5 id="conso">Taille : ${element.size_aio}cm</h5>
          </div>`;
        newSection.append(article);
      }
    }
    
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
  <p>Filtré sur taille : ${filter} </p>
  <input type="radio" name="filtre" id="ATX" value="ATX" onclick="filtrerCase(value)"/> <label for="ATX">ATX</label>
  <input type="radio" name="filtre" id="MicroATX" value="MicroATX" onclick="filtrerCase(value)"/> <label for="MicroATX">MicroATX</label>
  <input type="radio" name="filtre" id="MiniITX" value="MiniITX" onclick="filtrerCase(value)"/> <label for="MiniITX">MiniITX</label>
  <input type="radio" name="filtre" id="EATX" value="EATX" onclick="filtrerCase(value)"/> <label for="EATX">EATX</label>
  <input type="radio" name="filtre" id="XL-ATX" value="XL-ATX" onclick="filtrerCase(value)"/> <label for="XL-ATX">XL-ATX</label>
    <input type="reset" name ="reset" value="reset" onclick="filtrerCase('all')"/>
  `;
  newSection.append(headerproduit);

  if(filter == "all"){
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
  }
  else{
    const response = await fetch(`https://easy-pc-maker.yoanc.dev/baptiste/case?size_mb=${filter}`);
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
  }
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


async function replaceALIM(filter = "all"){
  let newSection = document.createElement('section');
  newSection.id = "lesproduits";
  let headerproduit = document.createElement('section');
  headerproduit.id = "headerproduit";
  headerproduit.innerHTML = `
  <h4>Voici Les Alimentations Disponibles</h4>
  <p>Filtré sur : ${filter} taille</p>
  <input type="radio" name="filtre" id="1000" value="1000" onclick="filtrerAlim(value)"/> <label for="1000">1000Watt</label>
  <input type="radio" name="filtre" id="850" value="850" onclick="filtrerAlim(value)"/> <label for="850">850Watt</label>
  <input type="radio" name="filtre" id="750" value="750" onclick="filtrerAlim(value)"/> <label for="750">750Watt</label>
  <input type="radio" name="filtre" id="650" value="650" onclick="filtrerAlim(value)"/> <label for="650">650Watt</label>
  <input type="radio" name="filtre" id="550" value="550" onclick="filtrerAlim(value)"/> <label for="550">550Watt</label>
    <input type="reset" name ="reset" value="reset" onclick="filtrerAlim('all')"/>
  `;
  newSection.append(headerproduit);
  const response = await fetch("https://easy-pc-maker.yoanc.dev/baptiste/power-supply");
  const data = await response.json();

  data.forEach(element => {
    if(filter=="all"){
      let article = document.createElement("article");
      article.id = "unproduit";
      article.innerHTML = `
      <img id="image" src="img/${element.nom_alim}.jpg"/>
          <div>
              <p id="nom">Nom : ${element.nom_alim}</p>
              <p id="brand">Marque : ${element.brand_alim}</p>
              <h5 id="conso">Capacité : ${element.watt_alim} Watt</h5>
          </div>`;
      newSection.append(article);
    }else{
      if(element.watt_alim==filter){
        let article = document.createElement("article");
        article.id = "unproduit";
        article.innerHTML = `
        <img id="image" src="img/${element.nom_alim}.jpg"/>
          <div>
              <p id="nom">Nom : ${element.nom_alim}</p>
              <p id="brand">Marque : ${element.brand_alim}</p>
              <h5 id="conso">Capacité : ${element.watt_alim} Watt</h5>
          </div>`;
        newSection.append(article);
      }
    }
    
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