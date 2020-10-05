module.exports = {
	name: 'ping',
	description: 'Пинг',
	usage: 'Нету',
	aliases: ['пинг'],
	execute(message) {
		message.channel.send('Понг');
	},
};