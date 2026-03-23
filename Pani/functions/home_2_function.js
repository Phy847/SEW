
let armorType = ["INFANTRY", "CAVALRY", "TANK", "SUPPORT", "HEAVY_ARMOR"];

// -- -------------------------------------------------------------------------- --
// -- Team 1 - Allies
// -- -------------------------------------------------------------------------- --
let rifleman = {
    name: "Rifelman",
    alience: "ALLIES",
    type: "INFANTRY",
    role: "UNIT",
    cost: {
        money: 1,
        rivets: 0,
    },
    bountyCount: 0,
    baseSize: 1,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    armor: 0,
    plugs: 0,
    health: 1,
    groundAttackValue: 2,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Rifle",
            values: [3, 0, 0, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "RUNNER",
            value: 1,
            type: "BONUS"
        }
    ],
    description: "Rifleman"
};

let highlandguard = {
    name: "Highland Guradman",
    alience: "ALLIES",
    type: "INFANTRY",
    role: "UNIT",
    cost: {
        money: 1,
        rivets: 0,
    },
    bountyCount: 0,
    baseSize: 1,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    armor: 0,
    plugs: 0,
    health: 1,
    groundAttackValue: 2,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Rifle",
            values: [3, 0, 0, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "RUNNER",
            value: 1,
            type: "BONUS"
        }
    ],
    description: "Themen of Norhern Brighton are a pround lot. They work hard, play hard and fight hard."
};

let mountaineer = {
    name: "Mountaineer",
    alience: "ALLIES",
    type: "INFANTRY",
    role: "UNIT",
    cost: {
        money: 1,
        rivets: 0,
    },
    bountyCount: 0,
    baseSize: 1,
    movement: {
        value: 2,
        type: "GROUND",
        minimumMovement: 0
    },
    armor: 0,
    plugs: 0,
    health: 1,
    groundAttackValue: 1,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Pistol",
            values: [1, 3, 2, 1, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [],
    description: "The rocket bikes are down and the Blight are coming strong with a charge of monowheels. What can the allies do? Call in the Mountaineers."
};

let k9Corps = {
    name: "K-9 Engineering Corps",
    alience: "ALLIES",
    type: "INFANTRY",
    role: "UNIT",
    cost: {
        money: 3,
        rivets: 0,
    },
    bountyCount: 0,
    baseSize: 1,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    armor: 0,
    plugs: 0,
    health: 1,
    groundAttackValue: 1,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Pistol",
            values: [1, 1, 0, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "GUARD_DOG_HANDLER",
            value: 0,
            type: "ACTION"

        }
    ],
    description: "The rocket bikes are down and the Blight are coming strong with a charge of monowheels. What can the allies do? Call in the Mountaineers."
};

let guardDog = {
    name: "Guard Dog",
    alience: "ALLIES",
    type: "INFANTRY",
    role: "UNIT",
    cost: {
        money: 0,
        rivets: 0,
    },
    bountyCount: 0,
    baseSize: 1,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    armor: 0,
    plugs: 0,
    health: 1,
    groundAttackValue: 1,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Animal",
            values: [1, 0, 0, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "FORTIVY",
            value: 1,
            type: "ACTION"

        }
    ],
    description: "The allied Gurad Dog is a loyal animal. Both loving and trusting, they blindly trhow themselves in the line of  battel day after day."
};



let rocketCycle = {
    name: "Rocket Cycle",
    alience: "ALLIES",
    type: "CAVALRY",
    role: "UNIT",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 2,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 2,
    armor: 2,
    plugs: 0,
    health: 1,
    groundAttackValue: 2,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Rocketlauncher",
            values: [1, 2, 2, 1, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [],
    description: "Rocket Cycle"
};

let patson = {
    name: "General G. Patston",
    alience: "ALLIES",
    type: "CAVALRY",
    role: "HERO",
    cost: {
        money: 3,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 2,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 2,
    armor: 2,
    plugs: 0,
    health: 2,
    groundAttackValue: 2,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Rocketlauncher",
            values: [2, 2, 2, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "DASH",
            value: 1,
            type: "ACTION"

        }, {
            keyword: "TANK_SHOCK",
            value: 1,
            type: "ABILITY"
        }
    ],
    description: "Rocket Cycle"
};


let ostrich = {
    name: "MT-1 Ostrich",
    alience: "ALLIES",
    type: "TANK",
    role: "UNIT",
    cost: {
        money: 4,
        rivets: 3,
    },
    bountyCount: 2,
    movement: {
        value: 2,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 4,
    armor: 2,
    plugs: 1,
    health: 4,
    groundAttackValue: 2,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Mortar",
            values: [3, 2, 1, 0, 0],
            keyword: ["FLAT_GRID_ATTACK"],
            attackRate: 1
        }, {
            weapon: "Minigun",
            values: [0, 2, 2, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "RAPID_ASSAULT",
            value: 2,
            type: "ABILITY"
        }, {
            keyword: "TANK_SHOCK",
            value: 1,
            type: "ABILITY"
        }
    ],
    description: "MT-1 Ostrich"
};

let heavyTankA = {
    name: "M11 Double Play",
    alience: "ALLIES",
    type: "TANK",
    role: "UNIT",
    cost: {
        money: 6,
        rivets: 2,
    },
    bountyCount: 3,
    movement: {
        value: 2,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 4,
    armor: 3,
    plugs: 2,
    health: 6,
    groundAttackValue: 2,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Mortar",
            values: [3, 2, 1, 0, 0],
            keyword: ["CHAIN_GRID_ATTACK"],
            attackRate: 1
        }, {
            weapon: "Turret",
            values: [0, 1, 3, 3, 2],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "JUGGERNAUT",
            value: 2,
            type: "ABILITY"
        }, {
            keyword: "IMMUNE_TO_GAS",
            value: 0,
            type: "ABILITY"
        }
    ],
    description: "The M11 Double Play was developed as heaily armored assault thank. Supporting two turrets ist excels at eleminating blight armor assets."
};

