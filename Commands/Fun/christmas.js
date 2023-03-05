const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const responses = require("../../Utility/8ballreplies.json");
const figlet = require('figlet');

module.exports = {
    category: "Fun",
    data: new SlashCommandBuilder()
    .setName("christmas")
    .setDescription("Find out how many days till christmas!"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        let today = new Date();
        let xmas = new Date(today.getFullYear(), 11, 24);
        if (today.getMonth() == 11 && today.getDate() > 24) {
            xmas.setFullYear(xmas.getFullYear() + 1);
        }
        let one_day = 1000 * 60 * 60 * 24;
        let daysleft = Math.ceil((xmas.getTime() - today.getTime()) / (one_day));
        let days = daysleft + 1

        interaction.reply({embeds: [
            new EmbedBuilder()
            .setAuthor({ name: `Christmas! 🎄`, iconURL: `${client.user.avatarURL()}`})
            .setDescription(`${days} till christmas!`)
            .setColor("#083c6c")
        ], ephemeral: true})
    }
}