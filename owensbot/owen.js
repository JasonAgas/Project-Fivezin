const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!dick') {
		message.channel.send('You call?');
	}
});

client.login('ODQ2MjM0MzA4NjM2NDQyNjM0.YKsjHQ.ukRcO_wnarAE6lmrEhNiBQdqVfs');