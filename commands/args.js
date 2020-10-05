module.exports = {
	name: 'args',
	description: 'Информация обо аргументах, представленные ботом',
	args: true,
	usage: '<аргументы>',
	aliases: ['аргументы', 'аргу-инфо'],
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Аргументы: ${args}\nКоличество аргументов: ${args.length}`);
	},
};