const Discord = require('discord.js');
const client = new Discord.Client();

client.login('ODU2NDYzODk4NDExNDAxMjQ2.YNBaKQ.DKJeeMfFNrG8P0DzH80mbpqrYbw');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if(message.content === '!test') {
		message.channel.send('Pong!');
	}
});

client.on('message', message => {
	const WordRole = message.guild.roles.cache.find(r => r.name === 'Cursed');
	if (message.content.includes('Revenant')) {
		message.guild.channels.cache.find(ch => ch.name === 'general');
		message.member.roles.add(WordRole);
		return;
	}
});
