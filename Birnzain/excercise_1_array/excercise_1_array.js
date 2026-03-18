// ------------------------------------------------------------
// EXERCISE 1 – Temperaturen analysieren
// ------------------------------------------------------------
// Aufgabenstellung:
// 1. Greife auf das erste Element des Arrays zu.
// 2. Greife auf das letzte Element zu (verwende length - 1).
// 3. Überschreibe den Wert an Index 2 mit einer neuen Temperatur.
// 4. Ergänze einen neuen Messwert am Ende des Arrays (push).
// 5. Gib die Anzahl der gesamten Messwerte aus.
// ------------------------------------------------------------

let temperatures = [18.5, 21.3, 19.8, 23.0, 17.4, 20.1];

console.log("Erstes Element:", temperatures[0]);
console.log("Letztes Element:", temperatures[temperatures.length - 1]);
temperatures[2] = 23;
temperatures.push(6.7);
console.log("Anzahl der Messwerte:", temperatures.length);

console.log("\n");
// ------------------------------------------------------------
// EXERCISE 2 – Arbeiten mit einer Namensliste
// ------------------------------------------------------------
// Aufgabenstellung:
// 1. Greife auf das dritte Element des Arrays zu.
// 2. Überschreibe das erste Element des Arrays mit "Giovanni".
// 3. Füge am Ende der Liste einen neuen Namen hinzu (push).
// 4. Überschreibe das letzte Element des Arrays mit "Max".
// 5. Gib die Anzahl der gespeicherten Namen aus.
// ------------------------------------------------------------


let names = ["Hugo", "Maria", "Salvatore", "Ingrid", "Tom"];

console.log("Drittes Element:", names[2]);
names[0] = "Giovanni";
names.push("Anna");
names[names.length - 1] = "Max";
console.log("Anzahl der gespeicherten Namen:", names.length);

console.log("\n");

// ------------------------------------------------------------
// EXERCISE 3 – Produktverwaltung mit verschachtelten Arrays
// ------------------------------------------------------------
// Aufgabenstellung:
// 1. Greife auf die Kategorie des zweiten Objekts zu.
// 2. Greife auf den dritten Artikel in der Kategorie "Fruits" zu.
// 3. Ändere den Lagerbestand des Artikels "Broccoli" auf den Wert 10.
// 4. Ergänze die Kategorie "Drinks" um den Artikel "Juice" und füge 
//    gleichzeitig einen neuen Lagerstand hinzu (push).
// 5. Gib die Anzahl der Artikel in der Kategorie "Vegetables" aus.
// ------------------------------------------------------------

let products = [
    {
        category: "Fruits",
        items: ["Apple", "Banana", "Mango"],
        stock: [12, 30, 4]
    },
    {
        category: "Vegetables",
        items: ["Carrot", "Onion", "Lettuce", "Broccoli"],
        stock: [20, 15, 8, 6]
    },
    {
        category: "Drinks",
        items: ["Water", "Cola"],
        stock: [50, 22]
    }
];

console.log("Kategorie des zweiten Objekts:", products[1].category);
console.log("Dritter Artikel in 'Fruits':", products[0].items[2]);
products[1].stock[3] = 10;
products[2].items.push("Juice");
products[2].stock.push(18);
console.log("Anzahl der Artikel in Vegetables:", products[1].items.length);