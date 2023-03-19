const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } = require('discord.js');
const { loadCommands } = require("../../Handlers/commandHandler")

module.exports = {
    category: "Generic",
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Get a list of useful commands!"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client){
        const commands = client.commands;
        const categories = [];

        commands.forEach(command => {
            const category = command.category;
            if (!categories.includes(category)){
                categories.push(category)
            }
        });

        const embed = new EmbedBuilder()
        .setAuthor({ name: `Help! 📃 `, iconURL: `${client.user.avatarURL()}`})
        .setDescription(`Click from the selections below to get a list of commands in that category!\nThere is currently **${commands.size}** commands!`)
        .setColor("#083c6c")

        const options = categories.map(cat => ({
            label: cat,
            value: `help-${cat}`,
            description: `View commands in ${cat} category`,
            emoji: cat.emoji,
          }));

        const row = new ActionRowBuilder().addComponents(new StringSelectMenuBuilder()
        .setCustomId("help")
        .setPlaceholder("Nothing is selected.")
        .addOptions(options)
        )
        interaction.reply({ embeds: [embed], components: [row]})
    }
}