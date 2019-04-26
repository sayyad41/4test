const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("571132937161146379")
setInterval(function() {
channel.send(`Spamm 4`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
