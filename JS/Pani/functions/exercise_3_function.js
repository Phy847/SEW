// -- ------------------------------------------------------- --
//  Weapons
// -- ------------------------------------------------------- --
function createAvengerBoltCannon() {
   return {
      name: "Avenger Bolt Cannon",
      fireArc: ["FRONT"],
      firePower: [3, 7, 0],
      damage: 4,
      ammonition: 160,
      specials: [
         {
            keyword: "EXTRA_DAMAGE",
            value: 6
         }
      ]
   };
}

function createHeavyBolterPortTurret() {
   return {
      name: "Heavy Bolter Turret",
      fireArc: ["LEFT_SIDE"],
      firePower: [6, 2, 0],
      damage: 5,
      ammonition: 160,
      specials: []
   };
}

function createHeavyBolterStarboardTurret() {
   return {
      name: "Heavy Bolter Turret",
      fireArc: ["RIGHT_SIDE"],
      firePower: [6, 2, 0],
      damage: 5,
      ammonition: 100,
      specials: []
   };
}

function createHellstrikeMissleLauncher() {
   return {
      name: "Hellstrike Missle Launcher",
      fireArc: ["FRONT"],
      firePower: [2, 2, 2],
      damage: 3,
      ammonition: 3,
      specials: [
         {
            keyword: "GROUND_ATTACK",
            value: 0
         }, {
            keyword: "EXTRA_DAMAGE",
            value: 6
         }
      ]
   };
}

function createQuadLascannon() {
   return {
      name: "Quad Lascannon",
      fireArc: ["FRONT"],
      firePower: [0, 4, 2],
      damage: 2,
      ammonition: 160,
      specials: [
         {
            keyword: "EXTRA_DAMAGE",
            value: 6
         }
      ]
   };
}

function createTwinHeavyBolters() {
   return {
      name: "Twin Heavy Bolters",
      fireArc: ["FRONT"],
      firePower: [3, 1, 0],
      damage: 5,
      ammonition: 160,
      specials: []
   };
}

function createDualFragMisslePods() {
   return {
      name: "Dual Frag Missle Pods",
      fireArc: ["FRONT"],
      firePower: [3, 3, 1],
      damage: 5,
      ammonition: 160,
      specials: []
   };
}

function createRotaryFragMissleLauncher() {
   return {
      name: "Rotary Frag Missle Launcher",
      fireArc: ["FRONT"],
      firePower: [2, 2, 1],
      damage: 5,
      ammonition: 160,
      specials: []
   };
}

function createTurboLaserDestructor() {
   return {
      name: "Turbo Laser Destructor",
      fireArc: ["FRONT", "UP"],
      firePower: [2, 2, 3],
      damage: 2,
      ammonition: 160,
      specials: [
         {
            keyword: "EXTRA_DAMAGE",
            value: 4
         }
      ]
   };
}

function createTwinLascannon() {
   return {
      name: "Twin Lascannon",
      fireArc: ["FRONT"],
      firePower: [0, 2, 1],
      damage: 2,
      ammonition: 160,
      specials: [
         {
            keyword: "EXTRA_DAMAGE",
            value: 6
         }
      ]
   };
}

function createHeavyBolterPortTurret() {
   return {
      name: "Heavy Bolter Turret",
      fireArc: ["LEFT_SIDE", "FRONT"],
      firePower: [4, 1, 0],
      damage: 5,
      ammonition: 160,
      specials: []
   };
}

function createHeavyBolterStarboardTurret() {
   return {
      name: "Heavy Bolter Turret",
      fireArc: ["RIGHT_SIDE", "FRONT"],
      firePower: [4, 1, 0],
      damage: 5,
      ammonition: 160,
      specials: []
   };
}

function createHeavyBolterPortWing() {
   return {
      name: "Heavy Bolter Turret",
      fireArc: ["ALL_ROUND", "DOWN"],
      firePower: [4, 1, 0],
      damage: 5,
      ammonition: 160,
      specials: []
   };
}

function createHeavyBolterStarboardWing() {
   return {
      name: "Heavy Bolter Turret",
      fireArc: ["ALL_ROUND", "DOWN"],
      firePower: [4, 1, 0],
      damage: 5,
      ammonition: 160,
      specials: []
   };
}

