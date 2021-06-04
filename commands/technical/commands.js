module.exports = {
    name: 'commands',
    description: 'What can you do?',
    execute(message, args){
        message.channel.send(`The current commands I can respond to are:\n
        !dick --> You'll see :) \n
        !clothes --> I will tell you how much I love clothes.\n
        !server --> I will tell you the server name and number of members. \n
        !serverDate --> I will tell you the date that the server was created. \n
        !region --> I will tell you the region that this server is based in.\n
        That is all. Stay tuned in for more commands! :)`)
    },
};