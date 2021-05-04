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
    //n. carrozza
    var numeroCarrozza = Math.ceil(Math.random() * 10);
    var carrozzaElement = document.getElementById('numero_carrozza');
    carrozzaElement.innerHTML = numeroCarrozza;
    //n. random
    var numeroRandom = Math.floor(Math.random() * 99999) + 90000;
    var numeroRandomEl = document.getElementById("codice_treno");
    numeroRandomEl.innerHTML = numeroRandom;
    //prezzo
    var prezzoPerChilometro = kmElement.value * 0.21;
    if (etaUtenteElement.value === "minorenne") {
        // - va applicato uno sconto del 20% per i minorenni
        var prezzoMinorenne = prezzoPerChilometro - (prezzoPerChilometro * 0.20);
        var prezzoElement = document.getElementById("prezzo");
        prezzoElement.innerHTML = prezzoMinorenne.toFixed(2);

        var scontoElement = document.getElementById('sconto');
        scontoElement.innerHTML = "Sconto" + "</br>" + "Minorenne";

    } else if (etaUtenteElement.value === "over_65") {
        // - va applicato uno sconto del 40% per gli over 65.
        var prezzoOverAge = prezzoPerChilometro - (prezzoPerChilometro * 0.4);
        var prezzoElement = document.getElementById("prezzo");
        prezzoElement.innerHTML = prezzoOverAge.toFixed(2);
    
        var scontoElement = document.getElementById('sconto');
        scontoElement.innerHTML = "Sconto" + "</br>" + "Over 65";

    } else if (etaUtenteElement.value === "maggiorenne") {
        // no sconto
        var prezzoMaggiorenne = prezzoPerChilometro;
        var prezzoElement = document.getElementById("prezzo");
        prezzoElement.innerHTML = prezzoMaggiorenne.toFixed(2);
        
        var scontoElement = document.getElementById('sconto');
        scontoElement.innerHTML = "No Sconto";
    }      
});


var cancelElement = document.getElementById('cancel');
cancelElement.addEventListener('click', function () {
    //CALCOLO DEL BIGLIETTO
    var inputElement = document.getElementById("nome_utente");
    inputElement.value = "";
    var kmElement = document.getElementById("km");
    kmElement.value = "";
    //DATI BIGLIETTO CLIENTI
    document.getElementById('nome_biglietto').innerHTML = "";
    
    var scontoElement = document.getElementById('sconto');
    scontoElement.innerHTML = "";

    var carrozzaElement = document.getElementById('numero_carrozza');
    carrozzaElement.innerHTML = "";

    var numeroRandomEl = document.getElementById("codice_treno")
    numeroRandomEl.innerHTML = "";
    
    var prezzoElement = document.getElementById("prezzo");
    prezzoElement.innerHTML = "";


});