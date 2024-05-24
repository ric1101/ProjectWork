let containerVideo = document.querySelector('.containerVideo');
let title = document.querySelector('.title');

function dettaglioTruck() {

    let id = localStorage.getItem('id-truck');

    const URLT = `http://localhost:8080/api/marchi/truck/${id}`;

    fetch(URLT)
        .then(res => res.json())
        .then(data => {
            stampaTruck(data.marchi, data.piatti);
            stampaIndirizzoVideo(data.videoMarchio, data.foodtrucks.indirizzo, data.foodtrucks.coordinateGps, data.nomeMarchio);
            console.log(data);
        })


}
dettaglioTruck();

function stampaIndirizzoVideo(video, indirizzo, coordinate, genere) {
    
    
    console.log(video);
    
    
    containerVideo.innerHTML += `<div class="row gx-0">
    <div class="col-lg-6">
    <div class="ratio ratio-16x9">
    <video autoplay loop muted>
    <source src="${video}" type="video/mp4">
    <source src="${video}" type="video/ogg">
    </video>
    </div>
    </div>
    <div class="col-lg-6">
    <div class="card rounded-0 info-truck h-100">
    <div class="card-body d-flex">
    <div class="col">
    <h3>Indirizzo</h3>
                        <p>${indirizzo}</p>
                        <h3>Genere</h3>
                        <p>${genere}</p>
                        <strong>
                            <li class="list-group-item disponibile">Disponibile <i
                                    class="fas fa-check-circle text-success"></i>
                        </strong>
                    </div>
                    <div class="col">
                    <div id="map"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>`;
    let coordinateArray = coordinate.split(',');
    let lat = coordinateArray[0];
    let lon = coordinateArray[1];
    console.log(lat, lon);
    
    var map = L.map('map').setView([lat, lon], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 50,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        
        var marker = L.marker([lat, lon]).addTo(map);
}

function stampaTruck(marchi, piatti) {
    
    let nomeTruck = localStorage.getItem('nome-truck');
    title.innerHTML = nomeTruck;


}


// let nuovaRigaPiatto = `<h2 class="mt-4">portata</h2>
// <div class="row">
//     <div class="col-md-3 mt-4">
//         <div class="card-sl">
//             <div class="card-image">
//                 <img src="${element.immagine}" />
//             </div>
//             <div class="card-heading">
//                 ${element.nome}
//             </div>
//             <div class="card-text">
//                 ${element.descrizione}
//             </div>
//             <div class="card-text">
//             ${element.price}
//             </div>
//             <a href="#" class="card-button"> Acquista</a>
//         </div>
//     </div>
// </div>`;

// let nuovoPiatto = `<div class="col-md-3 mt-4">
// <div class="card-sl">
//     <div class="card-image">
//         <img src="${element.immagine}" />
//     </div>
//     <div class="card-heading">
//     ${element.nome}
//     </div>
//     <div class="card-text">
//     ${element.descrizione}
//     </div>
//     <div class="card-text">
//     ${element.price}
//     </div>
//     <a href="#" class="card-button"> Acquista</a>
// </div>
// </div>`;

