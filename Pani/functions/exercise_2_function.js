// -- ------------------------------------------------------ --
// -- 1) Beispiel - Funktionen: isEven, filterEvenValues
// -- ------------------------------------------------------ --
// Schreiben Sie folgende Funktionen: isEven, filterEvenValues

// a) isEven: Die isEven Funtion prüft ob es sich bei einem
//            Wert um einen geraden Wert handelt.

items = [1, 2, 3, 4, 5, 6];

// Funktionskopf: isEven(n)

// Funktionsdeklaration: 


function isEven (n) {
    if (n%2 === 0) {
        return true;
    }
    return false;
};

let data = isEven(6);
console.log(data);

// b) filterEvenValues: Die filterEvenValues Funktion entfernt alle
//                      ungeraden Wert aus einem Array.

// Funktionskopf: filterEvenValues(items)

function filterEvenValues(items) {
    let filtered = [];
    for (let k = 0; k < items.length; k++) {
        if (isEven(items[k])) {
            filtered.push(items[k]);
        }
    }
    return filtered;
}


// Hinweis: Definieren Sie ein neues Array und kopieren Sie alle
//          geraden Wert in das neue Array.

// Hinweis: Verwenden Sie die isEven Funktion

let data2 = [4,3,2,5,3];
let result = filterEvenValues(data2);

console.log(...result);


console.log("-- ------------------------------------------------- --")
console.log("-- exercise 1: function - isEven, filterEvenValues")
console.log("-- ------------------------------------------------- --")

// Funktionsaufruf

console.log(isEven(4));
console.log(isEven(3));
console.log("\n");

// -- -------------------------------------------------------------- --
// -- 2. Beispiel: Funktion - concat
// -- -------------------------------------------------------------- --

// Schreiben Sie eine Funktion die die Werte 2er Arrays
// in ein neues Array kopiert.

// Funktionskopf: concat(values1, values2)

// Funktionsdeklaration: 
function concat(values1, values2) {
    let result = [];
    for (const n of values1) {
        result.push(n)
    }
    
    for (const n of values2) {
        result.push(n)
    }
    return result;
    // result = values1.concat(values2)
}

let n1 = [3, 4, 2, 1, 6];
let n2 = [5, 2, 5, 7, 8];

let data3 = concat(n1, n2);


console.log("-- ------------------------------------------------- --")
console.log("-- exercise 2: function - isEven, filterEvenValues")
console.log("-- ------------------------------------------------- --")

// Funktionsaufruf
let v1 = [4, 3, 2, 4];
let v2 = [4, 2, 1]


console.log("\n");


// -- -------------------------------------------------------------- --
// -- 3. Beispiel: Funktion - fireWeapon
// -- -------------------------------------------------------------- --
// Schreiben Sie eine Methode zum Abfeuern eine Waffe für die Konfliktsumlation
// Aernautica Imperialis.

// Funktionskopf: fireWeapon(weapon, distance)

// Zum Abfeueren einer Waffe wird der folgende Prozess durchlaufen
//
//      let weapon = {
//          name: "Avenger Bolt Cannon",
//          fireArc: ["FRONT"],
//          firePower: [3, 7, 0],
//          damage: 4,
//      };
//
//
// i) Ermitteln der Anzahl der Wüfel mit denen angegriffen werden soll:
//    Entsprechend der Entfernung zum Gegner ändert sich die Anzahl der
//    Würfel. Die Entfernung zum Gegner wird als Parameter an die 
//    Methode übergeben.

//    Legende:  Distance  0 - 4   5 - 7   8 - 10
//              Index       0       1        2



//    Aus der Entfernung zum Gegner kann er für den Angriff relevante Index
//    ermittelt werden. 
//
//    z.B.:   distance = 5;  -> index = 1;


//    Der Index wird verwendet um auf das firePower Feld der Waffe zuzugreifen.
//    Der im Array gespeicherte Wert entspricht dabei der Anzahl der Würfel
//    mit denen angegriffen wird.

//    z.B.: distance = 5; -> index = 1;  ->  
//    let diceCount = weapon.firePower[index];


//    ii) Ermitteln der Anzahl der Treffer die durch den Angriff erreicht
//        wurden: Werfen Sie soviele Würfel wie im ersten Teil der Aufgabe 
//        beschrieben wurde.
//        Jedesmal wenn der Würfelwurf >= weapon.damage ist wird ein Treffer
//        erzielt.

//    z.B.:  diceCount = 7   -> Es wird 7 mal gewürfelt -> [1, 4, 4, 3, 5, 2, 3]
//           Alle Werte >= weapon.damage sind Treffer.

//           weapon.damage = 4  -> 3 Treffer.




// Hinweis: Waffen werden druch Objekte mit folgender Struktur
// repräsentiert.

// Hinweis: Zur Simulation eines Würfelwufes kann die folgende
// Funktion verwendet werden.

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Funktionsklaration:

function fireWeapon(distance, weapon) {
    let index = 0;
    if (distance >= 0 && distance <= 4) {
        index = 0;
    } else if (distance >= 5 && distance <= 7) {
        index = 1;
    } else if (distance >= 8 && distance <= 10) {
        index = 2;
    }
    let diceCount = weapon.firePower[index];
    let hitCount = 0;
    for (let i = 0; i < diceCount; i++) {
        if (rollDice >= weapon.damage) {
            hitCount++;
        }
    }
    return hitCount;
}

