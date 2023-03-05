const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const responses = require("../../Utility/8ballreplies.json");
const figlet = require('figlet');

module.exports = {
    category: "Fun",
    data: new SlashCommandBuilder()
    .setName("cleverrate")
    .setDescription("Find out how clever you are!"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        var result = Math.ceil(Math.random() * 100);
        return interaction.reply({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: `How Clever Are You? 🧠`, iconURL: `${client.user.avatarURL()}`})
            .setDescription(`\`\`\`${result}%\`\`\``)
            .setColor("#083c6c")
        ], ephemeral: true})
    }
}