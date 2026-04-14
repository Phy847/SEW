// -- ------------------------------------------------------ --
// -- 1) Beispiel - Funktionen  
// -- ------------------------------------------------------ --
// Schreiben Sie eine Funktion die berechnet wieviele ungerade
// Zahlen in einem Array enthalten sind

// Funktionskopf: isUnevenNumber(values)      

// a) Funktionsdefinition (Zahlen sortieren)
function isUnevenNumber(numbers) {
    if (numbers % 2 == 1) {
        return true
    }
    return false
}

// Zahlen zählen
function countUnevenNumbers(numbers) {
    let count = 0;
    for (const number of numbers) {
        if (isUnevenNumber(number)) {
            count ++
        }        
    }
} 

console.log("-- ------------------------------------------------- --")
console.log("-- home 1 exercise 1: function basic")
console.log("-- ------------------------------------------------- --")

// b) Funktionsaufruf
let numbers = [1,67,2,4,5,2];




console.log("\n");

// -- ------------------------------------------------------ --
// -- 2) Beispiel - Funktionen  
// -- ------------------------------------------------------ --
// Rufen Sie die rollDice Funktion 10 Mal auf. Speichern Sie das
// Ergebnis der Würfelwürfe in einem Array.

// Funktionskopf: rollDice()      

// a) Funktionsdefinition

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log("-- ------------------------------------------------- --")
console.log("-- home 1 exercise 2: function basic")
console.log("-- ------------------------------------------------- --")

// b) Funktionsaufruf
let results = [];
for (let i = 0; i < 10; i++) {
    results.push(rollDice())
}

console.log(...results);
console.log("\n");

// -- ------------------------------------------------------ --
// -- 3) Beispiel - Funktionen: simulateDiceRoll
// -- ------------------------------------------------------ --
// Schreiben Sie eine Funktion die eine Menge von Würfelwürfen
// heuristisch auswertet.

// i)   Werfen Sie einen Würfel 1000 mal

// ii)  Protokollieren Sie nachfolgend wieoft eine 1, eine 2 usw
//      geworfen wurden.

// iii) Speichern Sie die Werte entsprechen in einem Array

// z.b.: [34, 45, 43, 54, 43, 12]

//       Würfelwurf        Anzahl
//          1                34
//          2                45
//          3                43
//          4                54
//          5                43
//          6                12

// Geben Sie das Ergebnisarray zurück.

// Hinweis: Verwenden Sie die rollDice Methode aus Beispiel 2.

// Funktionskopf: simulateDiceRoll()     

// a) Funktionsdefinition

function simulateDiceRoll() {
let results2 = [];
    for (let i = 0; i < 1000; i++) {
        results2.push(rollDice())
    }

    let counterForOne = 0;
    for (const element of results2) {
        if (element == 1) {
            counterForOne++
        }
    }
    let count = [];
    count.push("1:", counterForOne, "\n")

    let counterForTwo = 0;
    for (const element of results2) {
        if (element == 2) {
            counterForTwo++
        }
    }
    count.push("2:", counterForTwo, "\n")

    let counterForThree = 0;
    for (const element of results2) {
        if (element == 3) {
            counterForThree++
        }
    }
    count.push("3:", counterForThree, "\n")

    let counterForFour = 0;
    for (const element of results2) {
        if (element == 4) {
            counterForFour++
        }
    }
    count.push("4:", counterForFour, "\n")

    let counterForFive = 0;
    for (const element of results2) {
        if (element == 5) {
            counterForFive++
        }
    }
    count.push("5:", counterForFive, "\n")

    let counterForSix = 0;
    for (const element of results2) {
        if (element == 6) {
            counterForSix++
        }
    }
    count.push("6:", counterForSix, "\n")
    return count
}

console.log("-- ------------------------------------------------- --")
console.log("-- home 1 exercise 3: function basic")
console.log("-- ------------------------------------------------- --")

// b) Funktionsaufruf

console.log(...simulateDiceRoll())

console.log("\n");
// -- ------------------------------------------------------ --
// -- 4) Beispiel - Funktionen: analyseDiceRoll
// -- ------------------------------------------------------ --
// Schreiben Sie eine Funktion analayseDiceRoll. Die Funktions
// Ruft die simulateDiceRoll Methode aus Beispiel 3 auf.  Die
// Aufgabe ist herauszufinden wie stark die Anzahl der Würfel-
// wurfe maximal für die Ergebnisse abweicht.

// z.B.: Ergebnis von simulateDiceRoll: [162, 166, 162, 150, 179, 181]
//
//       min: 150, max: 181  -> Ergebnis max - min = 31


// Funktionskopf: analyseDiceRoll
// Hinweis: Verwenden Sie die Math.min u. Math.max

// a) Funktionsdefinition

function analyseDiceRoll() {
    let count2 = simulateDiceRoll()
    let count3 = count2.filter(element => typeof element === "number")
    let max = Math.max(...count3)
    let min = Math.min(...count3)
    return max - min
}




console.log("-- ------------------------------------------------- --")
console.log("-- home 1 exercise 4: function basic")
console.log("-- ------------------------------------------------- --")


// b) Funktionsaufruf

let deviation = analyseDiceRoll()
console.log(deviation)