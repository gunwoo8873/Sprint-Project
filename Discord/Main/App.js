// Discord.js API
const { Client, GatewayIntentBits, Partials, Events } = require('discord.js');
// .env TOKEN File
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds], 
    partials: [Partials.Channel] 
});

// Discord Bot OnLine
client.once(Events.ClientReady, OnReady => {console.log(`${OnReady.user.tag}`);})

Client.commmands = new Collection();


if (condition) {
    
} else {
    
}

client.login(process.env.TOKEN)