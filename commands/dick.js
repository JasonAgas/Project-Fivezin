module.exports = {
    name: 'dick',
    description: 'The bot will respond to its name being called',
    execute(message,args) {
        message.channel.send(`You call?`);
    }
}