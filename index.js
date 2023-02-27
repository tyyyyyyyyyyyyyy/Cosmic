const { Client, GatewayIntentBits, Partials, Collection, Guild} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
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
client.buttons = new Collection();
client.selectMenus = new Collection();

// Functions
const { loadEvents } = require("./Handlers/eventHandler");
const { loadSelectMenus } = require("./Handlers/selectMenuHandler");

loadEvents(client);
loadSelectMenus(client);

// Login to bot!
client.login(client.config.token);
