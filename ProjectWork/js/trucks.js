const URLT = 'http://localhost:8080/api/foodtrucks';

let all = document.querySelector('.all');
let marchio = document.querySelector('.marchio');
const URLMARCHI = 'http://localhost:8080/api/marchi';


function popolaDisponibilita() {

  fetch(URLT)
    .then(res => res.json())
    .then(data => {
      stampa(data /*, data.marchio.nome, data.marchio.genere*/);
      console.log(data);
    })

}
popolaDisponibilita();


function stampa(array/*, marchio, genere*/) {
//   let marchio1 = marchio;
//   let genere1 = genere;
  array.forEach(element => {
    if (element.disponibilità == true) {
      all.innerHTML += `<div class="card m-4 col-lg-3 col-md-4 col-sm-6 mb-4">
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
  <a href="truck.html" class="card-title-link col-12">
    <h5 class="card-title text-center">${element.nome}</h5>
  </a>
  <div class="indirizzo ms-auto col-8">${element.indirizzo}</div>
  <div class=" categoria  ms-auto col-4"></div>
  <div class=" categoria  ms-auto col-4"></div>
  </div>
  </div>`;

    } else {
      all.innerHTML += `<div class="card m-4 col-lg-3 col-md-4 col-sm-6 mb-4">
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
  <div class=" categoria  ms-auto col-4"></div>
  <div class=" categoria  ms-auto col-4"></div>
  </div>
  </div>`;

    }

  });
}