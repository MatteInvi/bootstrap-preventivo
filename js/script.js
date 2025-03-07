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

// Prezzi orari per tipologia di lavoro
const backendPrice = 20.50;
const frontendPrice = 15.30;
const projectAnalysisPrice = 33.60;

// Array Codici sconto applicabili
const arrayCodici = ["YHDNU32", "JANIC63", "PWKCN25", "JANJC63", "POCIE24"];


// Importazione output prezzo finale
const finalPriceElem = document.getElementById("final-price");


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
    } else {
        prezzoParziale = projectAnalysisPrice * orePreimp;
    }

    // Esecuzione ciclo for per controllare la validità del codice promo
    for (let i = 0; i < arrayCodici.length; i++) {
        const curCode = arrayCodici[i];
        const sconto = prezzoParziale * 25 / 100;

        if (promoCodeUser.value == curCode) {
            prezzoFinale = prezzoParziale - sconto;
        } else if (promoCodeUser.value == !curCode) {
            prezzoFinale = prezzoParziale;
        }

    // Iterazione per far apparire messaggio di errore in caso di codice errato      
        if (promoCodeUser.value == "" || promoCodeUser.value == curCode){
            promoCodeError.classList.add("d-none");
        } else  {
            promoCodeError.classList.remove("d-none")
        }

      
    }
    
    // Stampa risultato in pagina
    finalPriceElem.innerText = (`€ ${prezzoFinale.toFixed(2)}`)

});
