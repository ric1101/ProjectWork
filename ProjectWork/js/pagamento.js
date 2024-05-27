
let richiesti = document.querySelectorAll('.richiesti');
let modal = document.querySelector('.modal');
let chiudi = document.querySelector('.close');
let paga = document.querySelector('.paga');
const form = document.querySelector('.needs-validation');
const forms = document.querySelectorAll('.needs-validation');


console.log(richiesti);
function pagato() {
  console.log('Funzione pagato chiamata');
  richiesti.forEach(element => {
    if (element.value == '') {
      console.log(element.value);

      modal.classList.add('d-none');
    } else {

      modal.classList.add('d-block');
    }
  });

}

function chiusura() {

  modal.classList.remove('d-block');
  window.location.href = 'index.html';
}

chiudi.addEventListener('click', chiusura);

// Aggiungi gestore di eventi click al pulsante "Paga"
paga.addEventListener('click', function (event) {
  event.preventDefault(); // Previeni l'invio predefinito del form

  // Esegui la validazione del form
  if (form.checkValidity()) {
    // Se il form è valido, mostra il modal
    modal.classList.add('d-block');
    pagato();
    localStorage.removeItem('arrayId');
  } else {
    // Se il form non è valido, mostra gli errori di validazione
    form.classList.add('was-validated');
  }
});

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