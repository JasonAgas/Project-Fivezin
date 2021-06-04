module.exports = {
    name: 'commands',
    description: 'Lists all the commands that the bot can perform at the moment',
    execute(message,args) {
        message.channel.send(`The current commands I can respond to are:
        !command --> I will tell you all the current commands I can perform. 
        !dick --> You'll see :) 
        !clothes --> I will tell you how much I love clothes.
        !server --> I will tell you the server name and number of members. 
        !serverDate --> I will tell you the date that the server was created. 
        !region --> I will tell you the region that this server is based in.
        !prune --> I will delete a number of messages ranging from 2 to 50.
        !kick --> I will kick someone, as long as you have the proper permissions.
        !ban --> I will ban someone, as long as you have the proper permissions.
        That is all. Stay tuned in for more commands! :)`);
     }
}