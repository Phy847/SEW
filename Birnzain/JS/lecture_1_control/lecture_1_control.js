// -- ------------------------------------------------------------------------------- --
// -- 1.Beispiel: Kontrollstrukturen - if Bedingung
// -- ------------------------------------------------------------------------------- --
// Beantworten Sie die folgenden Fragen:

// a) Erklären Sie die Funktionsweise einer if Bedinung. Wozu kann
// Sie verwendet werden.

console.log("Eine if-Bedingung ermöglicht es Code nur unter einer bestimmten Bedingung auszuführen. Sie kann verwendet werden um z.B. zu überpfüfen ob ein Ausdruck wahr oder falsch ist.")


// Kontrollstrukturen werden verwendet um den Programmfluss eines
// Programms zu steuern.


// b) Welche Operatoren können verwendet werden um logische Terme
// miteinander zu verbinden.



console.log("-- -------------------------------------------------------- --")
console.log("lecture control 1: exercise 1")
console.log("-- -------------------------------------------------------- --")

// Prüfen Sie ob der folgende Wert zwischen  0 und 100 liegt. Liegt der
// Wert zwischen 0 und 100 geben Sie den Wert aus. Liegt er außerhalb 
// geben Sie aus: Der Wert ist kein legaler Prozentwert.

let percentage = 45;

if (percentage >= 0 && percentage <= 100) {
    console.log(percentage)
} else {
    console.log("Der Wert ist kein legaler Prozentwert")
}

console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 2.Beispiel: Kontrollstrukturen - if Bedingung
// -- ------------------------------------------------------------------------------- --
// Definieren Sie 2 Monsterobjekte. Für Monster sind ein Name, ein 
// Angirffs- und Verteidigungswert und die Lebenspunkte bekannt. 
// Prüfen Sie welches der Monster den höheren Angriffswert hat und 
// geben den Namen des entsprechenden Monsters aus.

console.log("-- -------------------------------------------------------- --")
console.log("lecture control 1: exercise 2")
console.log("-- -------------------------------------------------------- --")

let monster1 = {
    name : "Franz",
    attack : 12,
    defense : 7,
    health : 70
}

let monster2 = {
    name : "Georg",
    attack : 8,
    defense : 10,
    health : 60
}

if (monster1.attack > monster2.attack) {
    console.log(monster1.name)
} else {
    console.log(monster2.name)
}

console.log("\n");



// -- ------------------------------------------------------------------------------- --
// -- 3.Beispiel: Kontrollstrukturen - if Bedingung
// -- ------------------------------------------------------------------------------- --
// Sie haben ein Rollenspiel geschrieben. Der Held steht vor einer Tür
// und probiert sie zu öffnen. Bevor eine Tür geöffnet werden kann werden
// die Werte einiger Variablen geprüft. Die Tür geht nur auf wenn
// eine der folgenden Vorbedingungen eintritt. Prüfen Sie ob die Tür geöffnet
// werden konnte.

let isNative = false;
let hasKey = true;
let hasMap = true;
let hasLockPicker = true;
let isHurt = true;
let hasSufficientStrength = true;

if (isNative == true) {
    console.log("Tür kann geöffnet werden")
} else if (hasKey == true) {
    console.log("Tür kann geöffnet werden")
} else if (hasMap == true) {
    console.log("Tür kann geöffnet werden")
} else if (hasLockPicker == true) {
    console.log("Tür kann geöffnet werden")
} else if (isHurt == true) {
    console.log("Tür kann geöffnet werden")
} else if (hasSufficientStrength == true) {
    console.log("Tür kann geöffnet werden")
} else {
    console.log("Tür kann nicht geöffnet werden")
}


// Hat der Charakter aus der Gegend (isNative) und hat einen Schlüssel kann er die Tür öffnen.
// Hat der Charakter eine Karte (hasMap) und hat er Dietriche (hasLockPick) kann er die Tür öffnen.
// Ist der Charakter unverletzt (isHurt) und hat er genug Kraft (hasSufficientStrength) kann er die
// Tür öffnen.

if (isNative == true && hasKey == true) {
    console.log("Tür kann geöffnet werden")
} else if (hasMap == true && hasLockPicker==true) {
    console.log("Tür kann geöffnet werden")
} else if (isHurt==false && hasSufficientStrength==true) {
    console.log("Tür kann geöffnet werden")
} else {
    console.log("Tür kann nicht geöffnet werden")
}

// Alle anderen Kombinationen führen nicht zum Erfolg.

console.log("-- -------------------------------------------------------- --")
console.log("lecture control 1: exercise 3")
console.log("-- -------------------------------------------------------- --")



console.log("\n");
// -- ------------------------------------------------------------------------------- --
// -- 4.Beispiel: Kontrollstrukturen - if Bedingung
// -- ------------------------------------------------------------------------------- --
// Sie haben für eine Konfliktsimulation ein Waffenobjekt geschrieben.
// Berechnen Sie mit wievielen Würfeln die Waffe angreift. Die Anzahl 
// der Würfel berechnet sich auf folgende Weise:

// 1) Bestimmen Sie die Entfernung zwischen Schützen und Ziel (distance).
// 2) Die Entfernung legt fest, welcher Index der Firepower für die 
// weitere Berechnung bestimmend ist.

// distance: von 1 bis 4   -> index: 0
//           von 5 bis 7   -> index: 1
//           von 8 bis 10  -> index: 2

// Die Anzahl der Würfel entspricht firePower[index]

console.log("-- -------------------------------------------------------- --")
console.log("lecture control 1: exercise 4")
console.log("-- -------------------------------------------------------- --")

let distance = 7;
let index = -1;
let diceCount = 0;

let weapon = {
    name : "Gattlinggun",
    firePower : [4, 5, 0]
}

if (distance >= 1 && distance <= 4) {
    diceCount = weapon.firePower[0]
} else if (distance >= 5 && distance <= 7) {
    diceCount = weapon.firePower[1]
} else if (distance >= 8 && distance <= 10) {
    diceCount = weapon.firePower[2]
}


console.log("weapon is attacking with", diceCount, "dices");