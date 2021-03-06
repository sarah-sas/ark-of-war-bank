const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async(bot, message, args) => {
    let user = message.author;

    let member = db.fetch(`cash_${message.guild.id}_${user.id}`)

    if (args[0] == '') {} else {

        let embed2 = new Discord.RichEmbed()
            .setColor("#fbff00")
            .setDescription(`${user} Specify an amount to deposit`);

        if (!args[0]) {
            return message.channel.send(embed2)
        }
        let embed3 = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setDescription(`${user} You can't deposit negative cash`);

        if (message.content.includes('-')) {
            return message.channel.send(embed3)
        }
        let embed5 = new Discord.RichEmbed()
            .setColor("#04ff00")
            .setDescription(`${user} You have deposited ${args[0]}k cash to your bank`);

        message.channel.send(embed5)

        db.add(`cash_${message.guild.id}_${user.id}`, args[0])
    }
}


module.exports.help = {
    name: "depositc",
    aliases: ["dc"]
}