let verticalTank = {
    name: "M3 Vertical Tank",
    alience: "ALLIES",
    type: "TANK",
    role: "UNIT",
    cost: {
        money: 3,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 2,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 2,
    armor: 1,
    plugs: 1,
    health: 2,
    groundAttackValue: 3,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Turret",
            values: [2, 2, 2, 0, 0],
            keyword: ["FLAT_GRID_ATTACK"],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "TANK_SHOCK",
            value: 1,
            type: "ABILITY"
        }, {
            keyword: "IMMUNE_TO_GAS",
            value: 0,
            type: "ABILITY"
        }
    ],
    description: "The M3 was commisoned as a light tank with good scountg and fire support. With its shield the M3 con bolck for troops during forward assaults while it s considerable firepowere allows it to outgun most infatry squads."
};

let bossTank = {
    name: "M7 Boss",
    alience: "ALLIES",
    type: "TANK",
    role: "UNIT",
    cost: {
        money: 3,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 2,
    armor: 2,
    plugs: 1,
    health: 3,
    groundAttackValue: 2,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Turret",
            values: [2, 2, 2, 1, 0],
            keyword: ["FLAT_GRID_ATTACK"],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "BARRAGE",
            value: 0,
            type: "ABILITY"
        }, {
            keyword: "IMMUNE_TO_GAS",
            value: 0,
            type: "ABILITY"
        }
    ],
    description: "The M3 was commisoned as a light tank with good scountg and fire support. With its shield the M3 con bolck for troops during forward assaults while it s considerable firepowere allows it to outgun most infatry squads."
};

let gyroplane = {
    name: "X-5 Gyroplane",
    alience: "ALLIES",
    type: "SCOUT",
    role: "UNIT",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 2,
        type: "AIR",
        minimumMovement: 1
    },
    baseSize: -1,
    armor: 0,
    plugs: 0,
    health: 2,
    groundAttackValue: 1,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Bomb",
            values: [2, 2, 2, 0, 0],
            keyword: ["CHAIN_GRID_ATTACK"],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "NIMBLE",
            value: 0,
            type: "ABILITY"
        }
    ],
    description: "Powered vertical flight has always been a challenge of control, weihgt and complexity. The X-5 Gyroplane does a fine job of balancing the need for speed whth enough agility ot hover in place and allow for the pilot to spot targets."
};

let dorchester = {
    name: "B-12 Dorchester",
    alience: "ALLIES",
    type: "BOMBER",
    role: "UNIT",
    cost: {
        money: 3,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 3,
        type: "AIR",
        minimumMovement: 1
    },
    baseSize: -1,
    armor: 0,
    plugs: 1,
    health: 3,
    groundAttackValue: 1,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Bomb",
            values: [3, 3, 2, 3, 3],
            keyword: ["FLAT_GRID_ATTACK", "GROUND_ATTACK"],
            attackRate: 1
        }, {
            weapon: "ROCKET",
            values: [2, 0, 0, 0, 0],
            keyword: ["AIR_ATTACK"],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "TURRET",
            value: 0,
            type: "ABILITY"
        }
    ],
    description: "With its heavy payload the Dorchester was an ideal airframe to use for a bomber but it alcked air to air defense."
};

let buccaneer = {
    name: "F-4 Buccaneer",
    alience: "ALLIES",
    type: "FIGHTER",
    role: "UNIT",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 3,
        type: "AIR",
        minimumMovement: 1
    },
    baseSize: -1,
    armor: 0,
    plugs: 1,
    health: 2,
    groundAttackValue: 2,
    antiairAttackValue: 3,
    attacks: [
        {
            weapon: "Gatling Gun",
            values: [2, 1, 1, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "RAPID_ASSAULT",
            value: 2,
            type: "ABILITY"
        }
    ],
    description: "The F-4 Buccaneer sports a massive rear mounted nine cylinder radial engine giving it hte speed ot quickly geet into the fight. At low speeds it handes well wit its two wings providing ample lift and control."
};




