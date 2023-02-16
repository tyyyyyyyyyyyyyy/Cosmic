const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
    category: "Generic",
    data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Get the bot's invite!"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client){
        interaction.reply({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: "Invite! 🤖", iconURL: `${client.user.avatarURL()}`})
            .setDescription("The button below will send you an invite link to your dms.")
            .setColor("#083c6c")
        ], components: [
            new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId("invite")
                    .setLabel("invite")
                    .setStyle("Secondary")
                )
        ], ephemeral: true});
    }
}