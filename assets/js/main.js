

//Codice treno (numero casuale tra 90000 e 100000 escluso)


//Numero carrozza

/* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km) */


// CALCOLO BIGLIETTO

var generaBigliettoEl = document.getElementById('genera_biglietto');

generaBigliettoEl.addEventListener('click', function () {
    
    //Nome Utente
    var inputElement = document.getElementById("nome_utente");
    document.getElementById('nome_biglietto').innerHTML = inputElement.value
    //km
    var kmElement = document.getElementById("km");
    //eta
    var etaUtenteElement = document.getElementById('eta_utente');

    var numeroRandom = Math.floor(Math.random() * 99999) + 90000;
    document.getElementById("codice_treno").innerHTML = numeroRandom;
    


    var prezzoElement = document.getElementById("prezzo");
    var prezzoPerChilometro = kmElement.value * 0.21;

});