let hacksawTurret = {
    name: "Hacksaw Turret",
    alience: "ALLIES",
    type: "PLUG",
    role: "UPGRADE",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 0,
        type: "PLUG",
        minimumMovement: 0
    },
    baseSize: 0,
    armor: -1,
    plugs: 0,
    health: 1,
    groundAttackValue: 2,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Minigun",
            values: [2, 2, 2, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [],
    description: "Hacksaw Turret"
};

let rocket = {
    name: "X-3 Rocket",
    alience: "ALLIES",
    type: "PLUG",
    role: "UPGRADE",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 0,
        type: "PLUG",
        minimumMovement: 0
    },
    baseSize: 0,
    armor: -1,
    plugs: 0,
    health: 1,
    groundAttackValue: 1,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Rocket",
            values: [2, 2, 0, 0, 0],
            keyword: [],
            attackRate: 2
        }
    ],
    specials: [],
    description: "Without enough qud guns to go around, the allies needed a smaller anti-air alternative that could be attacked eo existing vhicles."
};

let pneumaticRevolver = {
    name: "Pneumatic Revolver",
    alience: "ALLIES",
    type: "PLUG",
    role: "UPGRADE",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 0,
        type: "PLUG",
        minimumMovement: 0
    },
    baseSize: 0,
    armor: -1,
    plugs: 0,
    health: 1,
    groundAttackValue: 2,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Minigun",
            values: [3, 1, 0, 0, 0],
            keyword: ["CHAIN_GRID_ATTACK"],
            attackRate: 1
        }
    ],
    specials: [],
    description: "This innovative turret grants any vehicle tremendous anti infantry capabilities."
};

let slammer = {
    name: "Slammer Turret",
    alience: "ALLIES",
    type: "PLUG",
    role: "UPGRADE",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 0,
        type: "PLUG",
        minimumMovement: 0
    },
    baseSize: 0,
    armor: -1,
    plugs: 0,
    health: 1,
    groundAttackValue: 3,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Bazuka",
            values: [1, 2, 3, 3, 1],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [],
    description: "The Eldridge smoothbore cannon was a great gun but just a bit too powerful to mount on a light tank chassis."
};


let hammer = {
    name: "Hammer 65 Pounder",
    alience: "ALLIES",
    type: "SUPPORT",
    role: "UNIT",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 2,
    armor: 0,
    plugs: 0,
    health: 1,
    groundAttackValue: 4,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Mortar",
            values: [2, 1, 1, 0, 0],
            keyword: ["FLAT_GRID_ATTACK"],
            attackRate: 1
        }
    ],
    specials: [],
    description: "Hammer 65 Pounder"
}

let tunneler = {
    name: "LT. Edwina Brasseldun",
    alience: "ALLIES",
    type: "SUPPORT",
    role: "HERO",
    cost: {
        money: 2,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 2,
        type: "TUNNELER",
        minimumMovement: 0
    },
    baseSize: 2,
    armor: 1,
    plugs: 0,
    health: 2,
    groundAttackValue: 2,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Gun",
            values: [1, 2, 3, 1, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [],
    description: "Lt. Edwina Brasseldun is happier six feet underground than anywhere else on Rivet. She is a subterranean engineer who cut her teeth working in the Tiemounium Spiece mines."
}

let polsten = {
    name: "Polsten Quad Gun",
    alience: "ALLIES",
    type: "SUPPORT",
    role: "UNIT",
    cost: {
        money: 2,
        rivets: 1,
    },
    bountyCount: 0,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 2,
    armor: 1,
    health: 2,
    groundAttackValue: 2,
    antiairAttackValue: 2,
    attacks: [
        {
            weapon: "Minigun",
            values: [2, 1, 0, 0, 0],
            keyword: [],
            attackRate: 2
        }
    ],
    specials: [],
    description: "With the growing Blightun air threat the allies needed a deicated anti-air weappons platform."
}

let wolverine = {
    name: "M2 Wolverine",
    alience: "ALLIES",
    type: "INVANTRY",
    role: "HERO",
    cost: {
        money: 3,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 1,
    armor: 1,
    health: 2,
    groundAttackValue: 2,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Autocannon",
            values: [2, 2, 2, 1, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "BOLSTER_DEFENSE",
            value: -1,
            type: "BUFF"
        }
    ],
    description: "M2 Wolverine"
}

let captainParman = {
    name: "Captain W. Parman",
    alience: "ALLIES",
    type: "INVANTRY",
    role: "HERO",
    cost: {
        money: 3,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 3,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 1,
    armor: 1,
    health: 2,
    groundAttackValue: 1,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Sabre",
            values: [3, 2, 1, 0, 0],
            keyword: ["FLAT_GRID_ATTACK"],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "RAPID_ASSAULT",
            value: 3,
            type: "BUFF"
        }
    ],
    description: "Captain W. Parman"
};

