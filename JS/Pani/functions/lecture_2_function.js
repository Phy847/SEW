// -- ------------------------------------------------------ --
// -- 1. Beispiel - Funktionen Theorie
// -- ------------------------------------------------------ --
// Schreiben Sie für jedes der folgenden unit Objecte eine
// creator function.

// Hinweis: Die Aufgabe einer creator Funktion ist es den
// Initilaisierungsprozess für komplexe Objekte zu vereinfachen.

// Die Funktion gibt jeweils eine neue Instanz des Objekts 
// zurück.

// ----------------------------------------
// unit: Daimyo
// ----------------------------------------
// A daimyo was a provincial warlord who 
// commanded a large army of warriors. Daimyo

console.log("-- ------------------------------------------------- --")
console.log("-- lecture 2 exercise 1: object creation")
console.log("-- ------------------------------------------------- --")


// json object declaration
let daimyoUnit = {
	unitType: "Daiymo",
	classification: "Samurai",
	combatValue: 5,
	cost: 0,
	rounds: [2],
	description: "Daimyo were provincial warlords, commanding large army of warriors.",
	keyword: ["DAIMYO", "SAMURAI", "ARMY_LEADER"]
};

// functionsignature
// createDaimyoUnit();
function createDaimyoUnit() {
	let daimyo = {unitType: "Daiymo",
	classification: "Samurai",
	combatValue: 5,
	cost: 0,
	rounds: [2],
	description: "Daimyo were provincial warlords, commanding large army of warriors.",
	keyword: ["DAIMYO", "SAMURAI", "ARMY_LEADER"]
	}
	return daimyo
}


let daimyo = createDaimyoUnit();

console.log(daimyo.unitType, daimyo.classification);
console.log("\n");

// ----------------------------------------
// unit: Samurai Bowman
// ----------------------------------------
// These long-range units represent expe-
// rienced warriors who were deadly accurate 
// with bow and arrow. 

// object declaration
let bowmanUnit = {
	unitType: "Bowmen",
	classification: "Samurai",
	combatValue: 6,
	cost: 3,
	description: "These long-range units represent experienced warriors who were deadly accurate with bow and arrow.",
	rounds: [1],
	keyword: ["BOWMEN", "SAMURAI", "RANGED_UNIT"]
};

// functionsignature:
// createBowmanUnit();
function createBOwmanUnit() {
	let bowmen = bowmanUnit = {
	unitType: "Bowmen",
	classification: "Samurai",
	combatValue: 6,
	cost: 3,
	description: "These long-range units represent experienced warriors who were deadly accurate with bow and arrow.",
	rounds: [1],
	keyword: ["BOWMEN", "SAMURAI", "RANGED_UNIT"]
	}
	return bowman
}



// creational method


let bowmenUnit = createBowmenUnit();
console.log("\n");

// ----------------------------------------
// unit: Ashigaru Gunner
// ----------------------------------------
// These long-range units represent inex-
// perienced peasant farmers, each armed 
// with a gun called a harquebus. 

// object declaration
let gunnerUnit = {
	unitType: "Gunner",
	classification: "Ashigaru",
	combatValue: 4,
	cost: 2,
	description : "These long-range units represent inexperienced peasant farmers, each armed with a gun called a harquebus.",
	rounds: [1],
	keyword: ["GUNNER", "ASHIGARU", "RANGED_UNIT"]
};


// functionsignature:
//createGunnerUnit();
function createGunnerUnit() {
	let gunnerUnit = {
	unitType: "Gunner",
	classification: "Ashigaru",
	combatValue: 4,
	cost: 2,
	description : "These long-range units represent inexperienced peasant farmers, each armed with a gun called a harquebus.",
	rounds: [1],
	keyword: ["GUNNER", "ASHIGARU", "RANGED_UNIT"]
	}
	return gunnerUnit
}



// creational method

let gunner = createGunnerUnit();
console.log(gunner.unitType, ":", gunner.description);

console.log("\n");
// ----------------------------------------
// unit: Samurai Swordsman
// ----------------------------------------
// These units represent the samurai elite 
// class: warriors by birth who were highly 
// disciplined in Kendo, the Way of the Sword. 

// object declaration
let swordsmanUnit = {
	unitType: "Swordsmen",
	classification: "Samurai",
	combatValue: 5,
	cost: 2,
	rounds: [2],
	description : "These units represent the samurai elite class: warriors by birth who were highly disciplined in Kendo, the Way of the Sword. ",
	keyword: ["SWORDSMEN", "SAMURAI", "MELEE_UNIT"]
};


