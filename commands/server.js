module.exports = {
    name: 'server',
    description: 'Bot will disclose server name, and the number of members in the server',
    execute(message,args) {
        message.channel.send(`The name of this server is: ${message.guild.name}\nNumber of Members: ${message.guild.memberCount}`);
    }
}