let generalPatston = {
    name: "General G. Patston",
    alience: "ALLIES",
    type: "PLUG",
    role: "HERO",
    cost: {
        money: 2,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 0,
        type: "PLUG",
        minimumMovement: 0
    },
    baseSize: 0,
    armor: 0,
    health: 1,
    groundAttackValue: 0,
    antiairAttackValue: 0,
    attacks: [],
    specials: [
        {
            keyword: "TANK_SHOCK",
            value: 1,
            type: "ABILITY"
        }
    ],
    description: "General G. Patston"
};

let macleodPlug = {
    name: "LT. Macleod",
    alience: "ALLIES",
    type: "PLUG",
    role: "HERO",
    cost: {
        money: 1,
        rivets: 1,
    },
    bountyCount: 0,
    movement: {
        value: 0,
        type: "PLUG",
        minimumMovement: 0
    },
    baseSize: 0,
    armor: 0,
    health: 1,
    groundAttackValue: 0,
    antiairAttackValue: 0,
    attacks: [],
    specials: [
        {
            keyword: "HEALTH",
            value: 1,
            type: "BONUS"
        }
    ],
    description: "Macleod is a man that ohter men look up to. He is a commander who is always with his soldiers and will always be found at the front of a charge. Hailing from the Norhtern tip of Girhton, Macleod will liead a charge by playing his grandfathers ancient bagpipes, lifting the spirits of those around him."
};

let leutnantMacleod = {
    name: "LT. Macleoud",
    alience: "ALLIES",
    type: "INVANTRY",
    role: "HERO",
    cost: {
        money: 3,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 1,
    armor: 0,
    health: 3,
    groundAttackValue: 1,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Sabre",
            values: [2, 1, 0, 0, 0],
            keyword: ["CHAIN_GRID_ATTACK"],
            attackRate: 2
        }
    ],
    specials: [
        {
            keyword: "RUNNER",
            value: 1,
            type: "BONUS"
        }
    ],
    description: "Macleod is a man that ohter men look up to. He is a commander who is always with his soldiers and will always be found at the front of a charge. Hailing from the Norhtern tip of Girhton, Macleod will liead a charge by playing his grandfathers ancient bagpipes, lifting the spirits of those around him."
};

let terraNova = {
    name: "Commander Terror Nova",
    alience: "ALLIES",
    type: "INVANTRY",
    role: "HERO",
    cost: {
        money: 3,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 1,
    armor: 1,
    health: 2,
    groundAttackValue: 2,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Minigun",
            values: [2, 2, 1, 1, 0],
            keyword: [],
            attackRate: 2
        }
    ],
    specials: [
        {
            keyword: "REINFORCEMENTS_RIFLEMAN",
            value: 0,
            type: "ACTION"
        }
    ],
    description: "The Terror - as he is called is acturally a quiet man by nature. Blessed with a natural ability to fight Terror Nova was thrown itno the spotlight as a hero of the allied forces."
};





// -- -------------------------------------------------------------------------- --
// -- Team 1 - Blight
// -- -------------------------------------------------------------------------- --
let sturmpanzer = {
    name: "Sturmpanzer",
    alience: "BLIGHT",
    type: "TANK",
    role: "UNIT",
    cost: {
        money: 4,
        rivets: 3,
    },
    bountyCount: 2,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 4,
    armor: 4,
    plugs: 1,
    health: 4,
    groundAttackValue: 2,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Turret",
            values: [1, 3, 3, 2, 0],
            keyword: [],
            attackRate: 2
        }
    ],
    specials: [
        {
            keyword: "TANK_SHOCK",
            value: 2,
            type: "ABILITY"
        }, {
            keyword: "DASH",
            value: 2,
            type: "ACTION"
        }, {
            keyword: "IMMUNE_TO_GAS",
            value: 0,
            type: "ABILITY"
        }
    ],
    description: "Sturmpanzer"
};

let landknecht = {
    name: "Landkrieger",
    alience: "BLIGHT",
    type: "TANK",
    role: "UNIT",
    cost: {
        money: 3,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 2,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 2,
    armor: 2,
    plugs: 1,
    health: 2,
    groundAttackValue: 1,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Hydraulic Fists",
            values: [2, 3, 1, 0, 0],
            keyword: ["CHAIN_GRID_ATTACK"],
            attackRate: 2
        }
    ],
    specials: [
        {
            keyword: "IMMUNE_TO_GAS",
            value: 0,
            type: "ABILITY"
        }
    ],
    description: "When the Blight saw a need for a trench line assault vehicle, hte landkrieger was chosen as the winning desing."
};

