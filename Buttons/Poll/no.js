const { EmbedBuilder,ActionRowBuilder, ButtonBuilder } = require("discord.js");
const db = require("croxydb")

module.exports = {
    id: "pollRspnsNo", // The buttons .setCustomId

    async execute(interaction, client, args) { // To access an id / value from a button you MUST INCLUDE `client` AND `args` and in the same order as shown
        const owner = interaction.guild.members.cache.get(interaction.guild.ownerId);
        owner.send({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: "Someone responded! ✔", iconURL: `${client.user.avatarURL()}`})
            .setDescription(`${interaction.user.username} has replied to your your poll`)
            .addFields({
                name: "Response", value: "They responded with yeah!"
            })
            .setColor("#083c6c")
        ]}).then(() => {
            interaction.reply({ embeds: [
                new EmbedBuilder()
                .setAuthor({ name: "Response sent! ✔", iconURL: `${client.user.avatarURL()}`})
                .setDescription("I have successfully sent your response!")
                .setColor("#083c6c")
            ], ephemeral: true})
        }).catch(() => {
            interaction.reply({ embeds: [
                new EmbedBuilder()
                .setAuthor({ name: "Error! ❌", iconURL: `${client.user.avatarURL()}`})
                .setDescription("Something went wrong idk but try again I guess!")
                .setColor("#083c6c")
            ], ephemeral: true})
        })
    }
}