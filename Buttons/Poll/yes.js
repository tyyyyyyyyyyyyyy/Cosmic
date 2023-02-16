const { EmbedBuilder,ActionRowBuilder, ButtonBuilder } = require("discord.js");
const db = require("croxydb")

module.exports = {
    id: "pollRspnsYes", // The buttons .setCustomId

    async execute(interaction, client, args) { // To access an id / value from a button you MUST INCLUDE `client` AND `args` and in the same order as shown
        interaction.reply({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: "Response sent! ✔", iconURL: `${client.user.avatarURL()}`})
            .setDescription("I have successfully sent your response!")
            .setColor("#083c6c")
        ], ephemeral: true})
    }
}