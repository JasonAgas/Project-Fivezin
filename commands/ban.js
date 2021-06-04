module.exports = {
    name: 'ban',
    description: 'Bans people. Again, mostly to be used on Nathan! ',
    execute(message,args) {
        const {member, mentions} = message; 
        if (member.hasPermission('ADMINISTRATOR') || member.hasPermission('BAN_MEMBERS')) {
            if(!message.mentions.users.size) {
                 return message.reply (` I can't unleash the ban hammer if you don't give me a name!`); 
            }
            else {
                const target = mentions.users.first();
                const taggedUser = message.mentions.user.first();
                const taggedMember = message.guild.members.cache.get(target.id);
                taggedMember.ban()
                message.channel.send(`<@${member.id}>, The following user was banned: ${taggedUser.username}`)
                }
            }
        else {
                message.channel.send(`<@${member.id}>, You do not have the necessary permissions to use this command!`);
        }
    }
}
