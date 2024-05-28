let containerVideo = document.querySelector(".containerVideo");
let title = document.querySelector(".title");
let containerPiatti = document.querySelector(".container");





function dettaglioTruck() {
  let id = localStorage.getItem("id-truck");

  const URLT = `http://localhost:8080/api/marchi/truck/${id}`;

  fetch(URLT)
    .then((res) => res.json())
    .then((data) => {
      stampaTruck(data.piatti);
      //   console.log(data.piatti);
      stampaIndirizzoVideo(
        data.videoMarchio,
        data.foodtrucks.indirizzo,
        data.foodtrucks.coordinateGps,
        data.genere
      );
      //   console.log(data);
    });
}
dettaglioTruck();

function stampaIndirizzoVideo(video, indirizzo, coordinate, genere) {
  //   console.log(video);

  containerVideo.innerHTML += `<div class="row gx-0">
    <div class="col-lg-6">
    <div class="ratio ratio-16x9">
    <video autoplay loop muted>
    <source src="${video}" type="video/mp4">
    <source src="${video}" type="video/ogg">
    </video>
    </div>
    </div>
    <div class="col-lg-6">
    <div class="card rounded-0 info-truck h-100">
    <div class="card-body d-flex">
    <div class="col">
    <h3>Indirizzo</h3>
                        <p>${indirizzo}</p>
                        <h3>Genere</h3>
                        <p>${genere}</p>
                        <strong>
                            <li class="list-group-item disponibile">Disponibile <i
                                    class="fas fa-check-circle text-success"></i>
                        </strong>
                    </div>
                    <div class="col">
                    <div id="map"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>`;
  let coordinateArray = coordinate.split(",");
  let lat = coordinateArray[0];
  let lon = coordinateArray[1];
  //   console.log(lat, lon);

  var map = L.map("map").setView([lat, lon], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 50,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  var marker = L.marker([lat, lon]).addTo(map);
}

function stampaTruck(piatti) {
  let nomeTruck = localStorage.getItem("nome-truck");
  title.innerHTML = nomeTruck;
  let snack = 0;
  let panino = 0;
  let bevanda = 0;
  let dolce = 0;
  let specialita = 0;
  let contorno = 0;
  let fritto = 0;
  let kebab = 0;
  let poke = 0;
  let nigiri = 0;
  let gunkan = 0;
  let hosomaki = 0;
  let sashimi = 0;
  let salse = 0;


  piatti.forEach((element) => {
    // enum('SNACK-antipasto','PANINO-primo','BEVANDA','DOLCE','SPECIALITÀ','CONTORNO','FRITTO-contorno','KEBAB-secondo','POKE-primo')

    let portata = element.portata;
    // console.log(portata);


    if (portata === "SNACK" && snack < 1) {
      containerPiatti.innerHTML += `<h2 class="mt-4">SNACK</h2>
            <div class="row snack">
                
            </div>`;
      snack++;

    } else if (portata === "PANINO" && panino < 1) {
      containerPiatti.innerHTML += `<h2 class="mt-4">PANINO</h2>
        <div class="row panini">
         
        </div>`;
      panino++;

    } else if (portata === "BEVANDA" && bevanda < 1) {
      containerPiatti.innerHTML += `<h2 class="mt-4">BEVANDA</h2>
        <div class="row bevanda">
         
        </div>`;
      bevanda++;

    } else if (portata === "DOLCE" && dolce < 1) {
      containerPiatti.innerHTML += `<h2 class="mt-4">DOLCE</h2>
        <div class="row dolce">
         
        </div>`;
      dolce++;

    } else if (portata === "SPECIALITÀ" && specialita < 1) {
      containerPiatti.innerHTML += `<h2 class="mt-4">SPECIALITÀ</h2>
        <div class="row specialita">
           
        </div>`;
      specialita++;

    } else if (portata === "CONTORNO" && contorno < 1) {
      containerPiatti.innerHTML += `<h2 class="mt-4">CONTORNO</h2>
        <div class="row contorno">
            
        </div>`;
      contorno++;

    } else if (portata === "FRITTO" && fritto < 1) {
      containerPiatti.innerHTML += `<h2 class="mt-4">FRITTO</h2>
        <div class="row fritto">
         
        </div>`;
      fritto++;

    } else if (portata === "KEBAB" && kebab < 1) {
      containerPiatti.innerHTML += `<h2 class="mt-4">KEBAB</h2>
        <div class="row kebab">
         
        </div>`;
      kebab++;

    } else if (portata === "POKE" && poke < 1) {
      containerPiatti.innerHTML += `<h2 class="mt-4">POKE</h2>
        <div class="row poke">
         
        </div>`;
      poke++;

    } else if (portata === "NIGIRI" && nigiri < 1) {
      containerPiatti.innerHTML += `<h2 class="mt-4">NIGIRI</h2>
        <div class="row nigiri">
         
        </div>`;
      nigiri++;

    } else if (portata === "GUNKAN" && gunkan < 1) {
      containerPiatti.innerHTML += `<h2 class="mt-4">GUNKAN</h2>
        <div class="row gunkan">
         
        </div>`;
      gunkan++;

    } else if (portata === "HOSOMAKI" && hosomaki < 1) {
      containerPiatti.innerHTML += `<h2 class="mt-4">HOSOMAKI</h2>
        <div class="row hosomaki">
         
        </div>`;
      hosomaki++;

    } else if (portata === "SASHIMI" && sashimi < 1) {
      containerPiatti.innerHTML += `<h2 class="mt-4">SASHIMI</h2>
        <div class="row sashimi">
         
        </div>`;
      sashimi++;

    } else if (portata === "SALSE" && salse < 1) {
      containerPiatti.innerHTML += `<h2 class="mt-4">SALSE</h2>
        <div class="row salse">
         
        </div>`;
      salse++;

    }

    console.log(panino);

    if (portata === "SNACK" && snack >= 1) {
      let snackDiv = document.querySelector(".snack");
      snackDiv.innerHTML += `<div class="col-md-3 mt-4">
          <div class="card-sl active reveal fade-left">
              <div class="card-image text-center">
                  <img src="${element.immagine}" />
              </div>
              <div class="card-heading">
                  ${element.nome}
              </div>
              <div class="card-text">
              ${element.descrizione}
              </div>
              <div class="card-text">
              ${element.prezzoListino} €
            </div>
                <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Aggiungi al carrello</a>
            </div>
        </div>`;

    } else if (portata === "PANINO" && panino >= 1) {
      let paninoDiv = document.querySelector(".panini");
      paninoDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl active reveal fade-top">
                     <div class="card-image text-center">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino} €
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Aggiungi al carrello</a>
                   </div>
               </div>`;
    } else if (portata === "BEVANDA" && bevanda >= 1) {
      let bevandaDiv = document.querySelector(".bevanda");
      bevandaDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl active reveal fade-left">
                     <div class="card-image text-center">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino} €
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Aggiungi al carrello</a>
                   </div>
               </div>`;
    } else if (portata === "DOLCE" && dolce >= 1) {
      let dolceDiv = document.querySelector(".dolce");
      dolceDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl active reveal fade-top">
                     <div class="card-image text-center">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino} €
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Aggiungi al carrello</a>
                   </div>
               </div>`;
    } else if (portata === "SPECIALITÀ" && specialita >= 1) {
      let specialitaDiv = document.querySelector(".specialita");
      specialitaDiv.innerHTML += `<div class="col-md-3 mt-4 active reveal fade-left">
                 <div class="card-sl">
                     <div class="card-image text-center">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino} €
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Aggiungi al carrello</a>
                   </div>
               </div>`;
    } else if (portata === "CONTORNO" && contorno >= 1) {
      let contornoDiv = document.querySelector(".contorno");
      contornoDiv.innerHTML += `<div class="col-md-3 mt-4 active reveal fade-top">
                 <div class="card-sl">
                     <div class="card-image text-center">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino} €
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Aggiungi al carrello</a>
                   </div>
               </div>`;
    } else if (portata === "FRITTO" && fritto >= 1) {
      let frittoDiv = document.querySelector(".fritto");
      frittoDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl active reveal fade-left">
                     <div class="card-image text-center">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino} €
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Aggiungi al carrello</a>
                   </div>
               </div>`;
    } else if (portata === "KEBAB" && kebab >= 1) {
      let kebabDiv = document.querySelector(".kebab");
      kebabDiv.innerHTML += `<div class="col-md-3 mt-4 ">
                 <div class="card-sl active reveal fade-left">
                     <div class="card-image text-center">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino} €
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Aggiungi al carrello</a>
                   </div>
               </div>`;
    } else if (portata === "POKE" && poke >= 1) {
      let pokeDiv = document.querySelector(".poke");
      pokeDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl active reveal fade-top">
                     <div class="card-image text-center">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino} €
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Aggiungi al carrello</a>
                   </div>
               </div>`;
    } else if (portata === "NIGIRI" && nigiri >= 1) {
      let nigDiv = document.querySelector(".nigiri");
      nigDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl active reveal fade-top">
                     <div class="card-image text-center">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino} €
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Aggiungi al carrello</a>
                   </div>
               </div>`;
    } else if (portata === "GUNKAN" && gunkan >= 1) {
      let gunDiv = document.querySelector(".gunkan");
      gunDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl active reveal fade-top">
                     <div class="card-image text-center">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino} €
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Aggiungi al carrello</a>
                   </div>
               </div>`;
    } else if (portata === "HOSOMAKI" && hosomaki >= 1) {
      let hosDiv = document.querySelector(".hosomaki");
      hosDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl active reveal fade-top">
                     <div class="card-image text-center">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino} €
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Aggiungi al carrello</a>
                   </div>
               </div>`;
    } else if (portata === "SASHIMI" && sashimi >= 1) {
      let sasDiv = document.querySelector(".sashimi");
      sasDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl active reveal fade-top">
                     <div class="card-image text-center">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino} €
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Aggiungi al carrello</a>
                   </div>
               </div>`;
    } else if (portata === "SALSE" && salse >= 1) {
      let salDiv = document.querySelector(".salse");
      salDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl active reveal fade-top">
                     <div class="card-image text-center">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino} €
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Aggiungi al carrello</a>
                   </div>
               </div>`;
    }
  });
  descrizioneBreve();
  if (logged()) {
    console.log('loggato');
    inviaAlCarrello();
  } else {
    console.log('non loggato');
    mostraModal();
    
         
  }
  
}


