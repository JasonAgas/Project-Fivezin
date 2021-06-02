/* Name: Main Code for Discord Bot Project   
 * Author(s): Amir Rezaei and Jason Agas  
 * Purpose: Holds entire script for the bot. 
 */

/* INITIALIZATION */

const Discord = require('discord.js'); 
const client = new Discord.Client(); 
const {prefix, token} = require('./config.json'); 
const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

/* COMMANDS */

/* Message Commands */
client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!message.content.startsWith(`${prefix}`) || message.author.bot) {
        return;
    }
    else if (message.content === (`${prefix}commands`)) {
        message.channel.send(`The current commands I can respond to are:\n
        !dick --> You'll see :) \n
        !clothes --> I will tell you how much I love clothes.
        !server --> I will tell you the server name and number of members. \n
        !serverDate --> I will tell you the date that the server was created. \n
        !region --> I will tell you the region that this server is based in.\n
        That is all. Stay tuned in for more commands! :)`)
     }
    else if (message.content.startWith('dick')) {
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
    else if (message.content === `${prefix}prune`) {
        const amount = parseInt(args[0]+1); 
        if (isNaN(amount)) {  
             return message.reply("Bro, that doesn't seem to be be a valid number")
         }
         else if (amount < 2 || amount > 50) {
             return message.reply("My guy, you need to input a number between 2 and 50 inclusive")
         }
         else {
             message.channel.bulkDelete(amount);
        }
    }
    else if (command === 'kick') { 
            const {member, mentions} = message;
            if (member.hasPermission('ADMINISTRATOR') || member.hasPermission('KICK_MEMBERS')) {
                if (!message.mentions.users.size) {
                    return message.reply(` I can't kick someone if you don't tell me their name!`)
                }
                else {
                    const target = mentions.users.first();
                    const taggedUser = message.mentions.users.first();
                    const taggedMember = message.guild.members.cache.get(target.id);
                    taggedMember.kick(); 
                    message.channel.send(`<@${member.id}>, The following user was kicked: ${taggedUser.username}`);
        
                }
            }
            else {
                message.channel.send(`<@${member.id}>, You do not have the necessary permissions to use this command!`);
            }
    }
    else if (command === 'ban') {
        const {member, mentions} = message; 
        if (member.hasPermission('ADMINISTRATOR') || member.hasPermission('BAN_MEMBERS')) {
            if(!message.mentions.users.size) {
                 return message.reply (` I can't unleash the ban hammer if you don't give me a name!`); 
            }
            else {
                const target = mentions.users.first();
                const taggedUser = message.mentions.user.first();
                const taggedMember = message.guild.members.cache.get(target.id);
                taggedMember.ban()
                message.channel.send(`<@${member.id}>, The following user was banned: ${taggedUser.username}`)
                }
            }
        else {
                message.channel.send(`<@${member.id}>, You do not have the necessary permissions to use this command!`);
            }
        }
    else {
        return;
    }
    });


