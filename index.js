const Discord = require('discord.js');
const client = new Discord.Client();

client.login('');

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
    message.channel.send('Dont curse us you fool, you moron');
		return;
	}
});

client.on('message', message => {
	const WordRole = message.guild.roles.cache.find(r => r.name === 'Cursed');
	if (message.content.includes('revenant')) {
		message.guild.channels.cache.find(ch => ch.name === 'general');
		message.member.roles.add(WordRole);
    message.channel.send('Dont curse us you fool, you moron');
		return;
	}
});
