const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args, db) => {

    let randomID = Math.floor(Math.random() * (+db.get('alts').size().value() - +0)) + +0; 

    let userpass = db.get('alts').find({ id: randomID }).value()

    let split = userpass.title.split(":");

    let altCommand = new Discord.RichEmbed()
    .setDescription("Your Alt")
    .setColor("#50C7C7")
    .addField("Username", split[0])
    .addField("Password", split[1])
    .setFooter("Made by CorcyFTW » Cubes.host «#7284");

    message.channel.send(altCommand);
}

module.exports.help = {
    name: "alt"
}