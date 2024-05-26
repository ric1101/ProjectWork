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
    
    }

    console.log(panino);

    if (portata === "SNACK" && snack >= 1) {
        let snackDiv = document.querySelector(".snack");
          snackDiv.innerHTML += `<div class="col-md-3 mt-4">
          <div class="card-sl">
              <div class="card-image">
                  <img src="${element.immagine}" />
              </div>
              <div class="card-heading">
                  ${element.nome}
              </div>
              <div class="card-text">
              ${element.descrizione}
              </div>
              <div class="card-text">
              ${element.prezzoListino}
            </div>
                <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Acquista</a>
            </div>
        </div>`;
       
    } else if (portata === "PANINO" && panino >= 1) {
        let paninoDiv = document.querySelector(".panini");
        paninoDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl">
                     <div class="card-image">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino}
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Acquista</a>
                   </div>
               </div>`;
    } else if (portata === "BEVANDA" && bevanda >= 1) {
        let bevandaDiv = document.querySelector(".bevanda");
      bevandaDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl">
                     <div class="card-image">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino}
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Acquista</a>
                   </div>
               </div>`;
    } else if (portata === "DOLCE" && dolce >= 1) {
        let dolceDiv = document.querySelector(".dolce");
      dolceDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl">
                     <div class="card-image">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino}
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Acquista</a>
                   </div>
               </div>`;
    } else if (portata === "SPECIALITÀ" && specialita >= 1) {
        let specialitaDiv = document.querySelector(".specialita");
      specialitaDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl">
                     <div class="card-image">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino}
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Acquista</a>
                   </div>
               </div>`;
    } else if (portata === "CONTORNO" && contorno >= 1) {
        let contornoDiv = document.querySelector(".contorno");
      contornoDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl">
                     <div class="card-image">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino}
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Acquista</a>
                   </div>
               </div>`;
    } else if (portata === "FRITTO" && fritto >= 1) {
        let frittoDiv = document.querySelector(".fritto");
      frittoDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl">
                     <div class="card-image">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino}
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Acquista</a>
                   </div>
               </div>`;
    } else if (portata === "KEBAB" && kebab >= 1) {
        let kebabDiv = document.querySelector(".kebab");
      kebabDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl">
                     <div class="card-image">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino}
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Acquista</a>
                   </div>
               </div>`;
    } else if (portata === "POKE" && poke >= 1) {
        let pokeDiv = document.querySelector(".poke");
      pokeDiv.innerHTML += `<div class="col-md-3 mt-4">
                 <div class="card-sl">
                     <div class="card-image">
                         <img src="${element.immagine}" />
                     </div>
                     <div class="card-heading">
                         ${element.nome}
                     </div>
                     <div class="card-text">
                      ${element.descrizione}
                     </div>
                     <div class="card-text">
                     ${element.prezzoListino}
                   </div>
                       <a href="#!" class="card-button btnAcquista" data-id="${element.id}"> Acquista</a>
                   </div>
               </div>`;
    }
  });
  inviaAlCarrello();
}


let arrayId = [];

function inviaAlCarrello() {

  let btnAcquista = document.querySelectorAll('.btnAcquista');
  let controlloStorage = JSON.parse(localStorage.getItem('arrayId'));
  console.log(btnAcquista);
  if (controlloStorage) {
      arrayId = controlloStorage;
  }
  btnAcquista.forEach(btn => {
      btn.addEventListener('click', function () {
          let id = btn.getAttribute('data-id');
          arrayId.push(id);
          console.log(arrayId);
          localStorage.setItem('arrayId', JSON.stringify(arrayId));
          // contoCarrello();

      });

  });
}

function contoCarrello() {
  console.log(numProdotti);

  arrayCarrello = JSON.parse(localStorage.getItem('arrayId'));

  numProdotti = arrayCarrello.length;
  numeroArticoli.innerHTML = numProdotti;

  if (numProdotti == 0) {
      numeroArticoli.innerHTML = null;
  }

}
contoCarrello();
