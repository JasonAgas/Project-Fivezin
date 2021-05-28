/* Name: Commands for Discord Bot Project   
 * Author(s): Amir Rezaei and Jason Agas  
 * Purpose: Commands go here.  
 */

// Note: general format is message.guild.property --> look up documentation for specifics 

/* VARIABLES */ 
const args = message.content.slice(prefix.length).trim().split(/ +/);
// "slices off the prefix entirely, removes the leftover whitespaces, and then splits it into an array by spaces."
/* Example: !args-info here are my arguments
 * Returns: Command name: args-info 
            Arguments: here,are,ny,arguments (Basically just an array).
 */

const command = args.shift().toLowerCase();
// Note: shift() takes the first element in the array, removes it, and returns it.
// This makes it so only the command word is read, and the rest of the argument is put into an array. 

// For a command that takes an arguement: 
if (!args.length) {
    return message.channel.send("You didn't provide any arguments, silly goose!")
}

// To be included at the very start if the command line: 
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    /* Basically, the message is ignored if the message doesn't start with the prefix variable ('!')
    or if the author of the message is the bot itself */
});


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
        message.channel.send(`This server is baseuld in: ${message.guild.region}`)
    }
});

/* Prune Command */ 
// Purpose: Bot will prune 'X' number messages, where 'X' is the number of messages that should be deleted.
client.on('message', message => {
    if (command === 'prune') {
        const amount = parseInt(args[0]); // Disregard what the function does, amount is a numerical value

        if (isNaN(amount)) { // checks if amount is actually a numerical value; 
            return message.reply(`Bro, that doesn/t seem to be be a valid number!`);
        }
        else if (amount < 2 || amount > 50) { // just so we don't break the bot / delete all the messages. 
            return message.reply(`Bro, that doesn/'t seem to be a valid number!`);
        }
        else {
            message.channel.bulkDelete(amount,true).catch(err =>  { // the command bulkDelete() deletes message
                console.error(err); // error catcher 
                message.channel.send('There was an error when trying to prune messages!');
            });
        }
    }
});




