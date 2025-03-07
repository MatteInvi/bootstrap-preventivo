// Variabili preimpostate
const orePreimp = 10;
// const sconto = prezzoParziale * 25/100;
let prezzoParziale;

// Importazione input utente
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("mail");
const infoExtra = document.getElementById("text-area");

const formPreventivo = document.getElementById("form-preventivo");

// prezzi orari per tipologia di lavoro
const backendPrice = 20.50;
const frontendPrice = 15.30;
const projectAnalysisPrice = 33.60;

//Codici sconto applicabili
const arrayCodici = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

// Importazione output prezzo finale
const finalPriceElem = document.getElementById("final-price");


//Funzione al click su "calcola preventivo"

formPreventivo.addEventListener("submit", function () {
    let typeOfWork = document.getElementById("work-type");
    const promoCode = document.getElementById("promo-code");

    if (typeOfWork.value === "backend") {
        prezzoParziale = backendPrice* orePreimp;
    } else if (typeOfWork.value === "frontend") {
        prezzoParziale = frontendPrice * orePreimp;
    } else {
        prezzoParziale =  projectAnalysisPrice * orePreimp;
    }
    console.log(prezzoParziale);

    arrayCodici.forEach(function(code){
        console.log(promoCode);
        // if (promoCode === )
        
    })
       

});