// functionsignature:
// createSwordmanUnit();
function swordsmanUnit() {
	let swordsMan = {
	unitType: "Swordsmen",
	classification: "Samurai",
	combatValue: 5,
	cost: 2,
	rounds: [2],
	description : "These units represent the samurai elite class: warriors by birth who were highly disciplined in Kendo, the Way of the Sword. ",
	keyword: ["SWORDSMEN", "SAMURAI", "MELEE_UNIT"]
	}
	return swordsMan
}


// creational method

console.log("\n");

// ----------------------------------------
// unit: Samurai Ronin
// ----------------------------------------
// In feudal Japan, ronin were masterless 
// samurai: warriors for hire, whose loyalty 
// lasted only as long as the battle. 

// object declaration
let roninUnit = {
	unitType: "Ronin",
	classification: "Samurai",
	combatValue: 5,
	cost: 2,
	rounds: [2],
	description : "In feudal Japan, ronin were masterless samurai: warriors for hire, whose loyalty lasted only as long as the battle.",
	keyword: ["HIDDEN", "MERCENARY", "MELEE_UNIT", "SAMURAI"]
}


// functionsignature
// createRoninUnit();
function createRoninUnit() {
	let ronininUnit = {
	unitType: "Ronin",
	classification: "Samurai",
	combatValue: 5,
	cost: 2,
	rounds: [2],
	description : "In feudal Japan, ronin were masterless samurai: warriors for hire, whose loyalty lasted only as long as the battle.",
	keyword: ["HIDDEN", "MERCENARY", "MELEE_UNIT", "SAMURAI"]
	}
	return roninUnit
}




console.log("\n");

// ----------------------------------------
// unit: Ashigaru Spearman
// ----------------------------------------
// These units represent peasant warriors, 
// each armed with a long, curved spear 
// called a yari.

// object declaration
let spearmanUnit = {
	unitType: "Spearman",
	classification: "Ashiagru",
	combatValue: 4,
	cost: 1,
	rounds: [2],
	description : "These units represent peasant warriors, each armed with a long, curved spear called a yari.",
	keyword: ["SPEARMEN", "ASHIGARU", "MELEE_UNIT"]
}

// functionsignature:
// createSpearmanUnit();
function createSpearmanUnit() {
	let spearman = {
	unitType: "Spearman",
	classification: "Ashiagru",
	combatValue: 4,
	cost: 1,
	rounds: [2],
	description : "These units represent peasant warriors, each armed with a long, curved spear called a yari.",
	keyword: ["SPEARMEN", "ASHIGARU", "MELEE_UNIT"]
	}
	return spearman
}



console.log("\n");

// -- ------------------------------------------------------ --
// -- 2. Beispiel - Funktionen Theorie
// -- ------------------------------------------------------ --
// Legen Sie ein Objekt mit den folgenden Daten an. Verwenden
// Sie die in Beispiel 1 geschriebenen Funktionen zum Anlegen
// des Objekts.

/*
let daiTenshiArmy = {
	name: "Dai Tenshi Army",
	province: "Izu",
	type: "Army",
	skillLevel: 4,
	units: [
	    Daimyo, 
		3* Bowmen, 
		Swordmen, 
		3* Gunner, 
		4 * Spearmen		
	]
}
*/

console.log("-- ------------------------------------------------- --")
console.log("-- lecture 2 exercise 2: army object")
console.log("-- ------------------------------------------------- --")

let daiTenshiArmy = {
	name: "Dai Tenshi Army",
	province: "Izu",
	type: "Army",
	skillLevel: 4,
	units: [
		
	]
}


console.log("\n");

// -- ------------------------------------------------------ --
// -- 2. Beispiel - Funktionen Theorie
// -- ------------------------------------------------------ --
// Schreiben Sie eine Funktion zum Prüfen der Korrektheit der
// Zusammensetzung einer Armee.


// ----------------------------------------
//  function: isLegal
// ----------------------------------------
// Implement a function to evaluate the armycomposition.

// function head: isLegal(army)

// legal armycomposition:

// - 0..1 DaimyoUnit 
// - not more than 5 additional Samurai units
// - no ronin units
// - not more than 8 Ashigaru units


// function decalration

// function call
console.log(isLegal(daiTenshiArmy))

console.log("\n");

// ----------------------------------------
//  function: rollDice
// ----------------------------------------
// write a function to simulate the dice
// roll with a 12 sided dice.

function rollDice() {
	return Math.floor(Math.random() * 12) + 1;
}