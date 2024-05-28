let user = document.querySelector('.user');
let carrello = document.querySelector('.carrello');
let logout = document.querySelector('.logout');
let login = document.querySelector('.login');


let nomeCognome = document.querySelector('.nomeCognome');
let nome = document.querySelector('.nome');
let cognome = document.querySelector('.cognome');
let dataNascita = document.querySelector('.dataNascita');
let role = document.querySelector('.role');
let email = document.querySelector('.email');


function userView() {
  let idUtente = localStorage.getItem('idUtente');
  const URLT = `http://localhost:8080/api/utenti/${idUtente}`;

  fetch(URLT)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      nomeCognome.innerHTML = data.nome + data.cognome;
      nome.innerHTML = data.nome;
      cognome.innerHTML = data.cognome;
      dataNascita.innerHTML = data.data_nascita;
      role.innerHTML = data.ruolo;
      email.innerHTML = data.email;
    });

}
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
    userView();
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

  numProdotti = arrayCarrello.length;
  numeroArticoli.innerHTML = numProdotti;

  if (numProdotti == 0) {
    numeroArticoli.innerHTML = null;
  }

}
contoCarrello();

