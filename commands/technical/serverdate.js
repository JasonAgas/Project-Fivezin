module.exports = {
    name: 'serverdate',
    description: 'What day is it?',
    execute(message, args){
        message.channel.send(`This server was created on: ${message.guild.createdAt}`)
    },
};