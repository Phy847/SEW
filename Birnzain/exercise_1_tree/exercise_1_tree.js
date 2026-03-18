console.log("    *");
console.log("   ***");
console.log("  *****");
console.log(" *******");
console.log("*********");
console.log("    #");


//--------------------------------
console.log("\n");
console.log("\n");
//--------------------------------


let lines = 10;
let stars = 1;
let maxstars = 1 + (lines - 1) * 2;
let trunkwidth = 1;
let trunkheight = 1;



for (let i = 0; i < lines; i++) {
    let spaces = (maxstars - stars) / 2;
    let spaceStr = " ";
    for (let s = 0; s < spaces; s++) {
        spaceStr += " ";
    }

    let starStr = "";
    for (let st = 0; st < stars; st++) {
        starStr += "*";
    }

    console.log(spaceStr + starStr + spaceStr);

    stars += 2;
}

for (let t = 0; t < trunkheight; t++) {
    let spaces = (maxstars - trunkwidth) / 2;
    let spaceStr = " ";

    for (let s = 0; s < spaces; s++) {
        spaceStr += " ";
    }

    console.log(spaceStr + "#");
}


//--------------------------------
console.log("\n");
console.log("\n");
//--------------------------------


let height = 10;
maxstars = height * 2 - 1;
let tree = [];
trunkwidth = 3;
trunkheight = 1;
let trunkspaces = (maxstars - trunkwidth) / 2;



for (let i = 1; i <= height; i++) {
    let starCount = 2 * i - 1;
    let spaceCount = (maxstars - starCount) / 2;

    let line = "";
    for (let s = 0; s < spaceCount; s++) {
        line += " ";
    }
    for (let st = 0; st < starCount; st++) {
        line += "*";
    }

    tree.push(line);
}

for (let i = 0; i < trunkheight; i++) {
    let t = "";
    for (let s = 0; s < trunkspaces; s++) {
        t += " ";
    }
    for (let h = 0; h < trunkwidth; h++) {
        t += "#";
    }
    tree.push(t);
}

for (const row of tree) {
    console.log(row);
}


//--------------------------------
console.log("\n");
console.log("\n");
//--------------------------------


console.log("     *");
console.log("    ***");
console.log("   *****");
console.log("  *******");
console.log(" *********");
console.log("    ***");
console.log("   *****");
console.log("  *******");
console.log(" *********");
console.log("     #");


//--------------------------------
console.log("\n");
console.log("\n");
//--------------------------------


let stages = 5;
let LinesPerStage = 5;
let starIncrease = 2;
let topStars = 1;
trunkwidth = 3;
trunkheight = 1;



maxstars = topStars
        + (stages - 1) * starIncrease
        + (LinesPerStage - 1) * 2;
baseStars = topStars;

for (let stage = 0; stage < stages; stage++) {

    let stars = baseStars;

    for (let line = 0; line < LinesPerStage; line++) {
        let spaces = (maxstars - stars) / 2;

        let spaceStr = "";
        for (let s = 0; s < spaces; s++) {
            spaceStr += " ";
        }

        let starStr = "";
        for (let st = 0; st < stars; st++) {
            starStr += "*";
        }

        console.log(spaceStr + starStr + spaceStr);

        stars += 2;
    }

    baseStars += starIncrease;
}

for (let i = 0; i < trunkheight; i++) {

    let spaces = (maxstars - trunkwidth) / 2;

    let spaceStr = "";
    for (let s = 0; s < spaces; s++) {
        spaceStr += " ";
    }

    let trunkStr = "";
    for (let t = 0; t < trunkwidth; t++) {
        trunkStr += "#";
    }

    console.log(spaceStr + trunkStr + spaceStr);
}