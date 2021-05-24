
/* Name: Bot Initialization for Discord Bot Project   
 * Author(s): Amir Rezaei and Jason Agas  
 * Purpose: Initialization Code for a Discord Bot 
 */

const Discord = require('discord.js'); // requires the use of discord.js to start 
const client = new Discord.Client(); // launches the client - the bot 

// once the bot is up, it will run the code below
// note: this is a one-time startup event
client.once('ready'), () => { 
    console.log('Ready!');
}

// logs the bot in with the Discord bot token --> see .env for token 
client.login(DISCORDJS_BOT_TOKEN);

/* START-UP CODE ENDS HERE */