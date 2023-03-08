const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const responses = require("../../Utility/8ballreplies.json")

module.exports = {
    category: "Guilds",
    data: new SlashCommandBuilder()
    .setName("channelinfo")
    .setDescription("Get info of a channel!")
    .addChannelOption(option => option
        .setName("channel")
        .setDescription("The channel you want info on!")),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction, client){
        const channel = interaction.options.getChannel('channel') || interaction.channel;

        const channeltypes = [
            "Text",
            "Private Message",
            "Voice",
            "Group",
            "Category",
            "Announcements",
            "Announcements Thread",
            "Public Thread",
            "Private Thread",
            "Stage Voice",
            "Directory",
            "Forum"
        ]


        const embed = new EmbedBuilder()
        .setAuthor({ name: `${channel.name}'s info 📘`, iconURL: `${client.user.avatarURL()}`})
        .addFields(
            {
                name: "Type",
                value: `${channeltypes[channel.type]}`,
                inline: true,
            },
            {
                name: "ID",
                value: `${channel.id}`,
                inline: true,
            },
            {
                name: "Made on",
                value: `<t:${channel.createdTimestamp}>`,
                inline: true,
            },
            {
                name: "Subject",
                value: `${channel.topic ? channel.topic : "Channel doesn't have a subject."}`,
                inline: true,
            },
            {
                name: "NSFW",
                value: `${channel.nsfw}`,
                inline: true,
            },
            {
                name: "Parent",
                value: `${channel.parentID ? channel.parentID : 'Channel doesn\'t have a parent.'}`,
                inline: true,
            },
        )
        .setColor("#083c6c")

        interaction.reply({ embeds: [embed] })
    }
}