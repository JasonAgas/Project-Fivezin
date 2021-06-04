module.exports = {
    name: 'region',
    descritpion: 'Where are we?',
    execute(message, args){
        message.channel.send(`This server is based in: ${message.guild.region}` )
    },
};