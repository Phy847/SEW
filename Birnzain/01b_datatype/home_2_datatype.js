// -- ------------------------------------------------------------------------------- --
// -- 1.Beispiel: Datentypen, Variablen - Arrays
// -- ------------------------------------------------------------------------------- --
// Programmieren Sie die folgende Aufgabe

console.log("-- -------------------------------------------------------- --")
console.log("  1: home exercise 2")
console.log("-- -------------------------------------------------------- --")

// a) Definieren Sie ein Array zur Speicherung der Temaperaturwerte an
// einem bestimmten Tag. Geben Sie das Array aus.

// Werte: -1.2, 0.2, 4.5, 1.5, -0.5

let temps=[-1.2, 0.2, 4.5, 1.5, -0.5]
console.log(temps)

// b) Geben Sie die Anzahl der Elemente aus. Geben Sie den Datentyp
// des Arrays aus.

console.log(temps.length)
console.log(typeof temps)

// c) Geben Sie das erste und letzte Element aus. Geben Sie ebenfalls
// den Datentyp der Elemente aus.

console.log(temps[0], typeof temps[0])
console.log(temps[temps.length-1])

// d) Fügen Sie die folgenden 2 Werte zum Array hinzu: -0.7, -1.8.
// Geben Sie die Werte des Arrays aus.

temps.push(-0.7)
temps.push(-1.8)

console.log(temps)

console.log("\n");


// -- ------------------------------------------------------------------------------- --
// -- 2.Beispiel: Datentypen, Variablen - Arrays
// -- ------------------------------------------------------------------------------- --
// Legen Sie ein Array von 3 Flugzeugen Objekten auf 3 unterschiedliche Arten an.
// Die 3 Flugzeugen Objekte werden zur Verfügung gestellt. Geben Sie anschließend
// die Namen der Flugzeuge aus.

console.log("-- -------------------------------------------------------- --")
console.log("-- 2: home exercise 2")
console.log("-- -------------------------------------------------------- --")

// aircrafts definition
let bommer = {
    name : "Fighta Bommer",
    cost : 22,
    structure : 3,
    handling : 4
};

let dakkajet = {
    name : "Dakka Jet",
    cost : 23,
    structure : 2,
    handling : 3
};

let grotBommer = {
    name : "Grot Bommer",
    cost : 28,
    structure : 6,
    handling : 5
}

let airplanes1=[]
airplanes[0]=bommer
airplanes[1]=dakkajet
airplanes[2]=grotBommer
console.log(airplanes1)

let airplanes2=[]
airplanes2.push(bommer)
airplanes2.push(dakkajet)
airplanes2.push(grotBommer)
console.log(airplanes2)

let airplanes3=[bommer, dakkajet, grotBommer]
console.log(airplanes3)

// a) Anlegen des Arrays und seiner Werte durch Dateninitialisierung.
// Geben Sie die Elemente des Arrays aus.

let NameOfArray=[value1, value2, value3]
console.log(NameOfArray)

console.log("a)");


console.log("\n");

// b) Löschen Sie die Daten des Arrays und fügen Sie die
// Objekte mit der push Methode hinzu
aircrafts = [];

NameOfArray.push(value4)

console.log("\n");

// c) Löschen Sie die Daten des Arrays. Verwenden Sie den
// Indexoperator um die Objekte zuzuordnen.

NameOfArray = [];
NameOfArray[0]=value1
NameOfArray[1]=value2
NameOfArray[2]=value3

console.log("\n");

console.log(...NameOfArray);