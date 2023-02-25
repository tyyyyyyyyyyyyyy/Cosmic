const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    category: "Generic",
    data: new SlashCommandBuilder()
    .setName("uptime")
    .setDescription("Get the uptime of the bot!"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        const ts = Math.round((Date.now() - client.uptime) / 1000)

        interaction.reply({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: "Uptime! 👆", iconURL: `${client.user.avatarURL()}`})
            .setDescription(`<t:${ts}:R>`)
            .setColor("#083c6c")
        ]});
    }
}