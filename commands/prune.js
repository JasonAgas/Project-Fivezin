module.exports = {
    name: 'prune',
    description: `Bot will prune 'X' number messages, where 'X' is the number of messages that should be deleted.`,
    execute(message,args) {
        const amount = parseInt(args[0]); // Disregard what the function does, amount is a numerical value

        if (isNaN(amount)) { // checks if amount is actually a numerical value; 
            return message.reply(`Bro, that doesn/t seem to be be a valid number!`);
        }
        else if (amount < 2 || amount > 50) { // just so we don't break the bot / delete all the messages. 
            return message.reply(`Bro, that doesn/'t seem to be a valid number!`);
        }
        else {
            message.channel.bulkDelete(amount,true).catch(err =>  { // the command bulkDelete() deletes message
                console.error(err); // error catcher 
                message.channel.send('There was an error when trying to prune messages!');
            });
        }
    }
}