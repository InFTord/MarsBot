const Discord = require('discord.js');

module.exports = {
	name: 'userinfo',
	description: 'Профиль участника сервера/вас',
	aliases: ['профиль', 'юзеринфо'],
	execute(message) {
		const userArray = message.content.split(' ');
		const userArgs = userArray.slice(1);
		const member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(' ') || x.user.username === userArgs[0]) || message.member;
		const userEmbed = new Discord.MessageEmbed()
			.setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
			.setTimestamp()
			.setColor('BLUE')
			.addField('Роли участника:', `<@&${member._roles.join('> <@&')}>`)
			.addField('Айди участника', member.id);
		message.channel.send(userEmbed);

	},
};