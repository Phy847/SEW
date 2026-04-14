// LÖSE ALLE AUFGABEN: 
//   - Löse die Aufgabe mit einer FOR-OF Schleife
//   - Löse die Aufgabe mit einer DO-WHILE Schleife !!! jede Aufgabe !!!

// ===========================================================================
// EXERCISE 1 – Temperaturen filtern und korrigieren
// ===========================================================================
// Angabe:
// Erstelle ein neues Array, das alle Temperaturen enthält, die über 20°C liegen,
// und erhöhe jede dieser Temperaturen um +1°C.
// Beispiel: 21 → 22, 25 → 26
//   - Löse die Aufgabe mit DO-WHILE 
//   - Löse die Aufgabe mit FOR-OF 
// Frage: Welche Schleife eignet sich besonders gut für diese Aufgabenstellung?
// ===========================================================================
console.log("-- -------------------------------------------------------- --")
console.log("exercise array 2: part 1")
console.log("-- -------------------------------------------------------- --")

let temps = [14, 21, 19, 25, 30, 11, 22];
let newtemps = [];
let i = 0;

for (const temp of temps) {
    if (temps[i] > 20) {
        newtemps.push(temps[i]+1)
    }
    ++i;
}

console.log(newtemps)
i = 0;
newtemps = [];

do {
    if (temps[i] > 20) {
        newtemps.push(temps[i]+1)
    }
    ++i;
} while (i < temps.length)

console.log(newtemps)

console.log("\n");



// ===========================================================================
// EXERCISE 2 – Namen filtern und umwandeln
// ===========================================================================
// Angabe:
// Erstelle ein neues Array, das nur jene Namen enthält, die länger als
// 4 Zeichen sind, und speichere diese Namen anschließend in UPPERCASE.
//
// Beispiel: "Alexandra" → "ALEXANDRA"
// let name = "Leonhard"; name.toUpperCase(); erzeugt den Namen in CAPS
//
//   - Löse die Aufgabe mit DO-WHILE 
//   - Löse die Aufgabe mit FOR-OF 
// Frage: Welche Schleife eignet sich besonders gut für diese Aufgabenstellung?
// ===========================================================================
console.log("-- -------------------------------------------------------- --")
console.log("exercise array 2: part 2")
console.log("-- -------------------------------------------------------- --")

let namesList = ["Mara", "Leonhard", "Timo", "Alexandra", "Uwe", "Brigitte"];
let newnames = [];
i = 0;

for (const letters of namesList) {
    if (namesList[i].length > 4) {
        newnames.push(namesList[i].toUpperCase())
    }
    ++i;
}

console.log(newnames);
i = 0;
newnames = [];

do {
    if (namesList[i].length > 4) {
        newnames.push(namesList[i].toUpperCase())
    }
    ++i;
} while (i < namesList.length)

console.log(newnames)

console.log("\n");

// -------------------------------------------------------------------------
// EXERCISE 3 – Zahlen durchlaufen bis eine bestimmte Bedingung erfüllt ist
// -------------------------------------------------------------------------
// Angabe:
// Gegeben ist ein Array aus verschiedenen Zahlen. Durchlaufe das Array so 
// lange, bis du auf eine Zahl triffst, die größer als 80 ist. 
// Gib alle Zahlen aus, die davor im Array erscheinen.
// Frage: Welche Schleife eignet sich besonders gut für diese Aufgabe?
//   - Löse die Aufgabe mit DO-WHILE 
//   - Löse die Aufgabe mit FOR-OF 
// ------------------------------------------------------------
console.log("-- -------------------------------------------------------- --")
console.log("exercise array 2: part 3")
console.log("-- -------------------------------------------------------- --")

let randomNumbers = [49, 39, 28, 100, 37, 56, 83, 42, 35, 10,
                             86, 37, 74, 47, 82, 23, 43, 53];
i = 0;

for (const randomNumber of randomNumbers) {
    if (randomNumbers[i] < 80) {
        console.log(randomNumbers[i]);
    } else {break}
    ++i;
}
i = 0;
do {
    if (randomNumbers[i] < 80) {
        console.log(randomNumbers[i]);
    } else {break}
    ++i;
} while (i < randomNumbers.length)

console.log("\n");

// ===========================================================================
// EXERCISE 4 – Gesamtkosten berechnen 
// ===========================================================================
// Gegeben ist eine Liste von Produktobjekten. Berechne die Gesamtkosten,
// indem price * quantity für jedes Objekt berechnet und zusammengezählt wird.
//
// Beispiel: {price: 10, quantity: 3} → +30
// Frage: Welche Schleife eignet sich besonders gut für diese Aufgabenstellung?
// Aufgabe:
//   - Löse die Aufgabe mit DO-WHILE 
//   - Löse die Aufgabe mit FOR-OF 
// ===========================================================================
console.log("-- -------------------------------------------------------- --")
console.log("exercise array 2: part 4")
console.log("-- -------------------------------------------------------- --")
let items = [
    { title: "Buch", price: 12, quantity: 2 },
    { title: "Lampe", price: 30, quantity: 1 },
    { title: "Headset", price: 89, quantity: 1 },
    { title: "Joghurt", price: 1, quantity: 5 }
];
let totalCost = 0;
i = 0;

for (const item of items) {
    totalCost += items[i].price * items[i].quantity;
    ++i;
}
console.log(totalCost);

totalCost = 0;
i = 0;

do {
    totalCost += items[i].price * items[i].quantity;
    ++i;
} while (i < items.length)

console.log(totalCost);

console.log("\n");

// ===========================================================================
// EXERCISE 5 – Passwortversuche prüfen 
// ===========================================================================
// Eine simulierte Passworteingabe wird so lange wiederholt, bis das
// richtige Passwort eingegeben wurde. Die Schleife muss mindestens
// einmal ausgeführt werden. Speichere alle Versuche in einem Array.
// Korrektes Passwort: "XYZ123"
// Was ist das Ziel?: 
// ... Mehrere Passworteingaben nacheinander prüfen
// ... Alle Versuche speichern
// ... Stoppen, sobald das richtige Passwort vorkommt
console.log("-- -------------------------------------------------------- --")
console.log("exercise array 2: part 5")
console.log("-- -------------------------------------------------------- --")

let inputs = ["Hallo", "Test", "123", "XYZ123"];
i = 0;
do {
    if (inputs[i] === "XYZ123") {
        console.log("Richtiges Passwort eingegeben:", inputs[i]);
        break;
    } else {
        console.log("Falsches Passwort:", inputs[i]);
    }
    ++i;
} while (i < inputs.length)
console.log("\n");
let i2 = 0;
for (const input of inputs) {
    if (inputs[i2] === "XYZ123") {
        console.log("Richtiges Passwort eingegeben:", inputs[i2]);
        break;
    } else {
        console.log("Falsches Passwort:", inputs[i2]);
    }
    ++i2;
}
console.log("\n");



// Frage: Welche Schleife eignet sich besonders gut für diese Aufgabenstellung? A: Die DO-WHILE Schleife.
// → Tipp: Die Schleife muss garantiert einmal laufen.

// Aufgabe:
//   - Löse die Aufgabe mit DO-WHILE 
//   - Löse die Aufgabe mit FOR-OF 
// ===========================================================================

console.log("\n");
