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
        ut += billettArray[i].film + " " + billettArray[i].antall + " " + billettArray[i].fornavn
            + " " + billettArray[i].etternavn + " " + billettArray[i].telefonnummer +
            " " + billettArray[i].epost + "<br>";
    }
    document.getElementById("billettUtskrift").innerHTML = ut;

}




function slettBillett() {
    billettArray.splice(0, billettArray.length);

    //billettArray = [];  // kunne også gjort det slik, tømmer arrayet ved å sette den tom.
    console.log(billettArray); // sjekker i konsollen at arrayet er tømt når vi trykker på sletteknappen
    skrivUt(); //sletter teksten som viser billettene
}

/*
function validerFilm(){

}


function validerAntall() {
    let x = document.getElementById("antall").value;
    if (isNaN(x) || x < 1 || x > 25) {
        $("#feilAntall").html("Velg antall billetter, minimum 1, maks 25.");
        return false;
    } else {
        return true;
    }
}

    const regexp = /^[0-9]{1,2} $/;
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
    const regexp = /^[a-zA-ZæøåÆØÅ.\-]{1,30} $/;
    const ok = regexp.test(fornavn);
    if (!ok) {
        $("#feilFornavn").html("Skriv inn fornavn, kun bruk bokstaver, må være mellom 2-30 bokstaver");
        return false;
    }
    else {
        $("#feilFornavn").html("");
        return true;
    }
}

function validerEtternavn(etternavn){
    const regexp = /^[a-zA-ZæøåÆØÅ.\-]{1,30} $/;
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
    const ok = regexp.test(tlfnr);
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
    const ok = regexp.test(epost);
    if (!ok) {
        $("#feilTlfnr").html("Skriv inn gyldig epost");
        return false;
    }
    else {
        $("#feilTlfnr").html("");
        return true;
    }

}


let billettArray = [];           //instansiering av et array
function fyllArray(){             //Funksjon for å fylle array og printe det ut
    let inputFilm = document.getElementById("film").value;
    let inputAntall = document.getElementById("antall").value;
    let inputFornavn = document.getElementById("fornavn").value;
    let inputEtternavn = document.getElementById("etternavn").value;
    let inputTlfnr = document.getElementById("tlfnr").value;
    let inputEpost = document.getElementById("epost").value;

    let billetter = {           //gjør om til et objekt
        film:inputFilm,
        antall:inputAntall,
        fornavn:inputFornavn,
        etternavn:inputEtternavn,
        tlfnr:inputTlfnr,
        epost:inputEpost
    }
    billettArray.push(billetter);      //setter inn objektet billetter til neste ledige plass i

   // let ut ();

    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("tlfnr").value = "";
    document.getElementById("epost").value = "";

    let billettUtskrift = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let j of billettArray) {
        billettUtskrift += "<tr>";
        billettUtskrift += "<td>" + j.film + "</td><td>" + j.antall + "</td><td>" + j.fornavn + "</td>" +
            "<td>" + j.etternavn + "</td><td>" + j.tlfnr + "</td><td>" + j.epost + "</td>";
        billettUtskrift += "</tr>";
    }
    billettUtskrift += "</table>";

}

function slettBillett(){
    billettArray.splice(0, billettArray.length);

}

*/











/*function kjopBillett() {
    let ut = "";
    for (let i=0; i<billettArray.length; i++){
        ut += document.getElementById("inputFilm")+document.getElementById("inputAntall") + document.getElementById("inputFornavn") +
            document.getElementById("inputEtternavn") + document.getElementById("inputTlfnr") + document.getElementById("inputEpost");
    }
    document.write(ut)
}


function slettBillett(){
    billettArray.splice(0, billettArray.length);

}



function velgFilm(){
    //document.write("Valgt film: "+ document.getElementById("film").value);
}

function visAntall(){
    let antall = document.getElementById("antall").value;
}

function visFornavn(){
    let fornavn = document.getElementById("fornavn").value;
}

function visEtternavn(){
    let etternavn = document.getElementById("etternavn").value;
}

function visTlfnr(){
    let tlfnr = document.getElementById("tlfnr").value;
}

function visEpost(){
    let epost = document.getElementById("epost").value;
}

 if (isNaN(antall)) {
        console.log("skriv inn antall billetter med heltall mellom 1-99");
        return false;
    } else {
        console.log("Antall billetter er: " + antall);
        return true;
    }


function billettUtskrift(){
    let utskrift = "";
    for (let i of billettArray){
        utskrift += ("Film: " + i.film + "Antall: " + i.antall + "Fornavn" + i.fornavn + "Etternavn: " + i.etternavn +
            "Telefonnummer: " + i.tlfnr + "Epost: " + i.epost);
    }
}


    if(billett1.antall === ""){
        document.getElementById("validerAntall").innerHTML = "Må skrive noe inn i antall, mellom 1 og 25 billetter";
    }
    else{
        document.getElementById("feilAntall").innerHTML = "";
    }
    if(billett1.fornavn === ""){
        document.getElementById("validerFornavn").innerHTML = "Må oppgi fornavn";
    }
    else{
        document.getElementById("feilFornavn").innerHTML = "";
    }
    if(billett1.etternavn === ""){
        document.getElementById("validerEtternavn").innerHTML = "Må oppgi etternavn";
    }
    else {
        document.getElementById("feilEtternavn").innerHTML = "";
    }
    if(billett1.telefonnummer === ""){
        document.getElementById("vailderTlfnr").innerHTML = "Må oppgi telefonnummer";
    }
    else {
        document.getElementById("feilTlfnr").innerHTML = "";
    }
    if(billett1.epost === ""){
        document.getElementById("validerEpost").innerHTML = "Må oppgi epost";
    }
    else {
        document.getElementById("feilEpost").innerHTML = "";
    }


    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let j of billettArray) {
        ut += "<tr>";
        ut += "<td>" + j.film + "</td><td>" + j.antall + "</td><td>" + j.fornavn + "</td>" +
            "<td>" + j.etternavn + "</td><td>" + j.tlfnr + "</td><td>" + j.epost + "</td>";
        ut += "</tr>";
    }
    ut += "</table>";
 */