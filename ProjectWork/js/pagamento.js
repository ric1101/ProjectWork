let richiesti = document.querySelectorAll(".richiesti");
let modal = document.querySelector(".modal");
let chiudi = document.querySelector(".close");
let paga = document.querySelector(".paga");
let numOrderModal = document.querySelector(".numOrdine")


function verificaInserimenti() {

  let inputNome = document.getElementById("validationCustom01");
  let inputCognome = document.getElementById("validationCustom02");
  let inputTitolare = document.getElementById("validationCustom07");
  let inputNumero = document.getElementById("validationCustom08");
  let inputScadenza = document.getElementById("validationCustom09");
  let inputCvv = document.getElementById("validationCustom10");
  let datiMancanti = document.querySelector(".datiMancanti");


  if (inputNome.value.length === 0 ||
    inputCognome.value.length === 0 ||
    inputTitolare.value.length === 0 ||
    inputNumero.value.length === 0 ||
    inputScadenza.value.length === 0 ||
    inputCvv.value.length === 0
  ) {
    datiMancanti.innerHTML = "Compilare tutti i campi!";
    modal.classList.add("d-none");

  } else {
    datiMancanti.innerHTML = "";
    pagato();
  }
}

console.log(richiesti);
function pagato() {
  let numCarta = document.querySelector('#validationCustom08');
  let scadenza = document.querySelector('#validationCustom09');
  let cvv = document.querySelector('#validationCustom10');
  let invalidNumber = document.querySelector('.invalidNumber');
  let invalidScandenza = document.querySelector('.invalidScadenza');
  let invalidCvv = document.querySelector('.invalidCvv');
  console.log("Funzione pagato chiamata");




  let numCartaValue = numCarta.value.replace(/-/g, '');


  if (numCartaValue.length !== 16) {
    invalidNumber.innerHTML = 'Numero non valido';
    modal.classList.add("d-none");

  } else if (scadenza.value.length !== 5 || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(scadenza.value)) {
    invalidScandenza.innerHTML = 'Scadenza non valida';
    modal.classList.add("d-none");

  } else if (cvv.value.length !== 3) {
    invalidCvv.innerHTML = 'Cvv non valido';
    modal.classList.add("d-none");

  } else {

    invalidNumber.innerHTML = '';
    invalidScandenza.innerHTML = '';
    invalidCvv.innerHTML = '';


    modal.classList.remove("d-none");
    modal.classList.add("d-block");
    inviaOrdine();
    console.log("Ordine inviato");

  }

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

  verificaInserimenti();


  modal.classList.add("d-block");
  localStorage.removeItem("arrayId");

});

/*---------------  VALIDAZIONE  E FORMATTAZIONE PERSONALIZZATA INPUT ----------------*/

//CONTROLLO CARTA DI CREDITO E FORMATTAZIONE PERSONALIZZATA
document.getElementById('validationCustom08').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');
  let valoreFormattato = value.replace(/(.{4})/g, '$1-').trim();
  e.target.value = valoreFormattato.slice(0, 19);
  console.log(value.length)
  validazioneNumeroCarta(e.target);
});
//CONTROLLO SCADENZA E FORMATTAZIONE PERSONALIZZATA
document.getElementById('validationCustom09').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 2) {
    value = value.slice(0, 2) + '/' + value.slice(2);
  }
  e.target.value = value.slice(0, 5);
  validazioneDataScadenza(e.target);
});
//CONTROLLO CVV E FORMATTAZIONE PERSONALIZZATA
document.getElementById('validationCustom10').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');
  e.target.value = value.slice(0, 3);
  validazioneCvv(e.target);
});

//COLORE LIVE NUMERO CARTA
function validazioneNumeroCarta(input) {
  let value = input.value.replace(/-/g, '');
  if (value.length === 16) {
    input.classList.remove('nonValido');
    input.classList.add('valido');
  } else {
    input.classList.remove('valido');
    input.classList.add('nonValido');
  }
}
//COLORE LIVE DATA SCADENZA
function validazioneDataScadenza(input) {
  let value = input.value;
  if (/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
    input.classList.remove('nonValido');
    input.classList.add('valido');
  } else {
    input.classList.remove('valido');
    input.classList.add('nonValido');
  }
}
//COLORE LIVE CVV
function validazioneCvv(input) {
  let value = input.value;
  if (/^\d{3}$/.test(value)) {
    input.classList.remove('nonValido');
    input.classList.add('valido');
  } else {
    input.classList.remove('valido');
    input.classList.add('nonValido');
  }
}



/*--------------- ----------------------------------------------------------------------*/

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
      data.sort((a, b) => b.numero_ordine - a.numero_ordine);
      let ultimoOrdine = data[0].numero_ordine;
      console.log(ultimoOrdine, "numero ultimo ordine")
      let ultimoOrdineIncrementato = ultimoOrdine + 1;
      console.log(ultimoOrdineIncrementato, "ultimo ordine incremento")
      localStorage.setItem('numeroOrdine', ultimoOrdineIncrementato);

      console.log(data);
      // data.forEach(element => {
      //   numOrder = element.numero_ordine;
      //   console.log(numOrder, "sono il numero ordine");
      // });
    });
  numOrder++;
  let idUtente = JSON.parse(localStorage.getItem('idUtente'));
  let idTruck = JSON.parse(localStorage.getItem('id-truck'));
  let prodottiOrdine = JSON.parse(localStorage.getItem('arrayIdOggetto'));
  let totaleCarrello = JSON.parse(localStorage.getItem('totaleCarrello'));
  let numeroOrdine = JSON.parse(localStorage.getItem('numeroOrdine'));
  let totaleCarrelloFixed = totaleCarrello.toFixed(2);
  let totaleParsato = parseInt(totaleCarrelloFixed);
  console.log(totaleCarrelloFixed);


  numOrderModal.innerHTML = numeroOrdine;


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

