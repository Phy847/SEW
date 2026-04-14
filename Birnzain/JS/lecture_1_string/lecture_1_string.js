// --------------------------------------------------------
// Theorie: String funktions
// --------------------------------------------------------
// Für String Variablen definiert die JavaScript SprachSpezifikation
// eine Reihe von Feldern und Methoden

// String Attribute
//        -> length

// String Methoden:
//        -> charAt
//        -> charCodeAt

//        -> endsWith
//        -> includes
//        -> indexOf
//        -> lastIndexOf
//        -> repeat
//        -> replace
//        -> slice
//        -> split
//        -> startsWith
//        -> substring
//        -> toUpperCase
//        -> toLowerCase
//        -> trim

// Anwenden einer Stringfunktion

// var a = "hello World";

// Syntax: <name>.<functions-name>();
//         a.toUpperCase();

// Hinweis: Die Stringmethode verändert nie den String selbst sondern gibt
//          eine veränderte Version des Strings zurück.

// -- ---------------------------------------------------------------------------- --
// --  1.Beispiel - Stringmethoden
// -- ---------------------------------------------------------------------------- --
// Wieviel Buchstaben hat der in der Varibale gespeicherte Name?

console.log("-- ------------------------------------------------- --")
console.log("-- lecture 1 exercise 1: length")
console.log("-- ------------------------------------------------- --")

let firstName = "Joni";
let lastName = "Führer";

let charfirst = firstName.length;
let charlast = lastName.length;

console.log(charfirst, charlast);

console.log("\n");
// -- ---------------------------------------------------------------------------- --
// --  2.Beispiel - Stringmethoden: toUpperCase/toLowerCase
// -- ---------------------------------------------------------------------------- --
// The toLowerCase() method returns the string converted to lowercase.
// Syntax: toLowerCase()

// The toUpperCase() method returns the string converted to uppercase.
// Syntax: toUpperCase()

console.log("-- ------------------------------------------------- --")
console.log("-- lecture 1 exercise 2: toUpperCase/toLowerCase")
console.log("-- ------------------------------------------------- --")
// Alle Buchstaben im folgenden Namen sollen zuerst in Großbuchstaben umgewandelt
// dann in Kleinbuchstaben umgewandelt werden. Geben Sie den Wert nach jeder
// Änderung aus

let data = "TODAY is A Beautiful DAY";
let datalow = data.toLowerCase();
let dataup = data.toUpperCase();

console.log(datalow);
console.log(dataup);

// Lösung:

console.log("\n");

// -- ---------------------------------------------------------------------------- --
// --  3.Beispiel - Stringmethoden: replace/replaceAll
// -- ---------------------------------------------------------------------------- --
// The replace() method returns a new string with the specified
// string replaced. Works only with the first occurance of the
// element

// Syntax: replace(element, replacement)
//
//         @element     [required]: token that is to be replaced
//         @replacement [required]: the replacementtoken


// The replaceAll() method returns a new string with all matches of a
// pattern replaced by a replacement.

// Syntax: replaceAll(element, replacement)
//
//         @element     [required]: token that is to be replaced
//         @replacement [required]: the replacementtoken


console.log("-- ------------------------------------------------- --")
console.log("-- lecture 1 exercise 3: toUpperCase/toLowerCase")
console.log("-- ------------------------------------------------- --")

// Ersätzen Sie alle Umlaute im folgenden Ausdruck mit ue, ae, oe.
// Geben Sie die Werte anschließend aus.


let email = "kaiserlicheösterreichischeÄnderungs@alora.com";

    let changedEmail = email.toLowerCase();

    changedEmail = changedEmail.replaceAll("ö", "oe");
    changedEmail = changedEmail.replaceAll("ä", "ae");
    changedEmail = changedEmail.replaceAll("ü", "ue");

console.log("\n");

// -- ---------------------------------------------------------------------------- --
// --  4.Beispiel - Stringmethoden: charAt
// -- ---------------------------------------------------------------------------- --
// The charAt() method returns the character at the specified index in a string.

