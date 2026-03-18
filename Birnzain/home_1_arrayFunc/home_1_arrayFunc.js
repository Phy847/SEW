// ===========================================================================
// ARRAY FUNCTIONS 2 – part 1 – concat (mehrere Arrays, Game-Level)
// ===========================================================================
// Ein Adventure-Spiel besitzt mehrere Level-Abschnitte.
// Erstelle die Arrays forestLevels, desertLevels und iceLevels mit Levelnamen.
// Verbinde alle Level mit concat zu einem neuen Array allLevels.
// Gib in einer Schleife alle Level aus, die das Wort "Boss" enthalten.

console.log("----------------------------------------------------------");
console.log("home - array functions 2 – part 1 – concat");
console.log("----------------------------------------------------------");

let forestLevels = ["Forest Start", "Forest Boss"];
let desertLevels = ["Desert Camp", "Desert Boss"];
let iceLevels = ["Ice Cave", "Ice Boss"];

let allLevels = forestLevels.concat(desertLevels, iceLevels);

for (let i = 0; i < allLevels.length; i++) {
    if (allLevels[i].includes("Boss")) {
        console.log(allLevels[i]);
    }
}

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS 2 – part 2 – copyWithin (target, start)
// ===========================================================================
// Ein Spieler besitzt eine Zauberliste.
// Kopiere mit copyWithin die letzten Zauber an den Anfang der Liste.
// Gib danach alle Zauber aus.

console.log("----------------------------------------------------------");
console.log("home - array functions 2 – part 2 – copyWithin");
console.log("----------------------------------------------------------");

let spells = ["Fireball", "Heal", "Ice Blast", "Thunder"];

spells.copyWithin(0, 2);

console.log(spells);

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS 2 – part 3 – copyWithin (target, start, end)
// ===========================================================================
// Eine Waffenleiste enthält mehrere Waffen.
// Kopiere nur bestimmte Waffen an eine andere Position.
// Gib die Waffenliste danach vollständig aus.

console.log("----------------------------------------------------------");
console.log("home - array functions 2 – part 3 – copyWithin");
console.log("----------------------------------------------------------");

let weapons = ["Sword", "Bow", "Axe", "Dagger", "Hammer"];

weapons.copyWithin(1, 3, 5);

console.log(weapons);

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS 2 – part 4 – flat (Tiefe 1, Quest-Liste)
// ===========================================================================
// Ein Spiel speichert Quests in verschachtelten Arrays.
// Flache die Questliste mit flat().
// Gib alle Quests aus, die mehr als 5 Buchstaben haben.

console.log("----------------------------------------------------------");
console.log("home - array functions 2 – part 4 – flat");
console.log("----------------------------------------------------------");

let quests = ["Intro", ["Dragon", "Rescue"], "Final"];

quests = quests.flat();

for (let i = 0; i < quests.length; i++) {
    if (quests[i].length > 5) {
        console.log(quests[i]);
    }
}

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS 2 – part 5 – flat (Tiefe > 1, Dungeon-Ebenen)
// ===========================================================================
// Ein Dungeon besitzt mehrere verschachtelte Ebenen mit Gegnerstärken.
// Flache alle Ebenen vollständig.
// Berechne die höchste Gegnerstärke.

console.log("----------------------------------------------------------");
console.log("home - array functions 2 – part 5 – flat");
console.log("----------------------------------------------------------");

let dungeon = [5, [10, [20, [40]]]];
let enemies ; 
let strongest = 0;

dungeon = dungeon.flat(Infinity);

for (let i = 0; i < dungeon.length; i++) {
    if (dungeon[i] > strongest) {
        strongest = dungeon[i];
    }
}


console.log("Stärkster Gegner:", strongest);
console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS 2 – part 6 – splice (nur entfernen, Inventar)
// ===========================================================================
// Ein Spielerinventar enthält mehrere Items.
// Entferne mit splice zerstörte Items.
// Gib das verbleibende Inventar aus.

console.log("----------------------------------------------------------");
console.log("home - array functions 2 – part 6 – splice");
console.log("----------------------------------------------------------");

let inventory = ["Potion", "Broken Sword", "Shield", "Broken Armor"];

for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].includes("Broken")) {
        inventory.splice(i, 1);
        i--;
    }
}

console.log(inventory);

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS 2 – part 7 – splice (ersetzen, Charakterklasse)
// ===========================================================================
// Ein Spieler ändert seine Klasse.
// Ersetze die alte Klasse durch eine neue.
// Gib alle Klassen aus.

console.log("----------------------------------------------------------");
console.log("home - array functions 2 – part 7 – splice");
console.log("----------------------------------------------------------");

let classes = ["Warrior", "Mage", "Rogue"];

classes.splice(1, 1, "Paladin");

console.log(classes);

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS 2 – part 8 – slice (Startindex, Highscores)
// ===========================================================================
// Eine Highscore-Liste enthält mehrere Punktzahlen.
// Schneide mit slice die ersten drei Einträge der Highscore-Liste heraus 
// und gib sie aus. 

console.log("----------------------------------------------------------");
console.log("home - array functions 2 – part 8 – slice");
console.log("----------------------------------------------------------");

let highscores = [1200, 980, 870, 500, 300];
let topScores = highscores.slice(0, 3);

console.log(topScores);

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS 2 – part 9 – slice (Start, End, Charaktere)
// ===========================================================================
// Ein Spiel besitzt mehrere spielbare Charaktere.
// Schneide eine Auswahl für den Multiplayer-Modus aus.
// Gib die Namen aus.

console.log("----------------------------------------------------------");
console.log("home - array functions 2 – part 9 – slice");
console.log("----------------------------------------------------------");

let characters = ["Knight", "Archer", "Mage", "Paladin", "Assassin"];
let multiplayerChars = characters.slice(1, 4);

console.log(multiplayerChars);

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS 2 – part 10 – includes (Zahl, Achievement)
// ===========================================================================
// Ein Spieler hat bestimmte Achievements freigeschaltet.
// Prüfe, ob das Achievement mit ID 999 vorhanden ist.

console.log("----------------------------------------------------------");
console.log("home - array functions 2 – part 10 – includes");
console.log("----------------------------------------------------------");

let achievements = [101, 205, 999, 404];

if (achievements.includes(999)) {
    console.log("Achievement mit ID 999 ist freigeschaltet");
}

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS 2 – part 11 – includes (Objekte, Queststatus)
// ===========================================================================
// Eine Questliste speichert Statuswerte (true = erledigt).
// Prüfe, ob noch unerledigte Quests vorhanden sind.

console.log("----------------------------------------------------------");
console.log("home - array functions 2 – part 11 – includes");
console.log("----------------------------------------------------------");

let questStatus = [true, true, false, true];

if (questStatus.includes(false)) {
    console.log("Es gibt noch unerledigte Quests");
}

console.log("\n");