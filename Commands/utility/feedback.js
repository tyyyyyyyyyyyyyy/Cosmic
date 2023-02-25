const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, WebhookClient } = require('discord.js');

module.exports = {
    category: "utility",
    data: new SlashCommandBuilder()
    .setName("feedback")
    .setDescription("Send feedback to the bot devs!")
    .addStringOption(option => option
        .setName("feedback")
        .setDescription("The feedback you want to send")
        .setRequired(true)
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        const feedback = interaction.options.getString("feedback");
        const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1079055451355893882/PdPEXV00GTLmScJuVy_yX6Iq6WcHcs9M1UrbK5HrJ8yCFlO98u4yohk8E2WYooWCJyTg' });
        webhookClient.send({embeds: [
            new EmbedBuilder()
            .setAuthor({ name: "Feedback! 🎤", iconURL: `${client.user.avatarURL()}`})
            .setDescription(`${interaction.user.username} has sent feedback!\n *${feedback}*`)
            .setColor("#083c6c")
        ]}).then(() => interaction.reply({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: "Sent! ✔", iconURL: `${client.user.avatarURL()}`})
            .setDescription(`I have successfully sent your feedback to the devs! If what you sent is added, you will be credited for the idea! :D`)
            .setColor("#083c6c")
        ], ephemeral: true }))
    }
}