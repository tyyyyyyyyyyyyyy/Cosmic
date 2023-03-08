const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const responses = require("../../Utility/8ballreplies.json")

module.exports = {
    category: "Guilds",
    data: new SlashCommandBuilder()
    .setName("members")
    .setDescription("Get a count of the members in the server!"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction, client){
        const members = await interaction.guild.members.fetch();

        const getOldestMember = members.filter(m => !m.user.bot)
        .sort((a, b) => a.user.createdAt - b.user.createdAt);
        const getYoungestMember = members.filter(m => !m.user.bot)
        .sort((a, b) => b.user.createdAt - a.user.createdAt);

        const oldestmember = Array.from(getOldestMember.values());

        const youngestmember = Array.from(getYoungestMember.values());

        const embed = new EmbedBuilder()
        .setAuthor({ name: `${interaction.guild.name} Members 👤`, iconURL: `${client.user.avatarURL()}`})
        .addFields(
            { name: "Members | 👤", value: `${members.filter(member => !member.user.bot).size} members`, inline: true},
            { name: "Bots | 🤖", value: `${members.filter(member => member.user.bot).size} bots`, inline: true},
            { name: "Total | 📘", value: `${interaction.guild.memberCount} members`, inline: true},
            { name: "Oldest Member | 👴", value: `${oldestmember[0]} (${oldestmember[0].user.username}#${oldestmember[0].user.discriminator})\n**⏰┆Account creation**: <t:${Math.round(oldestmember[0].user.createdTimestamp / 1000)}>`},
            { name: "Youngest Member | 👶", value: `${youngestmember[0]} (${youngestmember[0].user.username}#${youngestmember[0].user.discriminator})\n**⏰┆Account creation**: <t:${Math.round(youngestmember[0].user.createdTimestamp / 1000)}>`}
        )
        .setColor("#083c6c")

        interaction.reply({ embeds: [embed] })
    }
}