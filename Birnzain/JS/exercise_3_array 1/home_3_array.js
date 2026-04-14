// ----------------------------------------------------------------------------
// -- 1.Beispiel) For-Of Schleife
// ----------------------------------------------------------------------------
// Die Stadtverwaltung hat eine Liste mit gemeldeten Temperaturen 
// eines Tages gesammelt.
// Man möchte sicherstellen, dass alle Messwerte korrekt ausgelesen werden.
// Geben Sie alle Temperaturen mit einer for-of Schleife aus.
// Frage im Kommentar: Wie gut eignet sich die for-of Schleife für 
// das einfache Auslesen von Werten?
console.log("-- ----------------------------------------------- --");
console.log("home array & control 3: exercise 1");
console.log("-- ----------------------------------------------- --");

let temperatures = [12, 18, 21, 19, 15];

console.log("for-of loop");

for (const temp of temperatures) {
    console.log(temp);
}

console.log("Wie gut eignet sich die for-of Schleife für das einfache Auslesen von Werten?");

console.log("\n");



// ----------------------------------------------------------------------------
// -- 2.Beispiel) For-Of Schleife
// ----------------------------------------------------------------------------
// Ein Teamleiter möchte die Namen aller Seminarteilnehmer vorlesen.
// Die Reihenfolge der Einträge soll exakt eingehalten werden.
// Geben Sie alle Namen per for-of aus.
// Frage im Kommentar: Ist die for-of Schleife hier eine gute Wahl, 
// um die Liste sequentiell zu durchlaufen?
console.log("-- ----------------------------------------------- --");
console.log("home array & control 3: exercise 2");
console.log("-- ----------------------------------------------- --");

let attendees = ["Hugo", "Abdul", "Franzesko", "Lena"];

console.log("for-of loop");

for (const names of attendees) {
    console.log(names);
}

console.log("Ist die for-of Schleife hier eine gute Wahl, um die Liste sequentiell zu durchlaufen?");

console.log("\n");



// ----------------------------------------------------------------------------
// -- 3.Beispiel) push
// ----------------------------------------------------------------------------
// Ein Warenwirtschaftssystem speichert Lagerbestände.
// Wenn eine neue Lieferung eintrifft, soll der neue Bestand am Ende hinzugefügt werden.
// Fügen Sie den neuen Wert mit push() hinzu und geben Sie danach alle Bestände aus.
console.log("-- ----------------------------------------------- --");
console.log("home array & control 3: exercise 3");
console.log("-- ----------------------------------------------- --");

let stocks = [120, 95, 133];
let newStock = 88;

console.log("for-of loop");

stocks.push(newStock);

for (const stock of stocks) {
    console.log(stock);
}

console.log("\n");



// ----------------------------------------------------------------------------
// -- 4.Beispiel) pop
// ----------------------------------------------------------------------------
// Ein Logbuch speichert Aktionen eines Roboters.
// Wenn das Log zu voll ist, soll die letzte (jüngste) Aktion entfernt werden.
// Entfernen Sie das letzte Element mit pop() und geben Sie die restlichen Aktionen aus.
console.log("-- ----------------------------------------------- --");
console.log("home array & control 3: exercise 4");
console.log("-- ----------------------------------------------- --");

let robotLog = ["Start", "Scan Area", "Move Forward", "Analyze Sample"];

console.log("for-of loop");

robotLog.pop();

for (const action of robotLog) {
    console.log(action);
}

console.log("\n");



// ----------------------------------------------------------------------------
// -- 5.Beispiel) shift
// ----------------------------------------------------------------------------
// Ein Ticketsystem verarbeitet Anfragen in Eingangsreihenfolge (FIFO).
// Wird ein Ticket bearbeitet, soll das erste Element entfernt werden.
// Entfernen Sie das erste Ticket mit shift() und geben Sie die verbleibenden Tickets aus.
console.log("-- ----------------------------------------------- --");
console.log("home array & control 3: exercise 5");
console.log("-- ----------------------------------------------- --");

let tickets = ["Ticket-100", "Ticket-101", "Ticket-102", "Ticket-103"];

console.log("for-of loop");

tickets.shift();

for (const ticket of tickets) {
    console.log(ticket);
}

console.log("\n");



// ----------------------------------------------------------------------------
// 6.Beispiel) unshift
// ----------------------------------------------------------------------------
// Ein Notfallcenter führt eine Aufgabenliste.
// Wenn eine besonders dringende Aufgabe eintrifft, muss sie ganz vorne platziert werden.
// Fügen Sie die neue Aufgabe mit unshift() ein und geben Sie die Liste aus.
console.log("-- ----------------------------------------------- --");
console.log("home array & control 3: exercise 6");
console.log("-- ----------------------------------------------- --");

let tasks = ["Normale Aufgabe A", "Normale Aufgabe B", "Normale Aufgabe C"];
let urgentTask = "!!! DRINGEND - Lebensgefahr !!!";

console.log("for-of loop");

tasks.unshift(urgentTask);

for (const task of tasks) {
    console.log(task);
}

console.log("\n");

