// -- ------------------------------------------------------------------------------- --
// -- 1.Beispiel: Kontrollstrukturen - for Schleife
// -- ------------------------------------------------------------------------------- --
// Kopieren Sie alle ungeraden Zahlen des folgenden Arrays
// in ein eigenes Array. Verwenden Sie die for Schleife

console.log("-- -------------------------------------------------------- --")
console.log(" home exercise control 3: part 1")
console.log("-- -------------------------------------------------------- --")

let data = [45, 3, 2, 6, 2, 4]
let unevenValues = [];

for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 !== 0) {
        unevenValues.push(data[i])
    }
}

console.log(...unevenValues);
console.log("\n");


// -- ------------------------------------------------------------------------------- --
// -- 2.Beispiel: Kontrollstrukturen - for Schleife
// -- ------------------------------------------------------------------------------- --
// Es sollen alle Vorkommen eines bestimmten Wertes aus einem Array
// entfernt werden.

// Hinweis: Erstellen Sie ein neues Array und kopieren Sie alle
// Werte die nicht dem Zielelement entsprechen.

console.log("-- -------------------------------------------------------- --")
console.log(" home exercise control 3: part 2")
console.log("-- -------------------------------------------------------- --")

let values = [5, 78, 9, 3, 45, 2, 1, 3, 3, 56];
let value = 3;

let alteredValues = [];

for (let i = 0; i < values.length; i++) {
    if (values[i] !== value) {
        alteredValues.push(values[i])
    }
}

console.log(...alteredValues);
console.log("\n");


// -- ------------------------------------------------------------------------------- --
// -- 3.Beispiel: Kontrollstrukturen - for Schleife
// -- ------------------------------------------------------------------------------- --
// Geben Sie die Namen der folenden Flugzege aus. 

console.log("-- -------------------------------------------------------- --")
console.log(" home exercise control 3: part 3")
console.log("-- -------------------------------------------------------- --")

let aircrafts = [
    {
        name: "Fire Raptor Gunship",
        aircraftClass: "FIGHTER",
        alliance: "ADEPTUS_ASTARTES",
        cost: 31,
        x: 0,
        y: 0,
        currentAltitude: 0,
        structure: 4,
        transport: 0,
        fuel: 0
        
    }, {
        name: "Storm Eagle Assault Craft",
        aircraftClass: "FIGHTER",
        alliance: "ADEPTUS_ASTARTES",
        cost: 29,
        x: 0,
        y: 0,
        currentAltitude: 0,
        structure: 4,
        transport: 2,
        fuel: 0
    }, {
        name: "Xiphon Interceptor",
        aircraftClass: "FIGHTER",
        alliance: "ADEPTUS_ASTARTES",
        cost: 24,
        x: 0,
        y: 0,
        currentAltitude: 0,
        structure: 3,
        transport: 0,
        fuel: 0
    }
];

for (let i = 0; i < aircrafts.length; i++) {
    console.log(aircrafts[i].name);
}

console.log("\n");