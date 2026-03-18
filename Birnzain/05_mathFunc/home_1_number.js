// Erklären Sie die Funktionsweise von Math.abs(x). 
// math.abs(x) gibt den absoluten Wert von x zurück.
// Warum ist das Ergebnis immer >= 0?
// weil der absolute Wert einer Zahl deren Entfernung von Null auf der Zahlengeraden ist

// Erklären Sie die Funktionsweise von Math.ceil(x). 
// Math.ceil(x) rundet x auf die nächste ganze Zahl auf
// Wie unterscheidet es sich von Math.floor(x)?
// Math.ceil(x) rundet x auf die nächste ganze Zahl auf math.floor(x) rundet aber ab

// Erklären Sie die Funktionsweise von Math.floor(x). 
// Math.floor(x) rundet x auf die nächste ganze Zahl ab
// Was passiert bei negativen Zahlen?
// Bei negativen Zahlen wird die Zahl abgerundet, also in Richtung der kleineren Zahl

// Erklären Sie die Funktionsweise von Math.round(x). 
// Math.round(x) rundet x auf die nächste ganze Zahl
// Welche Rolle spielt die Nachkommastelle 0.5?
// Bei 0.5 wird immer aufgerundet

// Erklären Sie die Funktionsweise von Math.max(a, b, …). 
// Math.max(a, b, …) gibt den größten Wert des arrays zurück
// Wie kann man Arrays damit verwenden?
// Man kann den Spread-Operator verwenden, um die Elemente des Arrays als einzelne Argumente zu übergeben

// Erklären Sie die Funktionsweise von Math.min(a, b, …). 
// Math.min(a, b, …) gibt den kleinsten Wert des arrays zurück
// Wann ist der kleinste Wert relevant?
// Der kleinste Wert ist relevant, wenn man z.B. den minimalen Wert in einer Liste von Zahlen finden möchte

// Erklären Sie die Funktionsweise von Math.pow(basis, exponent).
// Math.pow(basis, exponent) berechnet die Potenz der Basis mit dem Exponenten
// Wo wird das eingesetzt?
// Es wird eingesetzt, um exponentielle Wachstumsberechnungen durchzuführen, wie z.B. Zinseszinsen oder Wachstumsraten

// Erklären Sie die Funktionsweise von Math.sqrt(x). 
// Math.sqrt(x) berechnet die Quadratwurzel von x
// Was passiert bei negativen Zahlen?
// Bei negativen Zahlen gibt Math.sqrt(x) NaN zurück, da die Quadratwurzel einer negativen Zahl im Bereich der reellen Zahlen nicht definiert ist

// Erklären Sie die Funktionsweise von Math.random().
// Math.random() erzeugt eine zufällige Zahl zwischen 0 (inklusive) und 1 (exklusive)
// Wie erzeugt man damit Zufallszahlen in einem Bereich?
// Man kann die Zufallszahl skalieren und verschieben, um sie in einen gewünschten Bereich zu bringen

// -- ------------------------------------------------------------------------------- --
// -- 1.Beispiel: Math.abs
// -- ------------------------------------------------------------------------------- --
// Erklären Sie die Funktionsweise von Math.abs(x). 
// Warum ist das Ergebnis immer >= 0?
//
// Stellen Sie sich vor, Sie programmieren ein Piratenspiel. 
// Ihr Schiff kann nach links (-) oder rechts (+) von der Mitte des Meeres abdriften.
// Der Wert zeigt, wie stark Sie von der Mitte abgedriftet sind.
// Egal ob links oder rechts: Wir wollen wissen, wie weit wir von der Mitte entfernt sind.

console.log("-- -------------------------------------------------------- --")
console.log("home 1: part 1")
console.log("-- -------------------------------------------------------- --")

let drift = -14;
let distanceFromCenter = Math.abs(drift)

console.log("aktueller Drift:", drift);
console.log("Entfernung von der Mitte:", distanceFromCenter);

console.log("\n");


// -- ------------------------------------------------------------------------------- --
// -- 2.Beispiel: Math.ceil
// -- ------------------------------------------------------------------------------- --
// Erklären Sie die Funktionsweise von Math.ceil(x). 
// Wie unterscheidet es sich von Math.floor(x)?
//
// Sie sind Händler im Mittelalter und verkaufen Äpfel.
// Ein Kunde will 7 Äpfel, aber Sie verkaufen die Äpfel nur in Säcken zu 3 Stück.
// Wie viele Säcke müssen Sie vorbereiten?

console.log("-- -------------------------------------------------------- --")
console.log("home 1: part 2")
console.log("-- -------------------------------------------------------- --")

let applesNeeded = 7;
let sackSize = 3;
let sacksRequired = Math.ceil(applesNeeded / sackSize);

console.log("Äpfel:", applesNeeded);
console.log("Sackgröße:", sackSize);
console.log("benötigte Säcke:", sacksRequired);

console.log("\n");


// -- ------------------------------------------------------------------------------- --
// -- 3.Beispiel: Math.floor
// -- ------------------------------------------------------------------------------- --
// Erklären Sie die Funktionsweise von Math.floor(x). 
// Was passiert bei negativen Zahlen?
//
// Ein Abenteurer findet 57 Goldmünzen. 
// Er möchte das Gold gerecht auf 4 Gefährten verteilen.
// Wie viele Münzen bekommt jeder (ohne Restmünzen)?

