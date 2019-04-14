const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args, db) => {
    let helpCommand = new Discord.RichEmbed()
    .setDescription("Help")
    .setColor("#50C7C7")
    .addField("$alt", "Get a random alt from the database!")
    .addField("$insertalt <username:password>", "Add a alt to the alt database!")
    .addField("$report <username:password>", "Report a alt!")
    .setFooter("Made by CorcyFTW » Cubes.host «#7284");

    message.channel.send(helpCommand);
}

module.exports.help = {
    name: "help"
}