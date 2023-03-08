const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, WebhookClient } = require('discord.js');

module.exports = {
    category: "utility",
    data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Get the avatar of a user!")
    .addUserOption(option => option
        .setName("user")
        .setDescription("The user you want to get the avatar from")
        .setRequired(true)
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        const target = interaction.options.getUser('user');
        interaction.reply({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: "Avatar! 📷", iconURL: `${client.user.avatarURL()}`})
            .setDescription(`${target}'s avatar!`)
            .setImage(target.avatarURL({ dynamic: true, size: 2048 }))
            .setColor("#083c6c")
        ]})
    }
}