let schlitten = {
    name: "MG-08 Schlitten",
    alience: "BLIGHT",
    type: "SUPPORT",
    role: "UNIT",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 2,
    armor: 1,
    plugs: 0,
    health: 1,
    groundAttackValue: 3,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Gun",
            values: [2, 0, 0, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [],
    description: "MG-08 Schlitten"
};


let flakker = {
    name: "88 Flakker",
    alience: "BLIGHT",
    type: "SUPPORT",
    role: "UNIT",
    cost: {
        money: 2,
        rivets: 1,
    },
    bountyCount: 0,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 2,
    armor: 1,
    plugs: 1,
    health: 2,
    groundAttackValue: 2,
    antiairAttackValue: 2,
    attacks: [
        {
            weapon: "Gattling Gun",
            values: [2, 1, 0, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [],
    description: "Originally desingned as an anti tank gung, the 88 Flankker has beiin very successful in ann aa roll."
};

let romler = {
    name: "General E. Romler",
    alience: "BLIGHT",
    type: "SUPPORT",
    role: "HERO",
    cost: {
        money: 3,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 2,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 2,
    armor: 1,
    plugs: 0,
    health: 2,
    groundAttackValue: 2,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Gun",
            values: [1, 2, 2, 1, 0],
            keyword: [],
            attackRate: 2
        }
    ],
    specials: [
        {
            keyword: "IMMUNE_TO_GAS",
            value: 0,
            type: "ABILITY"
        }, {
            keyword: "IMPROVE_GROUND_ATTACK",
            value: 1,
            type: "BUFF"
        }
    ],
    description: "Often the fog of war blocks a gererals view and the only way to get a bead on the enemy ist to get down."
};

let sturmrad = {
    name: "Strumrad",
    alience: "BLIGHT",
    type: "SUPPORT",
    role: "UNIT",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 2,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 2,
    armor: 1,
    plugs: 0,
    health: 2,
    groundAttackValue: 2,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Gun",
            values: [1, 2, 3, 2, 1],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [],
    description: "With the amnowheel drive system and suspension proving themselves to be both reliable and effective."
};

let dragoon = {
    name: "Monowheel Dragoon",
    alience: "BLIGHT",
    type: "CAVALRY",
    role: "UNIT",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 3,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 2,
    armor: 1,
    plugs: 0,
    health: 1,
    groundAttackValue: 1,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Gun",
            values: [2, 1, 0, 0, 0],
            keyword: ["CHAIN_GRID_ATTACK"],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "RAPID_ASSAULT",
            value: 2,
            type: "ABILITY"
        }
    ],
    description: "Monowheel Dragoon"
};

let trenchRaider = {
    name: "Trench Raider",
    alience: "BLIGHT",
    type: "INVANTRY",
    role: "UNIT",
    cost: {
        money: 1,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 1,
    armor: 0,
    plugs: 0,
    health: 1,
    groundAttackValue: 1,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Gun",
            values: [4, 0, 0, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "RUNNER",
            value: 1,
            type: "ABILITY"
        }
    ],
    description: "When the call goes up that the Trench Raider have broken through the lienes, most soldiers either run or stand frozen with fear."
};

let panzerfaust = {
    name: "Panzerfaust",
    alience: "BLIGHT",
    type: "INVANTRY",
    role: "UNIT",
    cost: {
        money: 1,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 1,
    armor: 0,
    plugs: 0,
    health: 1,
    groundAttackValue: 2,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Bazuka",
            values: [1, 3, 2, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "RUNNER",
            value: 1,
            type: "ABILITY"
        }
    ],
    description: "Panzerfaust"
};

let eliteGuard = {
    name: "Baron Munchen Guard",
    alience: "BLIGHT",
    type: "INVANTRY",
    role: "UNIT",
    cost: {
        money: 1,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 1,
    armor: 0,
    plugs: 0,
    health: 1,
    groundAttackValue: 2,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Bazuka",
            values: [1, 3, 2, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "RUNNER",
            value: 1,
            type: "ABILITY"
        }
    ],
    description: "Baron Munchen Guard"
};

let k9Fuehrer = {
    name: "Angriff Hundeführer",
    alience: "BLIGHT",
    type: "INVANTRY",
    role: "UNIT",
    cost: {
        money: 3,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 1,
    armor: 0,
    plugs: 0,
    health: 1,
    groundAttackValue: 1,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Pistol",
            values: [1, 1, 0, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "DOG_HANDLER",
            value: 0,
            type: "ACTION"
        }
    ],
    description: "Tasked with training the Blightun Kampfhunds the Hundeführer throw themselves itno the lieves of their animals."
};

let kampfhund = {
    name: "Kampfhund",
    alience: "BLIGHT",
    type: "INVANTRY",
    role: "UNIT",
    cost: {
        money: 0,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 2,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 1,
    armor: 0,
    plugs: 0,
    health: 1,
    groundAttackValue: 1,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Animal",
            values: [2, 1, 0, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [],
    description: "Picked from the strongest  dogs of the Blightun Wmpire the Kampfhund is trained ontly to fight."
};

let zeppelin = {
    name: "Zeppelin Scout",
    alience: "BLIGHT",
    type: "SCOUT",
    role: "UNIT",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 2,
        type: "AIR",
        minimumMovement: 0
    },
    baseSize: -1,
    armor: 0,
    plugs: 0,
    health: 2,
    groundAttackValue: 1,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Bomb",
            values: [2, 2, 2, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "Turret",
            value: 0,
            type: "HARDWARE"
        }
    ],
    description: "A small nimble creaft, the Zeppelin Scout has served well on several fronts."
};

let zeppelinBomber = {
    name: "Zeppelin Bomber",
    alience: "BLIGHT",
    type: "BOMBER",
    role: "UNIT",
    cost: {
        money: 3,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 2,
        type: "AIR",
        minimumMovement: 0
    },
    baseSize: -1,
    armor: 0,
    plugs: 1,
    health: 3,
    groundAttackValue: 1,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Bomb",
            values: [3, 3, 2, 2, 2],
            keyword: ["FLAT_GRID_ATTACK"],
            attackRate: 1
        }
    ],
    specials: [],
    description: "A small nimble creaft, the Zeppelin Scout has served well on several fronts."
};

