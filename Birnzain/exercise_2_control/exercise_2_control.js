// -- ------------------------------------------------------------------------------- --
// -- 1.Beispiel: Kontrollstrukturen - while Schleife
// -- ------------------------------------------------------------------------------- --
// Berechnen Sie die größte Zahl zwischen 0 und 100 die durch 4 teilbar ist.
// Verwenden Sie zur Lösung der Aufgabe eine while Schleife.

console.log("-- -------------------------------------------------------- --")
console.log("exercise control 2: part 1")
console.log("-- -------------------------------------------------------- --")

let i = 0
let value = 0

while (i <= 100) {
    if(i*4 <= 100) {
        value = i*4
    }

    i += 1
}

console.log("value", value)

console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 2.Beispiel: Kontrollstrukturen - while Schleife
// -- ------------------------------------------------------------------------------- --
// Schreiben Sie ein Programm das die Faktoriellen einer Zahl berechnet.

// Definition Faktorielle:

// n! = 1 * 2 * ... * n
// z.b.: 5! = 1 * 2 * 3 * 4 * 5;

console.log("-- -------------------------------------------------------- --")
console.log("exercise control 2: part 2")
console.log("-- -------------------------------------------------------- --")

let n = 5;
let loopcount = 1;
let result = 1;

while (loopcount <= n) {
    result *= loopcount;
    loopcount += 1
}

console.log(n, "!:", result);

console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 3.Beispiel: Kontrollstrukturen - while Schleife
// -- ------------------------------------------------------------------------------- --
// Schreiben Sie ein Programm zur Berechnung der Summe aller natürlichen Zahlen
// bis n. Verwenden Sie eine while Schleife.

// Definition der Berechnung
// let k = 1 + 2 + 3 + 4 +.. + n
// k = 1 + 2 + 3 + 4 für n = 4 mit Ergebnis: 10

console.log("\n");
console.log("-- -------------------------------------------------------- --")
console.log("exercise control 2: part 3")
console.log("-- -------------------------------------------------------- --")

let l = 4;
let loopeede = 1;
let wert = 0;

while (loopeede <= l) {
    wert += loopeede;
    loopeede += 1;
}

console.log(l, "Summe:", wert);

console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 4.Beispiel: Kontrollstrukturen - while Schleife
// -- ------------------------------------------------------------------------------- --
// Die Harmonische Folge ist eine bekannte Folge in der Mathematik
// für die sich Werte nach folgendem Muster berechnen:

// b_1 = 1;  b_n = 1/n;
// {1, 0.5, 0.3333, 0.25, ...}

// Geben Sie soviele Folgenglieder aus, solange die Werte größer
// als 0,01 sind. Wieviele Folgenglieder sind das?

// b_1 = 1
// b_2 = 1/2 = 0.5
// b_3 = 1/3 = 0.3333
// b_4 = 1/4
// b_5 = 1/5

// b_1 - b_2 = 0.5
// b_2 - b_3 = 0.166666
// b_3 - b_4 = 0.05

console.log("-- -------------------------------------------------------- --")
console.log("exercise control 2: part 4a")
console.log("-- -------------------------------------------------------- --")

let g = 1;

while (1/g >= 0.01) {
    console.log(1/g);
    g++;
}

console.log("\n");

// Geben Sie soviele Folgenglieder aus bis die Differenz der Folgenglieder 
// kleiner ist als 0.01

console.log("-- -------------------------------------------------------- --")
console.log("exercise control 2: part 4b")
console.log("-- -------------------------------------------------------- --")

let g_1 = 1;
let g_2 = 2;

while (1/g_1 - 1/g_2 > 0.01) {
    console.log(1/g_1);
    g_1+= 1;
    g_2+= 1;
}

console.log("\n");



// -- ------------------------------------------------------------------------------- --
// -- 5.Beispiel: Kontrollstrukturen - while Schleife
// -- ------------------------------------------------------------------------------- --
// Die Reihe einer Folge stellt die Summe aller  Folgenglieder einer Folge dar.

// z.b.: Harmonische Folge:
// a_1 = 1; a_n = 1/n; 
// a_2 = 1/2 = 0.5; 
// a_3 = 1/3 = 0.333;
// a_4 = 1/4 = 0.25

// Folge: {1, 1/2, 1/3, 1/4, 1/5, ....}


// Harmonische Reihe:
// r_1 = a_1 = 1;  
// r_2 = a_1 + a_ 2 = 1 + 1/2 = 1.5;
// r_3 = a_1 + a_2 + a_3 =  1 + 1/2 + 1/3 = 1.833;


// Berechnen Sie r_n solange es kleiner als 7 ist. 

console.log("-- -------------------------------------------------------- --")
console.log("exercise control 2: part 5")
console.log("-- -------------------------------------------------------- --")

let index = 1;
let r_n = 1;
let j = 1;

while (index <= 7) {
    r_n = 0;
    j = 1;
    while (j <= index) {
        r_n += 1/j;
        j += 1;
    }
    console.log("r_", index, ":", r_n);
    index += 1;
}

console.log("\n");