module.exports = {
	name: 'args-info',
	description: 'Информация об ваших аргументах',
	args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Аргументы: ${args} \nДлина аргументов: ${args.length}`);
	},
};