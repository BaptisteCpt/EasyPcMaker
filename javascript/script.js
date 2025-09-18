
function replaceCPU(){
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

  for (i=0; i<5; i++ ){
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/Core i7-10700K.jpg"/>
        <div>
             <p id="nom">nomcpu</p>
             <p id="brand">brandcpu</p>
             <blockquote id="description">descriptioncpu</blockquote>
             <h5 id="conso">consocpu</h5>
           </div>`;
    newSection.append(article);
  }
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


function replaceRAM(){
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

  for (i=0; i<5; i++ ){
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/Kingston Fury Impact.jpg"/>
        <div>
             <p id="nom">nomram</p>
             <p id="brand">brandram</p>
             <blockquote id="description">descriptionram</blockquote>
             <h5 id="conso">consoram</h5>
           </div>`;
    newSection.append(article);
  }
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


function replaceMotherboard(){
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

  for (i=0; i<6; i++ ){
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/MSI B550 Tomahawk.jpg"/>
        <div>
             <p id="nom">nommb</p>
             <p id="brand">brandmb</p>
             <blockquote id="description">descriptionmb</blockquote>
             <h5 id="conso">consomb</h5>
           </div>`;
    newSection.append(article);
  }
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


function replaceSSD(){
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

  for (i=0; i<6; i++ ){
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/Samsung 970 EVO Plus 2TO.jpg"/>
        <div>
             <p id="nom">nomssd</p>
             <p id="brand">brandssd</p>
             <blockquote id="description">descriptionssd</blockquote>
             <h5 id="conso">consossd</h5>
           </div>`;
    newSection.append(article);
  }
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


function replaceCG(){
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

  for (i=0; i<5; i++ ){
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/RTX 4090.jpg"/>
        <div>
             <p id="nom">nomcg</p>
             <p id="brand">brandcg</p>
             <blockquote id="description">descriptioncg</blockquote>
             <h5 id="conso">consocg</h5>
           </div>`;
    newSection.append(article);
  }
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}



function replaceAIO(){
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

  for (i=0; i<5; i++ ){
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/Arctic Liquid Freezer II.jpg"/>
        <div>
             <p id="nom">nomaio</p>
             <p id="brand">brandaio</p>
             <blockquote id="description">descriptionaio</blockquote>
             <h5 id="conso">consoaio</h5>
           </div>`;
    newSection.append(article);
  }
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


function replaceCASE(){
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

  for (i=0; i<5; i++ ){
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/Cooler Master NR200.jpg"/>
        <div>
             <p id="nom">nomcase</p>
             <p id="brand">brandcase</p>
             <blockquote id="description">descriptioncase</blockquote>
             <h5 id="conso">consocase</h5>
           </div>`;
    newSection.append(article);
  }
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}


function replaceALIM(){
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

  for (i=0; i<5; i++ ){
    let article = document.createElement("article");
    article.id = "unproduit";
    article.innerHTML = `
    <img id="image" src="img/Corsair RM850x.jpg"/>
        <div>
             <p id="nom">nomalim</p>
             <p id="brand">brandalim</p>
             <blockquote id="description">descriptionalim</blockquote>
             <h5 id="conso">consoalim</h5>
           </div>`;
    newSection.append(article);
  }
  document.querySelector("#produitcontenant section").replaceWith(newSection);
}