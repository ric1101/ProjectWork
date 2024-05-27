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