let biplane = {
    name: "Osprey Biplane",
    alience: "BLIGHT",
    type: "FIGHTER",
    role: "UNIT",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 3,
        type: "AIR",
        minimumMovement: 1
    },
    baseSize: -1,
    armor: 0,
    plugs: 1,
    health: 2,
    groundAttackValue: 2,
    antiairAttackValue: 3,
    attacks: [
        {
            weapon: "Gattling Gun",
            values: [2, 1, 1, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "RAPID_ASSAULT",
            value: 2,
            type: "ABILITY"
        }
    ],
    description: "Designed as a pusher with its engine in the back the osprey is a nimble craft with a good climb rate and quck truning radius"
};


let volker = {
    name: "Volker Hawken",
    alience: "BLIGHT",
    type: "PLUG",
    role: "PILOT",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 0,
        type: "PLUG",
        minimumMovement: 0
    },
    baseSize: 0,
    armor: -1,
    plugs: 0,
    health: 0,
    groundAttackValue: 0,
    antiairAttackValue: 0,
    attacks: [],
    specials: [
        {
            keyword: "BOLSTER_DEFENSE",
            value: -1,
            type: "ABILITY"
        }
    ],
    description: "The son of a famous pilot, Volker was destined to be a grat flyer. As a child he was fiven a half scale skiff glieder which he trained on daily."
};

let otto = {
    name: "Otto Klueman",
    alience: "BLIGHT",
    type: "PLUG",
    role: "HERO",
    cost: {
        money: 2,
        rivets: 1,
    },
    bountyCount: 0,
    movement: {
        value: 0,
        type: "PLUG",
        minimumMovement: 0
    },
    baseSize: 0,
    armor: -1,
    plugs: 0,
    health: 0,
    groundAttackValue: 2,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Pistol",
            values: [1, 1, 1, 2, 2],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "DASH",
            value: 1,
            type: "ACTION"
        }, {
            keyword: "FORWARD_OBSERVER",
            value: 0,
            type: "ABILITY"
        }
    ],
    description: "Considered a young prodigy, otto was raised by his parents in the hills outside of Ballmore."
};

let chancellor = {
    name: "Iron Chancellor",
    alience: "BLIGHT",
    type: "INVANTRY",
    role: "HERO",
    cost: {
        money: 3,
        rivets: 2,
    },
    bountyCount: 1,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 1,
    armor: 0,
    plugs: 0,
    health: 2,
    groundAttackValue: 1,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Pistol",
            values: [2, 1, 0, 0, 0],
            keyword: [],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "RALLY_POINT",
            value: 0,
            type: "ABILITY"
        }, {
            keyword: "WAR_BONDS",
            value: 0,
            type: "ABILITY"
        }
    ],
    description: "The Iron Chancellor is a mn who does things by the numbers. He always has the same number of buttons on hes jackets and the same number of rivets on his gauntlets."
};

let dora = {
    name: "LT. Dora Rollen",
    alience: "BLIGHT",
    type: "INVANTRY",
    role: "HERO",
    cost: {
        money: 2,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 2,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 1,
    armor: 0,
    plugs: 0,
    health: 2,
    groundAttackValue: 1,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Pistol",
            values: [2, 1, 0, 0, 0],
            keyword: [],
            attackRate: 2
        }
    ],
    specials: [
        {
            keyword: "SPRINGBOARD",
            value: 1,
            type: "ABILITY"
        }
    ],
    description: "Always looking for a faster was to get soldiers to the fron Ft. Dora began experimenting  with various types of combatboot."
};

