/* Name: Commands for Discord Bot Project   
 * Author(s): Amir Rezaei and Jason Agas  
 * Purpose: Commands go here.  
 */

// Note: general format is message.guild.property --> look up documentation for specifics 

/* Command directory */ 
// Purpose: Lists all the commands that the bot can perform at the moment. 
client.on('message', message => {
    if (message.content === (`${prefix}commands`)) {
        message.channel.send(`The current commands I can respond to are:\n
        !dick --> You'll see :) \n
        !clothes --> I will tell you how much I love clothes.
        !server --> I will tell you the server name and number of members. \n
        !serverDate --> I will tell you the date that the server was created. \n
        !region --> I will tell you the region that this server is based in.\n
        That is all. Stay tuned in for more commands! :)`)
     }
    });

/* Dick Command */
// Purpose: Bot will respond to dick.
client.on('message', message => { 
	if (message.content.startWith('dick')) {
		message.channel.send(`You call?`);
	}
});

/* Server Command */
// Purpose: Bot will disclose server name, and the number of members in the server.
client.on('message', message => {
    if (message.content === (`${prefix}server`)) {
        message.channel.send(`The name of this server is: ${message.guild.name}\nNumber of Members: ${message.guild.memberCount}`)
    }
});

/* Server Creation Date Command */ 
// Purpose: Bot will disclose the date that the server was created. 
client.on('message', message => {
    if (message.content === (`${prefix}serverDate`)) {
        message.channel.send(`This server was created on: ${message.guild.createdAt}`)
    }
});

/* Region Command  */
// Purpose: Bot will disclose the region that the server is based.
client.on('message', message => {
    if (message.content === (`${prefix}region`)) {
        message.channel.send(`This server is based in: ${message.guild.region}`)
    }
});