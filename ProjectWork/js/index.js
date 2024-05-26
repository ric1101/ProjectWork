var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  freeMode: true,
  loop: true,
  // autoplay: {
  //   enable: true,
  //   delay: 3000
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




function inviaPaginaDisponibilita() {

  let filtri = document.querySelectorAll('.filtro');
  console.log(filtri);
  filtri.forEach(btn => {
    btn.addEventListener('click', function () {
      const id = btn.getAttribute('data-id');
      const nome = btn.getAttribute('data-nome');
      console.log(id);
      console.log(nome);
      localStorage.setItem('id', JSON.stringify(id));
      localStorage.setItem('nome', JSON.stringify(nome));
      window.location.href = 'disponibilita.html';
    });
  });
}
inviaPaginaDisponibilita();

let user = document.querySelector('.user');
let carrello = document.querySelector('.carrello');
let logout = document.querySelector('.logout');
let login = document.querySelector('.login');


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
    login.classList.remove('d-block');
  }

}



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

function logOut() {
  localStorage.removeItem('idUtente');
  logged();
}

logout.addEventListener('click', logOut);