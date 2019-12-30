const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async(bot, message, args, utils) => {

    let user = message.mentions.members.first() || message.author;
    //Get balance from database, and if the value is 0 (null) then send 0
    //food
    let food = db.fetch(`food_${message.guild.id}_${user.id}`)
    if (food === null) food = 0;
    //parts
    let parts = await db.fetch(`parts_${message.guild.id}_${user.id}`)
    if (parts === null) parts = 0;
    //Electricity
    let electricity = await db.fetch(`electricity_${message.guild.id}_${user.id}`)
    if (electricity === null) electricity = 0;
    //Gas
    let gas = await db.fetch(`gas_${message.guild.id}_${user.id}`)
    if (gas === null) gas = 0;
    //Cash
    let cash = await db.fetch(`cash_${message.guild.id}_${user.id}`)
    if (cash === null) cash = 0;

    //The part that actually sends the message with the balance
    //gets the values from above witch is either 0 or the ballance that is already in the database
    let foodEmbed = new Discord.RichEmbed()
        .setColor("#s1fa818") //sets the color of the bar on the left side
        .setDescription(`**${user}'s Balance**\n\nFood: ${food}k \nparts: ${parts}k \nparts: ${electricity}k \nparts: ${gas}k \nparts: ${cash}k`); //the actual message that displays the values
    message.channel.send(foodEmbed) //send the message
};

module.exports.help = {
    name: "balance-b", //the command name(the thing to use the command)
    aliases: ["bal-b"] //the shorter version to use the command example: "prefix" bal
}