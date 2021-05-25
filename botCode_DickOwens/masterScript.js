/* Name: Main Code for Discord Bot Project   
 * Author(s): Amir Rezaei and Jason Agas  
 * Purpose: Holds entire script for the bot. 
 */

/* INITIALIZATION */

const Discord = require('discord.js'); 
const client = new Discord.Client(); 
const {prefix, token} = require('./config.json'); 

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

/* COMMANDS */

/* Message Commands */
client.on('message', message => {
    if (message.content.startWith('dick')) {
		message.channel.send(`You call?`);
	}
    else if (message.content === `${prefix}server`) {
        message.channel.send(`The name of this server is: ${message.guild.name}\nNumber of Members: ${message.guild.memberCount}`)
    }
    else if (message.content === `${prefix}serverDate`) {
        message.channel.send(`This server was created on: ${message.guild.createdAt}`)
    }
    else if (message.content === `${prefix}region`) {
        message.channel.send(`This server is based in: ${message.guild.region}` )
    }
});