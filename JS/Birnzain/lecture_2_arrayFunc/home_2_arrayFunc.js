// ===========================================================================
// HOME 2 – ARRAY, STRING & MATH FUNCTIONS
// ===========================================================================


// ---------------------------------------------------------------------------
// HOME 2 – part 1 – concat + includes
// ---------------------------------------------------------------------------
// Verbinde zwei Arrays mit Farbnamen.
// Gib nur Farben aus, die das Wort "Dark" enthalten.

console.log("----------------------------------------------------------");
console.log("home 2 – part 1 – concat + includes");
console.log("----------------------------------------------------------");

let c1 = ["Red", "Dark Blue"];
let c2 = ["Green", "Dark Green"];
let colors = c1.concat(c2);

for (let i = 0; i < colors.length; i++) {
    if (colors[i].includes("Dark")) {
        console.log(colors[i]);
    }
}

console.log("\n");


// ---------------------------------------------------------------------------
// HOME 2 – part 2 – slice + Math.round
// ---------------------------------------------------------------------------
// Schneide die ersten drei Werte aus einem Zahlenarray.
// Runde normal auf die nächste Ganzzahl (Math.round) und gib sie aus.

console.log("----------------------------------------------------------");
console.log("home 2 – part 2 – slice + Math.round");
console.log("----------------------------------------------------------");

let nums = [4.2, 6.8, 9.1, 2.4];
let top = nums.slice(0, 3);
let rounded = Math.round(...top);

console.log(rounded);

console.log("\n");


// ---------------------------------------------------------------------------
// HOME 2 – part 3 – splice + includes
// ---------------------------------------------------------------------------
// Entferne alle Einträge, die das Wort "Broken" enthalten.

console.log("----------------------------------------------------------");
console.log("home 2 – part 3 – splice + includes");
console.log("----------------------------------------------------------");

let items = ["OK_Item", "Broken_Item", "Shield"];

for (let i = 0; i < items.length; i++) {
    if (items[i].includes("Broken")) {
        items.splice(i, 1);
        i--;
    }
}

console.log(items);

console.log("\n");


// ---------------------------------------------------------------------------
// HOME 2 – part 4 – split + toUpperCase
// ---------------------------------------------------------------------------
// Teile einen Namen in Vor- und Nachnamen.
// Gib beide Teile in Großbuchstaben aus.

console.log("----------------------------------------------------------");
console.log("home 2 – part 4 – split + toUpperCase");
console.log("----------------------------------------------------------");

let name = "max mustermann";
let parts = name.split(" ");

console.log(parts[0].toUpperCase());
console.log(parts[1].toUpperCase());

console.log("\n");