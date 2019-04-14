const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args, db) => {

    if (args[0] == "" || args[0] == null) {
        let errorInsert = new Discord.RichEmbed()
        .setDescription("Error")
        .setColor("#50C7C7")
        .addField("Please fill in the format", "$report <username:password>")
        .setFooter("Made by CorcyFTW » Cubes.host «#7284");

        message.channel.send(errorInsert);
        return;
    }

    let amount = db.get('alts').find({ title: args[0] }).size().value()

    if(amount < 1) {
        return message.channel.send("This username or password is invalid!");
    }

    let getReportCommand = new Discord.RichEmbed()
    .setDescription("Alt Report")
    .setColor("#50C7C7")
    .addField("We got your report!", `Username:Password » ${args[0]}`)
    .setFooter("Made by CorcyFTW » Cubes.host «#7284");

    message.channel.send(getReportCommand);

    let members = message.channel.members;
    let corne = members.find('id', '274962148948443136');
    let lars = members.find('íd', '524951056824795155');

    let dmEmbed = new Discord.RichEmbed()
    .setDescription("Alt Report")
    .setColor("#50C7C7")
    .addField(`Username:Password » ${args[0]}`)
    .setFooter("Made by CorcyFTW » Cubes.host «#7284");

    corne.send(dmEmbed);
    lars.send(dmEmbed);
}

module.exports.help = {
    name: "report"
}