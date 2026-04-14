// ----------------------------------------------------------------------------
// -- 1.Beispiel) For Schleife
// ----------------------------------------------------------------------------
// Schreiben Sie ein Programm das die Werte der folgenden Arrays ausgibt.
// Verwenden Sie jeweils eine while, for und for-of Schleife.
console.log("-- ----------------------------------------------- --");
console.log("lecture array & control 2: exercise 1");
console.log("-- ----------------------------------------------- --");

// a) Number
let data = [4,2,5,23,2];
console.log("while loop")

let i = 0;

while (i < data.length) {
    console.log(data[i]);
    ++i;
}

console.log("\n");
console.log("for loop")

for (let i = 0; i < data.length; ++i) {
    console.log(data[i]);
}

console.log("\n");
console.log("for-of loop")

for (const number of data) {
    console.log(number);
}

// Frage: Wie gut eignet sich die for-of Schleife im Vergleich zur klassischen for-Schleife für dieses Zahlen-Array? A: Sie ist kürzer und einfacher zu schreiben.
console.log("\n");

// b) String
let values = ["Hugo", "Abdul", "Franzesko"];
console.log("while loop")

i = 0

while (i < values.length) {
    console.log(values[i]);
    ++i;
}

console.log("\n");
console.log("for loop")

for (let i = 0; i < values.length; ++i) {
    console.log(values[i]);
}

console.log("\n");
console.log("for-of loop")

for (const value of values) {
    console.log(value);
}

// Frage: Ist die for-of Schleife hier eine gleichwertige oder bessere Alternative zur for-Schleife? A: Hier ist sie eine bessere Alternative.
console.log("\n");

// c) Object
// Gib jeweils die Namen des Aircrafts aus
let aircrafts = [
    {
        name : "Fighta Bommer",
        cost : 22,
        structure : 3,
        handling : 4
    }, {
        name : "Dakka Jet",
        cost : 23,
        structure : 2,
        handling : 3
    }, {
        name : "Grot Bommer",
        cost : 28,
        structure : 6,
        handling : 5
    }
];

console.log("while loop")

i = 0;

while (i < aircrafts.length) {
    console.log(aircrafts[i].name);
    ++i;
}

console.log("\n");
console.log("for loop")

for (let i = 0; i < aircrafts.length; ++i) {
    console.log(aircrafts[i].name);
}

console.log("\n");
console.log("for-of loop")

for (const aircraft of aircrafts) {
    console.log(aircraft.name);
}

// Frage: Inwiefern kann for-of Vorteile bieten, wenn man Objekte aus einem Array ausliest? A: Es ist einfacher und schneller/kürzer zu schreiben.
console.log("\n");



// ----------------------------------------------------------------------------
// -- 2.Beispiel) for Schleife
// ----------------------------------------------------------------------------
// Schreiben Sie ein Programm, das alle Werte eines Arrays verdoppelt
// Verwenden Sie while, for und for-of.
//
// z.B. var k = [4,2,5,1,3]
//      Nach dem Programm: k = [4,4,2,2,5,5,1,3]
console.log("-- ----------------------------------------------- --");
console.log("lecture array & control 2: exercise 2");
console.log("-- ----------------------------------------------- --");

let numbers = [4,2,5,1,3]

console.log("while loop")

i = 0;
let newnumbers = [];

while(i < numbers.length) {
    newnumbers.push(numbers[i]*2)
    ++i;
}

console.log(newnumbers);

console.log("\n");
console.log("for loop")

newnumbers = [];

for (let i = 0; i < numbers.length; ++i) {
    newnumbers.push(numbers[i]*2);
}

console.log(newnumbers);

console.log("\n");
console.log("for-of loop")

newnumbers = [];
i = 0;

for (const number of numbers) {
    newnumbers.push(numbers[i]*2);
    ++i;
}

console.log(newnumbers);
// Frage: Eignet sich for-of hier besonders gut oder gibt es Einschränkungen im Vergleich zur for-Schleife? A: Hier eignet sie sich nicht gut, da man trotzdem die Laufvariable i bracuht.
console.log("\n");



// ----------------------------------------------------------------------------
// -- 3.Beispiel) For Schleife
// ----------------------------------------------------------------------------
// In einem Array werden alle Teistrecken, die ein Taxifahrer am Tag
// zurücklegt, in km gespeichert.
// Werte die kleiner sind als 20 werden nicht berücksichtigt.
// Verwenden Sie while, for und for-of.
// Wieviel km wurden in Summe zurückgelegt?
console.log("-- ----------------------------------------------- --");
console.log("lecture array & control 2: exercise 3");
console.log("-- ----------------------------------------------- --");

var routes = [34, 213, 4, 4, 23, 87, 214];

