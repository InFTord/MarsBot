const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('/.commands').filter(file => file.endsWith('.js'));
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
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;
	try {
		client.commands.get(command).execute(message, args);
		console.log(`Была произведена команда ${command}`);
	}
	catch (error) {
		console.error(error);
		message.reply('Произошла ошибка жопы');
	}
},
);

client.login(token);