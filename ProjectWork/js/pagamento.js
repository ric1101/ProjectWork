let richiesti = document.querySelectorAll(".richiesti");
let modal = document.querySelector(".modal");
let chiudi = document.querySelector(".close");
let paga = document.querySelector(".paga");


console.log(richiesti);
function pagato() {
  console.log("Funzione pagato chiamata");
  richiesti.forEach((element) => {
    if (element.value == "") {
      console.log(element.value);

      modal.classList.add("d-none");
    } else {
      modal.classList.add("d-block");
    }
  });
}

function chiusura() {
  localStorage.removeItem('id-truck');
  localStorage.removeItem('arrayId');
  localStorage.removeItem('arrayIdOggetto');
  localStorage.removeItem('totaleCarrello');
  modal.classList.remove("d-block");
  window.location.href = "index.html";
}

chiudi.addEventListener("click", chiusura);

// Aggiungi gestore di eventi click al pulsante "Paga"
paga.addEventListener("click", function (event) {
  event.preventDefault(); // Previeni l'invio predefinito del form

    pagato();
    inviaOrdine();

    modal.classList.add("d-block");
    localStorage.removeItem("arrayId");
  
});

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


class Ordine {
  constructor(
    data_ordine,
    numero_ordine,
    totale_ordine,
    piatti,
    utente,
    truck
  ) {
    (this.data_ordine = data_ordine),
      (this.numero_ordine = numero_ordine),
      (this.totale_ordine = totale_ordine),
      (this.piatti = piatti),
      (this.utente = utente),
      (this.truck = truck);
  }
}

let dataOggi = new Date().toISOString();
console.log(dataOggi);

let nuovoOrdine = {};

console.log(JSON.stringify(nuovoOrdine));

async function inviaOrdine() {
  let numOrder = 0;
  //FUNZIONE DATA ITALIANA
  function dataIt(dataSQL) {
    let data = new Date(dataSQL);
  
    let giorno = String(data.getDate()).padStart(2, "0");
    let mese = String(data.getMonth() + 1).padStart(2, "0");
    let anno = String(data.getFullYear());
  
    let dataFormattata = `${anno}-${mese}-${giorno}`
  
    return dataFormattata;
  }


  const URLT = `http://localhost:8080/api/ordini`;

  await fetch(URLT)
    .then((res) => res.json())
    .then((data) => {
      console.log(data); 
      data.forEach(element => {
        numOrder = element.numero_ordine;
        console.log(numOrder);
      });
    });
    numOrder++;
  let idUtente = JSON.parse(localStorage.getItem('idUtente'));
  let idTruck = JSON.parse(localStorage.getItem('id-truck'));
  let prodottiOrdine = JSON.parse(localStorage.getItem('arrayIdOggetto'));
  let totaleCarrello = JSON.parse(localStorage.getItem('totaleCarrello'));
  let totaleCarrelloFixed = totaleCarrello.toFixed(2);
  let totaleParsato = parseInt(totaleCarrelloFixed);
  console.log(totaleCarrelloFixed);


  


  let URLORDER = `http://localhost:8080/api/ordini/utente/${idUtente}/truck/${idTruck}`;
  console.log(idUtente, idTruck, prodottiOrdine);

  nuovoOrdine = new Ordine(
    dataIt(dataOggi),
    numOrder,
    totaleParsato,
    prodottiOrdine,
    idUtente,
    idTruck
  );
 
  console.log(JSON.stringify(nuovoOrdine));
  
  fetch(URLORDER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuovoOrdine),
  });
}

