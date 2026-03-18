// -- ---------------------------------------------------------------------------- --
// --  1.Beispiel - Stringmethoden: sentenceCount
// -- ---------------------------------------------------------------------------- --
// Schreiben Sie eine Methode die berechnet wie oft ein bestimmter 
// Ausdruck in  einem Text vorkommt.

// Wie oft kommt das Wort Bilbo im folgenden Text vor?

console.log("-- ------------------------------------------------- --")
console.log("-- home 1 exercise 1: string methods")
console.log("-- ------------------------------------------------- --")

var data = "Es war ein schöner Morgen, als ein alter Mann bei Bilbo anklopfte. " +
           "Wir wollen hier keine Abenteuer, vielen Dank, wimmelte er den ungebetenen " +
           "Besucher ab. Überhaupt, wie heißen Sie eigentlich? - Ich bin Gandalf, antwortete dieser." +
           "Und damit dämmerte es Bilbo : Das Abenteuer hatte schon begonnen!";

let Bilbocount = 0;
let position = data.indexOf("Bilbo");

while(position !== -1){
    Bilbocount++;
    position = data.indexOf("Bilbo", position + "Bilbo".length);
};
console.log(Bilbocount);

console.log("\n");


// -- ---------------------------------------------------------------------------- --
// --  2.Beispiel - Stringmethoden: acronym
// -- ---------------------------------------------------------------------------- --
// Schreiben Sie eine Methode die aus eine Folge von Wörtern das Akronym berechnet.
//
// Hinweis: Akronyme entstehen dadurch, dass Wörter oder Wortgruppen auf ihre
//          Anfangsbuchstaben gekürzt und diese zusammengefügt werden.
//          Ein Akronym besteht immer aus Großbuchstaben.
//

console.log("-- ------------------------------------------------- --")
console.log("--  home 1 exercise 2: string methods")
console.log("-- ------------------------------------------------- --")

let words = ["Java","Script","Object","Notaion"];

let acronym = "";

for(const word of words){
    acronym += word[0];
};

console.log(acronym);
console.log("\n");

// -- ---------------------------------------------------------------------------- --
// --  3.Beispiel - Stringmethoden
// -- ---------------------------------------------------------------------------- --
// Schreiben Sie ein Programm das für folgende Zeichenketten ihre Länge 
// berechnet. Speichern Sie die Längen in einem Array.

console.log("-- ------------------------------------------------- --")
console.log("--  home 1 exercise 3: string methods")
console.log("-- ------------------------------------------------- --")

tokens = ["Java","Script","Object","Notaion"];
let tokenLengths = [];

for(const token of tokens){
    tokenLengths.push(token.length);
};

console.log(...tokenLengths);
console.log("\n");