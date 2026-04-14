// ============================================================
// HOME 1 – Preise bearbeiten
// ============================================================
// Aufgabenstellung:
// 1. Greife auf das erste Element zu.
// 2. Greife auf das letzte Element zu.
// 3. Überschreibe den Preis an Index 1 mit 6.00.
// 4. Füge einen neuen Preis 8.40 am Ende hinzu.
// 5. Gib die Anzahl aller Preise aus.

console.log("-- -------------------------------------------------------- --");
console.log("home array 1: exercise 1");
console.log("-- -------------------------------------------------------- --");

let prices = [12.99, 5.50, 7.20, 3.15, 9.80];

let firstPrice;
console.log("1. Erstes Element:", firstPrice);

let lastPrice;
console.log("2. Letztes Element:", lastPrice);

let updatedIndex1;
console.log("3. Preis an Index 1 überschrieben:", updatedIndex1);

let lastAddedPrice;
console.log("4. Neuer Preis hinzugefügt:", lastAddedPrice);

let priceCount;
console.log("5. Anzahl Preise:", priceCount);

console.log("\n");


// ============================================================
// HOME 2 – Farbenliste verwalten
// ============================================================
// Aufgabenstellung:
// 1. Greife auf das zweite Element zu.
// 2. Überschreibe das dritte Element mit "Cyan".
// 3. Ergänze am Ende "Purple".
// 4. Überschreibe das letzte Element mit "Violet".
// 5. Gib die Anzahl aller Farben aus.

console.log("-- -------------------------------------------------------- --");
console.log("home array 1: exercise 2");
console.log("-- -------------------------------------------------------- --");

let colors = ["Red", "Green", "Blue", "Yellow"];

let secondColor;
console.log("1. Zweites Element:", secondColor);

let replacedThirdColor;
console.log("2. Drittes Element ersetzt:", replacedThirdColor);

let addedColor;
console.log("3. Purple hinzugefügt:", addedColor);

let overwrittenLastColor;
console.log("4. Letztes Element überschrieben:", overwrittenLastColor);

let colorCount;
console.log("5. Anzahl Farben:", colorCount);

console.log("\n");



// ============================================================
// HOME 3 – Spielerpunkte bearbeiten
// ============================================================
// Aufgabenstellung:
// 1. Greife auf das vierte Element zu.
// 2. Überschreibe den Wert an Index 0 mit 130.
// 3. Ergänze am Ende den neuen Punktestand 99.
// 4. Überschreibe den letzten Wert mit 105.
// 5. Gib die Anzahl aller Punktestände aus.

console.log("-- -------------------------------------------------------- --");
console.log("home array 1: exercise 3");
console.log("-- -------------------------------------------------------- --");

let scores = [120, 95, 133, 87, 110, 102];

let fourthScore;
console.log("1. Viertes Element:", fourthScore);

let updatedFirstScore;
console.log("2. Neues Element an Index 0:", updatedFirstScore);

let addedScore;
console.log("3. Neuer Punktestand hinzugefügt:", addedScore);

let overwrittenLastScore2;
console.log("4. Letztes Element überschrieben:", overwrittenLastScore2);

let scoreCount;
console.log("5. Anzahl Punktestände:", scoreCount);

console.log("\n");



// ============================================================
// HOME 4 – Buchverwaltung (Array von Objekten)
// ============================================================
// Aufgabenstellung:
// 1. Greife auf den Titel des ersten Buches zu.
// 2. Greife auf den zweiten Autor von "Ocean Deep".
// 3. Setze die Anzahl der Exemplare von "Space Runner" auf 10.
// 4. Ergänze bei "Ocean Deep" einen neuen Autor "Ken".
// 5. Gib die Anzahl der Autoren von "Ocean Deep" aus.

console.log("-- -------------------------------------------------------- --");
console.log("home array 1: exercise 4");
console.log("-- -------------------------------------------------------- --");

let books = [
    {
        title: "Ocean Deep",
        authors: ["Smith", "Gordon"],
        copies: [3, 5]
    },
    {
        title: "Space Runner",
        authors: ["Lee"],
        copies: [7]
    }
];

let firstBookTitle;
console.log("1. Titel erstes Buch:", firstBookTitle);

let secondOceanAuthor;
console.log("2. Zweiter Autor Ocean Deep:", secondOceanAuthor);

let updatedCopies;
console.log("3. Space Runner neue Exemplare:", updatedCopies);

let lastOceanAuthor;
console.log("4. Autor ergänzt:", lastOceanAuthor);

let oceanAuthorCount;
console.log("5. Anzahl Autoren Ocean Deep:", oceanAuthorCount);

console.log("\n");



// ============================================================
// HOME 5 – Musik-Playlist verwalten
// ============================================================
// Aufgabenstellung:
// 1. Greife auf das Genre des zweiten Elements zu.
// 2. Gib den ersten Track aus "Rock" aus.
// 3. Überschreibe die Dauer des zweiten Rock-Tracks mit 220.
// 4. Ergänze bei "Electronic" einen neuen Track "Shine" und die Dauer 190.
// 5. Gib die Anzahl der Tracks in der Kategorie "Rock" aus.

console.log("-- -------------------------------------------------------- --");
console.log("home array 1: exercise 5");
console.log("-- -------------------------------------------------------- --");

let playlist = [
    {
        genre: "Rock",
        tracks: ["Thunder", "Roadtrip", "Stonehill"],
        durations: [180, 210, 195]
    },
    {
        genre: "Electronic",
        tracks: ["Pulse", "Waves"],
        durations: [200, 175]
    }
];

let secondGenre;
console.log("1. Genre zweites Element:", secondGenre);

let firstRockTrack;
console.log("2. Erster Rock-Track:", firstRockTrack);

let updatedRockDuration;
console.log("3. Dauer überschrieben:", updatedRockDuration);

let addedElectronicTrack;
console.log("4. Electronic erweitert:", addedElectronicTrack);

let rockTrackCount;
console.log("5. Anzahl Rock-Tracks:", rockTrackCount);

console.log("\n");