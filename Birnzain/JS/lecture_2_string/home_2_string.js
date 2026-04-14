
// -- ---------------------------------------------------------------------------- --
// -- home 2 part 1: String split & Bedingung
// -- ---------------------------------------------------------------------------- --
// Angabe:
// Zählen Sie, wie viele Wörter eines Satzes länger als 6 Zeichen sind.

console.log("-------------------------------------------------------------")
console.log("-- home 2 part 1: String split & Bedingung")
console.log("-------------------------------------------------------------")

let homeText = "Zählen Sie, wie viele Wörter eines Satzes länger als 6 Zeichen sind.";
let homeWords = homeText.split(" ");
let count = 0;

for (let i = 0; i < homeWords.length; i++) {
    if (homeWords[i].length >= 6) {
        count++
    }
}

console.log(count);

console.log("\n");


// -- ---------------------------------------------------------------------------- --
// -- home 2 part 2: Array & String length
// -- ---------------------------------------------------------------------------- --
// Angabe:
// Speichern Sie die Längen aller Wörter eines Arrays in einem neuen Array.

console.log("-------------------------------------------------------------")
console.log("-- home 2 part 2: Array & String length")
console.log("-------------------------------------------------------------")

let tokens2 = ["wort", "NochEinWort", "EinDrittesWort"];
let lengths = [];

for (let i = 0; i < tokens2.length; i++) {
    lengths.push(tokens2[i].length)
}

console.log(lengths);

console.log("\n");


// -- ---------------------------------------------------------------------------- --
// -- home 2 part 3: Math.abs & Bedingung
// -- ---------------------------------------------------------------------------- --
// Angabe:
// Berechnen Sie für jede Wortlänge die Differenz zu 8
// und geben Sie nur Werte kleiner als 3 aus.

console.log("-------------------------------------------------------------")
console.log("-- home 2 part 3: Math.abs & Bedingung")
console.log("-------------------------------------------------------------")

let diff = [];

for (let i = 0; i < lengths.length; i++) {
    diff.push(Math.abs(lengths[i] - 8))
}

console.log(diff)


console.log("\n");


// -- ---------------------------------------------------------------------------- --
// -- home 2 part 4: String charAt
// -- ---------------------------------------------------------------------------- --
// Angabe:
// Geben Sie alle Wörter aus, die mit dem Buchstaben "S" beginnen.

console.log("-------------------------------------------------------------")
console.log("-- home 2 part 4: String charAt")
console.log("-------------------------------------------------------------")

let words35 = ["Sand", "Hund", "Katze", "Stein"];
let words36 = [];

for (let i = 0; i < words35.length; i++) {
    words36.push(words35[i].toLowerCase())
}

for (let i = 0; i < words36.length; i++) {
    if (words36[i].startsWith("s")) {
        console.log(words35[i])
    }
}

console.log("\n");


// -- ---------------------------------------------------------------------------- --
// -- home 2 part 5: Math.max
// -- ---------------------------------------------------------------------------- --
// Angabe:
// Bestimmen Sie die größte Wortlänge und geben Sie sie aus.

console.log("-------------------------------------------------------------")
console.log("-- home 2 part 5: Math.max")
console.log("-------------------------------------------------------------")

let maxLength = Math.max(...lengths);

console.log(maxLength);

console.log("\n");