function mostraModal() {
  let btnAcquista = document.querySelectorAll('.btnAcquista');
  let modal = document.querySelector(".modal");
  console.log(btnAcquista);
  btnAcquista.forEach((element) => {
    element.addEventListener('click', function() {
      console.log('dentro modal');
      modal.classList.remove('d-none');
      modal.classList.add('d-block');

    })
  })
}

  let arrayIdOggetto = [];
  let arrayId = [];

  function inviaAlCarrello() {

    let btnAcquista = document.querySelectorAll('.btnAcquista');
    let controlloStorage = JSON.parse(localStorage.getItem('arrayId'));
    let controlloStorageOggetto = JSON.parse(localStorage.getItem('arrayIdOggetto'));
    console.log(btnAcquista);
    if (controlloStorage && controlloStorageOggetto) {
      arrayId = controlloStorage;
      arrayIdOggetto = controlloStorageOggetto;
    }
    btnAcquista.forEach(btn => {
      btn.addEventListener('click', function () {
        let id = btn.getAttribute('data-id');
        let idParsato = parseInt(id);
        let oggettoId = { 'id': idParsato };
        arrayIdOggetto.push(oggettoId);
        arrayId.push(id);
        localStorage.setItem('arrayIdOggetto', JSON.stringify(arrayIdOggetto));
        localStorage.setItem('arrayId', JSON.stringify(arrayId));
        contoCarrello();

      });

    });
  }

  function descrizioneBreve() {

    let cardText = document.querySelectorAll('.card-text');
    cardText.forEach(desc => {
      // console.log(cardText);
      let descrizione = desc.textContent.trim();
      if (descrizione.length > 30) {
        // console.log(descrizione.length);
        desc.textContent = descrizione.substring(0, 30);
        desc.textContent += '...';
        // console.log(desc.textContent);
      }

    });

  }

  let user = document.querySelector('.user');
  let carrello = document.querySelector('.carrello');
  let logout = document.querySelector('.logout');
  let login = document.querySelector('.login');


  function logged(parametro) {

    let getIdUtente = localStorage.getItem('idUtente');
    if (getIdUtente != null) {
      console.log(getIdUtente);
      user.classList.remove('d-none');
      user.classList.add('d-block');
      carrello.classList.remove('d-none');
      carrello.classList.add('d-block');
      logout.classList.remove('d-none');
      logout.classList.add('d-block');
      login.classList.add('d-none');
      return true;

    } else {
      console.log(55);
      user.classList.add('d-none');
      carrello.classList.add('d-none');
      logout.classList.add('d-none');
      login.classList.remove('d-none');
      login.classList.add('d-block');
      return false;

    }

  }
  logged();

  function logOut() {
    localStorage.removeItem('idUtente');
    localStorage.removeItem('arrayIdOggetto');
    localStorage.removeItem('arrayId');
    localStorage.removeItem('totaleCarrello');
    console.log('ciao');
    logged();
  }

  logout.addEventListener('click', logOut);


  let arrayCarrello = [];
  let numeroArticoli = document.querySelector('#numeroArticoli');
  let numProdotti = 0;
  
  function contoCarrello() {
      console.log(numProdotti);
  
      arrayCarrello = JSON.parse(localStorage.getItem('arrayId'));
      console.log(arrayCarrello);
  
      if (arrayCarrello !== null) {
  
          numProdotti = arrayCarrello.length;
      }
      console.log(numProdotti);
      numeroArticoli.innerHTML = numProdotti;
  
      if (numProdotti == 0) {
          numeroArticoli.innerHTML = null;
      }
  
  }
  contoCarrello();