//API RICERCA ORDINI UTENTE
const API = 'http://localhost:8080/api/utenti/';
let id = localStorage.getItem("idUtente");

let bodyTable = document.querySelector(".bodyTable");

console.log(id, "id utente");


//FETCH PER PRENDERE GLI ORDINI
fetch(API + id)
  .then((res) => res.json())
  .then((data) => {

    console.log(data)
    console.log(data.ordini)
    console.log(data.ordini[0].data_ordine)

    data.ordini.sort((a, b) => b.numero_ordine - a.numero_ordine);

    stampaOrdine(data.ordini)
  });


//FUNZIONE PER STAMPARE ORDINE
function stampaOrdine(arrayOrdini) {

  arrayOrdini.forEach(ordine => {

    let NuovoOrdine = document.createElement('tr');

    NuovoOrdine.innerHTML = `
    <td class="col-3 col-md-2">${dataIt(ordine.data_ordine)}</td>
    <td class="col-3 col-md-2">#${ordine.numero_ordine}</td>
    <td class="col-3 col-md-2 piatti d-flex"></td>
    <td class="col-3 col-md-2 ">${ordine.totale_ordine.toFixed(2)}€</td>`;

    bodyTable.appendChild(NuovoOrdine);

    let piattiTD = NuovoOrdine.querySelector(".piatti");

    ordine.piatti.forEach(piatto => {
      let nuovoPiatto = document.createElement('div');
      nuovoPiatto.className = 'piatto';
      nuovoPiatto.innerHTML = `
        <img src="${piatto.immagine}" alt="${piatto.nome}">
      `;
      piattiTD.appendChild(nuovoPiatto);
    });

  });
}


//FUNZIONE DATA ITALIANA
function dataIt(dataSQL) {
  let data = new Date(dataSQL);

  let giorno = String(data.getDate()).padStart(2, "0");
  let mese = String(data.getMonth() + 1).padStart(2, "0");
  let anno = String(data.getFullYear());

  let dataFormattata = `${giorno}-${mese}-${anno}`

  return dataFormattata;
}

let user = document.querySelector('.user');
let carrello = document.querySelector('.carrello');
let logout = document.querySelector('.logout');
let login = document.querySelector('.login');
let admin = document.querySelector('.admin');

function logged() {

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

  } else {
    console.log(55);
    user.classList.add('d-none');
    carrello.classList.add('d-none');
    logout.classList.add('d-none');
    login.classList.remove('d-none');
    login.classList.add('d-block');
  }

}


function logOut() {
  localStorage.removeItem('idUtente');
  localStorage.removeItem('arrayIdOggetto');
  localStorage.removeItem('arrayId');
  localStorage.removeItem('totaleCarrello');

  let ruolo = localStorage.getItem('ruolo');
  console.log(ruolo);
  if (ruolo === "USER") {
    console.log('si');
    logged();
  } else if (ruolo === "ADMIN") {
    loggedAdmin();
  }
  localStorage.removeItem('ruolo');
}

logout.addEventListener('click', logOut);
let ruolo = "";

function ottieniRuolo() {

  let idUtente = localStorage.getItem('idUtente');

  if (idUtente !== null) {

    // fetch(`http://localhost:8080/api/utenti/${idUtente}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data.ruolo);

    //     ruolo = data.ruolo;
    //     localStorage.setItem('ruolo', ruolo);


    //     console.log(ruolo);
    let ruolo = localStorage.getItem('ruolo');
    if (ruolo === "USER") {
      console.log('si');
      logged();
    } else if (ruolo === "ADMIN") {
      loggedAdmin();
    }
  }/*)*/;
}

// }
ottieniRuolo();
function loggedAdmin() {
  let getIdUtente = localStorage.getItem('idUtente');

  if (getIdUtente != null) {
    console.log(getIdUtente);
    user.classList.remove('d-none');
    user.classList.add('d-block');
    admin.classList.remove('d-none');
    admin.classList.add('d-block');
    logout.classList.remove('d-none');
    logout.classList.add('d-block');
    login.classList.add('d-none');

  } else {
    console.log(55);
    user.classList.add('d-none');
    logout.classList.add('d-none');
    admin.classList.add('d-none');
    login.classList.remove('d-none');
    login.classList.add('d-block');
  }

}


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