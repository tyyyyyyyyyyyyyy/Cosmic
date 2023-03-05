const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const responses = require("../../Utility/8ballreplies.json");
const figlet = require('figlet');

module.exports = {
    category: "Fun",
    data: new SlashCommandBuilder()
    .setName("reverse")
    .setDescription("Reverse your text!")
    .addStringOption(option => option
        .setName("text")
        .setDescription("The text you want to reverse")
        .setRequired(true)),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        const text = interaction.options.getString("text")
        var result = text.split("").reverse().join("");
        return interaction.reply({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: `Reverse, Reverse! ↩`, iconURL: `${client.user.avatarURL()}`})
            .setDescription(`\`\`\`${result}\`\`\``)
            .setColor("#083c6c")
        ], ephemeral: true})
    }
}