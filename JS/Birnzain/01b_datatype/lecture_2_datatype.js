// -- ------------------------------------------------------------------------------- --
// -- 1 Beispiel: Datentypen, Variablen - Arrays
// -- ------------------------------------------------------------------------------- --
console.log("-- -------------------------------------------------------- --")
console.log("lecture 2: exercise 1")
console.log("-- -------------------------------------------------------- --")
// Beantworten Sie die einzelnen Fragen

// a) Was ist ein Array? Wo werden Arrays eingesetzt?

console.log("Ein Array ist eine Ansammlung von Daten gleicher Art")

// b) Wie kann ein Array deklariert werden? Geben Sie ein konkretes Beispiel
// zur Speicherung einer Menge von Zahlenwerten.

let noten=[1,1,2,2,2,3,4,5,5]

// c) Wie kann auf die Elemente eines Array zugegriffen werden? Geben Sie
// jeweils ein Beispiel für eine Lese und Schreiboperation.

noten[0]

console.log(noten[0])

// Für den Zugriff auf die Elemente eines Arrays wird der Index Operator 
// verwendet.

// Ausgabe des ersten Elements
console.log("erstes element", noten[0])
// Ausgabe des 2ten Elemens
console.log("zweites element", noten[1])

// Ausgaber der Anzahl der Elemente in einem Array
console.log("anzahl der noten", noten.length)
// Ausgabe aller Elemente eines Arrays
console.log(noten)

// Hinzufügen eines Elements am Ende des Arrays. Verwendung der push Methode.

noten.push(5)

// -- ------------------------------------------------------------------------------- --
// -- 2 Beispiel: Datentypen, Variablen - Arrays
// -- ------------------------------------------------------------------------------- --
// Sie haben den Auftrag bekommen die Kurse der Intelaktie am Ende jedes Monats
// zu speichern. Verwenden Sie dazu ein Array. Es wird jeweils der Wert der 
// Aktie am Ende eines Monats gespeichert. Geben Sie den Typ der Variable aus. 
// Geben Sie ebenfalls den Typ der Werte des Arrays aus.

// Geben Sie anschließend die einzelnen Werte des Arrays aus.

/*
 * Mai 2024: 27.705
 * Jun 2024: 27.805
 * Jul 2024: 28.890
 * Aug 2024: 27.154
 * Sep 2024: 19.938
 * Okt 2024: 21.080
 * 
 */
let intelshareprices=[27705, 27805, 28890, 27154, 19938, 21080]

console.log("Intel Aktie Mai 2024", intelshareprices[0], typeof intelshareprices[0]);
console.log("Intel Aktie Jun 2024", intelshareprices[1], typeof intelshareprices[1]);
console.log("Intel Aktie Jul 2024", intelshareprices[2], typeof intelshareprices[2]);
console.log("Intel Aktie Aug 2024", intelshareprices[3], typeof intelshareprices[3]);
console.log("Intel Aktie Sep 2024", intelshareprices[4], typeof intelshareprices[4]);
console.log("Intel Aktie Okt 2024", intelshareprices[5], typeof intelshareprices[5]);

console.log("-- -------------------------------------------------------- --")
console.log("lecture 2: exercise 2")
console.log("-- -------------------------------------------------------- --")


console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 3 Beispiel: Datentypen, Variablen - Arrays
// -- ------------------------------------------------------------------------------- --
// Die folgenden Datensätze sollen nachtraglich am Ende des Arrays eingetragen
// werden. Verwenden Sie dazu das Array aus dem 1sten Beispiel. Geben Sie
// die neue Werte des Arrays aus. Verwenden Sie anschließen den Punkt Operator
// um alle Werte des Array auszugeben.

console.log("-- -------------------------------------------------------- --")
console.log("lecture 2: exercise 3")
console.log("-- -------------------------------------------------------- --")


/*
 * Nov 2024: 20.450
 * Dec 2024: 19.345
 * 
 */
intelshareprices.push(20450, 19345)

console.log("Intel Aktie Nov 2023", intelshareprices[6]);
console.log("Intel Aktie Dec 2024", intelshareprices[7]);

console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 4 Beispiel: Datentypen, Variablen - Arrays
// -- ------------------------------------------------------------------------------- --
// Definieren Sie für die Kurse der Intelaktie jeweils einen Objekt Datensatz.
// Tragen Sie anschließend jeden Datensatz in ein array ein. Geben Sie
// die Werte der Datensätze aus.

/*
 * Mai 2024: 27.705
 * Jun 2024: 27.805
 * Jul 2024: 28.890
 * Aug 2024: 27.154
 * Sep 2024: 19.938
 * Okt 2024: 21.080
 * Nov 2024: 20.450
 * Dec 2024: 19.345
 * 
 */

let share1 = {
    shareprice : 27705,
    date : "mai2024",
}

let share2 = {
    shareprice : 27805,
    date : "jun2024",
}

let share3 = {
    shareprice : 28890,
    date : "jul2024",
}

let share4 = {
    shareprice : 27154,
    date : "aug2024",
}

let share5 = {
    shareprice : 19938,
    date : "sep2024",
}

let share6 = {
    shareprice : 21080,
    date : "okt2024",
}

let share7 = {
    shareprice : 20450,
    date : "nov2024",
}

let share8 = {
    shareprice : 19345,
    date : "dec2024",
}

let year2024=[share1, share2, share3, share4, share5, share6, share7, share8]

console.log("Aktie Mai 2024", year2024[0].shareprice)
console.log("Aktie Jun 2024", year2024[1].shareprice)
console.log("Aktie Jul 2024", year2024[2].shareprice)
console.log("Aktie Aug 2024", year2024[3].shareprice)
console.log("Aktie Sep 2024", year2024[4].shareprice)
console.log("Aktie Okt 2024", year2024[5].shareprice)
console.log("Aktie Nov 2024", year2024[6].shareprice)
console.log("Aktie Dec 2024", year2024[7].shareprice)





console.log("-- -------------------------------------------------------- --")
console.log("lecture 2: exercise 4")
console.log("-- -------------------------------------------------------- --")


console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 5 Beispiel: Datentypen, Variablen - Arrays
// -- ------------------------------------------------------------------------------- --
// Für ein Fussballmatch soll ein Objekt angelegt werden. Das Objekt speichert
// den Zeitpunkt und die Arena in dem das Match ausgetragen wird. Zusätzlich
// wird ein Array mit 2 Mannschaften gespeichert. Für Mannschaften ist ein
// Name und und das Land gespeichert aus dem sie kommen. Geben Sie Namen der
// beiden Teams aus.

let FBM={
    zeitpunkt: 1200 ,
    arena: "Ernst Happel Stadion",
}



let t1 = {
    name: "Ajaks Amsterdam",
    country: "Niederlande",
}

let t2 = {
    name: "RB Leipzig",
    country: "Deutschland",
}

let teams=[t1, t2]

console.log(teams[0].name)
console.log(teams[1].name)

console.log("-- -------------------------------------------------------- --")
console.log("lecture 2: exercise 5")
console.log("-- -------------------------------------------------------- --")

// Objektdeklaration

let variable = {
    value1: 1,
    value2: 2,
}