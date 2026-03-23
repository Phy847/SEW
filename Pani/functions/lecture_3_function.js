
// It is the sixteenth century, the Age of War in Japan. On the provincial battlegroundss,
// daimyo leaders draw up their armies.

// Samurai warriors don battle armor; peasant farmers take up spears and guns. For each
// ambitious daimyo, a lifetime of military training is put to the final test. Who will
// emerge victorious?

// As a Japanese warlord, you lead your daimyos to victory or defeat! Conquer provinces, then 
// guard them well while you conquer more. Each  enemy, each battle, calls for a different 
// strategy. Is brute military force enough? 

// Whatever your strategy, each province you claim brings you closer to your goal. Gain
// enough provinces, and you become Shogun!

// Each json object represents a unit of  16th-century Japanese warriors. Below is 
// a brief description of the role each unit type plays in the game. 
//
// A units combat value is the number that  it needs to roll or less to eliminate an
// enemy unit.

// ----------------------------------------
// unit: Daimyo
// ----------------------------------------
// A daimyo was a provincial warlord who 
// commanded a large army of warriors. Daimyo

// object declaration
let daimyoUnit = {
	unitType : "Daiymo",
	classification: "Samurai",
	combatValue : 5,
	cost : 0,
	rounds : [2],
	keyword : ["ARMY_LEADER"]
};

function createDaimyoUnit () {
    return {
        unitType : "Daiymo",
        classification: "Samurai",
        combatValue : 5,
        cost : 0,
        rounds : [2],
        keyword : ["ARMY_LEADER"]
    };
}

// ----------------------------------------
// unit: Samurai Bowman
// ----------------------------------------
// These long-range units represent expe-
// rienced warriors who were deadly accurate 
// with bow and arrow. 

// object declaration
let bowmanUnit = {
	unitType : "Bowman",
	classification: "Samurai",
	combatValue : 6,
	cost : 3,
	rounds : [1],
	keyword : []
};

// creational method
function createBowmanUnit(){
	return {
		  unitType : "Bowman",
		  classification: "Samurai",
		  combatValue : 6, 
          cost : 3,
		  rounds : [1], 
          keyword : []
	};
}

// ----------------------------------------
// unit: Ashigaru Gunner
// ----------------------------------------
// These long-range units represent inex-
// perienced peasant farmers, each armed 
// with a gun called a harquebus. 

// object declaration
let gunnerUnit = {
	unitType : "Gunner",
	classification: "Ashigaru",
	combatValue : 4, 
    cost : 2,
	rounds : [1],
	keyword : []
};

// creational method
function createGunnerUnit() {
	return {
		  unitType : "Gunner",
		  classification: "Ashigaru",
		  combatValue : 4, 
          cost : 2,
		  rounds : [1], 
          keyword : []
	};
}
// ----------------------------------------
// unit: Samurai Swordsman
// ----------------------------------------
// These units represent the samurai elite 
// class: warriors by birth who were highly 
// disciplined in Kendo, the Way of the Sword. 

// object declaration
let swordsmanUnit = {
	unitType : "Swordsman",
	classification: "Samurai",
	combatValue : 5, 
    cost : 2,
	rounds : [2], 
    keyword : []
};

// creational method
function createSwordmanUnit() {
	return {
		  unitType : "Swordsman",
		  classification: "Samurai",
		  combatValue : 5, 
          cost : 2,
		  rounds : [2], 
          keyword : []
     }
}

// ----------------------------------------
// unit: Samurai Ronin
// ----------------------------------------
// In feudal Japan, ronin were masterless 
// samurai: warriors for hire, whose loyalty 
// lasted only as long as the battle. 

// object declaration
let roninUnit = {
	unitType : "Ronin",
	classification: "Samurai",
	combatValue : 5,
	cost : 2, 
    rounds : [2],
	keyword : ["HIDDEN", "MERCENARY"]
}

function createRoninUnit() {
	return {
		  unitType : "Ronin",
		  classification: "Samurai",
		  combatValue : 5,
		  cost : 2, 
          rounds : [2],
		  keyword : [
		  	"HIDDEN", "MERCENARY"
		  ]
    }
}

// ----------------------------------------
// unit: Ashigaru Spearman
// ----------------------------------------
// These units represent peasant warriors, 
// each armed with a long, curved spear 
// called a yari.

// object declaration
let spearmanUnit = {
	unitType : "Spearman",
	classification: "Ashiagru",
	combatValue : 4, 
	cost : 1,
	rounds : [2],
	keyword : []
}

function createSpearmanUnit(){
	return {
		  unitType : "Spearman",
		  classification: "Ashiagru",
		  combatValue : 4, 
          cost : 1,
		  rounds : [2], 
		  keyword : []
	}
}


