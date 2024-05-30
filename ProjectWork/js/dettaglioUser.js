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

      //FUNZIONE DATA ITALIANA
      function dataIt(dataSQL) {
        let data = new Date(dataSQL);

        let giorno = String(data.getDate()).padStart(2, "0");
        let mese = String(data.getMonth() + 1).padStart(2, "0");
        let anno = String(data.getFullYear());

        let dataFormattata = `${giorno}-${mese}-${anno}`

        return dataFormattata;
      }

      console.log(data);
      nomeCognome.innerHTML = data.nome + ' ' + data.cognome;
      nome.innerHTML = data.nome;
      cognome.innerHTML = data.cognome;
      dataNascita.innerHTML = dataIt(data.data_nascita);
      role.innerHTML = data.ruolo;
      email.innerHTML = data.email;
    });

}
userView();

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

