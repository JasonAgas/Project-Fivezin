module.exports = {
    name: 'kick',
    description: 'Kicks people. Will mostly be used on Nathan!',
    execute(message,args) {
        const {member, mentions} = message;
        if (member.hasPermission('ADMINISTRATOR') || member.hasPermission('KICK_MEMBERS')) {
            if (!message.mentions.users.size) {
                return message.reply(` I can't kick someone if you don't tell me their name!`)
            }
            else {
                const target = mentions.users.first();
                const taggedUser = message.mentions.users.first();
                const taggedMember = message.guild.members.cache.get(target.id);
                taggedMember.kick(); // Options can be attached for the kick --> # of days and reason. 
                message.channel.send(`<@${member.id}>, The following user was kicked: ${taggedUser.username}`);
    
            }
        }
        else {
            message.channel.send(`<@${member.id}>, You do not have the necessary permissions to use this command!`);
        }
    }
}