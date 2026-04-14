// -- ------------------------------------------------------------------------------- --
// -- 1.Beispiel: Kontrollstrukturen - while Schleife
// -- ------------------------------------------------------------------------------- --
// Schreiben Sie eine Schleife zur Ausgabe der Werte von 1 - 21

console.log("-- ----------------------------------------------- --");
console.log("lecture control 2: exercise 1");
console.log("-- ----------------------------------------------- --");

let i = 1;

while (i <= 21) {
    console.log(i)
    ++i
}

console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 2.Beispiel: Kontrollstrukturen - while Schleife
// -- ------------------------------------------------------------------------------- --
// Geben Sie alle geraden Zahlen zwischen 1 und 100 aus.

console.log("-- ----------------------------------------------- --");
console.log("lecture control 2: exercise 2");
console.log("-- ----------------------------------------------- --");

i = 1

while (i <= 100) {
    if (i % 2 === 0) {
        console.log(i)
    }
    ++i
}

console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 3.Beispiel: Kontrollstrukturen - while Schleife
// -- ------------------------------------------------------------------------------- --
// Geben Sie alle Zahlen aus die ein Vielfaches von 2 bzw. ein Vielfaches von 3 sind.
// Beschränken Sie sich auf Werte zwischen 1 und 100.

console.log("-- ----------------------------------------------- --");
console.log("lecture control 2: exercise 3");
console.log("-- ----------------------------------------------- --");

i = 1

while (i <= 100) {
    if (i % 2 === 0 || i % 3 === 0) {
        console.log(i)
    }
    ++i
}
console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 4.Beispiel: Kontrollstrukturen - while Schleife
// -- ------------------------------------------------------------------------------- --
// // Arithmetische Folgen haben die Eigenschaft, dass die Differenz
// zweier benachbarter Folgenglieder konstant ist. So ist die Folge
// der ungeraden natürlichen Zahlen eine arithmetische Folge, da
// sie eine konstante Differenz von 2 zwischen zwei Folgengliedern
// besitzt.

// Geben Sie die ersten 13 Glieder der Folge der ungeraden Zahlen
// aus


// a_0 = 1;   a_n = a_n-1 + 2;
// {1,3,5,7,9,11,13,15,17,19,21,23,25}

// Hinweis: Verwenden Sie die while Schleife zur Lösung der
// Aufgabe.

console.log("-- ----------------------------------------------- --");
console.log("lecture control 2: exercise 4");
console.log("-- ----------------------------------------------- --");

i = 1
let counter = 0

while (counter < 13) {
    console.log(i)
    i += 2
    ++counter
}

console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 5.Beispiel: Kontrollstrukturen - while Schleife
// -- ------------------------------------------------------------------------------- --
// Geben Sie die ersten 10 Glieder der Fibonacci Folge aus. Die
// ersten 2 Glieder der Folge sind 0 und 1. Das nächste Glied
// entspricht der Summe der 2 vorangegangenen Gliedern

// a_0 = 0, a_1 = 1  ==>  f_n = f_n-1 + f_n-2

// Folge : {0, 1, 1, 2, 3, 5, 8, 13, 21, 34}


console.log("-- ----------------------------------------------- --");
console.log("lecture control 2: exercise 5");
console.log("-- ----------------------------------------------- --");

let r = 0
let a0 = 0
let a1 = 1
let a2

console.log(a0)
console.log(a1)

while (r < 8) {
    a2 = a0 + a1
    console.log(a2)
    a0 = a1
    a1 = a2
    ++r
}

console.log("\n");