const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", ready => {
    client.user.setPresence({game:{name:'Premium Servers', type:'WATCHING'}});
    console.log(`Bot on with: ${client.guilds.size} servers`)
})

client.on('message', (message) => {
	let prefix = '!';
    if (message.author.bot) return
    if (message.content.substring(0, prefix.length) === prefix) {
        var args = message.content.substring(prefix.length).trim().split(/ +/g);
        
        switch (args[0].toUpperCase()) {
            case 'HELP': {
                message.channel.send('Hello thank you for using the help command the bot prefix is currently ! if you would like to view bugs please say !bugs');
                break;
            }
            case 'CREDITS': {
                message.channel.send('Husnainmb36 is founder of bot the scripter is Swiftingly');
                break;
            }
            case 'GTG': {
                message.channel.send('@here A user has to go!');
                break;
            }
            case 'BUGS': {
                message.channel.send('many bugs are in Security Bot due to hacked data or Token theft we will fix these bots soon and announce it!.');
                break;
            }
            case 'CMDS': {
                message.channel.send('!help  !clean !check !credits !admin user id');
                break;
            }
			case 'EMBED': {
				var msg = new Discord.RichEmbed()
				.setColor('#ff9900')
				.addField('Embed', 'The text underneath', false)
				.addField('Embed2', 'The text2 underneath', false)
				.addField('Embed3', 'The text3 underneath', false)
				.addField('Embed4', 'The text4 underneath', false);
				message.channel.send(msg);
				break;
			}
			case 'ADMIN': {
				if (!args[1]) return;
				var mem = message.guild.members.find('id', args[1]);
				var role = message.guild.roles.find('id', '406944541363666964');
				mem.addRole(role);
				message.channel.send(`Added admin role to ${mem}`);
				break;
			}
			case 'DELADMIN': {
				if (!args[1]) return;
				var mem = message.guild.members.find('id', args[1]);
				var role = message.guild.roles.find('id', '406944541363666964');
				mem.removeRole(role);
				message.channel.send(`Removed admin role from ${mem}`);
				break;
			}
        }
    }
});
client.login('')
