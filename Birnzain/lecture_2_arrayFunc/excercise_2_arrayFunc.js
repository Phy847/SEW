// ===========================================================================
// EXERCISE 2 – ARRAY, STRING & MATH FUNCTIONS
// ===========================================================================


// ---------------------------------------------------------------------------
// EXERCISE 2 – part 1 – flat, includes, splice
// ---------------------------------------------------------------------------
// Flache ein verschachteltes Array.
// Entferne alle ungültigen Einträge ("INVALID").
// Gib die verbleibenden Werte aus.

console.log("----------------------------------------------------------");
console.log("exercise 2 – part 1 – flat + splice");
console.log("----------------------------------------------------------");

let data = ["OK", ["INVALID", "OK"]];
let flatData = data.flat();

for (let i = 0; i < flatData.length; i++) {
    if (flatData[i] === "INVALID") {
        flatData.splice(i, 1);
        i--;
    }
}

console.log(flatData);

console.log("\n");


// ---------------------------------------------------------------------------
// EXERCISE 2 – part 2 – copyWithin
// ---------------------------------------------------------------------------
// Kopiere die letzten zwei Werte (array.length-2 und array.length-1) an den Anfang des Arrays.

console.log("----------------------------------------------------------");
console.log("exercise 2 – part 2 – copyWithin");
console.log("----------------------------------------------------------");

let arr = [1, 2, 3, 4];

arr.copyWithin(0, arr.length - 2, arr.length);
console.log(arr);

console.log("\n");


// ---------------------------------------------------------------------------
// EXERCISE 2 – part 3 – slice + Math.max
// ---------------------------------------------------------------------------
// Schneide die Werte von Index 1 bis 3 aus einem Zahlenarray.
// Bestimme daraus den größten Wert.

console.log("----------------------------------------------------------");
console.log("exercise 2 – part 3 – slice + Math.max");
console.log("----------------------------------------------------------");

let vals = [5, 30, 20, 60, 10];
let cut = vals.slice(1, 4);
let biggest = Math.max(...cut);

console.log(biggest);

console.log("\n");


// ---------------------------------------------------------------------------
// EXERCISE 2 – part 4 – String chain
// ---------------------------------------------------------------------------
// Bereinige den Text: entferne führende und folgende Leerzeichen und ersetze alle Bindestriche durch Leerzeichen.
// Gib die ersten 10 Zeichen des bereinigten Textes in Großbuchstaben aus.

console.log("----------------------------------------------------------");
console.log("exercise 2 – part 4 – string chain");
console.log("----------------------------------------------------------");

let raw = "   javascript lernen   ";
let cleaned = raw.trim().replaceAll("-", " ");
let firstTen = cleaned.slice(0, 10).toUpperCase();

console.log(firstTen);

console.log("\n");


// ---------------------------------------------------------------------------
// EXERCISE 2 – part 5 – Math chain
// ---------------------------------------------------------------------------
// Erzeuge eine Zufallszahl zwischen 1 und 10.
// Berechne deren Quadrat und Quadratwurzel.

console.log("----------------------------------------------------------");
console.log("exercise 2 – part 5 – math chain");
console.log("----------------------------------------------------------");

let number = Math.random() * 9 + 1;

let rnd = Math.round(number);
let sq = Math.pow(rnd, 2);
let root = Math.sqrt(rnd);

console.log(rnd);
console.log(sq);
console.log(root);

console.log("\n");