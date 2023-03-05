const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const responses = require("../../Utility/8ballreplies.json");
const figlet = require('figlet');

module.exports = {
    category: "Fun",
    data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Make the bot say something!")
    .addStringOption(option => option
        .setName("message")
        .setDescription("The message you want to send!")
        .setRequired(true)
    )
    .addBooleanOption(option => option
        .setName("anonymous")
        .setDescription("Make the message anonymous?")
        .setRequired(true)),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        const message = interaction.options.getString("message");
        const anon = interaction.options.getBoolean("anonymous");

        interaction.channel.send({ embeds: [
            new EmbedBuilder()
            .setDescription(`${message}`)
            .setFooter({ text: `This is a message from: ${(anon) ? "Anonymous" : interaction.user.username}`})
            .setColor("#083c6c")
        ]}).then(() => {
            interaction.reply({embeds: [
                new EmbedBuilder()
                .setAuthor({ name: `Sent! 💬`, iconURL: `${client.user.avatarURL()}`})
                .setDescription(`I have sent your message!`)
                .setColor("#083c6c")
            ], ephemeral: true})
        })
    }
}