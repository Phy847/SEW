/*Nr.1*/
let player = "Hiroshi"
let lvl = 5
let online = false
let xp = 3500

let playerStats = {
    name : player,
    level : lvl,
    active : online,
    experience : xp,
    abilities : ["sword","bow","stealth"],
    points : [120, 300, 240, 500],
    stats: {
        missionsdone : 4,
        bossdead : true,
        rank : "Samurai"
    }
}

console.log("Spieler:", player, typeof player)
console.log("Level:", lvl)
console.log("Aktueller Rang:", stats.rank)

/*Nr.3*/
let balance = 1000
let i = 0
let zinsen = 200
while (balance<1500) {
    balance = balance + zinsen
    i = i + 1
}
console.log(i)

/*Nr.4*/
let x = 1
let y = 2

if (x<y) {
    console.log("x<y")
} else {
    console.log("x>y")
}