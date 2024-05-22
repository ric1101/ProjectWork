const URLPW = 'http://localhost:8080/api/utenti';

const form = document.querySelector('.needs-validation');
let richiesti = document.querySelectorAll('.richiesti');
let nome = document.querySelector('#nome');
let cognome = document.querySelector('#cognome');
let data_nascita = document.querySelector('#data_nascita');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let btn_login = document.querySelector('.btn-login');
let inviato = document.querySelector('.inviato');
let showPassword = document.querySelector('#showPassword');
let divPassword = document.querySelector('.password');
let listaErrori = document.querySelector('#listaErrori');

class Utente {

  constructor(nome, cognome, data_nascita, email, password, ruolo) {

    this.nome = nome,
      this.cognome = cognome,
      this.data_nascita = data_nascita,
      this.email = email,
      this.password = password,
      this.ruolo = ruolo
  }
  
}

let nuovoUtente = {};

console.log(JSON.stringify(nuovoUtente));

function registrazione() {


  nuovoUtente = new Utente(nome.value, cognome.value, data_nascita.value, email.value, password.value, 'USER');
  console.log(nuovoUtente);

  fetch(URLPW, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      nuovoUtente

    )
  })
}



const regexPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const regexEMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


function passwordCheck() {
  if (password.value.length < 8 && password.value.length > 15 || !password.value.match(regexPASSWORD)) {
    listaErrori.innerHTML = `<li>La tua password deve contenere almeno:</li>
                               <li>Almeno 8 caratteri</li>
                               <li>Almeno un carattere in maiuscolo</li>
                               <li>Almeno un carattere in minuscolo</li>
                               <li>Almeno un numero</li>
                               <li>Almeno un carattere speciale (!,?,@)</li>
                               `
    return false;
  } else {
    listaErrori.innerHTML = ''
    return true;
  }
}


password.addEventListener('keyup', passwordCheck);

function toShowPassword() {
  if (password.type === 'text') {
    password.type = 'password'
  } else {
    password.type = 'text';
  }
}

showPassword.addEventListener('click', toShowPassword);

function registrato() {
  console.log('Funzione registrato chiamata');
  richiesti.forEach(element => {
    if (element.value == '') {
      console.log(element.value);
      inviato.classList.add('text-danger');
      inviato.innerHTML = 'Invio non riuscito';
    } else {
      inviato.classList.remove('text-danger');
      inviato.innerHTML = 'Dati inviati correttamente';

    }
  });

}


// Aggiungi gestore di eventi click al pulsante 
btn_login.addEventListener('click', function (event) {
  event.preventDefault(); // Previeni l'invio predefinito del form
  
  
  // Esegui la validazione del form
  if (form.checkValidity() && passwordCheck()) {
    // Se il form è valido
    console.log('ciao');
    registrato();
    registrazione();
    nome.value = '';
    cognome.value = '';
    data_nascita.value = '';
    email.value = '';
    password.value = '';
    ruolo.value = '';
  } else {
    // Se il form non è valido, mostra gli errori di validazione
    showPassword.setAttribute('style', 'right: 35px;');
    registrato();
    form.classList.add('was-validated');
    
  }
});