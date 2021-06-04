/* Name: Bot Initialization for Discord Bot Project   
 * Author(s): Amir Rezaei and Jason Agas  
 * Purpose: Initialization/Setup Code for a Discord Bot 
 */

/*START-UP CODE STARTS HERE */

const Discord = require('discord.js'); 
const client = new Discord.Client(); 
const {prefix, token} = require('./config.json'); 
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.commands = new Discord.Collection();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message,args);
    }
    catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

/* START-UP CODE ENDS HERE */