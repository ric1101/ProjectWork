const URLPW = 'http://localhost:8080/api/utenti';

const form = document.querySelector('.needs-validation');
let richiesti = document.querySelectorAll('.richiesti');
let nome = document.querySelector('#nome');
let cognome = document.querySelector('#cognome');
let data_nascita = document.querySelector('#data_nascita');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let btn_login = document.querySelector('.btn-login');
let fail = document.querySelector('.fail');
let success = document.querySelector('.success');

class Utente {
            
    constructor(nome, cognome, data_nascita, email, password, ruolo){

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
    if (password.value.match(regexPASSWORD)) {
        listaErrori.textContent = ''
        return true;
    } else {
        listaErrori.innerHTML = `<li>La tua password deve contenere almeno:</li>
                                 <li>Almeno un carattere in maiuscolo</li>
                                 <li>Almeno un carattere in minuscolo</li>
                                 <li>Almeno un numero</li>
                                 <li>Almeno un carattere speciale (!,?,@)</li>
                                 `
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
        success.classList.add('d-none');
        fail.classList.add('d-block');
      } else {
        fail.classList.add('d-none');
        success.classList.add('d-block');
      }
    });
  
  }



// Aggiungi gestore di eventi click al pulsante "Paga"
btn_login.addEventListener('click', function (event) {
    event.preventDefault(); // Previeni l'invio predefinito del form
  
    // Esegui la validazione del form
    if (form.checkValidity()) {
      // Se il form è valido, mostra il modal
      registrato();

    } else {
      // Se il form non è valido, mostra gli errori di validazione
      form.classList.add('was-validated');
    }
  });