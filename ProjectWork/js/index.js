let bottoniFiltro = document.querySelectorAll(".filtro");

bottoniFiltro.forEach(bottone => {
  bottone.addEventListener("click", function () {

    bottoniFiltro.forEach(btn => {
      if (btn !== this) {
        btn.classList.remove("active");
      }

    });

    this.classList.add("active")


    let immaginiFiltri = document.querySelectorAll(".immagineFiltro");
    immaginiFiltri.forEach(immagine => {
      immagine.classList.add("grayscale")
    });

    let immagineCorrente = this.querySelector(".immagineFiltro");
    immagineCorrente.classList.remove("grayscale")



  })
});