// Syntax: charAt(index)
//
//          @index [optional]: An integer between 0 and str.length -1. If index
//                 is not provided, the default value 0 is used

console.log("-- ------------------------------------------------- --")
console.log("-- lecture 1 exercise 4: charAt")
console.log("-- ------------------------------------------------- --")

// Mit welchem Buchstaben beginnt bzw. endet das gewünschte Wort? Geben
// Sie beide Buchstaben aus. Wandeln Sie die Buchstaben in Großbuchstaben
// um.

let game = "D&D: Journeys in the dark";

let gamefirst = game.charAt(0).toUpperCase();
let gamelast = game.charAt(game.length -1).toUpperCase();

console.log(gamefirst);
console.log(gamelast);



console.log("\n");

// -- ---------------------------------------------------------------------------- --
// --  5.Beispiel - Stringmethoden: indexOf/lastIndexOf
// -- ---------------------------------------------------------------------------- --
// The string indexOf() method returns the index of the first occurence of the
// substring in a string.

// Syntax: indexOf(searchValue, fromIndex)
//
//         @searchValue [optional]: The value to search for in the string.
//                       If no string is provided explicitly, "undefined"
//                       will be searched.
//         @fromIndex    [optional]:The index to start the search at. By default it is 0.
//                       If fromIndex < 0, the search starts at index 0.

// The lastIndexOf() method returns the last index of occurence of a given
// substring in the string.

// Syntax: lastIndexOf(substr, fromIndex)
//
//         @substr - The value to search for in the given string.
//         @fromIndex (optional) - The index to start searching the string backwards.
//         By default it is +Infinity.

console.log("-- ------------------------------------------------- --")
console.log("-- lecture 1 exercise 5: indexOf")
console.log("-- ------------------------------------------------- --")

// Geben Sie den Index vom @ Zeichen zurück
let email2 = "p.panhofer@htlkrems.ac.at";
//            01234567

let symbolIndex = email2.indexOf("@");
console.log(symbolIndex);

// Geben Sie den Index des 2ten Punktes aus
let secondDotIndex = email2.indexOf(".", symbolIndex +1);
console.log(secondDotIndex);

console.log("\n");


// -- ---------------------------------------------------------------------------- --
// --  6.Beispiel - Stringmethoden: substring
// -- ---------------------------------------------------------------------------- --
// The substring() method returns a specified part of the string between start and
// end indexes.

// Syntax: substring(indexStart, indexEnd)
//
//         @indexStart - The index of the first character to start including
//         in the returned substring.
//         @indexEnd  (optional) - The index before which to stop extraction.
//         (Exclusive) If omitted, it extracts till the end of the string.

console.log("-- ------------------------------------------------- --")
console.log("-- lecture1 exercise 6: substring")
console.log("-- ------------------------------------------------- --")

// Geben Sie  für eine email den identifier und die domain aus.
// Aufbau email: <identifier>@<domain>

var hemail = "h.macho@htlkrems.at";

let identifier = hemail.substring(0, hemail.indexOf("@"));
let domain = hemail.substring(hemail.indexOf("@") +1);

console.log(identifier);
console.log(domain);


console.log("\n");

// -- ---------------------------------------------------------------------------- --
// --  7.Beispiel - Stringmethoden: split
// -- ---------------------------------------------------------------------------- --
// The split() method divides a string into a list of substrings and returns
// them as an array.

// Syntax: split(separator, limit)
//
//         @separator (optional) - The string describing where each split should occur.
//         @limit     (optional) - A non-negative integer limiting the number of pieces
//          to split the given string into.

console.log("-- ------------------------------------------------- --")
console.log("-- lecture 1 exercise 7: split")
console.log("-- ------------------------------------------------- --")
// Für den folgenden Satz soll für jedes Wort die Anzahl der Buchstaben in
// einem Array gespeichert werden.

// Geben Sie die einzelnen Wörter der folgenden Zeichenkette aus.

let loremText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

let words = loremText.split(" ");

for(const word of words){
    console.log(word, word.length);
}

console.log("\n");