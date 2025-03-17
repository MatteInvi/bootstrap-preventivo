// Variabili del prezzo preimpostato, prezzo prima dell'eventuale sconto e prezzo finale
const orePreimp = 10;
let prezzoParziale;
let prezzoFinale;

// Importazione input utente
const nameElem = document.getElementById("name");
const surnameElem = document.getElementById("surname");
const emailElem = document.getElementById("mail");
const infoExtraElem = document.getElementById("text-area");
const formPreventivo = document.getElementById("form-preventivo");
const promoCodeUserElem = document.getElementById("promo-code");
const privacyCheckElem = document.getElementById("privacy-check");
const promoCodeErrorElem = document.getElementById("promo-code-error");
const typeOfWorkElem = document.getElementById("work-type");

// Importazione output prezzo finale
const finalPriceElem = document.getElementById("final-price");

// Prezzi orari per tipologia di lavoro
const backendPrice = 20.50;
const frontendPrice = 15.30;
const projectAnalysisPrice = 33.60;

// Array Codici sconto applicabili
const arrayCodici = ["YHDNU32", "CODE", "PWKCN25", "JANJC63", "POCIE24"];

// Oggetti da caricare nel tipo di lavoro
const typeOfWorkArray = [
    { value: "frontend", text: "Front End Development", },
    { value: "backend", text: "Back End Development", },
    { value: "analysis", text: "Project Analysis", },
];

// Ciclo for per caricamento oggetti in select
for (let i = 0; i < typeOfWorkArray.length; i++) {
    let newOption = new Option(typeOfWorkArray[i].text, typeOfWorkArray[i].value);
    typeOfWorkElem.append(newOption);
}

//Funzione al click su "calcola preventivo"
formPreventivo.addEventListener("submit", function (event) {
    event.preventDefault()

    // Lettura variabile al click
    let typeOfWorkSelected = typeOfWorkElem;

    // Controllo tipologia di lavoro
    if (typeOfWorkSelected.value === "backend") {
        prezzoParziale = backendPrice * orePreimp;
    } else if (typeOfWorkSelected.value === "frontend") {
        prezzoParziale = frontendPrice * orePreimp;
    } else if (typeOfWorkSelected.value === "analysis") {
        prezzoParziale = projectAnalysisPrice * orePreimp;
    }

    //Calcolo sconto
    const sconto = prezzoParziale * 25 / 100;

    // Iterazione per controllare la validità del codice promo
    if (arrayCodici.includes(promoCodeUserElem.value.toUpperCase())) {
        prezzoFinale = prezzoParziale - sconto;
    } else {
        prezzoFinale = prezzoParziale;
    }

    // Controllo codice promo per far apparire messaggio di errore in caso di codice errato  
    if (arrayCodici.includes(promoCodeUserElem.value.toUpperCase()) || promoCodeUserElem.value == "") {
        promoCodeErrorElem.classList.add("d-none");
    } else {
        promoCodeErrorElem.classList.remove("d-none");
    }

    // Stampa risultato in pagina
    finalPriceElem.innerText = (`€ ${prezzoFinale.toFixed(2)}`)

});
