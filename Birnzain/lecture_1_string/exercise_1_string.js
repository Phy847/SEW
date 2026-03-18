// -- ---------------------------------------------------------------------------- --
// --  1.Beispiel - Stringmethoden: reverse
// -- ---------------------------------------------------------------------------- --
// Schreiben Sie ein Programm das für eine Zeichenkette den gestürzten Ausdruck
// berechnet.
//
// Hinsweis: Der gestürzte Ausdruck ist dieselbe Zeichenkette von rechts nach
//           links gelesen

// var data = "Hallo"; => ollah

console.log("-- ------------------------------------------------- --")
console.log("-- exercise 1: string methods")
console.log("-- ------------------------------------------------- --")

let word = "Hello";
let token = "";

for(let i = word.length -1; i >= 0; i--){
    token += word.charAt(i);
}

console.log(token);
console.log("\n");

// -- ---------------------------------------------------------------------------- --
// --  2.Beispiel - Stringmethoden: reverse
// -- ---------------------------------------------------------------------------- --
// Schreiben Sie ein Programm dass prüft ob es sich bei einem Wort um ein Palindrom
// handelt.
//
// Hinsweis: Ein Palindrom ist eine Zeichenkette die von links und rechts gelesen
// denselbe Wert darstellt.

// z.B.: otto, anna, lagerregal

console.log("-- ------------------------------------------------- --")
console.log("-- exercise 2: string methods")
console.log("-- ------------------------------------------------- --")

let palindrom = "anna";
let reversed = "";

for(let i = palindrom.length -1; i >= 0; i--){
    reversed += palindrom.charAt(i);
}

if(reversed === palindrom){
    console.log(palindrom, " is a palindrom");
} else {
    console.log(palindrom, " is not a palindrom");
}

console.log("\n");

// -- ---------------------------------------------------------------------------- --
// --  3.Beispiel - Stringmethoden: reverse
// -- ---------------------------------------------------------------------------- --
// Testen Sie ob die folgende email den Regeln des Unternehmens
// entspricht.

// p.panhofer@htlkrems.ac.at
// ---------- Kontext
//   Domain   --------------

// 1.) Testen Sie ob der Kontext einen Punkt enthält. Ist der substring
// vor dem Punkt nur ein einzelner Buchstabe?

// 2.) Die Domain muss den Substring htlkrems beinhalten
// 3.) Die Domain definiert die subdomains ac und at

// 4.) Insgesamt darf die email nicht länger sein als 50 Zeichen.
// 5.) Ersetzten Sie .ac.at durch .at


console.log("-- ------------------------------------------------- --")
console.log("-- exercise 3: string methods")
console.log("-- ------------------------------------------------- --")

let emailData = "p.panhofer@htlkrems.ac.at";

let context = emailData.substring(emailData.indexOf("@") +1);
let domain = context.substring(0, context.indexOf("."));
let subdomains = context.substring(context.indexOf(".") +1).split(".");

if(context.indexOf(".") !== -1){
    let contextPrefix = context.substring(0, context.indexOf("."));
    if(contextPrefix.length === 1){
        console.log("Context prefix is valid");
    } else {
        console.log("Context prefix is invalid");
    }
} else {
    console.log("Context is invalid");
}

if(domain.includes("htlkrems")){
    console.log("Domain is valid");
} else {
    console.log("Domain is invalid");
}

if(subdomains.includes("ac") && subdomains.includes("at")){
    console.log("Subdomains are valid");
} else {
    console.log("Subdomains are invalid");
}

if(emailData.length <= 50){
    console.log("Email length is valid");
} else {
    console.log("Email length is invalid");
}

let changedEmail = emailData.replace(".ac.at", ".at");
console.log("Changed email:", changedEmail);

console.log("\n");

// -- ---------------------------------------------------------------------------- --
// --  4.Beispiel - Stringmethoden
// -- ---------------------------------------------------------------------------- --
// Schreiben Sie ein Programm das den Port einer url austauscht.
//
// Hinweis: Ein URL hat stets den folgenden Aufbau:
//          <protocol><ip>:<port><context>
//
//          http://www.htlkrems.at:8080/intern/thesis
//          ftp://192.32.21.1:3604/data/scripts
//
//
// a) Ändern Sie den Port der ip Addrsse zu 80
//
// Hinweis: Sie können nicht davon ausgehen dass der Port einen
// bestimmten Wert hat.

console.log("-- ------------------------------------------------- --")
console.log("-- exercise 4: string methods")
console.log("-- ------------------------------------------------- --")


let ipAddress = "http://www.htlkrems.at:8080/intern/thesis";

let protocolEndIndex = ipAddress.indexOf("//") +2;
let contextStartIndex = ipAddress.indexOf("/", protocolEndIndex);
let portStartIndex = ipAddress.indexOf(":", protocolEndIndex);

let protocol = ipAddress.substring(0, portStartIndex);
let context0 = ipAddress.substring(contextStartIndex);
let newPort = ":80";

let newIpAddress = protocol + newPort + context0;

console.log("Old IP Address:", ipAddress);
console.log("New IP Address:", newIpAddress);


// b) Wieviele subdomains hat die ip Addresse.
let fullDomain = ipAddress.substring(protocolEndIndex, ipAddress.indexOf(":", protocolEndIndex));
let subdomains0 = fullDomain.split(".");

console.log("subdomains:", subdomains0.length -2);


console.log("\n");