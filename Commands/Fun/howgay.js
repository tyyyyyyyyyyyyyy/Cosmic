const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const responses = require("../../Utility/8ballreplies.json");
const figlet = require('figlet');

module.exports = {
    category: "Fun",
    data: new SlashCommandBuilder()
    .setName("gayrate")
    .setDescription("Find out how gay you are!"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        var result = (interaction.user.id == "922231264919031838") ? 0 : Math.ceil(Math.random() * 100);
        return interaction.reply({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: `How Gay Are You? 🏳‍🌈`, iconURL: `${client.user.avatarURL()}`})
            .setDescription(`\`\`\`${result}% gay\`\`\``)
            .setColor("#083c6c")
        ], ephemeral: true})
    }
}