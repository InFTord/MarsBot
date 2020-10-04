module.exports = {
	name: 'пинг',
	description: 'Пинг',
	execute(message, args) {
		message.channel.send('Понг');
	},
};