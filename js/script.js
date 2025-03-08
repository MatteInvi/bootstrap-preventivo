// Variabili preimpostate
const orePreimp = 10;
let prezzoParziale;
let prezzoFinale;

// Importazione input utente
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("mail");
const infoExtra = document.getElementById("text-area");
const formPreventivo = document.getElementById("form-preventivo");
const promoCodeUser = document.getElementById("promo-code");
const promoCodeError = document.getElementById("promo-code-error");
let selectWork = document.getElementById("work-type");

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
    selectWork.append(newOption);
}

//Funzione al click su "calcola preventivo"

formPreventivo.addEventListener("submit", function (event) {
    event.preventDefault()

    // Lettura variabile al click
    let typeOfWork = document.getElementById("work-type");

    // Controllo tipologia di lavoro
    if (typeOfWork.value === "backend") {
        prezzoParziale = backendPrice * orePreimp;
    } else if (typeOfWork.value === "frontend") {
        prezzoParziale = frontendPrice * orePreimp;
    } else if (typeOfWork.value === "analysis") {
        prezzoParziale = projectAnalysisPrice * orePreimp;
    }

    // Esecuzione ciclo for per controllare la validità del codice promo
    const sconto = prezzoParziale * 25 / 100;

    if (arrayCodici.includes(promoCodeUser.value.toUpperCase())) {
        prezzoFinale = prezzoParziale - sconto;
    } else {
        prezzoFinale = prezzoParziale;
    }


    // Iterazione per far apparire messaggio di errore in caso di codice errato  
    if (arrayCodici.includes(promoCodeUser.value.toUpperCase()) || promoCodeUser.value == "") {
        promoCodeError.classList.add("d-none");
    } else {
        promoCodeError.classList.remove("d-none");
    }

    // Stampa risultato in pagina
    finalPriceElem.innerText = (`€ ${prezzoFinale.toFixed(2)}`)

});
