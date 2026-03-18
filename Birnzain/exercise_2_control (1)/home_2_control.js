// ---------------------------------------------------------------------------
// -- AUFGABE 1) Zahlen filtern und transformieren
// ---------------------------------------------------------------------------
// Gegeben ist eine Liste von ganzen Zahlen. Erstelle ein neues Array, das
// alle Werte enthält, die durch 3 teilbar sind (Modulo), jedoch multipliziert
// mit 2. Beispiel: 6 → 12, 9 → 18, 12 → 24.
//
// Löse diese Aufgabe jeweils mit:
//  - while
//  - do-while
//  - for
//  - for-of
//
// Welche Schleife eignet sich besonders gut für diese Aufgabenstellung? A: Die for Schleife

console.log("-- -------------------------------------------------------- --")
console.log("home array & control 2: exercise 1")
console.log("-- -------------------------------------------------------- --")

let numbers1 = [5, 6, 9, 10, 12, 17, 18];

console.log("while loop")

let i = 0;
let newnums = [];

while (i < numbers1.length) {
    if (numbers1[i] % 3 === 0) {
        newnums.push(numbers1[i] * 2)
    }
    ++i;
}
console.log(newnums);
newnums = [];
i = 0;

console.log("\n");
console.log("do while loop")

do {
    if (numbers1[i] % 3 === 0) {
        newnums.push(numbers1[i] * 2)
    }   ++i;
} while (i < numbers1.length)

console.log(newnums);
newnums = [];
i = 0;

console.log("\n");
console.log("for loop")

for (let i = 0; i < numbers1.length; ++i) {
    if (numbers1[i] % 3 === 0) {
        newnums.push(numbers1[i] * 2)
    }
}
console.log(newnums);

console.log("\n");
console.log("for of loop")

for (const num of numbers1) {
    if (numbers1[i] % 3 === 0) {
        newnums.push(numbers1[i] * 2)
    }
}
console.log(newnums);

console.log("\n");


console.log("\n");


// ---------------------------------------------------------------------------
// -- AUFGABE 2) Rabatte berechnen (Objekte)
// ---------------------------------------------------------------------------
// Gegeben ist eine Liste von Artikeln. Jeder Artikel besitzt einen Namen
// und einen Preis. Erstelle eine neue Liste, in der auf alle Preise
// automatisch 5% Rabatt abgezogen wurde.
// Beispiel: Preis 100 → neuer Preis 95.
//
// Löse diese Aufgabe jeweils mit:
//  - while
//  - do-while
//  - for
//  - for-of
//
// Welche Schleife eignet sich besonders gut für diese Aufgabenstellung? A: Die for-of Schleife
console.log("-- -------------------------------------------------------- --")
console.log("home array & control 2: exercise 2")
console.log("-- -------------------------------------------------------- --")
let products = [
    { name: "Monitor", price: 249 },
    { name: "Tastatur", price: 69 },
    { name: "Maus", price: 39 },
    { name: "Laptopständer", price: 54 }
];

console.log("while loop")

i = 0;
let discountedProducts = [];

while (i < products.length) {
    discountedProducts.push(products[i].price * 0.95);
    ++i;
}
console.log(discountedProducts);
discountedProducts = [];
i = 0;

console.log("\n");
console.log("do while loop")

do {
    discountedProducts.push(products[i].price * 0.95);
    ++i;
} while (i < products.length)

console.log(discountedProducts);
discountedProducts = [];
i = 0;

console.log("\n");
console.log("for loop")

for (let i = 0; i < products.length; ++i) {
    discountedProducts.push(products[i].price * 0.95);
}
console.log(discountedProducts);
discountedProducts = [];
i = 0;

console.log("\n");
console.log("for of loop")

for (const product of products) {
    discountedProducts.push(product.price * 0.95);
}
console.log(discountedProducts);
i = 0;

console.log("\n");


console.log("\n");


// ---------------------------------------------------------------------------
// -- AUFGABE 3) Summe aller geraden Zahlen
// ---------------------------------------------------------------------------
// Gegeben ist ein Array mit verschiedenen Zahlen. Berechne die Summe aller
// geraden Werte. Beispiel: [3, 4, 6, 11] → Summe = 10.
//
// Löse diese Aufgabe jeweils mit:
//  - while
//  - do-while
//  - for
//  - for-of
//
// Welche Schleife eignet sich besonders gut für diese Aufgabenstellung? A: Die for Schleife
console.log("-- -------------------------------------------------------- --")
console.log("home array & control 2: exercise 3")
console.log("-- -------------------------------------------------------- --")
let numbers2 = [3, 4, 12, 5, 23, 8, 14];

console.log("while loop")

let summe = 0;

while (i < numbers2.length) {
    if (numbers2[i] % 2 === 0) {
        summe += numbers2[i];
    }
    ++i;
}

console.log(summe);
summe = 0;
i = 0;

console.log("\n");
console.log("do while loop")

do {
    if (numbers2[i] % 2 === 0) {
        summe += numbers2[i];
    }
    ++i;
} while (i < numbers2.length)

console.log(summe);
summe = 0;
i = 0;

console.log("\n");
console.log("for loop")

for (let i = 0; i < numbers2.length; ++i) {
    if (numbers2[i] % 2 === 0) {
        summe += numbers2[i];
    }
}

console.log(summe);
summe = 0;
i = 0;

console.log("\n");
console.log("for of loop")

for (const num of numbers2) {
    if (num % 2 === 0) {
        summe += num;
    }
}

console.log(summe);
i = 0;

console.log("\n");


console.log("\n");


// ---------------------------------------------------------------------------
// -- AUFGABE 4) Eigenschaften aus Objekten extrahieren
// ---------------------------------------------------------------------------
// Gegeben ist eine Liste von Spielern, jeder Spieler besitzt einen Namen
// und eine Punktzahl. Erstelle ein neues Array, das nur die Punktzahlen 
// enthält, jedoch erhöht um +10 Bonuspunkte.
//
// Beispiel: Punkte 40 → 50.
//
// Löse diese Aufgabe jeweils mit:
//  - while
//  - do-while
//  - for
//  - for-of
//
// Welche Schleife eignet sich besonders gut für diese Aufgabenstellung? A: Die for-of Schleife
console.log("-- -------------------------------------------------------- --")
console.log("home array & control 2: exercise 4")
console.log("-- -------------------------------------------------------- --")
let players = [
    { name: "Lukas", score: 40 },
    { name: "Amir", score: 22 },
    { name: "Jana", score: 31 },
    { name: "Franz", score: 55 }
];

console.log("while loop")

let points = [];

while (i < players.length) {
    points.push(players[i].score + 10);
    ++i;
}
console.log(points);
points = [];
i = 0;

console.log("\n");
console.log("do while loop")

do {
    points.push(players[i].score + 10);
    ++i;
} while (i < players.length)

console.log(points);
points = [];
i = 0;

console.log("\n");
console.log("for loop")

for (let i = 0; i < players.length; ++i) {
    points.push(players[i].score + 10);
}

console.log(points);
points = [];
i = 0;

console.log("\n");
console.log("for of loop")

for (const player of players) {
    points.push(player.score + 10);
}

console.log(points);
i = 0;

console.log("\n");


console.log("\n");