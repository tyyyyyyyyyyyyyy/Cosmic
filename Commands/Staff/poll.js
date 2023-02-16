const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    category: "Staff",
    data: new SlashCommandBuilder()
    .setName("poll")
    .setDescription("Create a poll")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption(option => option
        .setName("poll")
        .setDescription("The poll you want to send")
    )
    .addChannelOption(option => option
        .setName("channel")
        .setDescription("The channel you want to send the poll in")
    ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client){
        const poll = interaction.options.getString("poll")
        const channel = interaction.options.getChannel("channel")

        channel.send({ embeds: [
            new EmbedBuilder() 
            .setAuthor({ name: "Poll! ❎", iconURL: `${client.user.avatarURL()}` })
            .setDescription("Vote on the poll below!")
            .setColor("#083c6c")
            .addFields(
                { name: `Poll: `, value: '```' + poll + '```' } 
            )
        ], components: [
            new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId("pollRspnsYes")
                    .setEmoji("✔")
                    .setStyle("Success")
                )
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId("pollRspnsNo")
                    .setEmoji("❌")
                    .setStyle("Danger")
                )
        ]}).then(() => {
            interaction.reply({ embeds: [
                new EmbedBuilder()
                .setAuthor({ name: "Success! ✔", iconURL: `${client.user.avatarURL()}`})
                .setDescription(`The poll has been successfully sent to ${channel}!`)
                .setColor("#083c6c")
            ]})
        }).catch((e) => {
            interaction.reply({ embeds: [
                interaction.reply({ embeds: [
                    new EmbedBuilder()
                    .setAuthor({ name: "Error! ❌", iconURL: `${client.user.avatarURL()}`})
                    .setDescription(`I failed to send the poll! Check my permissions.`)
                    .setColor("#083c6c")
                ]})
            ]}),
            console.log(e)
        })
        // interaction.reply({ embeds: [
        //     new EmbedBuilder()
        //     .setAuthor({ name: "Invite! 🤖", iconURL: `${client.user.avatarURL()}`})
        //     .setDescription("The button below will send you an invite link to your dms.")
        //     .setColor("#083c6c")
        // ], components: [
        //     new ActionRowBuilder()
        //         .addComponents(
        //             new ButtonBuilder()
        //             .setCustomId("invite")
        //             .setLabel("invite")
        //             .setStyle("Secondary")
        //         )
        // ], ephemeral: true});
    }
}