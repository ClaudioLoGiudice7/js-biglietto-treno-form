// CHIEDERE KM DA PERCORRERE
// CHIEDERE ETÀ PASSEGGERO
// CALCOLARE PREZZO TOTALE BIGLIETTO
// Il prezzo del biglietto è definito in base ai km(0.21 € al km)
// Sconto del 20 % per i minorenni
// Sconto del 40 % per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone(non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.

const button = document.getElementById("calculate");

button.addEventListener("click",
    function () {

        // CHIEDERE KM DA PERCORRERE
        const km = parseFloat(document.getElementById("km").value);
        console.log("I km che devi percorrere sono " + km);

        // CHIEDERE ETÀ PASSEGGERO
        const age = parseInt(document.getElementById("age").value);
        console.log("Hai " + age + " anni");

        // CALCOLARE PREZZO TOTALE BIGLIETTO
        let price = (0.21 * km);
        console.log("Il prezzo totale è €" + price);

        // CALCOLO GLI SCONTI
        // 20%
        const discount20 = (price * .2)
        console.log("Lo sconto applicato per i minorenni è di " + discount20);

        // 40%
        const discount40 = (price * .4)
        console.log("Lo sconto applicato per le persone che hanno 65 anni o più è di " + discount40);
    }
)
