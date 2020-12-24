const Discord = require("discord.js");
const Client = new Discord.Client();
const bdd =  require("./bdd.json");
var fs = require("fs");

Client.once("ready", () => {
    console.log("Ready!");
});

let Reponse;

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if (message.content == "calcul"){
        message.channel.send(Calcul());
    }

    if (message.content == "Calcul"){
        message.channel.send(Calcul());
    }

    if(message.content == Reponse){
        message.channel.send("Félicitation, tu as trouvé la bonne réponse!")
        if(!bdd["coins-utilisateurs"][message.member.id]){
            bdd["coins-utilisateurs"][message.member.id] = 0
        }
        bdd["coins-utilisateurs"][message.member.id] = bdd["coins-utilisateurs"][message.member.id] + 1;
        Savebdd();
    }
    
    if(message.content == "score"){
        message.channel.send("Tu as " + bdd["coins-utilisateurs"][message.member.id] + " points!");
    }
});

function Calcul() {
    let Nombre1 = Math.floor(Math.random() * Math.floor(11));
    let Nombre2 = Math.floor(Math.random() * Math.floor(11));
    let Nombre3 = Math.floor(Math.random() * Math.floor(11));
    let Nombre4 = Math.floor(Math.random() * Math.floor(11));
    let Nombre5 = Math.floor(Math.random() * Math.floor(11));
    let Nombre6 = Math.floor(Math.random() * Math.floor(11));
    let Nombre7 = Math.floor(Math.random() * Math.floor(11));
    let Operateur1 = Math.floor(Math.random() * Math.floor(2));
    let Operateur2 = Math.floor(Math.random() * Math.floor(2));
    let Operateur3 = Math.floor(Math.random() * Math.floor(2));
    let Operateur4 = Math.floor(Math.random() * Math.floor(2));
    let Operateur5 = Math.floor(Math.random() * Math.floor(2));
    let Operateur6 = Math.floor(Math.random() * Math.floor(2));
    if(Operateur1 == 0) Operateur1 = " + "
    if(Operateur1 == 1) Operateur1 = " - "
    if(Operateur2 == 0) Operateur2 = " + "
    if(Operateur2 == 1) Operateur2 = " - "
    if(Operateur3 == 0) Operateur3 = " + "
    if(Operateur3 == 1) Operateur3 = " - "
    if(Operateur4 == 0) Operateur4 = " + "
    if(Operateur4 == 1) Operateur4 = " - "
    if(Operateur5 == 0) Operateur5 = " + "
    if(Operateur5 == 1) Operateur5 = " - "
    if(Operateur6 == 0) Operateur6 = " + "
    if(Operateur6 == 1) Operateur6 = " - "
    if(Operateur1 == " + ") var Resultat = Nombre1 + Nombre2
    if(Operateur1 == " - ") var Resultat = Nombre1 - Nombre2
    if(Operateur2 == " + ") var Resultat = Resultat + Nombre3
    if(Operateur2 == " - ") var Resultat = Resultat - Nombre3
    if(Operateur3 == " + ") var Resultat = Resultat + Nombre4
    if(Operateur3 == " - ") var Resultat = Resultat - Nombre4
    if(Operateur4 == " + ") var Resultat = Resultat + Nombre5
    if(Operateur4 == " - ") var Resultat = Resultat - Nombre5
    if(Operateur5 == " + ") var Resultat = Resultat + Nombre6
    if(Operateur5 == " - ") var Resultat = Resultat - Nombre6
    if(Operateur6 == " + ") var Resultat = Resultat + Nombre7
    if(Operateur6 == " - ") var Resultat = Resultat - Nombre7
    Reponse = Resultat
    return Nombre1 + Operateur1 + Nombre2 + Operateur2 + Nombre3 + Operateur3 + Nombre4 + Operateur4 + Nombre5 + Operateur5 + Nombre6 + Operateur6 + Nombre7;
}

function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue.");
    });
}

Client.login(process.env.TOKEN);
