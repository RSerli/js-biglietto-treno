console.log("Biglietto del treno")

// ---- VARIABILI UTILI ----
// Prezzo biglietto al chilometro
const CostoChilometrico = 0.21 // Number Float
// Percentuale sconto Under18
const PercentualeSconto_Under18 = 20 // Number integer
// Percentuale sconto Over65
const PercentualeSconto_Over65 = 40 // Number integer
// Età del viaggiatore
let EtàViaggiatore
// Kilometraggio tratta
let ChilometriTratta

// ---- INPUT ----
// chidere età del viaggiatore
let isEtàChecked = false
while (!isEtàChecked) {
    EtàViaggiatore = parseInt(prompt("Indicami quanti anni ha")) // Number Integer | NaN
    //  Controllo validità età inserita
    if (EtàViaggiatore <= 0 || !EtàViaggiatore) {
        alert("Età inserita errata!")
    } else {
        isEtàChecked = true
    }
}
// chiedere qunanti chilometri è lunga la tratta per arrivare a destinazione
let isChilometriChecked = false
while (!isChilometriChecked) {
    ChilometriTratta = parseFloat(prompt("Indicami quanto lunga è la tratta")) // Number Float | NaN
    //  Controllo validità età inserita
    if (ChilometriTratta <= 0 || !ChilometriTratta) {
        alert("Inserire un chilometraggio corretto!")
    } else {
        isChilometriChecked = true
    }
}

// ---- CALCOLI ----
// calcolo prezzo PIENO della tratta
const CostoBiglietttoIntero = ChilometriTratta * CostoChilometrico //Number Float
console.log("Costo intero biglietto: " + CostoBiglietttoIntero + "€")
// calcolo prezzo SCONTATO della tratta under 18
const Sconto_Under18 = (CostoBiglietttoIntero * PercentualeSconto_Under18) / 100
const CostoBiglietttoScontato_Under18 = CostoBiglietttoIntero - Sconto_Under18 //Number Float
console.log(
    `Percentuale Sconto Under 18: ${PercentualeSconto_Under18} %
    Sconto Under 18: ${Sconto_Under18.toFixed(2)} €
    Totale Costo Biglietto: ${CostoBiglietttoScontato_Under18.toFixed(2)} €`
)
// calcolo prezzo SCONTATO della tratta over 65
const Sconto_Over65 = (CostoBiglietttoIntero * PercentualeSconto_Over65) / 100
const CostoBiglietttoScontato_Over65 = CostoBiglietttoIntero - Sconto_Over65 //Number Float
console.log(
    `Percentuale Sconto Under 18: ${PercentualeSconto_Over65} %
    Sconto Under 18: ${Sconto_Over65.toFixed(2)} €
    Totale Costo Biglietto: ${CostoBiglietttoScontato_Over65.toFixed(2)} €`
)
// ---- OUTPUT ----
// Mostra prezzo finale a seconda dell'età del viaggiatore
