// -- ------------------------------------------------------ --
// -- Beispiel - Funktionen Theorie
// -- ------------------------------------------------------ --
// a) Erklären Sie den Begriff der Funktion. Wie unterscheidet
// sich die Funktionsdefinition vom Funktionsaufruf.
 
// b) Wozu werden Funktionen eingesetzt.
 
// c) Erklären Sie den Begriff der Funktionsparameter und
// des Funktionsrückgabewerts. Definieren Sie jeweils eine
// Funktion mit und ohne Funktionsparameter. Rufen Sie die
// Funktionen mit unterschiedlichen Parameterwerten auf.
 
 
// -- ------------------------------------------------------ --
// -- 2) Beispiel - Funktionen Theorie
// -- ------------------------------------------------------ --
// i) Markieren Sie im folgenden Beispiel die Funktionsdefinition
// und den Funktionsaufruf.
 
// ii) Wie oft wird die Funktion im folgenden Programm aufgerufen?
 
// iii) Markieren Sie Funktionsparameter und den Rückgabewert.
 
console.log("-- ------------------------------------------------- --")
console.log("-- lecture 1 exercise 2: function basic")
console.log("-- ------------------------------------------------- --")
 
//Funktionsdefinition
//Funktionskopf
function /*Name:*/sum(/*Parameter:*/a, b) {
    //Funktionsrumpf/körper
    let c = a + b;
    return c;
}
 
 
//Funktionsaufruf
let result1 = sum(4, 5);
let result2 = sum(8, 14);
 
 
console.log(result1);
 
console.log(result2);
 
// -- ------------------------------------------------------ --
// -- 3) Beispiel - Funktionen
// -- ------------------------------------------------------ --
// Schreiben Sie eine Funktion die von 2 Werten den kleineren
// zurückgibt
//
// Funktionskopf: min(x, y);
//
// z.B.: var v1 = 3;
// var v2 = 5;
 
// var result = min(v1, v2); -> 3;
 
console.log("-- ------------------------------------------------- --")
console.log("-- lecture 1 exercise 3: functions")
console.log("-- ------------------------------------------------- --")
 
// a) Funktionsdefinition: function min(x, y)
function min(x, y){
    if(x < y) {
        return x;
    } else {
        return y;
    }
}
 
 
// b) Funktionsaufruf
let minValue = min(23, -23);
console.log(minValue);
 
 
 
console.log(min(4,2));
 
console.log("\n");
 
// -- ------------------------------------------------------ --
// -- 4) Beispiel - Funktionen
// -- ------------------------------------------------------ --
// Schreiben Sie eine Funktion die prueft ob ein array Werte
// speichert.
//
// Funktionskopf isEmpty(values);
//
// z.B.: var v1 = ["Hallo"];
// var result = isEmpty(v1); -> Ergebnis: false
//
// var v2 = [];
// console.log(isEmpty(v2)); -> Ergebnis: true
 
console.log("-- ------------------------------------------------- --")
console.log("-- lecture 1 exercise 4: functions")
console.log("-- ------------------------------------------------- --")
 
// a) Funktionsdefinition
 
function isEmpty(values){
    if(values.length === 0) {
        return true;
    }
    return false;
}
 
 
// b) Funktionsaufruf
 
let values = [20, 7];
hasElements = isEmpty(values);
console.log("hat Elemente.", !hasElements);
 
console.log("\n");
 
// -- ------------------------------------------------------ --
// -- 5) Beispiel - Funktionen
// -- ------------------------------------------------------ --
// Schreiben Sie eine Funktion die für ein Array das Reverse
// berechnet
 
// Funktionskopf: reverse(values)
 
 
// Funktionsdeklaration:
 
function reverse(values){
    let newValues = [];
    for (let i = values.length - 1; i >= 0; i--) {
        newValues.push(values[i]);
    }
    return newValues;
}
 
 
console.log("-- ------------------------------------------------- --")
console.log("-- lecture 1 exercise 5: functions")
console.log("-- ------------------------------------------------- --")
 
 
// Funktionsaufruf
 
// Beispiel: var v = [23,3,2,3,2]
// var k = reverse(v) -> [2,3,3,3,23]
 
let data = [4,3,2,4,5];
console.log(...data);
 
let valueList = reverse(data);
console.log("reverse", ...valueList);
 
console.log("\n");
 
// ---------------------------------------------------
// -- 6) Beispiel - Funktionen
// ---------------------------------------------------
// Schreiben Sie eine Funktion die die Werte eines
// Arrays quadriert.
 
// Funktionskopf: map(values)
 
// Funktionsdeklaration
 
console.log("-- ------------------------------------------------- --")
console.log("-- lecture 1 exercise 6: functions")
console.log("-- ------------------------------------------------- --")
 
function map(values) {
    for (let i = 0; i < values.length; i++) {
        values[i] = pow(values[i]);
    }
    return values;
}
 
function pow(x){
return x* x;
}
 
 
// Funktionsaufruf
var v3 = [5,4,3]; // [25, 16, 9]
let modifiedData = map(v3);
 
 
// v3 = map(v3);
// console.log(v3);
console.log(...v3);
console.log("\n");
 
// ---------------------------------------------------
// -- 7. Beispiel) Funktionen
// ---------------------------------------------------
// Berechnen Sie das maximale Element aus einem array
// von Zahlen
 
// Funktionskopf: max(items)
 
console.log("-- ------------------------------------------------- --")
console.log("-- lecture 1 exercise 7: functions")
console.log("-- ------------------------------------------------- --")
 
// Funktionsdeklaration
 
function max(items) {
 
    if(items.length == 0) {
        return undefined;
    }
        let maxItem = items[0];
 
        for (const item of items) {
            if(maxItem < item){
                maxItem = item;
            }            
        }
 
        return maxItem;
}
 
 
// Funktionsaufruf
var v4 = [5,4,3, 45];
let maxElement = max(v4);
console.log(maxElement);
 
console.log()