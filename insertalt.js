const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args, db) => {

    if (args[0] == "" || args[0] == null) {
        let errorInsert = new Discord.RichEmbed()
        .setDescription("Error")
        .setColor("#50C7C7")
        .addField("Please fill in the format", "$insertalt username:password")
        .setFooter("Made by CorcyFTW » Cubes.host «#7284");

        message.channel.send(errorInsert);
        return;
    }

    let amount = db.get('alts').size().value()

    db.get('alts').push({ id: amount++, title: args[0]}).write()

    let userpass = args[0].split(":");

    let altinsertCommand = new Discord.RichEmbed()
    .setDescription("Alt added")
    .setColor("#50C7C7")
    .addField("Username", userpass[0])
    .addField("Password", userpass[1])
    .setFooter("Made by CorcyFTW » Cubes.host «#7284");

    message.channel.send(altinsertCommand);
}

module.exports.help = {
    name: "insertalt"
}