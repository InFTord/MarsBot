const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
	console.log('Готов!');
});

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/  +/);
	const command = args.shift().toLowerCase();

	if(command === 'аргументы') {
		if (!args.length) {
			return message.channel.send(`Вы не дали аргументы, ${message.author}!`);
		}
		message.channel.send(`Название команды: ${command}\nАргументы: ${args} `);
	}
});

client.login(token);