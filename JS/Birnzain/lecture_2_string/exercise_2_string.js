// -- ---------------------------------------------------------------------------- --
// -- exercise 2 part 1: String split, Schleife & Bedingung
// -- ---------------------------------------------------------------------------- --
// Angabe:
// Zerlegen Sie einen Satz in Wörter.
// Geben Sie nur jene Wörter aus, die länger als 5 Zeichen sind
// UND den Buchstaben "e" enthalten.

console.log("-------------------------------------------------------------")
console.log("-- exercise 2 part 1: String split, Schleife & Bedingung")
console.log("-------------------------------------------------------------")

let sentence = "Zerlegen sie einen Satz in Wörter";
let tokens = sentence.split(" ");

for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].length >= 5 && tokens[i].includes("e")) {
        console.log(tokens[i])
    }
}

console.log(tokens);

console.log("\n");


// -- ---------------------------------------------------------------------------- --
// -- exercise 2 part 2: Array, Math.abs & Bedingung
// -- ---------------------------------------------------------------------------- --
// Angabe:
// Berechnen Sie für jede Zahl die Differenz zu 20.
// Speichern Sie nur Werte größer als 7 in einem neuen Array
// und geben Sie dieses aus.

console.log("-------------------------------------------------------------")
console.log("-- exercise 2 part 2: Array, Math.abs & Bedingung")
console.log("-------------------------------------------------------------")

let numbers = [2, 4, 8, 1, 12, 15, 20, 19];
let differences = [];

for (let i = 0; i < numbers.length; i++) {
    if (Math.abs(numbers[i] - 20) > 7) {
        differences.push(numbers[i])
    }
}

console.log(differences);

console.log("\n");


// -- ---------------------------------------------------------------------------- --
// -- exercise 2 part 3: Durchschnitt, Math.round & Strings
// -- ---------------------------------------------------------------------------- --
// Angabe:
// Berechnen Sie die durchschnittliche Wortlänge eines Satzes.
// Geben Sie alle Wörter aus, deren Länge über dem gerundeten
// Durchschnitt liegt.

console.log("-------------------------------------------------------------")
console.log("-- exercise 2 part 3: Durchschnitt, Math.round & Strings")
console.log("-------------------------------------------------------------")

let text = "Berechnen Sie die durchschnittliche Wortlänge eines Satzes.";
let words = text.split(" ");
let avg = [];

for (let i = 0; i <words.length; i++) {
    avg.push(Math.round(words[i].length / words.length))
}

console.log(avg);

console.log("\n");


// -- ---------------------------------------------------------------------------- --
// -- exercise 2 part 4: String charAt & Bedingung
// -- ---------------------------------------------------------------------------- --
// Angabe:
// Überprüfen Sie alle Wörter eines Arrays.
// Geben Sie nur jene Wörter aus, die mit einem Großbuchstaben beginnen.

console.log("-------------------------------------------------------------")
console.log("-- exercise 2 part 4: String charAt & Bedingung")
console.log("-------------------------------------------------------------")

let names = ["Poirot", "quattro", "Cassetti", "Bouc", "Constantine", "Andrenyi"];

for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === names [i].charAt(0).toUpperCase()) {
        console.log(names[i])
    }
}

console.log("\n");


// -- ---------------------------------------------------------------------------- --
// -- exercise 2 part 5: Kombination String, Array & Math
// -- ---------------------------------------------------------------------------- --
// Angabe:
// Ermitteln Sie aus einem Satz alle Wortlängen.
// Bestimmen Sie die größte Differenz dieser Längen zur Zahl 10
// und geben Sie diese aus.

console.log("-------------------------------------------------------------")
console.log("-- exercise 2 part 5: Kombination String, Array & Math")
console.log("-------------------------------------------------------------")

let phrase = "Bestimmen Sie die größte Differenz dieser Längen zur Zahl 10";
let parts = phrase.split(" ");
let maxDiff;
let number = [];

for (let i = 0; i < parts.length; i++) {
    number.push(Math.abs(parts[i].length - 10))
}

console.log(number)
maxDiff = Math.max(...number)


console.log(maxDiff);

console.log("\n");