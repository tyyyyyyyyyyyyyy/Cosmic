const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, Client } = require("discord.js");
const { loadCommands } = require("../../Handlers/commandHandler");
const { loadEvents } = require("../../Handlers/eventHandler");
const { loadButtons } = require("../../Handlers/buttonHandler");

module.exports= {
    developer: true,
    data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Reload the commands/events.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand((options) => options
    .setName("events")
    .setDescription("Reload your events")) 
    .addSubcommand((options) => options
    .setName("commands")
    .setDescription("Reload your commands"))
    .addSubcommand((options) => options
    .setName("buttons")
    .setDescription("Reload your buttons"))
    .addSubcommand((options) => options
    .setName("everything")
    .setDescription("Reload commands and events")),
    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */
    execute(interaction, client){
        const subcommand = interaction.options.getSubcommand();

        switch (subcommand) {
            case "events" : {
                for(const [key, value] of client.events)
                client.removeListener(`${key}`, value, true);
                loadEvents(client)
                interaction.reply({ content: "Reloaded Events", ephemeral: true });
            }
            break;
            case "commands" : {
                loadCommands(client);
                interaction.reply({ content: "Reloaded Commands!", ephemeral: true})
            }
            break;
            case "buttons" : {
                loadButtons(client);
                interaction.reply({ content: "Reloaded buttons!", ephemeral: true})
            }
            break;
            case "everything" : {
                for(const [key, value] of client.events)
                client.removeListener(`${key}`, value, true);
                loadEvents(client)
                loadCommands(client);
                loadButtons(client);
                interaction.reply({ content: "Reloaded everything!", ephemeral: true });
            }
        }
    }
}