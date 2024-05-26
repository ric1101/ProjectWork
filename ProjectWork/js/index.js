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

let getIdUtente = localStorage.getItem('idUtente');
if (getIdUtente != null) {
  
}

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