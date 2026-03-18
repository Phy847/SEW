// -- ------------------------------------------------------------------------------- --
// -- 1.Beispiel: Kontrollstrukturen - if Bedingung
// -- ------------------------------------------------------------------------------- --
// Ein Punkt wird durch die folgenden 2D Koordinaten beschrieben.

let point = {
    x : 3,
    y : 2
}

// Prüfen Sie ob der Punkt innerhalb des folgenden Rechtecks liegt.
// Das Rechteck wird durch folgende Eckkoordinaten beschrieben:

// p1 = (2,2)
// p2 = (6,2)
// p3 = (2,4)
// p4 = (6,4)
// p5 = (0,5)
// p6 = (9,5)
// p7 = (0,7)
// p8 = (9,7)



// Definieren Sie die Eckpunkte als Objekte. 

//       ^
//       | p7 o o o o o o o p8
//       |  o o o o o o o o o
//       | p5 o o o o o o o p6       
//       |   p3 o o o p4 
//       |    o o o o o
//       |   p1 o o o p2   
//       |
//       |-------------------->



console.log("-- -------------------------------------------------------- --")
console.log("exercise control 1: part 1")
console.log("-- -------------------------------------------------------- --")

let p1 = {
    x : 1,
    y : 0
};

let p2 = {
    x : 5,
    y : 0
};

let p3 = {
    x : 1,
    y : 1
};

let p4 = {
    x : 5,
    y : 1
}

if(point.x >= p1.x && point.x <= p2.x && point.y >= p1.y && point.y <= p3.y){
    console.log("the point is contained");
}else {
    console.log("the point is not contained");
}


console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 2.Beispiel: Kontrollstrukturen - if Bedingung
// -- ------------------------------------------------------------------------------- --
// Prüfen Sie ob 2 Vektoren in dieselbe Richtung zeigen. 2 Vektoren zeigen in dieselbe
// Richtung wenn der eine Vektor ein Vielfaches des anderen Vektors darstellt.

// z.B.: v1 = (2,5)   v2 = (6, 15)   -> v1 * 3 = v2  ->  v2 = (2 * 3, 5 * 3);
// v2 ist ein Vielfaches von v1  -> Beide Vektoren zeigen in dieselbe Richtung.

// Definieren Sie v1 und v2 als Vektoren. Prüfen Sie ob die Vektoren in dieselbe Richtung
// zeigen. 

console.log("-- -------------------------------------------------------- --")
console.log("exercise control 1: part 2");
console.log("-- -------------------------------------------------------- --")

let v1 = {
    x : 2,
    y : 5
}

let v2 = {
    x : 6,
    y : 15
}

if (v1.x / v2.x == v1.y / v2.y) {
    console.log(v1, "und", v2, "zeigen in dieselbe Richtung")
} else {
    console.log("Die Vektoren zeigen nicht in dieselbe Richtung")
}

console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 3.Beispiel: Kontrollstrukturen - if Bedingung
// -- ------------------------------------------------------------------------------- --
// Sie haben ein Rollenspiel programmiert. Am Ende des Spiels wird geprüft ob der 
// Spieler in den Magierturm eintreten kann. Prüfen Sie dazu die folgenden Bedinungen

let hasTalisman = true;
let hasSufficientStrength = false;
let hasSufficientWisdom = true;
let hasBeatenWerwolfDen = false;
let hasSolvedWizardsPuzzle = true;
let isCursed = true;
let hasWishSpell = true;

// Hat der Spieler einen Talisman (hasTalisman), genügend Stärke (hasSufficientStrength) und
// hat er die Werwölfe besiegt (hasBeatenWerwolfDen) und ist nicht verflucht (isCursed) kann er eintretten.

// Hat der Spieler einen Talisman (hasTalisman), genügend Intelligenz (hasSufficientWisdom) und hat er
// das Rätsel des Zauberers gelöst (hasBeatenWizardsPuzzle) und ist nicht verflucht kann er
// den Turm betreten.

// Der Spieler hat einen Wunschzauber.


console.log("-- -------------------------------------------------------- --")
console.log("exercise control 1: part 3");
console.log("-- -------------------------------------------------------- --")

if (hasTalisman && hasSufficientStrength && hasBeatenWerwolfDen && !isCursed || hasTalisman && hasSufficientStrength && hasSolvedWizardsPuzzle && !isCursed) {
    console.log("Der Spieler kann den Turm betreten")
} else {
    console.log("Der Spieler kann den Turm nicht betreten")
}
hasWishSpell = true


// -- ------------------------------------------------------------------------------- --
// -- 4.Beispiel: Kontrollstrukturen - if Bedingung
// -- ------------------------------------------------------------------------------- --

// Sie spielen Schere, Stein, Papier gegen einen Arbeitskollegen.
// Legen Sie dazu 2 Variablen an. Initialisieren Sie 2 Variablen
// mit einem entsprechendem Wert (sc, st, pa).

// Wer von Ihnen hat gewonnen? Schreiben Sie ein entsprechendes
// Programm.

// Hinweis: Definieren Sie die Variablen player1 und player2.
// Ordnen Sie nach Belieben den Spielern einen der Werte
// "sc", "st" oder "pa" zu. Prüfen Sie nun welcher der beiden
// Spieler gewonnen hat.


// sc ... Scissors
// st ... Stone
// pa ... Paper

console.log("-- -------------------------------------------------------- --")
console.log("exercise control 1: part 4");
console.log("-- -------------------------------------------------------- --")

let player1 = "sc";
let player2 = "pa";

if (player1 == "sc" && player2 == "st" || player1 == "pa" && player2 == "sc" || player1 == "st" && player2 == "pa") {
    console.log("Spieler 2 gewinnt")
} else if (player1 =="sc" && player2 == "pa" || player1 == "st" && player2 == "sc" || player1 == "pa" && player2 == "st") {
    console.log("Spieler 1 gewinnt")
} else {
    console.log("unentschieden")
}

console.log("\n");