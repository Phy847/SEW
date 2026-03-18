// -- ------------------------------------------------------------------------------- --
// -- 1.Beispiel: Datentypen, Variablen
// -- ------------------------------------------------------------------------------- --
console.log("-- -------------------------------------------------------- --")
console.log("exercise 1: part 1")
console.log("-- -------------------------------------------------------- --")
 
// Sie möchten das Ergebnis der letzten Lottoziehung aus 6 von 45 speichern.
// Das Ergebnis der Ziehung beinhaltet dabei die folgenden Werte:

// 1,3,7,10,12,13


// Speichern Sie die Werte jeweils in einer eigenen Variable und geben
// Sie die Werte aus. Welchen typ haben die Variablen.

let l1=1
let l2=3
let l3=7
let l4=10
let l5=12
let l6=13

console.log("loto drawing:",l1,l2, l3, l4, l5, l6,typeof l1)
console.log("\n")

// -- ------------------------------------------------------------------------------- --
// -- 2.Beispiel: Datentypen, Variablen 
// -- ------------------------------------------------------------------------------- --
console.log("-- -------------------------------------------------------- --")
console.log("exercise 1: part 2")
console.log("-- -------------------------------------------------------- --")

// Sie möchten eine Konfliktsimulation für das Japan der Shingoku Area (16 Jahrhundert)
// schreiben.

// Definieren sie dazu 2 Einheiten. Für eine Einheit sollen folgende Werte
// gespeichert werden

// type: -> mögliche Werte: Ashigaru, Samurai
// name: -> Bowmen, Swordsmen, Spearmen, Gunner, Daymio, Horsemen
// attackValue: -> Werte zwischen 4 und 6
// price: -> Werte zwischen 1 und 3

// Geben Sie anschließend die Werte einer der Einheiten aus.

let unit1 = {
  type : "Ashiguru",
  name : "Bowmen",
  attackValue : 4,
  price : 1,
};

let unit2 = {
  type : "Samurai",
  name : "Swordsmen",
  attackValue : 6,
  price : 3,
};

console.log(
  "type:", unit2.type, "\t", typeof unit2.type, "\n",
  "name:", unit2.name, "\t", typeof unit2.name, "\n",
  "attackValue:", unit2.attackValue, "\t", typeof unit2.attackValue, "\n",
  "price:", unit2.price, "\t", typeof unit2.price, "\n",
  );
  
  console.log(typeof unit2)
  console.log("\n")

console.log("\n");
// -- ------------------------------------------------------------------------------- --
// -- 3.Beispiel: Datentypen, Variablen - Objektcomposition
// -- ------------------------------------------------------------------------------- --
// Sie möchten ein Pokerspiel programmieren. Dazu brauchen Sie ein Objekt
// Card. Ein Karte speichert dabei die folgenden Werte:

// * suit: mögliche Werte -> heart, diamond, club, and spade
// * rank: mögliche Werte -> Ace, 2,3,4,5,6,7,8,9,10, Jack, Queen, and King.

// Definieren Sie 2 Karten und geben Sie die Werte und Typen einer der 
// Karten aus.

// Definieren Sie anschließend ein Objekt das die beiden Karten als 
// Variablen card1 und card2 beinhaltet. Geben Sie ebenfalls die suit
// beider Karten aus indem Sie über das neu erstellte Objekt auf die beiden
// Werte zugreifen.

console.log("-- -------------------------------------------------------- --")
console.log("exercise 1: part 3")
console.log("-- -------------------------------------------------------- --")

let card1 = {
  suit : "heart",
  rank : "Ace",
}

let card2 = {
  suit : "diamond",
  rank : "King",
}

console.log(
  "suit:", card1.suit, "\t", typeof card1.suit, "\n",
  "rank:", card1.rank, "\t", typeof card1.rank, "\n"
  )

let deck = {
  card1 : card1,
  card2 : card2,
}

console.log(
  "deck values:", "\n",
  deck.card1.suit, deck.card2.suit,
  )

console.log("\n");
// -- ------------------------------------------------------------------------------- --
// -- 4.Beispiel: Datentypen, Variablen 
// -- ------------------------------------------------------------------------------- --
// Für eine Luftschiff sollen die folgende Werte gespeichert werden:

//  * Name
//  * CrewCount
//  * StructurePoints


// Ein Luftschiff ist zusätzlich mit einer Waffe ausgestatet. Für Waffen
// sind die folgenden Werte bekannt:

// * AttackValue
// * DefenseValue
// * Name

// Geben Sie den Namen des airships und den Namen der Waffe aus.

console.log("-- -------------------------------------------------------- --")
console.log("exercise 1: part 4")
console.log("-- -------------------------------------------------------- --")

let airship = {
  Name : "Luftschiff4",
  CrewCount : 35,
  StructurePoints : 80000,
  AttackValue : 120,
  DefenseValue : 70,
  GunName : "LaserCannon",
}

console.log(
  "name of ship:", airship.Name, "\n",
  "name of gun:", airship.GunName,
  )

console.log("\n");