module.exports = {
    name: 'dick',
    description: 'The name',
    execute(message, args){
        message.channel.send(`You called me?`);
    },
};