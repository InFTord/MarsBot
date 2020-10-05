const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Список всех команд, или информация об определенной команде.',
	aliases: ['commands', 'команды', 'хелп'],
	usage: '[имя команды]',
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			const helpEmbed = new Discord.MessageEmbed()
				.setAuthor(commands.map(command => command.name).join(', '))
				.setTimestamp()
				.setColor('BLUE');
			data.push(helpEmbed);

			return message.channel.send(data, { split: true });
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			const helpEmbed = new Discord.MessageEmbed()
				.setAuthor('ERROR!')
				.setTimestamp()
				.setColor('RED')
				.addField('Данной команды не существует!', 'Пропишите просто -хелп, что бы просмотреть список команд');

			message.channel.send(helpEmbed);
		}

		const helpEmbed = new Discord.MessageEmbed()
			.setAuthor(`Информация об команде ${command.name}`)
			.setTimestamp()
			.setColor('BLUE')
			.addField('Алиасы', `${command.aliases.join(', ')}`)
			.addField('Описание', `${command.description}`)
			.addField('Использование команды:', ` ${prefix}${command.name} ${command.usage}`);

		data.push(helpEmbed);

		message.channel.send(data, { split: true });
	},
};