const URLT = 'http://localhost:8080/api/foodtrucks';

let all = document.querySelector('.all');
let marchio = document.querySelector('.marchio');
const URLMARCHI = 'http://localhost:8080/api/marchi';


function popolaDisponibilita() {

  fetch(URLT)
    .then(res => res.json())
    .then(data => {
      stampa(data);
      console.log(data);
    })
    
}
popolaDisponibilita();


function stampa(array) {
  array.forEach(marchio => {
    
      let marchio1 = marchio.nome;
      let genere1 = marchio.genere;

 marchio.foodtrucks.forEach(element => {
    if (element.disponibilità == true) {
      all.innerHTML += `<div class="card m-4 col-lg-3 col-md-4 col-sm-6 mb-4 cardTrue" data-id="${element.id}">
  <div class="card-body  p-0 ">
  <div class="box-image" style="height: 100%;">
          
    <img src="${element.immagine}" class="card-img-top" alt="" style="height: 100%;">
  </div>
  </div>
  <ul class="list-group ">
  <li class="list-group-item disponibile">Disponibile <i class="fas fa-check-circle text-success"></i>
  </li>
  </ul>
  <div class="card-body row">
    <h5 class="card-title text-center">${element.nome}</h5>
  <div class="indirizzo ms-auto col-8">${element.indirizzo}</div>
  <div class=" categoria  ms-auto col-4">${marchio1}</div>
  <div class=" categoria  ms-auto col-4">${genere1}</div>
  </div>
  </div>`;
      
    } else {
      all.innerHTML += `<div class="card m-4 col-lg-3 col-md-4 col-sm-6 mb-4" data-id="${element.id}">
  <div class="card-body  p-0 ">
  <div class="box-image" style="height: 100%;">

    <img src="${element.immagine}" class="card-img-top scurita" alt="" style="height: 100%;">
  </div>
  </div>
  <ul class="list-group ">
  <li class="list-group-item disponibile">Non disponibile <i class="fas fa-times-circle text-danger"></i>
  </li>
  </ul>
  <div class="card-body row ">
    <h5 class="card-title text-center col-12">${element.nome}</h5>
  <div class="indirizzo ms-auto col-8">${element.indirizzo}</div>
  <div class=" categoria  ms-auto col-4">${marchio1}</div>
  <div class=" categoria  ms-auto col-4">${genere1}</div>
  </div>
  </div>`;

    }

  });
});
inviaAlDettaglioTruck();
}


function inviaAlDettaglioTruck() {
  let card = document.querySelectorAll('.cardTrue');
  console.log(card);
  card.forEach(btn => {
    btn.addEventListener('click', function(){
      let id = btn.getAttribute('data-id');
        console.log(id);

        localStorage.setItem('id-truck', id);
        window.location.href = 'truck.html';
      })

    
  });

}

let user = document.querySelector('.user');
let carrello = document.querySelector('.carrello');
let logout = document.querySelector('.logout');
let login = document.querySelector('.login');

function logged() {

  let getIdUtente = localStorage.getItem('idUtente');
  if (getIdUtente != null || getIdUtente == 0 || getIdUtente === undefined) {
    console.log(getIdUtente);
    user.classList.remove('d-none');
    user.classList.add('d-block');
    carrello.classList.remove('d-none');
    carrello.classList.add('d-block');
    logout.classList.remove('d-none');
    logout.classList.add('d-block');
    login.classList.add('d-none');
  } else {
    console.log(55);
    user.classList.add('d-none');
    carrello.classList.add('d-none');
    logout.classList.add('d-none');
    login.classList.remove('d-none');
    login.classList.add('d-block');
  }

}
logged();

function logOut() {
  localStorage.removeItem('idUtente');
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

  numProdotti = arrayCarrello.length;
  numeroArticoli.innerHTML = numProdotti;

  if (numProdotti == 0) {
      numeroArticoli.innerHTML = null;
  }

}
contoCarrello();