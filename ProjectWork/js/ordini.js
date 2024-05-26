//API RICERCA ORDINI UTENTE
const API = 'http://localhost:8080/api/utenti/';
let id = localStorage.getItem("idUtente");

let bodyTable = document.querySelector(".bodyTable");

console.log(id, "id utente");


//FETCH PER PRENDERE GLI ORDINI
fetch(API + id)
  .then((res) => res.json())
  .then((data) => {

    console.log(data)
    console.log(data.ordini)
    console.log(data.ordini[0].data_ordine)

    stampaOrdine(data.ordini)
  });


//FUNZIONE PER STAMPARE ORDINE
function stampaOrdine(arrayOrdini) {

  arrayOrdini.forEach(ordine => {

    let NuovoOrdine = document.createElement('tr');

    NuovoOrdine.innerHTML = `
    <td class="col-3 col-md-2">${dataIt(ordine.data_ordine)}</td>
    <td class="col-3 col-md-2">#${ordine.numero_ordine}</td>
    <td class="col-3 col-md-2 piatti d-flex"></td>
    <td class="col-3 col-md-2 ">${ordine.totale_ordine.toFixed(2)}€</td>`;

    bodyTable.appendChild(NuovoOrdine);

    let piattiTD = NuovoOrdine.querySelector(".piatti");

    ordine.piatti.forEach(piatto => {
      let nuovoPiatto = document.createElement('div');
      nuovoPiatto.className = 'piatto';
      nuovoPiatto.innerHTML = `
        <img src="${piatto.immagine}" alt="${piatto.nome}">
      `;
      piattiTD.appendChild(nuovoPiatto);
    });

  });
}


//FUNZIONE DATA ITALIANA
function dataIt(dataSQL) {
  let data = new Date(dataSQL);

  let giorno = String(data.getDate()).padStart(2, "0");
  let mese = String(data.getMonth() + 1).padStart(2, "0");
  let anno = String(data.getFullYear());

  let dataFormattata = `${giorno}-${mese}-${anno}`

  return dataFormattata;
}