function createTwinBrightLances() {
   return {
      name: "Bright Lance",
      fireArc: ["FRONT"],
      firePower: [1, 2, 2],
      damage: 2,
      ammonition: 160,
      specials: [
         {
            keyword: "EXTRA_DAMAGE",
            value: 4
         }
      ]
   };
}

function createTwinScatterLaser() {
   return {
      name: "Scatter Laser",
      fireArc: ["FRONT"],
      firePower: [6, 4, 0],
      damage: 4,
      ammonition: 160,
      specials: [
         {
            keyword: "AERIAL_ATTACK",
            value: 0
         }
      ]
   };
}

function createTwinStarcannon() {
   return {
      name: "Starcannon",
      fireArc: ["FRONT"],
      firePower: [3, 2, 1],
      damage: 3,
      ammonition: 160,
      specials: [
         {
            keyword: "AERIAL_ATTACK",
            value: 0
         }
      ]
   };
}

function createShurikenCannon() {
   return {
      name: "Shurikencannon",
      fireArc: ["FRONT"],
      firePower: [8, 4, 0],
      damage: 4,
      ammonition: 160,
      specials: [
         {
            keyword: "EXTRA_DAMAGE",
            value: 5
         }
      ]
   };
}

function createNightfirePlasmaMissileArray() {
   return {
      name: "Nightfire Plasma Missile Array",
      fireArc: ["FRONT"],
      firePower: [2, 2, 2],
      damage: 3,
      ammonition: 2,
      specials: [
         {
            keyword: "EXTRA_DAMAGE",
            value: 5
         }, {
            keyword: "AERIAL_ATTACK",
            value: 0
         }
      ]
   };
}

function createNightfireKrakMissileArray() {
   return {
      name: "Nightfire Krak Missile Array",
      fireArc: ["FRONT"],
      firePower: [2, 2, 2],
      damage: 3,
      ammonition: 2,
      specials: [
         {
            keyword: "EXTRA_DAMAGE",
            value: 5
         }, {
            keyword: "GROUND_ATTACK",
            value: 0
         }
      ]
   };
}

function createTwinPulseLasers() {
   return {
      name: "Pulse Laser",
      fireArc: ["FRONT"],
      firePower: [2, 3, 2],
      damage: 3,
      ammonition: 160,
      specials: [
         {
            keyword: "AERIAL_ATTACK",
            value: 0
         }
      ]
   };
}

function createMissileArray() {
   return {
      name: "Missile Array",
      fireArc: ["FRONT"],
      firePower: [3, 2, 0],
      damage: 4,
      ammonition: 160,
      specials: []
   };
}

function createBombRack() {
   return {
      name: "Bomb Rack",
      fireArc: ["REAR"],
      firePower: [4, 0, 0],
      damage: 2,
      ammonition: 3,
      specials: [
         {
            keyword: "EXTRA_DAMAGE",
            value: 5
         }, {
            keyword: "GROUND_ATTACK",
            value: 0
         }
      ]
   };
}

function createTwinLinkedShurikenCannon() {
   return {
      name: "Heavy Shuriken Cannon",
      fireArc: ["FRONT"],
      firePower: [10, 6, 0],
      damage: 4,
      ammonition: 160,
      specials: []
   };
}

function createNoseMountedScatterLaser() {
   return {
      name: "Nose mounted Scatter Laser",
      fireArc: ["FRONT"],
      firePower: [4, 2, 0],
      damage: 4,
      ammonition: 160,
      specials: [
         {
            keyword: "AERIAL_ATTACK",
            value: 0
         }
      ]
   };
}

function createTwinLinkedPulseLasers() {
   return {
      name: "Twin Linked Pulse Laser",
      fireArc: ["FRONT"],
      firePower: [4, 6, 2],
      damage: 3,
      ammonition: 160,
      specials: [
         {
            keyword: "AERIAL_ATTACK",
            value: 0
         }
      ]
   };
}

function createTwinLinkedPulsar() {
   return {
      name: "Twin Linked Pulsar",
      fireArc: ["FRONT"],
      firePower: [2, 4, 4],
      damage: 2,
      ammonition: 160,
      specials: [
         {
            keyword: "EXTRA_DAMAGE",
            value: 5
         }
      ]
   };
}

function createHeavyDScythe() {
   return {
      name: "Heavy DScythe",
      fireArc: ["FRONT"],
      firePower: [3, 3, 0],
      damage: 2,
      ammonition: 160,
      specials: [
         {
            keyword: "EXTRA_DAMAGE",
            value: 3
         }
      ]
   };
}

