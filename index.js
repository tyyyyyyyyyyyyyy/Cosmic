const { Client, GatewayIntentBits, Partials, Collection, Guild} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember} = Partials

// Initiate the client
const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember]
});

// Collections
client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();

// Functions
const { loadEvents } = require("./Handlers/eventHandler");
loadEvents(client);

// Login to bot!
client.login(client.config.token);

// bot invite = https://discord.com/api/oauth2/authorize?client_id=1072237160247328898&permissions=8&scope=bot 