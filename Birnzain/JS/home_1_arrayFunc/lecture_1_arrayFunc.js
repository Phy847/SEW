// ===========================================================================
// ARRAY FUNCTIONS: concat, copyWithin, flat, splice, slice, includes
// ===========================================================================
// Welche Array-Methode verbindet mehrere Arrays zu einem neuen Array?
// Wie können mehrere Arrays gleichzeitig zusammengeführt werden?
//
// Welche Methode kopiert einen Teil eines Arrays innerhalb desselben Arrays?
// Wie kann man Elemente von einem Bereich an eine andere Position verschieben?
//
// Wie können verschachtelte Arrays zu einem flachen Array umgewandelt werden?
// Wie lässt sich dabei eine bestimmte Tiefe angeben?
//
// Welche Methode entfernt Elemente aus einem Array und fügt neue ein?
// Wie kann man bestehende Werte ersetzen?
//
// Welche Methode erzeugt einen neuen Array-Ausschnitt ohne das Original zu verändern?
// Wie werden Start- und Endindex verwendet?
//
// Wie kann überprüft werden, ob ein bestimmter Wert in einem Array enthalten ist?
// Welchen Rückgabewert liefert diese Methode?

// Gliedere die Arraymethoden in die Kategorie: originalarray bleibt unverändert, 
// Original-Array wird modifiziert und gibt einen bool zurück.




// ===========================================================================
// ARRAY FUNCTIONS – ANGABE – concat
// ===========================================================================
// Gegeben sind drei Arrays mit Levelnamen eines Spiels.
// forestLevels enthält Level aus dem Wald,
// desertLevels enthält Level aus der Wüste,
// iceLevels enthält Level aus dem Eisgebiet.
//
// Verbinde alle drei Arrays mithilfe von concat zu einem neuen Array allLevels.
// Gib anschließend alle Level aus, die das Wort "Boss" enthalten.
//
// Gegebene Werte:
// forestLevels: "Forest Start", "Forest Boss"
// desertLevels: "Desert Camp", "Desert Boss"
// iceLevels: "Ice Cave", "Ice Boss"

console.log("----------------------------------------------------------");
console.log("lecture - array functions 1 – angabe 1 – concat");
console.log("----------------------------------------------------------");

let forestLevels = ["Forest Start", "Forest Boss"];
let desertLevels = ["Desert Camp", "Desert Boss"];
let iceLevels = ["Ice Cave", "Ice Boss"];
let allLevels = [];
allLevels = forestLevels.concat(desertLevels, iceLevels);

for (const level of allLevels) {
    if (level.includes("Boss")) {
        console.log(level);
    }
}

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS – ANGABE – copyWithin
// ===========================================================================
// Ein Spieler besitzt eine Zauberliste.
// Die letzten beiden Zauber sollen an den Anfang der Liste kopiert werden.
//
// Gegebene Werte:
// spells: "Fireball", "Heal", "Ice Blast", "Thunder"
//
// Verwende copyWithin, um passende Elemente innerhalb des Arrays zu kopieren.
// Gib danach alle Zauber aus.

console.log("----------------------------------------------------------");
console.log("lecture - array functions 1 – angabe 2 – copyWithin");
console.log("----------------------------------------------------------");

let spells = ["Fireball", "Heal", "Ice Blast", "Thunder"];

spells.copyWithin(0, spells.length-2, spells.length);
console.log(spells);

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS – ANGABE – flat
// ===========================================================================
// Ein Spiel speichert Quests in verschachtelten Arrays.
// Die Questliste soll auf eine Ebene reduziert werden.
//
// Gegebene Werte:
// quests: "Intro", ["Dragon", "Rescue"], "Final"
//
// Verwende flat, um das Array zu glätten.
// Gib anschließend alle Quests aus, deren Name länger als 5 Zeichen ist.

console.log("----------------------------------------------------------");
console.log("lecture - array functions 1 – angabe 3 – flat");
console.log("----------------------------------------------------------");

let quests = ["Intro", ["Dragon", "Rescue"], "Final"];
let flatQuests = quests.flat();

for (const quest of flatQuests) {
    if (quest.length > 5) {
        console.log(quest);
    }
}

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS – ANGABE – splice
// ===========================================================================
// Ein Spielerinventar enthält beschädigte Items.
// Diese sollen entfernt oder ersetzt werden.
//
// Gegebene Werte:
// inventory: "Potion", "Broken Sword", "Shield", "Broken Armor"
//
// Verwende splice, um ein beschädigtes Item zu entfernen.
// Gib danach das verbleibende Inventar aus.

console.log("----------------------------------------------------------");
console.log("lecture - array functions 1 – angabe 4 – splice");
console.log("----------------------------------------------------------");

let inventory = ["Potion", "Broken Sword", "Shield", "Broken Armor"];

for (let i = inventory.length; i--;) {
    if (inventory[i].includes("Broken")) {
        inventory.splice(i, 1);
    }
}
console.log(inventory);

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS – ANGABE – slice
// ===========================================================================
// Eine Highscore-Liste enthält mehrere Punktzahlen.
// Die ersten drei Einträge sollen herausgeschnitten werden.
//
// Gegebene Werte:
// highscores: 1200, 980, 870, 500, 300
//
// Verwende slice, um die ersten drei Werte in ein neues Array topScores zu speichern.
// Gib topScores aus.

console.log("----------------------------------------------------------");
console.log("lecture - array functions 1 – angabe 5 – slice");
console.log("----------------------------------------------------------");

let highscores = [1200, 980, 870, 500, 300];
let topScores = highscores.slice(0, 3);
console.log(topScores);

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS – ANGABE – includes
// ===========================================================================
// Ein Spiel speichert Farben für ein Charakter-Design.
// Es soll überprüft werden, ob eine bestimmte Farbe vorhanden ist.
//
// Gegebene Werte:
// colors: "rot", "grün", "blau", "gelb"
// searchColor: "blau"
//
// Prüfe mithilfe von includes, ob die gesuchte Farbe enthalten ist.
// Speichere das Ergebnis in der Variable hasColor und gib sie aus.

console.log("----------------------------------------------------------");
console.log("lecture - array functions 1 – angabe 6 – includes");
console.log("----------------------------------------------------------");

let colors = ["rot", "grün", "blau", "gelb"];
let searchColor = "blau";
let hasColor = colors.includes(searchColor);
console.log(hasColor);

console.log("\n");