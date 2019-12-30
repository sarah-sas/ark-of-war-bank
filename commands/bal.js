const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {


    let user = message.mentions.members.first()

    let food = db.fetch(`food_${message.guild.id}_${user.id}`)
    if (food === null) food = 0; // fetch mentioned users balance

    let parts = db.fetch(`parts_${message.guild.id}_${user.id}`)
    if (parts === null) parts = 0; // fetch mentioned users balance

    let electricity = db.fetch(`electricity_${message.guild.id}_${user.id}`)
    if (electricity === null) electricity = 0; // fetch mentioned users balance

    let gas = db.fetch(`gas_${message.guild.id}_${user.id}`)
    if (gas === null) gas = 0; // fetch mentioned users balance

    let cash = db.fetch(`cash_${message.guild.id}_${user.id}`)
    if (cash === null) cash = 0; // fetch mentioned users balance

    let embed = new Discord.RichEmbed()
    .setDescription(`${user} has**\n\nFood: ${food}k \nParts: ${parts}k \nElectricity: ${electricity}k \nGas: ${gas}k \nCash: ${cash}k \n\nhere you go${message.author}`)
    .setColor("GREEN")
    .setTimestamp()
    message.channel.send(embed)
}

module.exports.help = {
    name: "bal", //the command name(the thing to use the command)
    aliases: ["bal"] //the shorter version to use the command example: "prefix" bal
}