/*
===============================================================================
THEORIE – STRING-METHODEN (JavaScript)
===============================================================================

1) String length
Erklären Sie, was das Attribut length bei einem String zurückgibt.
Gehen Sie darauf ein, ob es sich dabei um eine Methode oder ein Attribut handelt.

2) toUpperCase() und toLowerCase()
Beschreiben Sie den Unterschied zwischen toUpperCase() und toLowerCase().
Verändert eine dieser Methoden den ursprünglichen String? Begründen Sie Ihre Antwort.

3) split()
Erklären Sie, was die Methode split() macht.
Was ist der Rückgabewert dieser Methode und wovon hängt dieser ab?

4) includes()
Beschreiben Sie die Funktionsweise der Methode includes().
Welchen Rückgabewert liefert sie und in welchen Situationen ist sie besonders sinnvoll?

5) charAt()
Erklären Sie, wie die Methode charAt() funktioniert.
Was passiert, wenn ein ungültiger Index übergeben wird?

6) indexOf()
Beschreiben Sie, was die Methode indexOf() zurückgibt.
Was bedeutet ein Rückgabewert von -1?

7) substring()
Erklären Sie die Aufgabe der Methode substring().
Wie unterscheiden sich der Start- und der Endindex bei dieser Methode?

8) replace() und replaceAll()
Beschreiben Sie den Unterschied zwischen replace() und replaceAll().
Warum kann replace() in manchen Fällen zu unerwarteten Ergebnissen führen?

9) startsWith()
Erklären Sie, wofür die Methode startsWith() verwendet wird.
Welchen Datentyp liefert diese Methode zurück?

===============================================================================
*/

// -- ---------------------------------------------------------------------------- --
// -- lecture 2 part 1: String length, toUpperCase & toLowerCase
// -- ---------------------------------------------------------------------------- --
// Angabe:
// Geben Sie Länge, Groß- und Kleinschreibung eines Wortes aus.

console.log("-------------------------------------------------------------")
console.log("-- lecture 2 part 1: String length, toUpperCase & toLowerCase")
console.log("-------------------------------------------------------------")

let demo = "Relativitätstheorie";
console.log(demo);
console.log(demo.length);
console.log(demo.toUpperCase);
console.log(demo.toLowerCase);

console.log("\n");


// -- ---------------------------------------------------------------------------- --
// -- lecture 2 part 2: String split & Array
// -- ---------------------------------------------------------------------------- --
// Angabe:
// Zerlegen Sie einen Satz in Wörter und geben Sie das Array aus.

console.log("-------------------------------------------------------------")
console.log("-- lecture 2 part 2: String split & Array")
console.log("-------------------------------------------------------------")

let demoSentence = "Das ist gut";
let demoTokens = demoSentence.split(" ");

console.log(demoTokens);

console.log("\n");


// -- ---------------------------------------------------------------------------- --
// -- lecture 2 part 3: Schleife, includes & Bedingung
// -- ---------------------------------------------------------------------------- --
// Angabe:
// Geben Sie alle Wörter aus, die den Buchstaben "a" enthalten.

console.log("-------------------------------------------------------------")
console.log("-- lecture 2 part 3: Schleife, includes & Bedingung")
console.log("-------------------------------------------------------------")

for (let i = 0; i<demoTokens.length; i++) {
    if (demoTokens[i].includes("a")){
        console.log(demoTokens[i])
    }
}

console.log(demoTokens);

console.log("\n");


// -- ---------------------------------------------------------------------------- --
// -- lecture 2 part 4: Math.abs & Math.round
// -- ---------------------------------------------------------------------------- --
// Angabe:
// Berechnen Sie die gerundete Differenz zwischen Wortlänge und 10.

console.log("-------------------------------------------------------------")
console.log("-- lecture 2 part 4: Math.abs & Math.round")
console.log("-------------------------------------------------------------")

let demoword = "test"
let diffDemo = Math.abs(Math.round(demoword.length-10));
console.log(diffDemo);

console.log("\n");


// -- ---------------------------------------------------------------------------- --
// -- lecture 2 part 5: String charAt & Vergleich
// -- ---------------------------------------------------------------------------- --
// Angabe:
// Überprüfen Sie, ob ein Wort mit einem Großbuchstaben beginnt.

console.log("-------------------------------------------------------------")
console.log("-- lecture 2 part 5: String charAt & Vergleich")
console.log("-------------------------------------------------------------")


console.log(demoword.charAt(0)===demoword.charAt(0).toUpperCase);

console.log("\n");
