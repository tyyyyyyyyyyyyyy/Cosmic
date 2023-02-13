const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    category: "Generic",
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Get the latency of the bot!"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        interaction.reply({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: "Pong! 🏓", iconURL: `${client.user.avatarURL()}`})
            .addFields(
                { name: "Bot Latency:", value: `${client.ws.ping}ms`}
            )
            .setColor("#083c6c")
        ]});
    }
}