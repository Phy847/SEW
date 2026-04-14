// ----------------------------------------------------------------------------
// -- 1.Beispiel) For-Of Schleife – Namen ausgeben
// ----------------------------------------------------------------------------
// Aufgabe:
// Die Schule hat eine Anwesenheitsliste mit den Namen aller Teilnehmer. 
// Diese Liste soll vollständig und in der richtigen Reihenfolge ausgegeben werden.
// Verwenden Sie eine for-of Schleife, um jeden Namen in der Konsole auszugeben.
//
// Gegebenes Array:
console.log("-- ----------------------------------------------- --");
console.log("lecture 3 example 1:  names");
console.log("-- ----------------------------------------------- --");

let names = ["Lena", "Tom", "Susi"];

for (const nam of names) {
    console.log(nam)
} 

console.log("\n");



// ----------------------------------------------------------------------------
// -- 2.Beispiel) For-Of Schleife – Zahlen verdoppeln
// ----------------------------------------------------------------------------
// Aufgabe:
// Ein Statistik-Tool verarbeitet Messwerte. Jeder Messwert soll beim Auslesen 
// automatisch verdoppelt angezeigt werden, ohne jedoch das Array selbst zu verändern.
// Geben Sie mit einer for-of Schleife jeden Wert in verdoppelter Form aus.
//
// Gegebenes Array:
console.log("-- ----------------------------------------------- --");
console.log("lecture 3 example: 2: doubled numbers");
console.log("-- ----------------------------------------------- --");

let numbers = [2, 4, 6];

for (const number of numbers) {
    console.log(number*2)
}

console.log("\n");



// ----------------------------------------------------------------------------
// -- 3.Beispiel) For-Of Schleife – Wortlängen ausgeben
// ----------------------------------------------------------------------------
// Aufgabe:
// Ein Textprogramm möchte analysieren, wie lang die einzelnen Wörter einer Liste sind.
// Ermitteln und geben Sie mit einer for-of Schleife für jedes Wort die Anzahl 
// der enthaltenen Buchstaben aus.
//
// Gegebenes Array:
console.log("-- ----------------------------------------------- --");
console.log("lecture 3 example 3: word lengths");
console.log("-- ----------------------------------------------- --");

let words = ["Haus", "Auto", "Baum"];

for (const word of words) {
    console.log(word, word.length)
}

console.log("\n");


// ------------------------------------------------------------
// -- 4.Beispiel) Abenteurer-Rucksack verwalten
// ------------------------------------------------------------
// Ein Abenteurer hat einen Rucksack.
// Gegeben ist folgendes Array:
// let backpack = ["Seil", "Fackel", "Apfel"];
//
// 1. Verwenden Sie zwei Array-Methoden:
//    - Fügen Sie EINEN Gegenstand "Heiltrank" am ENDE hinzu (push)
//    - Fügen Sie EINEN Gegenstand "Karte" am ANFANG hinzu (unshift)
//    - Entfernen Sie danach den letzten Gegenstand (pop)
//
// 2. Geben Sie den gesamten Rucksackinhalt mit einer for...of-Schleife aus.
//
// 3. Zusatz: Zählen Sie über irgendeine Schleife (for, while, ...) die Anzahl
//    der Elemente und geben Sie diese aus.
// ------------------------------------------------------------
console.log("-- ----------------------------------------------- --");
console.log("lecture 3 example 4: adventure");
console.log("-- ----------------------------------------------- --");
let backpack = ["Seil", "Fackel", "Apfel"];

// 1. Array-Methoden

backpack.push("Heiltrank")
backpack.unshift("Karte")
backpack.pop()

// 2. Ausgabe mit for...of

for (const item of backpack) {
    console.log(item)
}

console.log("Aktueller Rucksackinhalt:");


// 3. Anzahl zählen

let count = 0;

for (let i = 0; i < backpack.length; ++i) {
    ++ count
}

console.log("Gesamtanzahl der Gegenstände:", count);


// ------------------------------------------------------------
// Aufgabe 5: Inventar eines Raumschiffs verwalten
// ------------------------------------------------------------
// Gegeben ist das Grund-Inventar eines Raumschiffs:
// let cargo = ["Werkzeug", "Medikit", "Batterie"];
//
// 1. Verwenden Sie mehrere Array-Methoden:
//    - Fügen Sie einen Gegenstand "Navigationsmodul" AM ANFANG des Arrays hinzu (unshift)
//    - Fügen Sie zwei neue Gegenstände "Sauerstofftank", "Ersatzkabel" AM ENDE hinzu (push)
//    - Entfernen Sie den ersten Gegenstand (shift)
//    - Entfernen Sie den letzten Gegenstand (pop)
//
// 2. Geben Sie anschließend das gesamte Inventar mit einer for...of-Schleife aus.
//
// 3. Zusatz:
//    Zählen Sie, wie viele Gegenstände noch im Inventar sind und geben Sie
//    die Anzahl aus (beliebige Schleife erlaubt).
// ------------------------------------------------------------

let cargo = ["Werkzeug", "Medikit", "Batterie"];

// 1. Array-Methoden
cargo.unshift("Navigationsmodul");   // Anfang
cargo.push("Sauerstofftank");        // Ende
cargo.push("Ersatzkabel");           // Ende
cargo.shift();                        // ersten entfernen
cargo.pop();                          // letzten entfernen

// 2. Ausgabe mit for...of
console.log("Aktuelles Raumschiff-Inventar:");

for (const inventory of cargo) {
    console.log(inventory)
}

// 3. Anzahl der Gegenstände zählen
let count2 = 0;

for (let i = 0; i < cargo.length; ++i) {
    ++ count2;
}

console.log("Gesamtanzahl der Gegenstände:", count2);