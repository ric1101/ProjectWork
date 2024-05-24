
let title = document.querySelector('.title');

function dettaglioTruck() {

    let id = localStorage.getItem('id-truck');

    const URLT = `http://localhost:8080/api/marchi/truck/${id}`;

    fetch(URLT)
        .then(res => res.json())
        .then(data => {
            stampaTruck(data.marchi, data.piatti);
            console.log(data);
        })


}
dettaglioTruck();


function stampaTruck(marchi, piatti) {
    
    let nomeTruck = localStorage.getItem('nome-truck');
    title.innerHTML = nomeTruck;


}

let nuovaRigaPiatto = `<h2 class="mt-4">portata</h2>
<div class="row">
    <div class="col-md-3 mt-4">
        <div class="card-sl">
            <div class="card-image">
                <img src="${element.immagine}" />
            </div>
            <div class="card-heading">
                ${element.nome}
            </div>
            <div class="card-text">
                ${element.descrizione}
            </div>
            <div class="card-text">
            ${element.price}
            </div>
            <a href="#" class="card-button"> Acquista</a>
        </div>
    </div>
</div>`;

let nuovoPiatto = `<div class="col-md-3 mt-4">
<div class="card-sl">
    <div class="card-image">
        <img src="${element.immagine}" />
    </div>
    <div class="card-heading">
    ${element.nome}
    </div>
    <div class="card-text">
    ${element.descrizione}
    </div>
    <div class="card-text">
    ${element.price}
    </div>
    <a href="#" class="card-button"> Acquista</a>
</div>
</div>`;

let videoIndirizzo = `<div class="container-fluid px-0">
<div class="row gx-0">
    <div class="col-lg-6">
        <div class="ratio ratio-16x9">
            <video autoplay loop muted>
                <source src="./video/${vid}.mp4" type="video/mp4">
                <source src="./video/${vid}.mp4" type="video/ogg">
            </video>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="card rounded-0 info-truck h-100">
            <div class="card-body d-flex">
                <div class="col">
                    <h3>Indirizzo</h3>
                    <p>${via}</p>
                    <h3>Categoria</h3>
                    <p>${cat}</p>
                    <strong>
                        <li class="list-group-item disponibile">Disponibile <i
                                class="fas fa-check-circle text-success"></i>
                    </strong>
                </div>
                <div class="col">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19924.623222181126!2d12.559323604942811!3d42.06862829715841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6fe57d615101%3A0x5fc0b897bcc5725e!2sRoma%20City%20FC!5e0!3m2!1sit!2sit!4v1716209872872!5m2!1sit!2sit"
                        width="800" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`