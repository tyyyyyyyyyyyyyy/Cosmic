const { Client, GatewayIntentBits, Partials, Collection, Guild} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember} = Partials

const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember]
});

const { loadEvents } = 

client.config = require("./config.json");
client.events = new Collection()

client.login(client.config.token).then(() => {
    console.log(`Logged in successfully! // ${client.user.username}`);
    client.user.setActivity(`Created by tyyy#1022`);
}).catch((err) => {
    console.log(err);
});

// bot invite = https://discord.com/api/oauth2/authorize?client_id=1072237160247328898&permissions=8&scope=bot 