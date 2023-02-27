const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, Client } = require("discord.js");

module.exports= {
    category: "Developer",
    developer: true,
    data: new SlashCommandBuilder()
    .setName("announce")
    .setDescription("Announce a message!")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addChannelOption((options) => options
    .setName("channel")
    .setDescription("Channel you want to send the announcement to.")) 
    .addStringOption((options) => options
    .setName("announcement")
    .setDescription("Announcement you want to send!")),
    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */
    execute(interaction, client){
        const announcement = interaction.options.getString('announcement');
        const channel = interaction.options.getChannel('channel');

        channel.send({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: `📢 Announcement!`, iconURL: `${client.user.avatarURL()}`})
            .setDescription("**Please read below!**")
            .addFields({
                name: `Announcement from: ${interaction.user.username}`, value: `${announcement}`
            })
            .setColor("#083c6c")
        ]}).then(() => {
            channel.send("@everyone");
            interaction.reply({ embeds: [
                new EmbedBuilder()
                .setAuthor({ name: `✔ Success!`, iconURL: `${client.user.avatarURL()}`})
                .setDescription("The announcement has successfully been sent to: <#" + channel.id + ">")
                .setColor("#083c6c")
            ]});
        }).catch((e) => {
            console.log(e)
        })
    }
}