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