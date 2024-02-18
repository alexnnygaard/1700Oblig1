function validerAntall(antall) {
    const regexp = /^[0-9]{1,2}$/;
    const ok = regexp.test(antall);
    if (!ok) {
        $("#feilAntall").html("Skriv inn antall billetter, max antall 99");
        return false;
    }
    else {
        $("#feilAntall").html("");
        return true;
    }
}


function validerFornavn(fornavn){
    const regexp = /^[a-zA-ZæøåÆØÅ.\-]{1,20}$/;
    const ok = regexp.test(fornavn);
    if (!ok) {
        $("#feilFornavn").html("Skriv inn fornavn, kun bruk bokstaver, må være mellom 2-20 bokstaver");
        return false;
    }
    else {
        $("#feilFornavn").html("");
        return true;
    }
}

function validerEtternavn(etternavn){
    const regexp = /^[a-zA-ZæøåÆØÅ.\-]{1,30}$/;
    const ok = regexp.test(etternavn);
    if (!ok) {
        $("#feilEtternavn").html("Skriv inn etternavn, kun bruk bokstaver, må være mellom 2-30 bokstaver");
        return false;
    }
    else {
        $("#feilEtternavn").html("");
        return true;
    }
}

function validerTlfnr(tlfnr){
    const regex = /^[0-9.]{8}$/;
    const ok = regex.test(tlfnr);
    if (!ok) {
        $("#feilTlfnr").html("Skriv inn mobilnummer, 8 siffer");
        return false;
    }
    else {
        $("#feilTlfnr").html("");
        return true;
    }

}


function validerEpost(epost){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const ok = regex.test(epost);
    if (!ok) {
        $("#feilEpost").html("Skriv inn gyldig epost");
        return false;
    }
    else {
        $("#feilEpost").html("");
        return true;
    }

}
let billettArray = [];  //gjør om arrayet fra kjøpBillett funksjonen global for å hente den til slettBillett funksjonen.
function fyllArray() {

    //Lager variabler ved å hente inn value fra html taggene jeg har laget.
    let inputFilm = document.getElementById("film").value;
    let inputAntall = document.getElementById("antall").value;
    let inputFornavn = document.getElementById("fornavn").value;
    let inputEtternavn = document.getElementById("etternavn").value;
    let inputTlfnr = document.getElementById("tlfnr").value;
    let inputEpost = document.getElementById("epost").value;

    let billett1 = {     //Lager et objekt og setter inn lagde variabler.
        film: inputFilm,
        antall: inputAntall,
        fornavn: inputFornavn,
        etternavn: inputEtternavn,
        telefonnummer: inputTlfnr,
        epost: inputEpost
    };


    billettArray.push(billett1); // pusher/setter inn objektet vi laget inn i arrayet.
    skrivUt();

    //Henter verdiene som oppe uten å sette det til noen variabler. Setter to hermetegn for å blanke de ut.
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("tlfnr").value = "";
    document.getElementById("epost").value = "";

}

function skrivUt() { //kjører gjennom en for-løkke for å skrive ut verdier vi har laget i objektet og satt inn i arrayet.
    let ut = "";
    for (let i = 0; i < billettArray.length; i++) {
        ut += "Film: " + billettArray[i].film + " Antall: " + billettArray[i].antall + " Fornavn: " + billettArray[i].fornavn
            + " Etternavn: " + billettArray[i].etternavn + " Tlfnummer: " + billettArray[i].telefonnummer +
            " Epost: " + billettArray[i].epost + "<br>";
    }
    document.getElementById("billettUtskrift").innerHTML = ut;

}




function slettBillett() {
    billettArray.splice(0, billettArray.length);

    //billettArray = [];  // kunne også gjort det slik, tømmer arrayet ved å sette den tom.
    console.log(billettArray); // sjekker i konsollen at arrayet er tømt når vi trykker på sletteknappen
    skrivUt(); //sletter teksten som viser billettene
}

