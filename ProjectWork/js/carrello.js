
let divProdotti = document.querySelector('#div-prodotti');

let nessunProdotto = `<div class="card rounded-3 mb-4" style="background-color: rgb(194, 193, 193);">
    <div class="card-body p-4">
        <div class="row d-flex justify-content-between align-items-center">
            <h2>Non ci sono Prodotti</h2>
        </div>
    </div>
    </div>`;

let divTotaleOrdine = document.querySelector('#totale-ordini');

function popolaCarrello() {
    let price = 0;
    let arrayCarrello = JSON.parse(localStorage.getItem('arrayId'));

    if (arrayCarrello == 0) {
        localStorage.removeItem('totaleCarrello');
    }

    if (arrayCarrello != null) {

        if (arrayCarrello.length > 0) {
            let carrelloHtml = '';

            console.log(arrayCarrello);
            arrayCarrello.forEach(element => {
                console.log(element)
                const URLPIATTI = `http://localhost:8080/api/piatti/piatto/${element}`;
                fetch(URLPIATTI)

                    .then(res => res.json())
                    .then((data) => {
                        // console.log(data, "sono il data");
                        let piatto = `<div class="card rounded-3 mb-4">
                <div class="card-body p-4">
                <div class="row d-flex justify-content-between align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                <img src="${data.immagine}" class="img-fluid rounded-3" alt="Image">
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">${data.nome}</p>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">${data.prezzoListino} €</h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="cestino fas fa-trash fa-lg" data-id="${data.id}"></i></a>
                </div>
                </div>
                </div>
                </div>`;

                        carrelloHtml += piatto;
                        price += data.prezzoListino;
                        divTotaleOrdine.innerHTML = `<h4> Totale ordine: ${price.toFixed(2)} € </h4>`;
                        divProdotti.innerHTML = carrelloHtml;
                        localStorage.setItem('totaleCarrello', JSON.stringify(price));
                        cancellaProdotto();

                    })

            });
        } else {
            divProdotti.innerHTML = nessunProdotto;
            divTotaleOrdine.innerHTML = `<h4> Totale ordine: ${price} € </h4>`;
        }
    } else {
        divProdotti.innerHTML = nessunProdotto;
        divTotaleOrdine.innerHTML = `<h4> Totale ordine: ${price} € </h4>`;

    }

}
popolaCarrello();

function cancellaProdotto() {
    
    let arrayCarrello = JSON.parse(localStorage.getItem('arrayId'));



    let arrayCarrelloOggetto = JSON.parse(localStorage.getItem('arrayIdOggetto'));
    let cestino = document.querySelectorAll('.cestino');
    cestino.forEach(btn => {
        btn.addEventListener('click', function () {
            const id = btn.getAttribute('data-id');
            let elementoEliminare = arrayCarrello.indexOf(id);
            arrayCarrello.splice(elementoEliminare, 1);
            arrayCarrelloOggetto.splice(elementoEliminare, 1);
            console.log(id);
            localStorage.setItem('arrayId', JSON.stringify(arrayCarrello));
            localStorage.setItem('arrayIdOggetto', JSON.stringify(arrayCarrelloOggetto));
            popolaCarrello();
            contoCarrello();
            vaiAlPagamento();
        });

    });

}

let checkout = document.querySelector('.checkout');

checkout.addEventListener('click', function () {
    window.location.href = 'pagamento.html';

});

function vaiAlPagamento() {
    let carrelloPienoVuoto = JSON.parse(localStorage.getItem('arrayId'));
    
    console.log('ciao', carrelloPienoVuoto);
    

    if (carrelloPienoVuoto.length !== 0) {

        checkout.classList.remove('disabled');

    } else if (carrelloPienoVuoto == null) {

        checkout.classList.add('disabled');
    
    } else {
        checkout.classList.add('disabled');
    } 
}
vaiAlPagamento();





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
        login.classList.remove('d-none');
        login.classList.add('d-block');
    }

}
logged();

function logOut() {
    localStorage.removeItem('idUtente');
    localStorage.removeItem('arrayIdOggetto');
    localStorage.removeItem('arrayId');
    localStorage.removeItem('totaleCarrello');
    window.location.href = 'index.html';
    console.log('ciao');
    logged();
}

logout.addEventListener('click', logOut);


let arrayCarrello = [];
let numeroArticoli = document.querySelector('#numeroArticoli');
let numProdotti = 0;

function contoCarrello() {
    console.log(numProdotti);

    arrayCarrello = JSON.parse(localStorage.getItem('arrayId'));
    console.log(arrayCarrello);

    if (arrayCarrello !== null) {

        numProdotti = arrayCarrello.length;
    }
    console.log(numProdotti);
    numeroArticoli.innerHTML = numProdotti;

    if (numProdotti == 0) {
        numeroArticoli.innerHTML = null;
    }

}
contoCarrello();