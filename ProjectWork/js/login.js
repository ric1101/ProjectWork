
let listaErrori = document.querySelector('#listaErrori');
let register = document.querySelector('#register');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let button = document.querySelector('.btn');
let usernameError = document.querySelector('#usernameError');
let showPassword = document.querySelector('#showPassword');
let registerBtn = document.querySelector('#registerBtn');

const regexUSERNAME = /^[a-zA-Z0-9]{4,15}$/;
const regexPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



function usernameCheck() {
    if (username.value.match(regexUSERNAME)) {
        usernameError.textContent = ''
        return true;
    } else if (username.value.length < 4) {
        usernameError.textContent = "L'username è inferiore a 4 caratteri";
    } else if (username.value.length > 15) {
        usernameError.textContent = "L'username è superiore a 15 caratteri";
    } else {
        usernameError.textContent = "Non puoi inserire uno spazio";
    }
}

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

username.addEventListener('keyup', usernameCheck);

password.addEventListener('keyup', passwordCheck);

function toShowPassword() {
    if (password.type === 'text') {
        password.type = 'password'
    } else {
        password.type = 'text';
    }
}
showPassword.addEventListener('click', toShowPassword);