let baron = {
    name: "Baron Munchen",
    alience: "BLIGHT",
    type: "INVANTRY",
    role: "HERO",
    cost: {
        money: 3,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 1,
    armor: 1,
    plugs: 0,
    health: 3,
    groundAttackValue: 2,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Sabre",
            values: [2, 2, 1, 1, 1],
            keyword: ["CHAIN_GRID_ATTACK"],
            attackRate: 2
        }
    ],
    specials: [],
    description: "Not much is known abaout Baron Munchen. No one has ever seen his face and it is not evern vertain if he has a face."
};


let jager = {
    name: "Jager Erwin Konig",
    alience: "BLIGHT",
    type: "INVANTRY",
    role: "HERO",
    cost: {
        money: 3,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 1,
    armor: 0,
    plugs: 0,
    health: 2,
    groundAttackValue: 3,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Sniper Rifle",
            values: [3, 0, 0, 0, 0],
            keyword: ["SNIPER_RIFLE"],
            attackRate: 2
        }
    ],
    specials: [
        {
            keyword: "SNIPER",
            value: 0,
            type: "ABILITY"
        }, {
            keyword: "GROUND_ATTACK",
            value: 1,
            type: "BUFF"
        }
    ],
    description: "Jaeger Erwin König"
};

let cruel = {
    name: "Cruel Mine",
    alience: "BLIGHT",
    type: "INVANTRY",
    role: "HERO",
    cost: {
        money: 3,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 2,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 1,
    armor: 1,
    plugs: 0,
    health: 2,
    groundAttackValue: 2,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Mine",
            values: [3, 1, 1, 1, 0],
            keyword: ["SNIPER_RIFLE"],
            attackRate: 2
        }
    ],
    specials: [
        {
            keyword: "SACRIFICE",
            value: 0,
            type: "ACTION"
        }
    ],
    description: "Born a frail and sickly child, Mine was confied to his home as a youth."
};

let gaston = {
    name: "Baron Gaton Tankken",
    alience: "BLIGHT",
    type: "INVANTRY",
    role: "HERO",
    cost: {
        money: 3,
        rivets: 1,
    },
    bountyCount: 1,
    movement: {
        value: 1,
        type: "GROUND",
        minimumMovement: 0
    },
    baseSize: 1,
    armor: 1,
    plugs: 0,
    health: 2,
    groundAttackValue: 2,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Bazuka",
            values: [2, 2, 2, 2, 2],
            keyword: ["POISON"],
            attackRate: 1
        }
    ],
    specials: [
        {
            keyword: "IMMUNE_TO_GAS",
            value: 0,
            type: "BUFF"
        }
    ],
    description: "Baron Gaton Tankken"
};

let grenadeTurret = {
    name: "Grenade Turret",
    alience: "BLIGHT",
    type: "PLUG",
    role: "UPGRADE",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 0,
        type: "PLUG",
        minimumMovement: 0
    },
    baseSize: 0,
    armor: -1,
    plugs: 0,
    health: 1,
    groundAttackValue: 2,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Grenade",
            values: [3, 1, 0, 0, 0],
            keyword: ["FLAT_GRID_ATTACK"],
            attackRate: 1
        }
    ],
    specials: [],
    description: "This turret allows for the quick dispersal fo smoke or fragemtation greneades for any vehicle."
};

let cyclops = {
    name: "Cyclops",
    alience: "BLIGHT",
    type: "PLUG",
    role: "UPGRADE",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 0,
        type: "PLUG",
        minimumMovement: 0
    },
    baseSize: 0,
    armor: -1,
    plugs: 0,
    health: 1,
    groundAttackValue: 3,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Firethrower",
            values: [3, 0, 0, 0, 0],
            keyword: [],
            attackRate: 2
        }
    ],
    specials: [],
    description: "Cyclops"
};

let aaGun = {
    name: "MG Anti Air",
    alience: "BLIGHT",
    type: "PLUG",
    role: "UPGRADE",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 0,
        type: "PLUG",
        minimumMovement: 0
    },
    baseSize: 0,
    armor: -1,
    plugs: 0,
    health: 1,
    groundAttackValue: 1,
    antiairAttackValue: 1,
    attacks: [
        {
            weapon: "Gatling Gun",
            values: [1, 2, 0, 0, 0],
            keyword: [],
            attackRate: 2
        }
    ],
    specials: [],
    description: "Cyclops"
};