function createQuadBigShootas() {
   return {
      name: "Quad Big Shoota",
      fireArc: ["FRONT"],
      firePower: [8, 4, 0],
      damage: 5,
      ammonition: 160,
      specials: []
   };
}

function createPortShootaTurret() {
   return {
      name: "Shoota Turret",
      fireArc: ["LEFT_SIDE, UP"],
      firePower: [2, 1, 0],
      damage: 5,
      ammonition: 160,
      specials: []
   };
}

function createStarboardShootaTurret() {
   return {
      name: "Shoota Turret",
      fireArc: ["RIGHT_SIDE, UP"],
      firePower: [2, 1, 0],
      damage: 5,
      ammonition: 160,
      specials: []
   };
}

function createGrotBomms() {
   return {
      name: "Grot Bomms",
      fireArc: ["LEFT_SIDE", "RIDE_SIDE", "UP", "FRONT"],
      firePower: [0, 0, 0],
      damage: 2,
      ammonition: 160,
      specials: [
         {
            keyword: "AUTONOMOUS_WEAPON",
            value: 0
         }, {
            keyword: "EXTRA_DAMAGE",
            value: 4
         }
      ]
   };
}

function createBigShootaTurret() {
   return {
      name: "Big Shoota Turret",
      fireArc: ["REAR", "RIGHT_SIDE", "LEFT_SIDE", "UP"],
      firePower: [3, 1, 0],
      damage: 5,
      ammonition: 160,
      specials: [
         {
            keyword: "TAIL_GUNNER",
            value: 0
         }, {
            keyword: "AERIAL_ATTACK",
            value: 0
         }
      ]
   };
}

function createShootaTailGun() {
   return {
      name: "Shoota Tail Gun",
      fireArc: ["REAR"],
      firePower: [1, 0, 0],
      damage: 6,
      ammonition: 160,
      specials: [
         {
            keyword: "TAIL_GUNNER",
            value: 0
         }, {
            keyword: "AERIAL_ATTACK",
            value: 0
         }
      ]
   };
}

function createLascannon() {
   return {
      name: "Lascannon",
      fireArc: ["FRONT"],
      firePower: [0, 2, 1],
      damage: 2,
      ammonition: 160,
      specials: [
         {
            keyword: "EXTRA_DAMAGE",
            value: 6
         }
      ]
   };
}

function createDorsalBolterTurret() {
   return {
      name: "Bolter Turret",
      fireArc: ["ALL_ROUND", "UP"],
      firePower: [3, 2, 0],
      damage: 5,
      ammonition: 160,
      specials: [
         {
            keyword: "AERIAL_ATTACK",
            value: 0
         }
      ]
   };
}

function createRearBolterTurret() {
   return {
      name: "Bolter Turret",
      fireArc: ["REAR"],
      firePower: [3, 2, 0],
      damage: 5,
      ammonition: 160,
      specials: [
         {
            keyword: "TAIL_GUNNER",
            value: 0
         }, {
            keyword: "AERIAL_ATTACK",
            value: 0
         }
      ]
   };
}

function createBombBay() {
   return {
      name: "Bomb bay",
      fireArc: ["REAR"],
      firePower: [8, 0, 0],
      damage: 2,
      ammonition: 3,
      specials: [
         {
            keyword: "GROUND_ATTACK",
            value: 0
         }, {
            keyword: "EXTRA_DAMAGE",
            value: 5
         }
      ]
   };
}

function createAvengerBoltCannon() {
   return {
      name: "Avenger Bolt Cannon",
      fireArc: ["FRONT"],
      firePower: [3, 7, 0],
      damage: 4,
      ammonition: 160,
      specials: [
         {
            keyword: "EXTRA_DAMAGE",
            value: 6
         }
      ]
   };
}

function createTwinLascannon() {
   return {
      name: "Twin Lascannon",
      fireArc: ["FRONT"],
      firePower: [0, 2, 1],
      damage: 2,
      ammonition: 160,
      specials: [
         {
            keyword: "EXTRA_DAMAGE",
            value: 6
         }
      ]
   };
}

function createHeavyStubber() {
   return {
      name: "Heavy Stubber",
      fireArc: ["REAR", "UP"],
      firePower: [1, 1, 0],
      damage: 5,
      ammonition: 160,
      specials: [
         {
            keyword: "TAIL_GUNNER",
            value: 0
         }
      ]
   };
}

