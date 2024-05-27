let richiesti = document.querySelectorAll(".richiesti");
let modal = document.querySelector(".modal");
let chiudi = document.querySelector(".close");
let paga = document.querySelector(".paga");
const form = document.querySelector(".needs-validation");
const forms = document.querySelectorAll(".needs-validation");

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
  modal.classList.remove("d-block");
  window.location.href = "index.html";
}

chiudi.addEventListener("click", chiusura);

// Aggiungi gestore di eventi click al pulsante "Paga"
paga.addEventListener("click", function (event) {
  event.preventDefault(); // Previeni l'invio predefinito del form

  // Esegui la validazione del form
  if (form.checkValidity()) {
    // Se il form è valido, mostra il modal
    modal.classList.add("d-block");
    pagato();
    localStorage.removeItem("arrayId");
  } else {
    // Se il form non è valido, mostra gli errori di validazione
    form.classList.add("was-validated");
  }
});

let user = document.querySelector(".user");
let carrello = document.querySelector(".carrello");
let logout = document.querySelector(".logout");
let login = document.querySelector(".login");

function logged() {
  let getIdUtente = localStorage.getItem("idUtente");
  if (getIdUtente != null) {
    console.log(getIdUtente);
    user.classList.remove("d-none");
    user.classList.add("d-block");
    carrello.classList.remove("d-none");
    carrello.classList.add("d-block");
    logout.classList.remove("d-none");
    logout.classList.add("d-block");
    login.classList.add("d-none");
  } else {
    console.log(55);
    user.classList.add("d-none");
    carrello.classList.add("d-none");
    logout.classList.add("d-none");
    login.classList.remove("d-none");
    login.classList.add("d-block");
  }
}
logged();

function logOut() {
  localStorage.removeItem("idUtente");
  console.log("ciao");
  logged();
}

logout.addEventListener("click", logOut);

let arrayCarrello = [];
let numeroArticoli = document.querySelector("#numeroArticoli");
let numProdotti = 0;

function contoCarrello() {
  console.log(numProdotti);

  arrayCarrello = JSON.parse(localStorage.getItem("arrayId"));

  numProdotti = arrayCarrello.length;
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

function inviaOrdine() {
  let numeroOrdine = 875289;
  numeroOrdine++;
  console.log(numeroOrdine);

  let idUtente = JSON.parse(localStorage.getItem('idUtente'));
  let idTruck = JSON.parse(localStorage.getItem('id-truck'));
  let prodottiOrdine = JSON.parse(localStorage.getItem('arrayIdOggetto'));
  let totaleCarrello = JSON.parse(localStorage.getItem('totaleCarrello'));
  let totaleCarrelloFixed = totaleCarrello.toFixed(2);
  let totaleParsato = parseInt(totaleCarrelloFixed);
  console.log(totaleCarrelloFixed);


//FUNZIONE DATA ITALIANA
function dataIt(dataSQL) {
  let data = new Date(dataSQL);

  let giorno = String(data.getDate()).padStart(2, "0");
  let mese = String(data.getMonth() + 1).padStart(2, "0");
  let anno = String(data.getFullYear());

  let dataFormattata = `${anno}-${mese}-${giorno}`

  return dataFormattata;
}



  let URLORDER = `http://localhost:8080/api/ordini/utente/${idUtente}/truck/${idTruck}`;
  console.log(idUtente, idTruck, prodottiOrdine);

  nuovoOrdine = new Ordine(
    dataIt(dataOggi),
    numeroOrdine,
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
inviaOrdine();
