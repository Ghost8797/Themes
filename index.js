const keepAlive = require("./server.js");
const Discord = require('discord.js');
const client = new Discord.Client();

client.login('');

keepAlive();

client.once('ready', () => {
	console.log('Bot Started!');
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
		message.delete();
		message.channel.send('Dont curse us you fool, you moron');
		return;
	}
});

client.on('message', message => {
	const WordRole = message.guild.roles.cache.find(r => r.name === 'Cursed');
	if (message.content.includes('revenant')) {
		message.guild.channels.cache.find(ch => ch.name === 'general');
		message.member.roles.add(WordRole);
		message.delete();
		message.channel.send('Dont curse us you fool, you moron');
		return;
	}
});

client.on('message', message => {
	if(message.content === '!ghosts') {
		const embed = new Discord.MessageEmbed()
			.setTitle('Phasmophobia Ghosts')
			.setDescription('Ghosts and their Information')
			.setImage('https://i.imgur.com/mh3PYrS.png')
			.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
			.setColor(0x0ee6f0);
		message.channel.send(embed);
	}
});