function createTwinMultiLasers() {
   return {
      name: "Multi Laser",
      fireArc: ["FRONT"],
      firePower: [4, 6, 2],
      damage: 5,
      ammonition: 160,
      specials: []
   };
}


// -- ------------------------------------------------------- --
//  Aircrafts
// -- ------------------------------------------------------- --
function createFireRaptorGunship() {
   return {
      name: "Fire Raptor Gunship",
      aircraftClass: "FIGHTER",
      alliance: "ADEPTUS_ASTARTES",
      cost: 31,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 4,
      transport: 0,
      fuel: 0,
      throttle: 2,
      manoueuvres: 5,
      handling: 3,
      minSpeed: 0,
      maxSpeed: 5,
      currentSpeed: 0,
      maxAltitude: 5,
      src: "file://./fireraptorgunship.png",
      weapons: [
         createAvengerBoltCannon(),
         createHeavyBolterPortTurret(),
         createHeavyBolterStarboardTurret(),
         createHellstrikeMissleLauncher()
      ],
      specials: []
   };
}


function createStormEagleAssaultCraft() {
   return {
      name: "Storm Eagle Assault Craft",
      aircraftClass: "FIGHTER",
      alliance: "ADEPTUS_ASTARTES",
      cost: 29,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 4,
      transport: 2,
      fuel: 0,
      throttle: 2,
      manoueuvres: 5,
      handling: 3,
      minSpeed: 0,
      maxSpeed: 5,
      currentSpeed: 0,
      maxAltitude: 5,
      src: "file://./stormeagleassaultcraft.png",
      weapons: [
         createQuadLascannon(),
         createTwinHeavyBolters(),
         createDualFragMisslePods()
      ],
      specials: []
   };
}

function createXiphonInterceptor() {
   return {
      name: "Xiphon Interceptor",
      aircraftClass: "FIGHTER",
      alliance: "ADEPTUS_ASTARTES",
      cost: 24,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 3,
      transport: 0,
      fuel: 0,
      throttle: 2,
      manoueuvres: 7,
      handling: 4,
      minSpeed: 2,
      maxSpeed: 6,
      currentSpeed: 0,
      maxAltitude: 5,
      src: "file://./xiphoninterceptor.png",
      weapons: [
         createRotaryFragMissleLauncher(),
         createQuadLascannon()
      ],
      specials: []
   };
}

function createThunderhawkGunship() {
   return {
      name: "Thunderhawk Gunship",
      aircraftClass: "BOMBER",
      alliance: "ADEPTUS_ASTARTES",
      cost: 44,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 8,
      transport: 4,
      fuel: 0,
      throttle: 2,
      manoueuvres: 4,
      handling: 3,
      minSpeed: 0,
      maxSpeed: 5,
      currentSpeed: 0,
      maxAltitude: 5,
      src: "file://./thunderhawkgunship.png",
      weapons: [
         createTurboLaserDestructor(),
         createTwinLascannon(),
         createHeavyBolterPortTurret(),
         createHeavyBolterStarboardTurret(),
         createHeavyBolterPortWing(),
         createHeavyBolterStarboardWing()
      ],
      specials: []
   };
}

function createNightWing() {
   return {
      name: "Nightwing",
      aircraftClass: "FIGHTER",
      alliance: "ELDAR_CRAFTWORLDS",
      cost: 21,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 2,
      transport: 0,
      fuel: 0,
      throttle: 3,
      manoueuvres: 8,
      handling: 2,
      minSpeed: 2,
      maxSpeed: 8,
      currentSpeed: 0,
      maxAltitude: 5,
      src: "file://./nightwing.png",
      weapons: [
         createShurikenCannon(),
         createTwinStarcannon()
      ],
      specials: [
         {
            keyword: "JINK",
            value: 6
         }
      ]
   };
}


function createPhoenixBomber() {
   return {
      name: "Phonix Bomber",
      aircraftClass: "FIGHTER",
      alliance: "ELDAR_CRAFTWORLDS",
      cost: 23,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 2,
      transport: 0,
      fuel: 0,
      throttle: 2,
      manoueuvres: 7,
      handling: 2,
      minSpeed: 2,
      maxSpeed: 6,
      currentSpeed: 0,
      maxAltitude: 5,
      src: "file://./phoenixbomber.png",
      weapons: [
         createShurikenCannon(),
         createMissileArray(),
         createNightfireKrakMissileArray(),
         createNightfirePlasmaMissileArray(),
         createTwinStarcannon()
      ],
      specials: [
         {
            keyword: "JINK",
            value: 0
         }
      ]
   };
}

