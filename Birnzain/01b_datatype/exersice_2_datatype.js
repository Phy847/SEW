// -- -------------------------------------------------------- --
// -- 1.Beispiel) Variablen, Deklaration und Initialisierung
// -- -------------------------------------------------------- --
// Sie wollen die Daten für folgende Person speichern. Definieren
// Sie alle notwendigen Variablen. Schreiben Sie als Kommentar da-
// zu welchen Datentyp sie haben.

// firstName : Roberto
// lastName  : Habekko
// occupation : Kinderbuchautor
// IQ : 75
// isMale : true
// weight : 90
// country: Germany

let person = {
    firstName : "Roberto", //string
    lastName  : "Habucki", //string
    occupation : "Kinderbuchautor", //string
    IQ : 75, //number
    isMale : true, //boolean
    weight : 90, //number
    country: "Germany", //string
}

// Ändern Sie anschließend den Wert des lastName zu Habucki.

console.log("-- -------------------------------------------------------- --")
console.log("exercise 2: part 1")
console.log("-- -------------------------------------------------------- --")



console.log("\n");
// -- ------------------------------------------------------------------------------- --
// -- 2.Beispiel: Datentypen, Variablen - Object, Array
// -- ------------------------------------------------------------------------------- --
// Sie möchten ein Pokerspiel programmieren. Dazu brauchen Sie ein Objekt
// Card. Ein Karte speichert dabei die folgenden Werte:

// suit: mögliche Werte -> heart, diamond, club, and spade
// rank: mögliche Werte -> Ace, 2,3,4,5,6,7,8,9,10, Jack, Queen, and King.

// Legen Sie ein Array an in dem sie 5 Karten speichern. Geben Sie 
// den rank der 3ten Karte aus. Geben Sie anschließend die Anzahl 
// der Elemente des Arrays aus.

// Geben Sie alle Elemente des Arrays mit dem ... Operator aus.

// Programmieren  Sie das Beispiel auf 3 unterschiedliche Arten.

console.log("-- -------------------------------------------------------- --")
console.log("exercise 2: part 1")
console.log("-- -------------------------------------------------------- --")
 
let card1 = {
    suit: "heart",
    rank: 2,
}
let card2 = {
    suit: "diamond",
    rank: "Ace",
}
let card3 = {
    suit: "club",
    rank: "Jack",
}
let card4 = {
    suit: "spade",
    rank: 7,
}
let card5 = {
    suit: "diamond",
    rank: "King",
}

console.log("Variante 1")
// Arraydeklaration
let hand = [];

hand[0]=card1
hand[1]=card2
hand[2]=card3
hand[3]=card4
hand[4]=card5
hand[5]=card6

console.log(hand)

console.log("\n");
console.log("2.Variante");

let v2 = [];

v2.push(card1)
v2.push(card2)
v2.push(card3)
v2.push(card4)
v2.push(card5)
v2.push(card6)

console.log(v2)

console.log("\n");
console.log("3.Variante");

// Zurücksetzen des Arrays
let v3 = [card1, card2, card3, card4, card5]

console.log(v3)

console.log("\n");