/* Name: Bot Initialization for Discord Bot Project   
 * Author(s): Amir Rezaei and Jason Agas  
 * Purpose: Initialization Code for a Discord Bot 
 */


/*START-UP CODE STARTS HERE */

const Discord = require('discord.js'); // requires the use of discord.js to start 
const client = new Discord.Client(); // launches the client - the bot 


// once the bot is up, it will run the code below
// note: this is a one-time startup event
client.once('ready', () => {
	console.log('Ready!');
});


// message command - !dick 
// returns 'You call?'
client.on('message', message => { //simple message command - !dick 
	if (message.content === '!dick') {
		message.channel.send('You call?');
	}
});

// logs the bot in with the Discord bot token --> token to be included in final compilation 
client.login('ODQ2MjM0MzA4NjM2NDQyNjM0.YKsjHQ.ukRcO_wnarAE6lmrEhNiBQdqVfs');


/* START-UP CODE ENDS HERE */