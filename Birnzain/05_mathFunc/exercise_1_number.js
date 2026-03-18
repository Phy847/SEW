// -- ------------------------------------------------------------------------------- --
// -- 1.Beispiel: Händler-System mit Preisberechnung, Rundungen & Spread Operator
// -- ------------------------------------------------------------------------------- --
//
// Sie sind Programmierer eines mittelalterlichen Handelssystems.
// Ein Kunde kauft mehrere Waren – jede Ware hat einen Nettopreis.
// 
// Aufgabenstellung:
// 1) Verwenden Sie den Spread-Operator, um zwei Preislisten zu einer Gesamtliste zu kombinieren.
// 2) Bestimmen Sie den teuersten und günstigsten Preis (Math.max und Math.min).
// 3) Berechnen Sie den Gesamtpreis.
// 4) Der Kunde bezahlt in bar – die Endsumme muss auf volle Münzen gerundet werden (Math.round).
// 5) Die Kaufkraft schwankt, dadurch kann ein Preis auch negativ werden – verwenden Sie Math.abs,
//    um sicherzustellen, dass alle Preise positiv behandelt werden.
console.log("-- -------------------------------------------------------- --")
console.log("excercise 1: part 1")
console.log("-- -------------------------------------------------------- --")

// Variablen (ohne Lösung)
let pricesA = [12.5, 3.7, -4.2];
let pricesB = [5.1, 8.6];

let allPrices = [];
let cleaned = [];

let maxPrice;
let minPrice;

let total = 0;
let roundedTotal;

allPrices = [...pricesA, ...pricesB];

for (const price of allPrices) {
    cleaned.push(Math.abs(price));
    total += Math.abs(price);
}

maxPrice = Math.max(...cleaned);
minPrice = Math.min(...cleaned);

roundedTotal = Math.round(total);

console.log(allPrices)
console.log(cleaned)
console.log(maxPrice)
console.log(minPrice)
console.log(total)
console.log(roundedTotal)

console.log("\n");



// -- ------------------------------------------------------------------------------- --
// -- 2.Beispiel: Abenteurer-Levelsystem mit Potenzen, Wurzeln & Zufall
// -- ------------------------------------------------------------------------------- --
//
// Ein Rollenspiel nutzt ein Levelsystem.
//
// Aufgabenstellung:
// 1) Verwenden Sie Math.pow, um die benötigte Erfahrung für ein Level zu berechnen.
//    Formel: XP = Basiswert^Level
// 2) Mit Math.sqrt soll geprüft werden, ob der Spieler ein „magisches Talent“ hat.
//    (wenn sqrt(XP) > zufällige Schwelle)
// 3) Eine zufällige Bonus-Erfahrung (1–50) wird mit Math.random erzeugt.
// 4) Die Gesamt-XP wird mit Math.ceil auf volle Punkte aufgerundet.
// 5) Nutzen Sie Math.floor, um die magische Schwelle zu bestimmen.
console.log("-- -------------------------------------------------------- --")
console.log("exercise 1: part 2")
console.log("-- -------------------------------------------------------- --")

// Variablen (ohne Lösung)
let level = 7;
let baseXP = 3;

let requiredXP;
let bonus;

let totalXP;
let threshold;
let talentValue;

let hasTalent;
let finalXP;

requiredXP = Math.pow(baseXP, level);
threshold = Math.floor(Math.random() * 10) + 5;
talentValue = Math.sqrt(requiredXP);
hasTalent = talentValue > threshold;
bonus = Math.floor(Math.random() * 50) +1;
totalXP = requiredXP + bonus;
finalXP = Math.ceil(totalXP);

console.log(level);
console.log(baseXP);
console.log(requiredXP);
console.log(bonus);
console.log(totalXP)
console.log(threshold);
console.log(talentValue);
console.log(hasTalent);
console.log(finalXP);

console.log("\n");



// -- ------------------------------------------------------------------------------- --
// -- 3.Beispiel: Analyse von Temperaturmessungen (Spread, Min/Max, Rundungen)
// -- ------------------------------------------------------------------------------- --
//
// Eine Wetterstation sammelt Temperaturwerte von mehreren Sensoren.
// Aufgabenstellung:
// 1) Führen Sie die Messwerte zweier Sensoren mit Spread zu einer Gesamtliste zusammen.
// 2) Bestimmen Sie die tiefste & höchste Temperatur (Math.min/Math.max).
// 3) Bilden Sie die durchschnittliche Temperatur und runden Sie diese mit Math.floor,
//    Math.ceil und Math.round jeweils unterschiedlich.
// 4) Manchmal liefern Sensoren fehlerhafte negative Extremwerte (< -70). Diese sollen
//    per Math.abs korrigiert werden (z.B. -85 => 85).
console.log("-- -------------------------------------------------------- --")
console.log("excercise 1: part 3")
console.log("-- -------------------------------------------------------- --")

// Variablen (ohne Lösung)
let sensorA = [12.8, 14.2, -85, 15.9];
let sensorB = [13.1, 14.8, 16.0];

let mergedTemp = [];
let corrected = [];

let coldest;
let hottest;

let sumTemp = 0;
let avg;

let avgFloor;
let avgCeil;
let avgRound;

let count = 0;

mergedTemp = [...sensorA, ...sensorB];
coldest = Math.min(...mergedTemp);
hottest = Math.max(...mergedTemp);
for (const temp of mergedTemp) {
    sumTemp += Math.abs(temp);
    corrected.push(Math.abs(temp));
    count += 1;
}
avg = sumTemp / count;
avgFloor = Math.floor(avg);
avgCeil = Math.ceil(avg);
avgRound = Math.round(avg);

console.log(mergedTemp);
console.log(corrected);
console.log(coldest);
console.log(hottest);
console.log(sumTemp);
console.log(avg);
console.log(avgFloor);
console.log(avgCeil);
console.log(avgRound);


console.log("\n");