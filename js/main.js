// CHIEDERE ETÀ PASSEGGERO
// CHIEDERE KM DA PERCORRERE
// CALCOLARE PREZZO TOTALE BIGLIETTO
// Il prezzo del biglietto è definito in base ai km(0.21 € al km)
// Sconto del 20 % per i minorenni
// Sconto del 40 % per gli over 65

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone(non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.

const buttonCalculateEl = document.getElementById("calculate");
const inputAgeEl = document.getElementById("userAge");
const inputKmEl = document.getElementById("userKm");

console.log("On load age value:", inputAgeEl.value);

buttonCalculateEl.addEventListener("click",
    function () {
        const pricePerKm = 0.21;
        let outputMessage;

        // CHIEDERE ETÀ PASSEGGERO
        const userAge = inputAgeEl.value;

        // CHIEDERE KM DA PERCORRERE
        const userKm = inputKmEl.value;

        // CALCOLARE PREZZO TOTALE BIGLIETTO
        let price = userKm * pricePerKm;
        console.log("Il prezzo non scontato è € " + price);

        // SE L'UTENTE È MINORENNE
        if (userAge < 18) {
            // Sconto del 20 % per i minorenni
            const discountPercUnder18 = 20 / 100;

            // calcolo il prezzo scontato
            const discountAmountUnder18 = price * discountPercUnder18;
            console.log("Lo sconto under 18 è € " + discountAmountUnder18);

            price = price - discountAmountUnder18;

            outputMessage = "Il prezzo scontato under 18 è € " + price.toFixed(2);
        }

        // SE L'UTENTE È OVER 65
        else if (userAge >= 65) {
            // Sconto del 40 % per gli over 65
            const discountPercOver65 = 40 / 100;

            // calcolo il prezzo scontato
            const discountAmountOver65 = price * discountPercOver65;
            console.log("Lo sconto over 65 è € " + discountAmountOver65);

            price = price - discountAmountOver65;

            outputMessage = "Il prezzo scontato over 65 è € " + price.toFixed(2);
        }

        else {
            outputMessage = "Il prezzo è € " + price.toFixed(2);
        }

        document.getElementById("resultMessage").innerHTML = outputMessage;
    }
)