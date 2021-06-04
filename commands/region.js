module.exports = {
    name: 'region',
    description: 'Bot will disclose the region that the server is based.',
    execute(message,args) {
        message.channel.send(`This server is based in: ${message.guild.region}`);
    }
}