//Nome Utente
var inputElement = document.getElementById("nome_utente");
inputElement.value = "Pippo";

//km
var kmElement = document.getElementById("km");
kmElement.value = "20";

//Codice treno (numero casuale tra 90000 e 100000 escluso)
var numeroRandom = Math.floor(Math.random() * 99999) + 90000;
document.getElementById("codice_treno").innerHTML = numeroRandom;
//Numero carrozza

//Prezzo calcolato
