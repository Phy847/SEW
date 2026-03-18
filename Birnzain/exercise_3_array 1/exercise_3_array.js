// ----------------------------------------------------------------------------
// -- 1.Beispiel) For-Of & push – Neue Sensorwerte einfügen
// ----------------------------------------------------------------------------
// Aufgabe:
// Ein Umweltmessgerät speichert Temperaturwerte als Objekte. 
// Nach einer manuellen Kontrolle soll ein zusätzlicher Messwert 
// (bestehend aus "value" und "source") hinzugefügt werden.
// 
// Geben Sie anschließend alle Werte per for-of Schleife aus.
// Nutzen Sie push(), um den neuen Datensatz hinzuzufügen.
// 
// Frage: Warum ist push hier sinnvoll, um die Messreihe am Ende zu erweitern?
console.log("-- ----------------------------------------------- --");
console.log("exercise array & loop 3 part 1: sensordaten erweitern");
console.log("-- ----------------------------------------------- --");

let sensorData = [
    { value: 18, source: "Sensor A" },
    { value: 21, source: "Sensor B" },
    { value: 20, source: "Sensor C" }
];

let newMeasurement = { value: 19, source: "Manual Check" };

sensorData.push(newMeasurement)

for (const entry of sensorData) {
    console.log(entry.value, entry.source)
}

console.log("\n");



// ----------------------------------------------------------------------------
// -- 2.Beispiel) for-Schleife & pop – Letztes Logobjekt entfernen
// ----------------------------------------------------------------------------
// Aufgabe:
// Ein System speichert Logeinträge als Objekte in einem Array.
// Wenn das Log überläuft, soll der neueste Eintrag entfernt werden.
// Entfernen Sie den letzten Eintrag mit pop() und geben Sie danach 
// alle verbliebenen Einträge aus.
//
// Nutzen Sie eine klassische for-Schleife, um die Objekte anhand des Indexes 
// strukturiert auszugeben.
//
// Frage: Warum ist pop ideal, um das "jüngste Ereignis" zu löschen?
console.log("-- ----------------------------------------------- --");
console.log("exercise array & loop 3 part 2: log bereinigung");
console.log("-- ----------------------------------------------- --");

let logs = [
    { id: 101, action: "Start" },
    { id: 102, action: "Check Components" },
    { id: 103, action: "Calibrate Sensors" },
    { id: 104, action: "Emergency Stop" }
];

if (logs.length > 3) {
    logs.pop();
    for (const log of logs) {
        console.log(log);
    }
}

console.log("\n");



// ----------------------------------------------------------------------------
// -- 3.Beispiel) For-Of & shift – Warteschlangenverwaltung
// ----------------------------------------------------------------------------
// Aufgabe:
// Eine Service-Hotline verwaltet Kundenanfragen in einer Warteschlange (FIFO).
// Jede Anfrage besteht aus einem Objekt mit "name" und "issue".
// 
// Wenn der nächste Kunde bearbeitet wird, muss das erste Element entfernt werden.
// Nutzen Sie shift(), um das erste Objekt zu entfernen.
// 
// Geben Sie danach alle verbleibenden Anfragen per for-of Schleife aus.
//
// Frage: Wieso ist shift() die passende Methode für Warteschlangenprinzipien (FIFO)?
console.log("-- ----------------------------------------------- --");
console.log("exercise array & loop 3 part 3: hotline warteschlange");
console.log("-- ----------------------------------------------- --");

let hotlineQueue = [
    { name: "Anna", issue: "Passwort vergessen" },
    { name: "Mehmet", issue: "Rechnung unklar" },
    { name: "Susi", issue: "Technische Störung" }
];

hotlineQueue.shift();

for (const ticket of hotlineQueue) {
    console.log(ticket.name + "=" + ticket.issue)
}

console.log("\n");



// ----------------------------------------------------------------------------
// -- 4.Beispiel) For-Schleife & unshift – Priorisierte Aufgabenliste
// ----------------------------------------------------------------------------
// Aufgabe:
// Ein Projektboard verwaltet Aufgaben als Objekte.
// Wenn eine besonders wichtige Aufgabe auftaucht, muss sie an erster Stelle stehen.
// 
// Nutzen Sie unshift(), um eine neue Aufgabe an den Anfang zu setzen.
// 
// Geben Sie danach alle Aufgaben mit einer klassischen for-Schleife aus,
// wobei die Ausgabe die Priorität anhand der Position verdeutlicht.
//
// Frage: Warum ist unshift die logische Wahl, wenn eine Aufgabe dringender ist 
//        als alle vorhandenen?
console.log("-- ----------------------------------------------- --");
console.log("exercise array & loop 3 part 4: aufgaben priorisieren");
console.log("-- ----------------------------------------------- --");

let tasks = [
    { title: "Dokumentation ergänzen", status: "open" },
    { title: "Bug #234 fixen", status: "in progress" },
    { title: "Kundendemo vorbereiten", status: "open" }
];
let urgentTask = { title: "!!! Sicherheitsproblem beheben !!!", status: "critical" };

tasks.unshift(urgentTask)

for (const task of tasks) {
    if (tasks[task].status === "critical") {
        tasks.unshift[task]
    }
}

console.log("\n");