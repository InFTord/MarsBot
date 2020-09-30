const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const { prefix, token } = require('./config.json');

client.once('ready', () => {
	console.log('Готов!');
});

for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);

}

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/  +/);
	const commandName = args.shift().toLowerCase();

	if (!args.length) {
		return message.channel.send(`Вы не дали каких либо аргументов, ${message.author}!`);

	}


	if (!client.commands.has(commandName)) return;
	const command = client.commands.get(commandName);
	try {
		command.execute(message, args);
		console.log(`Была произведена команда ${commandName}`);
	}
	catch (error) {
		console.error(error);
		message.reply('Произошла ошибка жопы');
	}
},
);

client.login(token);