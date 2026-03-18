// ----------------------------------------------------------------------------
// -- 1.Beispiel) For Schleife
// ----------------------------------------------------------------------------
// Schreiben Sie ein Programm das die Werte der folgenden Arrays ausgibt.
// Verwenden Sie jeweils eine while und for Schleife.
console.log("-- ----------------------------------------------- --");
console.log("lecture control 3: exercise 1");
console.log("-- ----------------------------------------------- --");

// a) Number
let data = [4,2,5,23,2];
let loopCount = 0;
console.log("while loop")

while (loopCount < data.length) {
    console.log(data[loopCount]);
    loopCount++;
}

console.log("\n");
console.log("for loop")

for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

console.log("\n");
// b) String
let values = ["Hugo", "Abdul", "Franzesko"];
loopCount = 0;
console.log("while loop")

while (loopCount < values.length) {
    console.log(values[loopCount]);
    loopCount++;
}

console.log("\n");
console.log("for loop")

for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}

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

loopCount = 0;
console.log("while loop")

while (loopCount < aircrafts.length) {
    console.log(aircrafts[loopCount].name);
    loopCount++;
}

console.log("\n");
console.log("for loop")

for (let i = 0; i < aircrafts.length; i++) {
    console.log(aircrafts[i].name);
}

console.log("\n");

// ----------------------------------------------------------------------------
// -- 2.Beispiel) for Schleife
// ----------------------------------------------------------------------------
// Schreiben Sie ein Programm, das alle Werte eines Arrays verdoppelt
//
// z.B. var k = [4,2,5,1,3]

//      Nach dem Programm: k = [8,4,10,2,6]

console.log("-- ----------------------------------------------- --");
console.log("lecture control 3: exercise 2");
console.log("-- ----------------------------------------------- --");

let numbers = [4,2,5,1,3]

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
}

console.log(...numbers);

console.log("\n");


// ----------------------------------------------------------------------------
// -- 3.Beispiel) For Schleife
// ----------------------------------------------------------------------------
// In einem Array werden alle Teistrecken, die ein
// Taxifahrer am Tag zuücklegt, in km gespeichert. Es werden  dabei
// Werte die kleiner sind als 20 nicht berücksichtigt. Vieviel km wurden
// in Summe zurückgelegt

console.log("-- ----------------------------------------------- --");
console.log("lecture control 3: exercise 3");
console.log("-- ----------------------------------------------- --");

var routes = [34, 213, 4, 4, 23, 87, 214];

// 1. Variante: while
let sum = 0;
let count = 0;

while (count < routes.length) {
    if (routes[count] >= 20) {
        sum += routes[count];
    }
    ++count;
}

console.log(sum);

// 2.Variante:
console.log("\n")

sum = 0;

for (let i = 0; i < routes.length; i++) {
    if (routes[i] >= 20) {
        sum += routes[i];
    }
}

console.log(sum);


// ----------------------------------------------------------------------------
// -- 4.Beispiel) for Schleife
// ----------------------------------------------------------------------------
// Prüfen Sie ob ein bestimmter Name in einer Liste von Werten 
// enthalten ist.

console.log("-- ----------------------------------------------- --");
console.log("lecture control 3: exercise 4");
console.log("-- ----------------------------------------------- --");

var names = ["Francesko", "Ivan", "Heino"]
var cname = "Heino";

for (let i = 0; i < names.length; i++) {
    if (names[i] === cname) {
        console.log(cname, "ist in der Liste enthalten");
    }
}

console.log("\n");

// -- ------------------------------------------------------------------------
// -- 5.Beispiel) for Schleife
// -- ------------------------------------------------------------------------
// Kopieren Sie den Inhalt der beiden folgeden Arrays in ein eigenes Array

console.log("-- ----------------------------------------------- --");
console.log("lecture control 3: exercise 4");
console.log("-- ----------------------------------------------- --");

var priceList1 = [32, 45, 34,45];
var priceList2 = [54, 32,22]

var result = []

for (let i = 0; i < priceList1.length; i++) {
    result.push(priceList1[i]);
}

for (let i = 0; i < priceList2.length; i++) {
    result.push(priceList2[i]);
}

console.log(...result);
console.log("\n");


// -- ------------------------------------------------------------------------
// -- 6.Beispiel) for Schleife
// -- ------------------------------------------------------------------------
// Kopieren Sie jedes 2 Element aus einem Array in ein neues Array

var k = [3,2,4,21,34,98,3];
var res = [];

for (let i = 0; i < k.length; i++) {
    if (i % 2 === 0) {
        res.push(k[i]);
    }
}

console.log(...res);
console.log("\n");