// ----------------------------------------
//  army: Dai Tenshi Army
// ----------------------------------------
// Create an army consisting of several
// units

let daiTenshiArmy = {
	name : "Dai Tenshi Army",
	province : "Izu",
	type : "Army",
	skillLevel : 4,
	units : [
		createDaimyoUnit(), 
		createBowmanUnit(),
		createBowmanUnit(),
		createBowmanUnit(),
		createBowmanUnit(),
		createBowmanUnit(),
		createBowmanUnit(),
		createBowmanUnit(),
		createSwordmanUnit(),
		createGunnerUnit(), 
		createGunnerUnit(), 
		createGunnerUnit(),
		createSpearmanUnit(),
		createSpearmanUnit()
	] 
}

// ----------------------------------------
//  function: isLegal
// ----------------------------------------
// Implement a function to evaluate the
// armycomposition.

// legal armycomposition:

// - 1 oder keine DaimyoUnit
// - not more than 4 additional Samurai units
// - no ronin units
// - not mor than 8 Ashigaru units


// function decalration

function isLegal(army) {
	
	let daimyoUnitCount = 0;
	let samuraiUnitCount = 0;
	let ashigaruUnitCount = 0;
	let roninUnitCount = 0;


	for (const unit of army.units) {
		if(unit.unitType == "Daimyo"){
			++daimyoUnitCount;
		}

		if(unit.classification == "Samurai"){
			++samuraiUnitCount;
		}

		if(unit.classification == "Ashigaru"){
			++ashigaruUnitCount;
		}

		if(unit.unitType == "Ronin"){
			++roninUnitCount;
		}
	}

	if( daimyoUnitCount > 1 || samuraiUnitCount > 4 
		|| roninUnitCount > 0 || ashigaruUnitCount > 8){
			return false;
	}

	return true;
}

console.log(isLegal(daiTenshiArmy));


// ----------------------------------------
//  function: rollDice
// ----------------------------------------
// write a function to simulate the dice
// roll with a 12 sided dice.

function rollDice(){
	return Math.floor(Math.random() * 12) + 1;
}

// ----------------------------------------
//  function: attack
// ----------------------------------------
// write a function to calculate the number
// of hits when attacking with an army.

// A unit scores a hit, when it rolls a
// result equal or less than its combat
// value.

// Unit attack in the attached rounds


// function declaration
function attack(attackingArmy) {
	let hitCount = 0;

	for (const unit of attackingArmy.units) {
		if (rollDice() <= unit.combatValue) {
			hitCount++
		}
	}
	
	return hitCount;
}


// function call
console.log("hitcoun:")
console.log(attack(daiTenshiArmy));

// ----------------------------------------
//  function: createArmyReport
// ----------------------------------------
// Evaluate an army due to its composition.
// Generate the following report object 
// for an army.

let report = {
	// army.name
	armyName : "Dai Tenshi Army",
	
	// army.type
	type : "Army",
	
	// eveluate if the army composition is
	// legal
	isLegal : true,
	
	// calculate the sum of the unit cost
	// that are part of the army
	cost : 22,
	
	// unitcount
	unitCount : 11,
	
	// An army can have several keywords:
	
	// VANGAURD: There are more army units
	// that attack in the first rounds then
	// in the second
	
	// SAMURAI_ARMY: There are at least 5
	// Samurai units 
	
	// PEASANT_ARMY: The army contains 
	// only ashigaru units except the
	// Daimyo unit.
	
	// VETERAN_ARMY: The army skill level
	// is greater than 5
	
	// RECRUTS: The army skill level is
	// less than 3.
	keywords : ["VANGUARD", "SAMURAI_ARMY"],
	
	// Calculate the average hit count.
	// Simulate 200 attacks. Sum the hitcount
	// and divide the result by 200.
	averageHitCount : 3
};

// ----------------------------------------
//  function: createArmyReport
// ----------------------------------------

function calculateCost(army) {
	let ArmyCost = 0;

	for (const unit of army.units.cost) {
		armyCost += unit.cost
	}

	return armyCost
}

function aggregateKeywords (army) {
	let keywords = [];
	let round1 = 0;
	let round2 = 0;

	for (const unit of army.units) {
		if (unit.rounds.includes(1)) {
			round1 ++
		}

		if (unit.rounds.includes(2)) {
			round2 ++
		}
	}

	if (round1 > round2) {
		keywords.push("VANGUARD")
	}

	return keywords
}

function createArmyReport (army) {
	let report = {
		armyReport : army.name,
		type : "Army",
		isLegal : isLegal(army),
		cost : calculateCost(army),
		unitCount : army.units.length,

	};

	return report;
}

// UNDIFINED IS NOT A FUNCTION