// -- ------------------------------------------------------------------------------- --
// -- 1.Beispiel: Kontrollstrukturen - for Schleife
// -- ------------------------------------------------------------------------------- --
// Entfernen Sie alle ungeraden Zahlen aus dem folgenden Array.
// Hinweis: Erstellen Sie eine neues Array und kopieren Sie nur
// die geraden Zahlen.
console.log("-- -------------------------------------------------------- --")
console.log("exercise control 3: part 1")
console.log("-- -------------------------------------------------------- --")
let values = [56, 8, 7, 23, 21, 8, 7, 4, 12];
let alteredValues = [];

for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
        alteredValues.push(values[i])
    }
}

console.log(...alteredValues);
console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 2.Beispiel: Kontrollstrukturen - for Schleife
// -- ------------------------------------------------------------------------------- --
// Wieviele Tore hat der FC Fulham geschossen? Geben Sie die Anzahl 
// der Tore aus.
console.log("-- -------------------------------------------------------- --")
console.log("exercise control 3: part 2")
console.log("-- -------------------------------------------------------- --")

let team = {
    name: "FC Fulham",
    events: [
        {   eventType: "YELLOW_CARD", player: "M.Hector"
        }, {
            eventType: "YELLOW_CARD", player: "T.Cairney"
        }, {
            eventType: "GOAL",        player: "T.Cairney"
        }, {
            eventType: "GOAL",        player: "T.Cairney"
        }, {
            eventType: "RED_CARD",    player: "M.Hector"
        }
    ]
};
let goalCount = 0;

for (let i = 0; i < team.events.length; i++) {
    if (team.events[i].eventType === "GOAL") {
        goalCount += 1;
    }
}

console.log("goals:", goalCount);
console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 3.Beispiel: Kontrollstrukturen - for Schleife
// -- ------------------------------------------------------------------------------- --
// Generieren Sie die folgende Ausgabe aus den gegebenen Daten.

// Hinweis: Verwenden Sie eine for Schleife in einer for Schleife
// Hinweis: Verwenden Sie "\t" zum Einrücken der Ausgabe

// Fire Raptor Gunship
//      Avenger Bolt Cannon
//      Heavy Bolter Turret
//      Heavy Bolter Turret
//
// Storm Eagle Assault Craft
//      Hellstrike Missle Launcher
//      Quad Lascannon
//
// Xiphon Interceptor
//      Hellstrike Missle Launcher
//      Quad Lascannon
//      Twin Heavy Bolters
//      Dual Frag Missle Pods

console.log("-- -------------------------------------------------------- --")
console.log("exercise control 3: part 3")
console.log("-- -------------------------------------------------------- --")

let aircrafts = [
    {
        name: "Fire Raptor Gunship",
        aircraftClass: "FIGHTER",
        alliance: "ADEPTUS_ASTARTES",
        weapons: [
            {
                name: "Avenger Bolt Cannon",
                fireArc: ["FRONT"],
                firePower: [3, 7, 0],
                damage: 4,
                ammonition: 160
            }, {
                name: "Heavy Bolter Turret",
                fireArc: ["LEFT_SIDE"],
                firePower: [6, 2, 0],
                damage: 5,
                ammonition: 160
            }, {
                name: "Heavy Bolter Turret",
                fireArc: ["RIGHT_SIDE"],
                firePower: [6, 2, 0],
                damage: 5,
                ammonition: 100
            }
        ]
    }, {
        name: "Storm Eagle Assault Craft",
        aircraftClass: "FIGHTER",
        alliance: "ADEPTUS_ASTARTES",
        weapons: [{
            name: "Hellstrike Missle Launcher",
            fireArc: ["FRONT"],
            firePower: [2, 2, 2],
            damage: 3,
            ammonition: 3,
        }, {
            name: "Quad Lascannon",
            fireArc: ["FRONT"],
            firePower: [0, 4, 2],
            damage: 2,
            ammonition: 160,
        }
        ]
    }, {
        name: "Xiphon Interceptor",
        aircraftClass: "FIGHTER",
        alliance: "ADEPTUS_ASTARTES",
        weapons: [
            {
                name: "Hellstrike Missle Launcher",
                fireArc: ["FRONT"],
                firePower: [2, 2, 2],
                damage: 3,
                ammonition: 3,
            }, {
                name: "Quad Lascannon",
                fireArc: ["FRONT"],
                firePower: [0, 4, 2],
                damage: 2,
                ammonition: 160,
            }, {
                name: "Twin Heavy Bolters",
                fireArc: ["FRONT"],
                firePower: [3, 1, 0],
                damage: 5,
                ammonition: 160,
            }, {
                name: "Dual Frag Missle Pods",
                fireArc: ["FRONT"],
                firePower: [3, 3, 1],
                damage: 5,
                ammonition: 160,
            }
        ]
    }
];

for (let i = 0; i < aircrafts.length; i++) {
    console.log(aircrafts[i].name);
    for (let j = 0; j < aircrafts[i].weapons.length; j++) {
        console.log("\t" + aircrafts[i].weapons[j].name);
    }
}

console.log("\n");

// -- ------------------------------------------------------------------------------- --
// -- 4.Beispiel: Kontrollstrukturen - for Schleife
// -- ------------------------------------------------------------------------------- --
// Wieviele gelbe und rote Karten wurden beim folgenden Match vergeben?
// Geben Sie die Anzahl aus.

console.log("-- -------------------------------------------------------- --")
console.log("exercise control 3: part 4")
console.log("-- -------------------------------------------------------- --")

let match = {
    status: "FINISHED",
    competition: "Premier League",
    matchStart: "2020-09-12 15:30:00",
    teams: [{
        teamType: "HOME_TEAM",
        name: "FC Fulham",
        ballPossession: 45,
        passes: 523,
        fouls: 12,
        events: [
            {
                eventType: "YELLOW_CARD",
                player: "M.Hector"
            },
            {
                eventType: "YELLOW_CARD",
                player: "T.Cairney"
            }
        ]
    }, {
        teamType: "AWAY_TEAM",
        name: "Arsenal London",
        ballPossession: 55,
        passes: 626,
        fouls: 12,
        events: [
            {
                eventType: "RED_CARD",
                player: "P.Aubameyang"
            }, {
                eventType: "YELLOW_CARD",
                player: "P.Aubameyang"
            }, {
                eventType: "GOAL",
                player: "A.Lacazette"
            }, {
                eventType: "GOAL",
                player: "Gabriel"
            }, {
                eventType: "YELLOW_CARD",
                player: "H.BEllerin"
            }
        ]
    }]
}

let cards = 0;

for (let i = 0; i < match.teams.length; i++) {
    for (let j = 0; j < match.teams[i].events.length; j++) {
        if (match.teams[i].events[j].eventType === "YELLOW_CARD" ||
            match.teams[i].events[j].eventType === "RED_CARD") {
            cards += 1;
        }
    }
}

console.log("given cards:", cards);
console.log("\n");