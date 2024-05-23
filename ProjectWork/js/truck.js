
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