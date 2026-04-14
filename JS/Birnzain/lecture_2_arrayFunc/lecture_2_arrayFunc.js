// ===========================================================================
// LECTURE 2 – ARRAY, STRING & MATH FUNCTIONS
// ===========================================================================


// ---------------------------------------------------------------------------
// LECTURE 2 – part 1 – concat, includes, toUpperCase
// ---------------------------------------------------------------------------
// Gegeben sind mehrere Arrays mit Levelnamen eines Spiels.
//
// Aufgaben:
// 1) Verbinde alle Arrays zu einem neuen Array.
//    Methode: concat(array1, array2, ...)
// 2) Prüfe für jedes Level, ob es das Wort "BOSS" enthält.
//    Methode: includes(value)
// 3) Gib alle Boss-Level in Großbuchstaben aus.
//    Methode: toUpperCase()

console.log("----------------------------------------------------------");
console.log("lecture 2 – part 1 – concat, includes, toUpperCase");
console.log("----------------------------------------------------------");

let forestLevels = ["Forest Start", "Forest Boss"];
let desertLevels = ["Desert Camp", "Desert Boss"];
let allLevels = forestLevels.concat(desertLevels);
let bossLevels = [];

for (let i = 0; i < allLevels.length; i++) {
    if (allLevels[i].includes("Boss")) {
        bossLevels.push(allLevels[i]);
    }
}

for (let i = 0; i < bossLevels.length; i++) {
    console.log(bossLevels[i].toUpperCase());
}

console.log("\n");


// ---------------------------------------------------------------------------
// LECTURE 2 – part 2 – flat, Math.max, Math.min
// ---------------------------------------------------------------------------
// Gegeben ist ein verschachteltes Array mit Gegnerstärken.
//
// Aufgaben:
// 1) Flache das Array vollständig.
//    Methode: flat(depth)
// 2) Bestimme die höchste und niedrigste Stärke.
//    Methoden: Math.max(a, b), Math.min(a, b)

console.log("----------------------------------------------------------");
console.log("lecture 2 – part 2 – flat, Math.max, Math.min");
console.log("----------------------------------------------------------");

let enemies = [10, [25, [5, 40]]];
let flatEnemies = enemies.flat(Infinity);
let max = Math.max(...flatEnemies);
let min = Math.min(...flatEnemies);

console.log(max);
console.log(min);

console.log("\n");


// ---------------------------------------------------------------------------
// LECTURE 2 – part 3 – slice, Math.round, Math.floor, Math.ceil
// ---------------------------------------------------------------------------
// Gegeben ist ein Array mit Dezimalzahlen.
//
// Aufgaben:
// 1) Schneide die mittleren drei Werte aus dem Array.
//    Methode: slice(start, end)
// 2) Runde jeden Wert normal mit Math.round, zusätzlich einmal abgerundet
//    (Math.floor) und einmal aufgerundet (Math.ceil)

console.log("----------------------------------------------------------");
console.log("lecture 2 – part 3 – slice, rounding");
console.log("----------------------------------------------------------");

let values = [1.2, 3.7, 5.4, 8.9, 10.1];
let middle = values.slice(1, 4);
let rounded = Math.round(middle);
let floored = Math.floor(middle);
let ceiled = Math.ceil(middle);

console.log(middle);
console.log(rounded);
console.log(floored);
console.log(ceiled);

console.log("\n");


// ---------------------------------------------------------------------------
// LECTURE 2 – part 4 – splice, push, pop, shift, unshift
// ---------------------------------------------------------------------------
// Gegeben ist ein Inventar-Array.
//
// Aufgaben:
// 1) Entferne alle beschädigten Items (Items, die "Broken" enthalten).  
//    Methode: splice(start, deleteCount)
// 2) Füge ein neues Item "Helmet" am Ende hinzu.
//    Methode: push(value)
// 3) Entferne das letzte Item.
//    Methode: pop()
// 4) Füge ein Item "Map" am Anfang hinzu.
//    Methode: unshift(value)
// 5) Entferne das erste Item.
//    Methode: shift()

console.log("----------------------------------------------------------");
console.log("lecture 2 – part 4 – array basics");
console.log("----------------------------------------------------------");

let inventory = ["Potion", "Broken Sword", "Shield"];

for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].includes("Broken")) {
        inventory.splice(i, 1);
        i--;
    }
}

inventory.push("Helmet");
inventory.pop();
inventory.unshift("Map");
inventory.shift();

console.log("\n");


// ---------------------------------------------------------------------------
// LECTURE 2 – part 5 – copyWithin
// ---------------------------------------------------------------------------
// Gegeben ist ein Array mit Zahlen.
//
// Aufgaben:
// 1) Kopiere die letzten beiden Zahlen (array.length-2 und array.length-1) 
//    an den Anfang des Arrays. 
//    Methode: copyWithin(target, start, end)
// 2) Gib das Array danach aus.

console.log("----------------------------------------------------------");
console.log("lecture 2 – part 5 – copyWithin");
console.log("----------------------------------------------------------");

let numbers = [1, 2, 3, 4, 5];

numbers.copyWithin(0, numbers.length - 2);

console.log(numbers);

console.log("\n");


// ---------------------------------------------------------------------------
// LECTURE 2 – part 6 – String methods + Math
// ---------------------------------------------------------------------------
// Gegeben ist ein Text mit Leerzeichen und Sonderzeichen.
//
// Aufgaben:
// 1) Entferne führende und folgende Leerzeichen und ersetze alle 
//    Bindestriche durch Leerzeichen.
//    Methoden: trim(), replaceAll()
// 2) Teile den Text in Wörter.
//    Methode: split(separator)
// 3) Gib das erste Wort in Großbuchstaben aus.
//    Methode: toUpperCase(), substring()
// 4) Gib das erste Zeichen des zweiten Wortes aus.
//    Methode: charAt()
// 5) Prüfe Textpositionen (indexOf, lastIndexOf, endsWith)
// 6) Wiederhole das zweite Wort zweimal.
//    Methode: repeat()
// 7) Berechne Zufallswerte, deren Quadrat und Quadratwurzel.
//    Methoden: Math.random(), Math.pow(), Math.sqrt(), Math.abs()

console.log("----------------------------------------------------------");
console.log("lecture 2 – part 6 – string & math mix");
console.log("----------------------------------------------------------");

let text = "   java-script-macht-spass   ";
let clean = text.trim().replaceAll("-", " ");
let words = clean.split(" ");
let firstword = words[0].toUpperCase();
let second = words[1];
let secondFirstChar = second.charAt(0);
let containsScript = clean.indexOf("script") !== -1;
let repeatedSecond = second.repeat(2);

console.log("\n");