const URLPW = "http://localhost:8080/api/utenti";

const form = document.querySelector(".needs-validation");
let richiesti = document.querySelectorAll(".richiesti");
let nome = document.querySelector("#nome");
let cognome = document.querySelector("#cognome");
let data_nascita = document.querySelector("#data_nascita");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn_login = document.querySelector(".btn-login");
let inviato = document.querySelector(".inviato");
let nonInviato = document.querySelector(".nonInviato");
let showPassword = document.querySelector("#showPassword");
let divPassword = document.querySelector(".password");
let listaErrori = document.querySelector("#listaErrori");

let usernameError = document.querySelector("#usernameError");

class Utente {
  constructor(nome, cognome, data_nascita, email, password, ruolo) {
    (this.nome = nome),
      (this.cognome = cognome),
      (this.data_nascita = data_nascita),
      (this.email = email),
      (this.password = password),
      (this.ruolo = ruolo);
  }
}

let nuovoUtente = {};

console.log(JSON.stringify(nuovoUtente));

function registrazione() {
  nuovoUtente = new Utente(
    nome.value,
    cognome.value,
    data_nascita.value,
    email.value,
    password.value,
    "USER"
  );
  console.log(nuovoUtente);

  fetch(URLPW, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuovoUtente),
  });

}

const regexPASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const regexEMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function passwordCheck() {
  if (
    (password.value.length < 8 || password.value.length > 15) ||
    !password.value.match(regexPASSWORD)
  ) {
    listaErrori.innerHTML = `<li>La tua password deve contenere almeno:</li>
                               <li>Almeno 8 caratteri</li>
                               <li>Almeno un carattere in maiuscolo</li>
                               <li>Almeno un carattere in minuscolo</li>
                               <li>Almeno un numero</li>
                               <li>Almeno un carattere speciale (!,?,@)</li>
                               `;

    //  form.classList.remove('was-validated');
    return false;
  } else {
    listaErrori.innerHTML = "";
    // btn_login.classList.add('form-control');
    return true;
  }
}

password.addEventListener("keyup", passwordCheck);

function toShowPassword() {
  if (password.type === "text") {
    password.type = "password";
  } else {
    password.type = "text";
  }
}

showPassword.addEventListener("click", toShowPassword);



// Aggiungi gestore di eventi click al pulsante
btn_login.addEventListener("click", function () {

  let emailLive = email.value;

  fetch(`http://localhost:8080/registrati?email=${emailLive}`)

    .then((res) => res.json())
    .then((data) => {
      console.log(data, "sono dentro la fetch")
      let risultato = data;


      let controllo = risultato;
      console.log(controllo, "controllo iniziale");
      // Previeni l'invio predefinito del form
      if (
        passwordCheck() &&
        email.value.match(regexEMAIL) &&
        cognome.value != "" &&
        nome.value != "" && (!controllo)
      ) {
        console.log(controllo, "sono dentro l-if")
        nonInviato.classList.add('d-none');
        inviato.classList.remove('d-none');
        inviato.classList.remove('text-danger');
        inviato.classList.add('text-success');
        inviato.innerHTML = "Dati inviati correttamente";


        // form.classList.add("was-validated");
        registrazione();
        console.log("true");
        setTimeout(() => {
          window.location.href = 'login.html';

        }, 2000);
      } else if (controllo) {
        inviato.classList.remove('text-success');
        inviato.classList.add('text-danger');
        nonInviato.classList.remove("d-none");
        nonInviato.innerHTML = "Email già esistente";
        inviato.innerHTML = "Invio non riuscito";

      } else {
        console.log('Email doppione');
        inviato.classList.add("text-danger");
        inviato.innerHTML = "Invio non riuscito";
      }


    })
});

