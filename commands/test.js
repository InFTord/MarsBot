module.exports = {
	name: 'пинг',
	description: 'Команда пинга',
	execute(message, args) {
		message.channel.send('Понг!');
	},
};