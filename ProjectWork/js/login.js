const URLOG = `http://localhost:8080/api/utenti/login`;

let errore = document.querySelector('.errore');
let register = document.querySelector('#register');
let showPassword = document.querySelector('#showPassword');
let button = document.querySelector('.btn');

function toShowPassword() {
    if (password.type === 'text') {
        password.type = 'password'
    } else {
        password.type = 'text';
    }
}
showPassword.addEventListener('click', toShowPassword);


class Utente {
    constructor(email, password) {
        (this.email = email),
        (this.password = password)
    }
  }
  
  let nuovoUtente = {};
  
  console.log(JSON.stringify(nuovoUtente));
  
  function login() {
    nuovoUtente = new Utente(
      email.value,
      password.value
    );
    console.log(nuovoUtente);
  
    fetch(URLOG, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuovoUtente),
      
    })
    .then(response =>{
        
        if (response.ok) {
            window.location.href = 'index.html';
            localStorage.setItem('');
        } else {
            errore.innerHTML = 'email o password errati';
        }
      console.log(nuovoUtente);
    });
  }
  button.addEventListener('click', login);