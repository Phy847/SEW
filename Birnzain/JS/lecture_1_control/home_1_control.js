// -- ------------------------------------------------------------------------------- --
// -- 1.Beispiel: Kontrollstrukturen - if Bedingung
// -- ------------------------------------------------------------------------------- --
// Ein Punkt wird durch die folgenden 2D Koordinaten beschrieben.

let point = {
    x : 2,
    y : 2
}

// Prüfen Sie ob der Punkt innerhalb des folgenden Rechtecks liegt.
// Das Rechteck wird durch folgende Eckkoordinaten beschrieben:

// p1 = (1,0)
// p2 = (5,0)
// p3 = (1,1)
// p4 = (5,1)

// Definieren Sie die Eckpunkte als Objekte. 

//       ^
//       |p3 o o o p4 
//       |p1 o o o p2   
//       |-------------------->

console.log("-- -------------------------------------------------------- --")
console.log("home exercise control 1: part 1")
console.log("-- -------------------------------------------------------- --")

let p1 = {
    x : 1,
    y : 0
}

let p2 = {
    x : 5,
    y : 0
}

let p3 = {
    x : 1,
    y : 1
}

let p4 = {
    x : 5,
    y : 1
}

if (point.x <= p2.x && point.x >= p1.x && point.y <= p3.y && point.y >= p4.y) {
    console.log("Der Punkt liegt im Rechteck")
} else {console.log("Der Punkt liegt nicht im Rechteck")}

console.log("\n");

// -- --------------------------------------------------------------- --
// -- 2.Beispiel) Kontrollstrukturen - IF Bedingung
// -- --------------------------------------------------------------- --
// Sie programmieren ein MMO. Ein Charakter ist auf der Suche nach
// einer besonderen Rüstung. Der Charakter ist in der Lage einen
// Schatz zu finden wenn folgende Bedingungen eintretten:


let hasMap = false;
let hasMetWanderer = true;
let hasMetWizard = false;

let isHurt = false;
let hasGriffonFamiliar = true;
let wasRaisedInMistyMountains = true;

let isBuddha = false;


// Hat der Charakter eine Karte (hasMap) und ist er dem Emeriten
// (hasMetWanderer) oder dem Zauberer (hasMetWizard) begegnet
// kann er den Schatz finden.

// Ist der Charakter unverletzt (isHurt) oder hat er einen Greifen als
// Reittier (hasGriffonFamiliar) und ist er im Nebelgebierge aufgewachsen
// (wasRaisedInMistyMountains) kann er den Schatz finden.

// Hat er den Budda (isBuddha) Status erreicht findet er ebenfalls die Rüstung.

// Schreiben Sie ein Programm zur Prüfung ob der Charakter mit den oben
// gesetzten Werten die Rüstung findet oder nicht.

if (hasMap && hasMetWanderer || hasMap && hasMetWizard || !isHurt || hasGriffonFamiliar && wasRaisedInMistyMountains || isBuddha) {
    console.log("Spieler kann den Schatz finden")
} else {
    console.log("Spieler kann den Schatz nicht finden")
}

console.log("\n");
    
