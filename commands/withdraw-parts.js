const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async(bot, message, args) => {
    let user = message.author;
    //get parts
    let member2 = db.fetch(`parts_${message.guild.id}_${user.id}`)
        //just don't want to use this part anymore   Start
    if (args[0] == 'oywcstowiteo') {
        let parts = await db.fetch(`parts_${message.guild.id}_${user.id}`)
        db.subtract(`parts_${message.guild.id}_${user.id}`, parts)
        let embed5 = new Discord.RichEmbed()
            .setColor("#04ff00")
            .setDescription(`${user} You have withdrawn all your parts from your bank`);
        message.channel.send(embed5)
    }
    //end
    else {

        let embed2 = new Discord.RichEmbed()
            .setColor("#fbff00")
            .setDescription(`${user}s Specify an amount to withdraw`);

        if (!args[0]) {
            return message.channel.send(embed2)
        }
        let embed3 = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setDescription(`${user} You can't withdraw negative parts`);

        if (message.content.includes('-')) {
            return message.channel.send(embed3)
        }
        let embed4 = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setDescription(`${user} You don't have that much parts in the bank`);

        if (member2 < args[0]) {
            return message.channel.send(embed4)
        }

        let embed5 = new Discord.RichEmbed()
            .setColor("#04ff00")
            .setDescription(`${user} You have withdrawn ${args[0]}k parts from your bank`);

        message.channel.send(embed5)
        db.subtract(`parts_${message.guild.id}_${user.id}`, args[0])
    }
}


module.exports.help = {
    name: "wiithdrawp",
    aliases: ["wp"]
}