let flameTurret = {
    name: "Flamme Turret",
    alience: "BLIGHT",
    type: "PLUG",// TANK
    role: "UPGRADE",
    cost: {
        money: 2,
        rivets: 0,
    },
    bountyCount: 0,
    movement: {
        value: 0,
        type: "PLUG",
        minimumMovement: 0
    },
    baseSize: 0,
    armor: -1,
    plugs: 0,
    health: 1,
    groundAttackValue: 2,
    antiairAttackValue: 0,
    attacks: [
        {
            weapon: "Flamethrower",
            values: [2, 1, 0, 0, 0],
            keyword: ["FLAT_GRID_ATTACK"],
            attackRate: 1
        }
    ],
    specials: [],
    description: "Cyclops"
};


let alliedTroopes = [
    terraNova, leutnantMacleod, macleodPlug, generalPatston, captainParman, wolverine, polsten, tunneler, hammer, slammer, pneumaticRevolver, rocket, hacksawTurret,
    rifleman, highlandguard, mountaineer, k9Corps, guardDog, rocketCycle, patson, ostrich, heavyTankA, verticalTank, bossTank, gyroplane, dorchester, buccaneer
];

let blightTroopes = [
    sturmpanzer, landknecht, schlitten, flakker, romler, sturmrad, dragoon, trenchRaider, panzerfaust, eliteGuard, k9Fuehrer, kampfhund,
    zeppelin, zeppelinBomber, biplane, volker, otto, chancellor, dora, baron, jager, cruel, gaston, grenadeTurret, cyclops, aaGun,
    flameTurret
];


// -- ----------------------------------------------------------------------------- --
// -- 1.Beispiel
// -- ----------------------------------------------------------------------------- --
// Schreiben Sie die folgende Funktion. Die datentechnische Grundlage der Funktion
// sind die im vorhergehenden Abschnitt definierten Arrays alliedTroopes und
// blightTroopes.

// Sammeln Sie die Namen der allierten Truppen in einem Array. Geben Sie anschließend
// das Array auf der Konsole aus.

// Methodensignatur: extractAlliedTroupNames(alliedTroopes)
// Parameter: @alliedTroopes: Ein Array der allierten Einheiten


// Hinweise: Verwenden Sie die for-of Schleife

console.log("// -- ----------------------------------------------------------------------------- --")
console.log("// -- 1.Beispiel");
console.log("// -- ----------------------------------------------------------------------------- --")

function calculateTankAmount(alliedTroopes) {
    let tankCount = 0;

    for (const troop of alliedTroopes) {
        if(troop.type == "TANK"){
            ++tankCount;
        }
    }

    return tankCount;
}

function extractAlliedTroupNames(alliedTroopes) {
    let names = [];

    for (const unit of alliedTroopes) {
        names.push(unit.name)
    }

    return names
}

console.log(calculateTankAmount(alliedTroopes));
console.log("\n");

// -- ----------------------------------------------------------------------------- --
// -- 2.Beispiel
// -- ----------------------------------------------------------------------------- --
// Schreiben Sie die folgende Funktion. Die datentechnische
// Grundlage der Funktion
// sind die im vorhergehenden Abschnitt definierten 
// Arrays alliedTroopes und
// blightTroopes.

// Sammeln Sie alle Truppen (Blight und Alliert) die 
// mehr als einen Angriff haben in
// einem Array. Geben Sie die Namen der Truppen auf der Console aus.

// Methodensignatur: aggregateOrdanceTroupes
// (alliedTroopes, blightTroopes)

console.log("// -- ----------------------------------------------------------------------------- --")
console.log("// -- 2.Beispiel");
console.log("// -- ----------------------------------------------------------------------------- --")

function aggregateOrdanceTroupes (alliedTroopes, blightTroopes) {
    let units = [];

    for (const unit of alliedTroopes) {
        if (unit.attacks.length > 1) {
            units.push(unit)
        }
    }

    for (const unit of blightTroopes) {
        if (unit.attacks.length > 1) {
            units.push(unit)
        }
    }

    return units
}

let data = aggregateOrdanceTroupes(alliedTroopes, blightTroopes)
for (const unit of data) {
    console.log(unit.name)
}

console.log(...aggregateOrdanceTroupes(alliedTroopes, blightTroopes));
console.log("\n");

// -- ----------------------------------------------------------------------------- --
// -- 3.Beispiel
// -- ----------------------------------------------------------------------------- --
// Wieviele Panzer (TANK) haben die Allierten? Geben Sie 
// den Wert auf der Console aus.

console.log("// -- ----------------------------------------------------------------------------- --")
console.log("// -- 3.Beispiel");
console.log("// -- ----------------------------------------------------------------------------- --")

function determineTankAmount(alliedTroopes) {
    let tankCount = 0;
    for (const unit of alliedTroopes) {
        if(troop.type == "TANK"){
            ++tankCount;
        }
    }

    return tankCount;
}

console.log("\n");