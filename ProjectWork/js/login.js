const URLOG = `http://localhost:8080/api/utenti/login`;

let email = document.querySelector('#email');
let password = document.querySelector('#password');
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
        .then(response => {

            if (response.ok) {
                fetch(`http://localhost:8080/api/utenti/email/${email.value}`)

                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        window.location.href = 'index.html';
                        let id = JSON.stringify(data.id);
                        localStorage.setItem('idUtente', id);
                    });

            } else {
                errore.innerHTML = 'email o password errati';
            }
            console.log(nuovoUtente);
        });
}
button.addEventListener('click', login);