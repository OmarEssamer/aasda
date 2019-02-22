const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "A.";


client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('by Amory');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {
client.user.setGame(``,'https://www.twitch.tv/amorycraftxd');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`A.help | On 1 Servers`,'https://www.twitch.tv/amorycraftxd');
});

client.on('message', message => {
     if (message.content === "") {
message.author.send("**A.help**" + `  **
https://discordapp.com/oauth2/authorize?client_id=546262097470816286&permissions=0&scope=bot:لدعوة البوت
FZ | Amory | MA#5792: الذي صنع هذا البوت هو
https://discord.gg/2PFBZA:رابط سيرفر تبع البوت
و البوت لاذال يتحدث
وشكرا
**`);
    }
});

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
    if (message.content === "A.rooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField('⬇ Rooms Number. ✔',`** ${message.guild.channels.size}**`)

.addField('⬇Rooms  Name. ✔:',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

client.on('guildMemberAdd', member => {
console.log('User ' + member.user.username + 'Has Joined')
var role = member.guild.roles.find('name', 'User');
member.addRole(role)
});
