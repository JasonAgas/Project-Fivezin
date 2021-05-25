/* Name: Bot Initialization for Discord Bot Project   
 * Author(s): Amir Rezaei and Jason Agas  
 * Purpose: Initialization/Setup Code for a Discord Bot 
 */


/*START-UP CODE STARTS HERE */

const Discord = require('discord.js'); // requires the use of discord.js to start 
const client = new Discord.Client(); // launches the client - the bot 
const {prefix, token} = require('./config.json'); // important stuff 
client.login(token);

// once the bot is up, it will run the code below
// note: this is a one-time startup event
client.once('ready', () => {
	console.log('Ready!');
});

// logs the bot in with the Discord bot token --> token to be included in final compilation 
client.login(token);

/* START-UP CODE ENDS HERE */



