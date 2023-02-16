const { EmbedBuilder,ActionRowBuilder, ButtonBuilder } = require("discord.js");

module.exports = {
    id: "invite", // The buttons .setCustomId

    async execute(interaction, client, args) { // To access an id / value from a button you MUST INCLUDE `client` AND `args` and in the same order as shown
        const target = args[0] // Accessing the id that was passed into the button
        interaction.user.send({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: "Thank you! 🤖", iconURL: `${client.user.avatarURL()}`})
            .setDescription("We appreciate your interest in inviting Cosmic to your server. Have fun!")
            .setColor("#083c6c")
        ], components: [
            new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setLabel("invite")
                    .setStyle("Link")
                    .setURL(client.config.invite)
                )
        ]}).then(() => {
            interaction.reply({ embeds: [
                new EmbedBuilder()
                .setAuthor({ name: "Thank you! 🤖", iconURL: `${client.user.avatarURL()}`})
                .setDescription("The invite has been sent to your dms. Enjoy!")
                .setColor("#083c6c")
            ], ephemeral: true})
        }).catch((e) => {
            interaction.reply({ embeds: [
                new EmbedBuilder()
                .setAuthor({ name: "Error! ❌", iconURL: `${client.user.avatarURL()}`})
                .setDescription("The bot failed to send you a private message. Try opening your DMs to server members.")
                .setColor("#083c6c")
            ]})
        })
    }
}