function createVampireRaider() {
   return {
      name: "Vampire Raider",
      aircraftClass: "BOMBER",
      alliance: "ELDAR_CRAFTWORLDS",
      cost: 35,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 5,
      transport: 3,
      fuel: 0,
      throttle: 3,
      manoueuvres: 6,
      handling: 3,
      minSpeed: 2,
      maxSpeed: 7,
      currentSpeed: 0,
      maxAltitude: 5,
      src: "file://./vampireraider.png",
      weapons: [
         createTwinLinkedShurikenCannon(),
         createNoseMountedScatterLaser(),
         createTwinLinkedPulseLasers()
      ],
      specials: [
         {
            keyword: "JUMP",
            value: 0
         }, {
            keyword: "TROOPS",
            value: 0
         }
      ]
   };
}

function createVampireHunter() {
   return {
      name: "Vampire Raider",
      aircraftClass: "BOMBER",
      alliance: "ELDAR_CRAFTWORLDS",
      cost: 35,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 5,
      transport: 0,
      fuel: 0,
      throttle: 3,
      manoueuvres: 6,
      handling: 3,
      minSpeed: 2,
      maxSpeed: 7,
      currentSpeed: 0,
      maxAltitude: 5,
      src: "file://./vampirehunter.png",
      weapons: [
         createTwinLinkedPulsar(),
         createTwinBrightLances(),
         createNoseMountedScatterLaser()
      ],
      specials: [
         {
            keyword: "JUMP",
            value: 0
         }, {
            keyword: "TROOPS",
            value: 0
         }
      ]
   };
}

function createHemlockWraithFighter() {
   return {
      name: "Hemlock Wraithfighter",
      aircraftClass: "FIGHTER",
      alliance: "ELDAR_CRAFTWORLDS",
      cost: 26,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 2,
      transport: 0,
      fuel: 0,
      throttle: 3,
      manoueuvres: 8,
      handling: 2,
      minSpeed: 2,
      maxSpeed: 8,
      currentSpeed: 0,
      maxAltitude: 5,
      src: "file://./hemlockwraithfighter.png",
      weapons: [
         createHeavyDScythe()
      ],
      specials: [
         {
            keyword: "JINK",
            value: 0
         }
      ]
   };
}

function createNightshadeInterceptor() {
   return {
      name: "Nightshade Interceptor",
      aircraftClass: "FIGHTER",
      alliance: "ELDAR_CRAFTWORLDS",
      cost: 25,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 2,
      transport: 0,
      fuel: 0,
      throttle: 4,
      manoueuvres: 8,
      handling: 2,
      minSpeed: 3,
      maxSpeed: 9,
      currentSpeed: 0,
      maxAltitude: 5,
      src: "file://./nightshadeinterceptor.png",
      weapons: [
         createTwinBrightLances()
      ],
      specials: [
         {
            keyword: "JINK",
            value: 0
         }
      ]
   };
}

function createGrotBommer() {
   return {
      name: "Grot Bommer",
      aircraftClass: "BOMBER",
      alliance: "ORC_HORDES",
      cost: 28,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 6,
      transport: 0,
      fuel: 0,
      throttle: 1,
      manoueuvres: 3,
      handling: 5,
      minSpeed: 2,
      maxSpeed: 4,
      currentSpeed: 0,
      maxAltitude: 4,
      src: "file://./grotbommer.png",
      weapons: [
         createQuadBigShootas(),
         createPortShootaTurret(),
         createStarboardShootaTurret(),
         createGrotBomms()
      ],
      specials: []
   };
}

function createFightaBommer() {
   return {
      name: "",
      aircraftClass: "FIGHTER",
      alliance: "ORC_HORDES",
      cost: 20,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 3,
      transport: 0,
      fuel: 0,
      throttle: 1,
      manoueuvres: 4,
      handling: 4,
      minSpeed: 3,
      maxSpeed: 7,
      currentSpeed: 0,
      maxAltitude: 4,
      src: "file://./fightabommer.png",
      weapons: [
         createQuadBigShootas(),
         createBigShootaTurret(),
         createShootaTailGun()
      ],
      specials: []
   };
}

