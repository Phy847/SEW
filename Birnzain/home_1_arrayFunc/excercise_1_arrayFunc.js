// ===========================================================================
// ARRAY FUNCTIONS: flat + Math.round
// ===========================================================================
// Ein Spiel speichert mehrere Zonen mit Gegnerstärken.
// zones enthält Objekte mit:
// name – Name der Zone
// enemies – Array mit Zahlen (Gegnerstärken)
// Beispiel:
// Zone "Forest" mit Gegnern 10, 20, 40
// Zone "Desert" mit Gegnern 35, 45, 50
// Berechne pro Zone die gerundete Durchschnittsstärke (Math.round)
// und gib alle Zonen aus, deren Durchschnitt über 30 liegt.

console.log("----------------------------------------------------------");
console.log("exercise 1 – part 1 – Array Functions");
console.log("----------------------------------------------------------");

let zone1 = { name: "Forest", enemies: [10, 20, 40] };
let zone2 = { name: "Desert", enemies: [35, 45, 50] };

let avg1  = 0;
for (let i = 0; i < zone1.enemies.length; i++) {
    avg1 += zone1.enemies[i];
}
avg1 = Math.round(avg1 / zone1.enemies.length);

let avg2 = 0;
for (let i = 0; i < zone2.enemies.length; i++) {
    avg2 += zone2.enemies[i];
}
avg2 = Math.round(avg2 / zone2.enemies.length);

console.log(avg1)
console.log(avg2)

console.log("\n");



// ===========================================================================
// ARRAY FUNCTIONS: Math.max
// ===========================================================================
// Eine Schule speichert Klassen mit Punktzahlen.
// classes ist ein Array mit Objekten:
// name – Klassenname
// points – Array mit Zahlen
// Beispiel:
// Klasse "1A" mit Punkten 12, 18, 25
// Klasse "2B" mit Punkten 30, 22, 28
// Ermittle pro Klasse die höchste Punktzahl mit Math.max
// und gib sie formatiert aus.

console.log("----------------------------------------------------------");
console.log("exercise 1 – part 2 – Array Functions");
console.log("----------------------------------------------------------");

let class1 = { name: "1A", points: [12, 18, 25] };
let class2 = { name: "2B", points: [30, 22, 28] };

let max1 = Math.max(...class1.points);
let max2 = Math.max(...class2.points);

console.log(max1)
console.log(max2)

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS: flat + Math.abs
// ===========================================================================
// Ein Dungeon besitzt verschachtelte Ebenen mit Entfernungen.
// distances ist ein verschachteltes Array
// Beispiel: 10, [30, [80, 45]]
// Flache das Array vollständig mit flat
// Berechne die absolute Differenz zu 50 (Math.abs)
// und gib alle Werte aus, deren Differenz über 20 liegt.

console.log("----------------------------------------------------------");
console.log("exercise 1 – part 3 – Array Functions");
console.log("----------------------------------------------------------");

let dungeon = [10, [30, [80, 45]]];
let flatDistances = dungeon.flat(Infinity);

for (let i = 0; i < flatDistances.length; i++) {
    let diff = Math.abs(flatDistances[i] - 50);
    if (diff > 20) {
        console.log(flatDistances[i]);
    }
}

console.log("\n");


// ===========================================================================
// ARRAY FUNCTIONS: concat + Math.floor
// ===========================================================================
// Ein Spiel besitzt mehrere Levelbereiche mit Spielzeiten.
// forestTimes, desertTimes, iceTimes sind Arrays mit Zahlen
// Beispiel:
// forestTimes: 20, 35
// desertTimes: 10, 50
// iceTimes: 40
// Verbinde alle Zeiten mit concat
// Berechne für jede Zeit die abgerundete Hälfte (Math.floor)
// und gib nur Werte über 15 aus.

console.log("----------------------------------------------------------");
console.log("exercise 1 – part 4 – Array Functions");
console.log("----------------------------------------------------------");

let forestTimes = [20, 35];
let desertTimes = [10, 50];
let iceTimes = [40];

let allTimes = forestTimes.concat(desertTimes, iceTimes);

for (let i = 0; i < allTimes.length; i++) {
    let halfTime = Math.floor(allTimes[i] / 2);
    if (halfTime > 15) {
        console.log(halfTime);
    }
}

// ===========================================================================
// ARRAY FUNCTIONS: includes + Math.sqrt
// ===========================================================================
// Ein Spieler besitzt mehrere magische Artefakte.
// Jedes Artefakt hat einen Namen und ein Array mit Energiewerten.
//
// Gegebene Artefakte:
// - Flame Orb: 16, 25, 36
// - Ice Crystal: 9, 49, 64
// - Thunder Stone: 25, 36, 81
//
// Aufgaben:
// 1) Sammle alle Energiewerte aller Artefakte in einem Array.
// 2) Prüfe mit includes, ob der verbotene Energiewert 100 enthalten ist.
// 3) Falls 100 NICHT enthalten ist:
//    - berechne für jede Energie die gerundete Quadratwurzel
//      (Math.sqrt + Math.round)
//    - gib die berechneten Werte aus.

console.log("----------------------------------------------------------");
console.log("exercise 1 – part 5 – Array Functions");
console.log("----------------------------------------------------------");

let artifacts = [
    { name: "Flame Orb", energies: [16, 25, 36] },
    { name: "Ice Crystal", energies: [9, 49, 64] },
    { name: "Thunder Stone", energies: [25, 36, 81] }
];

let allEnergies = [];
for (let i = 0; i < artifacts.length; i++) {
    allEnergies = allEnergies.concat(artifacts[i].energies);
}

if (!allEnergies.includes(100)) {
    for (let i = 0; i < allEnergies.length; i++) {
        let sqrtEnergy = Math.round(Math.sqrt(allEnergies[i]));
        console.log(sqrtEnergy);
    }
}

console.log("\n");