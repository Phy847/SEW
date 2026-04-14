// ============================================================================
// THEORIEFRAGEN ZU MATH-METHODEN & SPREAD-OPERATOR 
// ============================================================================
//
// RUNDEN & ABSOLUTBETRAG
// ---------------------------------------------------------------------------
// Welche Methode rundet eine Kommazahl mathematisch normal auf oder ab?

Math.round()

// Welche Methode gibt eine Zahl immer positiv zurück, auch wenn sie negativ war?

Math.abs()

//
// AUF- UND ABRUNDEN
// ---------------------------------------------------------------------------
// Welche Methode rundet eine Zahl immer ab, selbst bei z.B. 3.999?

Math.floor()

// Welche Methode rundet eine Zahl wie 12.01 auf den nächsten ganzen Euro auf?

Math.ceil()

//
// MINIMUM & MAXIMUM
// ---------------------------------------------------------------------------
// Wie erhält man aus mehreren Werten die kleinste Zahl?

Math.min()

// Wie bestimmt man die größte Zahl, ohne vorher zu sortieren?

Math.max()

//
// POTENZ & QUADRATWURZEL
// ---------------------------------------------------------------------------
// Wie hebt man eine Zahl auf eine bestimmte Potenz (z.B. 5²)?

Math.pow()

// Wie berechnet man die Quadratwurzel einer Zahl?

Math.sqrt()

//
// ZUFALLSZAHLEN
// ---------------------------------------------------------------------------
// Welche Methode erzeugt eine zufällige Zahl zwischen 0 und 1?

Math.random()

// Warum ergibt diese Methode niemals genau den Wert 1?

//Weil Math.random() Zahlen im Bereich von 0 (inklusive) bis 1 (exklusive) generiert.

// Wie erzeugt man eine zufällige ganze Zahl von 0 bis 9?

Math.floor(Math.random() * 10)

// Wie erhält man eine zufällige ganze Zahl von 1 bis 6 (Würfel)?

Math.floor(Math.random() * 6) + 1

//
// SPREAD-OPERATOR (...)
// ---------------------------------------------------------------------------
// Wie kann man mit dem Spread-Operator zwei Arrays 
// zu einem einzigen Array zusammenführen?


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

// ============================================================================