function createDakkaJet() {
   return {
      name: "Dakka Jet",
      aircraftClass: "FIGHTER",
      alliance: "ORC_HORDES",
      cost: 16,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 2,
      transport: 0,
      fuel: 0,
      throttle: 2,
      manoueuvres: 5,
      handling: 4,
      minSpeed: 4,
      maxSpeed: 8,
      currentSpeed: 0,
      maxAltitude: 4,
      src: "file://./dakkajet.png",
      weapons: [
         createQuadBigShootas()
      ],
      specials: []
   };
}

function createMarauder() {
   return {
      name: "Marauder",
      aircraftClass: "BOMBER",
      alliance: "ASTRA_MILITARUM",
      cost: 23,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 5,
      transport: 0,
      fuel: 0,
      throttle: 1,
      manoueuvres: 3,
      handling: 4,
      minSpeed: 2,
      maxSpeed: 5,
      currentSpeed: 0,
      maxAltitude: 5,
      src: "file://./marauder.png",
      weapons: [
         createLascannon(),
         createDorsalBolterTurret(),
         createRearBolterTurret(),
         createBombBay()
      ],
      specials: []
   };
}

function createThunderboltFury() {
   return {
      name: "Thunderbolt Fury",
      aircraftClass: "FIGHTER",
      alliance: "ASTRA_MILITARUM",
      cost: 23,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 3,
      transport: 0,
      fuel: 0,
      throttle: 2,
      manoueuvres: 6,
      handling: 3,
      minSpeed: 2,
      maxSpeed: 6,
      currentSpeed: 0,
      maxAltitude: 5,
      src: "file://./thunderboltfury.png",
      weapons: [
         createAvengerBoltCannon(),
         createTwinLascannon()
      ],
      specials: []
   };
}

function createAvenger() {
   return {
      name: "Avenger",
      aircraftClass: "FIGHTER",
      alliance: "ASTRA_MILITARUM",
      cost: 20,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 2,
      transport: 0,
      fuel: 0,
      throttle: 1,
      manoueuvres: 6,
      handling: 2,
      minSpeed: 1,
      maxSpeed: 6,
      currentSpeed: 0,
      maxAltitude: 5,
      src: "file://./avenger.png",
      weapons: [
         createAvengerBoltCannon(),
         createHeavyStubber()
      ],
      specials: []
   };
}

function createVendettaAssaultCraft() {
   return {
      name: "Vendetta Assault Craft",
      aircraftClass: "FIGHTER",
      alliance: "ASTRA_MILITARUM",
      cost: 17,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 3,
      transport: 3,
      fuel: 0,
      throttle: 1,
      manoueuvres: 4,
      handling: 4,
      minSpeed: 0,
      maxSpeed: 5,
      currentSpeed: 0,
      maxAltitude: 4,
      src: "file://./vendettaassaultcraft.png",
      weapons: [
         createTwinLascannon()
      ],
      specials: []
   };
}


function createHellion() {
   return {
      name: "Hellion",
      aircraftClass: "FIGHTER",
      alliance: "ASTRA_MILITARUM",
      cost: 26,
      x: 0,
      y: 0,
      currentAltitude: 0,
      structure: 2,
      transport: 0,
      fuel: 0,
      throttle: 3,
      manoueuvres: 7,
      handling: 2,
      minSpeed: 2,
      maxSpeed: 8,
      currentSpeed: 0,
      maxAltitude: 5,
      src: "file://./hellion.png",
      weapons: [
         createTwinMultiLasers()
      ],
      specials: []
   };
}


console.log("// -- ----------------------------------------------------------------------------- --");
console.log("// -- 1.Beispiel");
console.log("// -- ----------------------------------------------------------------------------- --");
// Erzeugen Sie 2 aircraft Objekte (Astra Militarum Flugzeug, Eldar Craftworld Flugzeug). Verändern
// Sie die Koordinaten der beiden Flugzeuge auf sinnvolle Werte.

// Hinweis: Verwenden Sie die gegebenen Create Funktionen.



// Schreiben Sie eine Methode die berechnet wie weit die Flugzeuge von einander entfernt sind.
// Runden Sie das Ergebnis.

// Hinweis: Satz des Pythagoras!