console.log("-- -------------------------------------------------------- --")
console.log("home 1: part 3")
console.log("-- -------------------------------------------------------- --")

let totalGold = 57;
let companions = 4;
let goldPerCompanion = Math.floor(totalGold / companions);

console.log("Gold:", totalGold);
console.log("Gefährten:", companions);
console.log("Gold pro Gefährte:", goldPerCompanion);

console.log("\n");


// -- ------------------------------------------------------------------------------- --
// -- 4.Beispiel: Math.round
// -- ------------------------------------------------------------------------------- --
// Erklären Sie die Funktionsweise von Math.round(x). 
// Welche Rolle spielt die Nachkommastelle 0.5?
//
// In einer Physiksimulation bewegen sich Teilchen.
// Die aktuelle Geschwindigkeit ist eine Kommazahl.
// Für die Anzeige möchten wir auf die nächste ganze Zahl runden.

console.log("-- -------------------------------------------------------- --")
console.log("home 1: part 4")
console.log("-- -------------------------------------------------------- --")

let exactSpeed = 4.6;
let roundedSpeed = Math.round(exactSpeed);

console.log("exakte Geschwindigkeit:", exactSpeed);
console.log("gerundete Geschwindigkeit:", roundedSpeed);

console.log("\n");


// -- ------------------------------------------------------------------------------- --
// -- 5.Beispiel: Math.max
// -- ------------------------------------------------------------------------------- --
// Erklären Sie die Funktionsweise von Math.max(a, b, …). 
// Wie kann man Arrays damit verwenden?
//
// In einem Rollenspiel würfeln drei Helden ihre Angriffswerte.
// Der höchste Wert darf als Treffer zählen.

console.log("-- -------------------------------------------------------- --")
console.log("home 1: part 5")
console.log("-- -------------------------------------------------------- --")

let rolls = [12, 18, 15];
let bestRoll = Math.max(...rolls);

console.log("Würfe:", rolls);
console.log("bester Wurf:", bestRoll);

console.log("\n");


// -- ------------------------------------------------------------------------------- --
// -- 6.Beispiel: Math.min
// -- ------------------------------------------------------------------------------- --
// Erklären Sie die Funktionsweise von Math.min(a, b, …). 
// Wann ist der kleinste Wert relevant?
//
// Eine Gruppe von Abenteurern will durch einen Tunnel.
// Der Tunnel ist nur so hoch wie der kleinste Abenteurer groß ist.
// Finden Sie den kleinsten Wert in einer Liste.

console.log("-- -------------------------------------------------------- --")
console.log("home 1: part 6")
console.log("-- -------------------------------------------------------- --")

let heights = [1.8, 1.6, 1.75, 1.5];
let minHeight = Math.min(...heights);

console.log("Größen:", heights);
console.log("kleinster Wert:", minHeight);

console.log("\n");


// -- ------------------------------------------------------------------------------- --
// -- 7.Beispiel: Math.pow
// -- ------------------------------------------------------------------------------- --
// Erklären Sie die Funktionsweise von Math.pow(basis, exponent). 
// Wo wird das eingesetzt?
//
// Ein Zauberer verstärkt seine Magie.
// Jede neue Stufe verdoppelt die Stärke der Basisenergie.
// Berechnen Sie die Stärke nach mehreren Stufen.

console.log("-- -------------------------------------------------------- --")
console.log("home 1: part 7")
console.log("-- -------------------------------------------------------- --")

let baseEnergy = 10;
let level = 3;
let finalEnergy = Math.pow(baseEnergy, level);

console.log("Basisenergie:", baseEnergy);
console.log("Level:", level);
console.log("Endenergie:", finalEnergy);
console.log("\n");


// -- ------------------------------------------------------------------------------- --
// -- 8.Beispiel: Math.sqrt
// -- ------------------------------------------------------------------------------- --
// Erklären Sie die Funktionsweise von Math.sqrt(x). 
// Was passiert bei negativen Zahlen?
//
// In einer Stadt muss ein Platz bepflanzt werden.
// Die Gesamtfläche beträgt 144 m².
// Wie lang ist die Seitenlänge, wenn der Platz quadratisch ist?

console.log("-- -------------------------------------------------------- --")
console.log("home 1: part 8")
console.log("-- -------------------------------------------------------- --")

let area = 144;
let sideLength = Math.sqrt(area);

console.log("Fläche:");
console.log("Seitenlänge:");

console.log("\n");


// -- ------------------------------------------------------------------------------- --
// -- 9.Beispiel: Math.random
// -- ------------------------------------------------------------------------------- --
// Erklären Sie die Funktionsweise von Math.random(). 
// Wie erzeugt man damit Zufallszahlen in einem Bereich?
//
// Ein Würfelspiel: Der Spieler würfelt eine Zahl von 1 bis 6.
// Simulieren Sie 5 Würfe mit einer Schleife.

console.log("-- -------------------------------------------------------- --")
console.log("home 1: part 9")
console.log("-- -------------------------------------------------------- --")

let diceRolls = [];
for (let i = 0; i < 5; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    diceRolls.push(roll);
}

console.log("Wurf 1:", diceRolls[0]);
console.log("Wurf 2:", diceRolls[1]);
console.log("Wurf 3:", diceRolls[2]);
console.log("Wurf 4:", diceRolls[3]);
console.log("Wurf 5:", diceRolls[4]);

console.log("\n");