module.exports = {
    name: 'serverdate',
    description: 'Bot will disclose the date that the server was created.',
    execute(message,args) {
        message.channel.send(`This server was created on: ${message.guild.createdAt}`);
    }
}