// Hinweis:   Math.sqrt   ->  Wurzel
//            Math.pow    ->  Potenzieren  z.B.: Math.pow(3,2)  3 hoch 2
//            Math.round  ->  Runden

let avenger = createAvenger();
avenger.x = 1;
avenger.y = 5;

let hemlock = createHemlockWraithFighter();
hemlock.x = 10;
hemlock.y = 10;

function calculateDistance(a1, a2) {
   let distance = 0;
   distance = Math.round(Math.sqrt(Math.pow(a1.x - a2.x, 2) + Math.pow(a1.y - a2.y, 2)));

   return distance
}

console.log(calculateDistance(avenger, hemlock))


console.log("// -- ----------------------------------------------------------------------------- --");
console.log("// -- 2.Beispiel");
console.log("// -- ----------------------------------------------------------------------------- --");
// Schreiben Sie eine Funktion die berechnet wieviele Treffer eine Waffe bei einem Angriff
// verursacht.

// @distance: Der distance Parameter gibt an wie weit das gegnerische Flugzeug entfernt ist.
// Die Entfernung bestimmt wie viele Treffer eine Waffe bei einem Angriff erzielt


// a) Berechnen Sie zuerst den Angriffsindex. Der Angriffsindex wird aus der Entfernung bestimmt.

//                    Distance  Index
//                    1 - 4       0
//                    5 - 7       1
//                    8 - 10      2

// Der Index wird verwendet als ArrayIndex für das FirePower. Der Wert im firePower Array gibt
// an mit wieviel Würfeln angegriffen wird.

// z.B.:

/*
   var weapon = {
       name : "Twin Linked Pulsar",
       fireArc : ["FRONT"],
       firePower : [2,4,4],
       damage : 2,
       ammonition : 160,
       specials : [
         {
            keyword : "EXTRA_DAMAGE",
            value : 5
         }
       ]
   };
*/

// distance = 6

// => var diceCount = weapon.firePower[1];


// b) Werfen Sie mit der Zahl von gegebenen Würfel. Jeder Wurf der größer gleich
// weapon.damage ist, ist ein Treffer.

//

// Methodensignatur: weaponAttack(weapon, distance)

let distance = 6;

function rollDice() {
   return Math.floor(Math.random() * 6) + 1;
}

function weaponAttack(weapon, distance) {

   let index = 0;

   if (distance >= 0 && distance <= 4) {
      index = 0
   }

   if (distance >= 5 && distance <= 7) {
      index = 1
   }

   if (distance >= 8 && distance <= 10) {
      index = 2
   }

   let diceCount = weapon.firePower[index];
   let hitCount = 0;

   for (let i = 0; i < diceCount; i++) {
      if (rollDice() >= weapon.damage) {
         hitCount++
      }
   }

   return hitCount
}

let hits = weaponAttack(createLascannon(), 7)

console.log(hits)

console.log("\n");


console.log("// -- ----------------------------------------------------------------------------- --");
console.log("// -- 3.Beispiel");
console.log("// -- ----------------------------------------------------------------------------- --");
// Schreiben Sie eine Methode die 2 Flugzeuge gegeneinader kämpfen läßt.


function attack(attackingAircraft, defendingAircraft) {
   // Berechnen Sie den Abstand zwischen beiden Flugzeugen
   let distance = calculateDistance(attackingAircraft, defendingAircraft);

   // Ein Flugzeug greift immer mit allen Waffen an
   let hitcount = 0;

   for (let i = 0; i < attackingAircraft.weapons.length; i++) {
      let weapon = attackingAircraft.weapons[i];
      hitcount += weaponAttack(weapon, distance);
   }

   // Berechenen Sie die Summe der Treffer aller Waffen

   // Ziehen Sie die Anzahl der Treffer von der Structure des verteidigenden Flugzeuges
   // ab. Beachten Sie das der structure Wert nicht unter 0 fallen darf.

   defendingAircraft.structure -= hitcount;

   if (defendingAircraft.structure < 0) {
      defendingAircraft.structure = 0;
      return defendingAircraft.name + " wurde zerstört!";
   }

   return defendingAircraft.name + " wurde nicht zerstört!";

}

attacker = createThunderboltFury();
attacker.x = 0;
attacker.y = 0;

defender = createDakkaJet();
defender.x = 6;
defender.y = 0;

console.log(attack(attacker, defender));