console.log("Biglietto del treno")

// ---- VARIABILI UTILI ----
// Prezzo biglietto al chilometro
const CostoChilometrico = 0.21 // Number Float
// Percentuale sconto Under18
const ScontoUnder18 = 20 // Number integer
// Percentuale sconto Over65
const ScontoOver65 = 40 // Number integer
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
    ChilometriTratta = parseInt(prompt("Indicami quanto lunga è la tratta")) // Number Integer | NaN
    //  Controllo validità età inserita
    if (ChilometriTratta <= 0 || !ChilometriTratta) {
        alert("Inserire un chilometraggio corretto!")
    } else {
        isChilometriChecked = true
    }
}
// ---- CALCOLI ----
// calcolo prezzo PIENO della tratta
const CostoTotaleTratta = ChilometriTratta * CostoChilometrico
// calcolo prezzo SCONTATO della tratta under 18
// calcolo prezzo SCONTATO della tratta over 65
// ---- OUTPUT ----
// Mostra prezzo finale a seconda dell'età del viaggiatore