console.log("-- ------------------------------------------------- --")
console.log("-- exercise 3: function - fireWeapon")
console.log("-- ------------------------------------------------- --")

// Simulieren Sie den Angriff mit der folgenden Waffe auf die 
// Entfernung 5.

const avengerBoltCaonnon = {
    name: "Avenger Bolt Cannon",
    fireArc: ["FRONT"],
    firePower: [3, 7, 0],
    damage: 4,
    ammonition: 160
};

let hitCount = fireWeapon(5, avengerBoltCaonnon);

console.log(hitCount);
console.log("\n");


// -- -------------------------------------------------------------- --
// -- 4. Beispiel: Funktion - attack
// -- -------------------------------------------------------------- --
// Schreiben Sie eine Methode um den Angriff eines Flugzeuges mit
// einer bestimmten Waffe zu simulieren.

// Funktionskopf:  attack(attacker, defender, distance, fireArc)

// Zum Durchführen eines Angriffs wird der folgende Prozess durchlaufen:

// i) Ermitteln Sie alle Waffen des Angreiffers die in die fireArc 
//    Richtung feuern können.

//    Enthält das fireArc Array der Waffe den fireArc Parameter Wert
//    kann mit der Waffe angegriffen werden

//    z.B.: weapon.fireArc.includes(fireArc)


// ii) Greifen Sie mit den entsprechenden Waffen an. Summieren Sie
//     die Treffer aller Waffen.

// iii) Ziehen Sie die Anzahl der Treffer vom structure Wert des 
//      angegriffenen Flugzeuges ab. Würde der structure Wert unter 0 fallen
//      wird trotzdem 0 eingetragen.


// Hinweis: Verwenden Sie die fireWeapon Methode.


// Funktionsdeklaration:

function createAvengerBoltCannon() {
    return {
       name : "Avenger Bolt Cannon",
       fireArc : ["FRONT"],
       firePower : [3,7,0],
       damage : 4,
       ammonition : 160,
       specials : [
          {
              keyword : "EXTRA_DAMAGE",
              value : 6
          }
       ]
    };
}

function createHeavyBolterPortTurret() {
    return {
       name : "Heavy Bolter Turret",
       fireArc : ["LEFT_SIDE"],
       firePower : [6,2,0],
       damage : 5,
       ammonition : 160,
    };
}

function createHeavyBolterStarboardTurret() {
    return {
       name : "Heavy Bolter Turret",
       fireArc : ["RIGHT_SIDE"],
       firePower : [6,2,0],
       damage : 5,
       ammonition : 100,
    };
}

function createHellstrikeMissleLauncher() {
    return {
       name : "Hellstrike Missle Launcher",
       fireArc : ["FRONT"],
       firePower : [2,2,2],
       damage : 3,
       ammonition : 3,
    };
}

function createQuadLascannon(){
   return {
       name : "Quad Lascannon",
       fireArc : ["FRONT"],
       firePower : [0,4,2],
       damage : 2,
       ammonition : 160,
       specials : [
            {
              keyword : "EXTRA_DAMAGE",
              value : 6
            }
       ]
   };
}

function createFireRaptorGunship(){
    return {
       name : "Fire Raptor Gunship",
       aircraftClass : "FIGHTER",
       alliance : "ADEPTUS_ASTARTES",
       cost : 31,
       x : 0,
       y : 0,
       currentAltitude : 0,
       structure : 4,
       transport : 0,
       fuel : 0,
       throttle : 2,
       manoueuvres : 5,
       handling : 3,
       minSpeed : 0,
       maxSpeed : 5,
       currentSpeed : 0,
       maxAltitude : 5,
       src : "file://./fireraptorgunship.png",
       weapons : [
          createAvengerBoltCannon(),
          createHeavyBolterPortTurret(),
          createHeavyBolterStarboardTurret(),
          createHellstrikeMissleLauncher()
       ],
       specials : []
    };
}


function createStormEagleAssaultCraft(){
    return {
       name : "Storm Eagle Assault Craft",
       aircraftClass : "FIGHTER",
       alliance : "ADEPTUS_ASTARTES",
       cost : 29,
       x : 0,
       y : 0,
       currentAltitude : 0,
       structure : 4,
       transport : 2,
       fuel : 0,
       throttle : 2,
       manoueuvres : 5,
       handling : 3,
       minSpeed : 0,
       maxSpeed : 5,
       currentSpeed : 0,
       maxAltitude : 5,
       src : "file://./stormeagleassaultcraft.png",
       weapons : [
          createQuadLascannon()
       ],
       specials : []
    };
}

// Funktionsdeklaration: attack

function attack(attacker, defender, distance, fireArc) {
    let totalHits = 0;
    for (let i = 0; i < attacker.weapons.length; i++) {
        let weapon = attacker.weapons[i];
        if (weapon.fireArc.includes(fireArc)) {
            totalHits += fireWeapon(distance, weapon);
        }
    }
    defender.structure -= totalHits;
    if (defender.structure < 0) {
        defender.structure = 0;
    }
}



console.log("-- ------------------------------------------------- --")
console.log("-- exercise 4: function - attack")
console.log("-- ------------------------------------------------- --")

let attacker = createFireRaptorGunship();
let defender = createStormEagleAssaultCraft();

attack(attacker, defender, 5, "FRONT");

console.log(defender.structure);

console.log("\n");