// -- ------------------------------------------------------------------------------- --
// -- 1.Beispiel: Kontrollstrukturen - while Schleife
// -- ------------------------------------------------------------------------------- --
// Geben Sie die Zahlen von 21 bis 1 auf der Konsole aus.

console.log("-- -------------------------------------------------------- --")
console.log("home exercise control 2: part 1")
console.log("-- -------------------------------------------------------- --")

let i = 21;

while (i >= 1) {
    console.log(i);
    i--;
}

console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 2.Beispiel: Kontrollstrukturen - while Schleife
// -- ------------------------------------------------------------------------------- --
// Geben Sie alle ungeraden Zahle zwischen 50 und 1 aus.

// Hinweis: Verwenden Sie den % Operator zur Prüfung auf gerade/ungerade
// Werte

console.log("-- -------------------------------------------------------- --")
console.log("home exercise control 2: part 2")
console.log("-- -------------------------------------------------------- --")

let m = 50;

while (m >= 1) {
    if (m % 2 !== 0) {
        console.log(m);
    }
    m--;
}

console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 3.Beispiel: Kontrollstrukturen - while Schleife
// -- ------------------------------------------------------------------------------- --
// Prüfen Sie ob 89 eine Primzahl ist.

// Hinweis: Eine Primzahl ist nur durch sich selbst oder 1 teilbar.
// Hinweis: Verwenden Sie den % Operator
// Hinweis: Prüfen Sie ob die Zahl durch eine der Zahlen kleiner als
// 89 teilbar ist.

console.log("-- -------------------------------------------------------- --")
console.log("home exercise control 2: part 3")
console.log("-- -------------------------------------------------------- --")

let number = 89;
let isprime = true;
let u = 2;

while (u < number) {
    if (number % u === 0) {
        isprime = false;
        break;
    }
    u++;
}

if (isprime) {
    console.log(number, "ist eine Primzahl");
} else {
    console.log(number, "ist keine Primzahl");
}

console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 4.Beispiel: Kontrollstrukturen - while Schleife
// -- ------------------------------------------------------------------------------- --
// Berechnen Sie die ersten 10 Glieder der folgenden Folge.

// a_0 = 1     a_n = 2* a_1;

// a_1 = 2 * a_0 = 2 * 1 = 2
// a_2 = 2 * a_1 = 2 * 2 = 4
// a_3 = 2 * a_2 = 2 * 4 = 8
// a_4 = ...

// data = [1,2,4,8,16,32,64,128,256, 512]

console.log("-- -------------------------------------------------------- --")
console.log("home exercise control 2: part 3")
console.log("-- -------------------------------------------------------- --")

let f = 1;
let a0 = 1;
let a1;

console.log(a0);

while (f < 10) {
    a1 = 2 * a0;
    console.log(a1);
    a0 = a1;
    ++f;
}

console.log("\n");