console.log("while loop")

i = 0;
let sum = 0;

while (i < routes.length) {
    if (routes[i] > 20) {
        sum += routes[i];
    }
    ++i;
}

console.log(sum);

console.log("\n");
console.log("for loop")

sum = 0;

for (let i = 0; i < routes.length; ++i) {
    if (routes[i] > 20) {
        sum += routes[i];
    }
}

console.log(sum);

console.log("\n");
console.log("for-of loop")

sum = 0;
i= 0;

for (const distance of routes) {
    if (routes[i] > 20) {
        sum += routes[i];
    }
    ++i;
}

console.log(sum);

// Frage: Bietet die for-of Schleife hier Vorteile, da keine Indexzugriffe notwendig sind? A: Nein.
console.log("\n");



// ----------------------------------------------------------------------------
// -- 4.Beispiel) for Schleife
// ----------------------------------------------------------------------------
// Prüfen Sie ob ein bestimmter Name in einer Liste von Werten enthalten ist.
// Verwenden Sie while, for und for-of.
console.log("-- ----------------------------------------------- --");
console.log("lecture array & control 2: exercise 4");
console.log("-- ----------------------------------------------- --");

var names = ["Francesko", "Ivan", "Heino"]
var name = "Heino";

console.log("while loop")

i = 0;

while (i < names.length) {
    if (names[i] === "Heino") {
        console.log("Name ist in der Liste vorhanden")
    }
    ++i;
}

console.log("\n");
console.log("for loop")

for (let i = 0; i < names.length; ++i) {
    if (names[i] === "Heino") {
        console.log("Name ist in der Liste vorhanden")
    }
}

console.log("\n");
console.log("for-of loop")

i = 0;

for (const Heino of names) {
    if (names[i] === "Heino") {
        console.log("Name ist in der Liste vorhanden")
    }
    ++i;
}

// Frage: Ist for-of hier sinnvoll oder wäre includes() sogar effizienter? A: for of ist nicht sinnvoll
console.log("\n");



// -- ------------------------------------------------------------------------
// -- 5.Beispiel) for Schleife
// -- ------------------------------------------------------------------------
// Kopieren Sie den Inhalt der beiden folgenden Arrays in ein eigenes Array.
// Verwenden Sie while, for und for-of.
console.log("-- ----------------------------------------------- --");
console.log("lecture array & control 2: exercise 5");
console.log("-- ----------------------------------------------- --");

var priceList1 = [32, 45, 34,45];
var priceList2 = [54, 32,22]
var result = []

console.log("while loop")

i = 0;
while (i < priceList1.length) {
    result.push(priceList1[i])
    ++i;
}
i = 0;
while (i < priceList2.length) {
    result.push(priceList2[i])
    ++i;
}
console.log(result);

console.log("\n");
console.log("for loop")

result = [];

for (let i = 0; i < priceList1.length; ++i) {
    result.push(priceList1[i])
}
for (let i = 0; i < priceList2.length; ++i) {
    result.push(priceList2[i])
}
console.log(result);

console.log("\n");
console.log("for-of loop")

result = [];
i = 0;
for (const price of priceList1) {
    result.push(priceList1[i])
    ++i;
}
i = 0;
for (const price of priceList2) {
    result.push(priceList2[i])
    ++i;
}
console.log(result);

// Frage: Wie gut lässt sich das Zusammenführen zweier Arrays per for-of lösen? A: Es ist umständlich, da man die Laufvariable i braucht.
console.log("\n");



// -- ------------------------------------------------------------------------
// -- 6.Beispiel) for Schleife
// -- ------------------------------------------------------------------------
// Kopieren Sie jedes 2. Element aus einem Array in ein neues Array.
// Verwenden Sie while, for und for-of.
console.log("-- ----------------------------------------------- --");
console.log("lecture array & control 2: exercise 6");
console.log("-- ----------------------------------------------- --");

var k = [3,2,4,21, 34, 98,3];
var res = [];

console.log("while loop")

i = 0;
while (i < k.length) {
    if (i % 2 === 0) {
        res.push(k[i])
    }
    ++i;
}
console.log(res);

console.log("\n");
console.log("for loop")

res = [];

for (let i = 0; i < k.length; ++i) {
    if (i % 2 === 0) {
        res.push(k[i])
    }
}
console.log(res);

console.log("\n");
console.log("for-of loop")

res = [];
i = 0;
for (const num of k) {
    if (i % 2 === 0) {
        res.push(k[i])
    }
    ++i;
}
console.log(res);

// Frage: Ist for-of hier geeignet, obwohl die Aufgabe stark indexbasiert ist? A: Nein, da man die Laufvariable i braucht.
console.log("\n");
