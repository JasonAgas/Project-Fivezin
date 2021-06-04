
module.exports = {
    name:'prune',
    description:'Delete messages from afar',
    args: true,
execute(message, args) {
        const amount = parseInt(args[0])+1; // Disregard what the function does, amount is a numerical value

        if (isNaN(amount)) { // checks if amount is actually a numerical value; 
            return message.reply(`Bro, that doesn't seem to be be a valid number!`);
        }
        else if (amount < 2 || amount > 50) { // just so we don't break the bot / delete all the messages. 
            return message.reply(`Bro, that doesn't seem to be a valid number!`);
        }
        else {
            message.channel.bulkDelete(amount,true).catch(err =>  { // the command bulkDelete() deletes message
                console.error(err);
                message.channel.send('There was an error when trying to prune messages!');
                    }); 
                }
        },
    }
