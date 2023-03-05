const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const responses = require("../../Utility/8ballreplies.json");
const figlet = require('figlet');

module.exports = {
    category: "Fun",
    data: new SlashCommandBuilder()
    .setName("ascii")
    .setDescription("Turn your text into ascii")
    .addStringOption((option) => option
    .setName("text")
    .setDescription("The text that you want to turn into ascii")
    .setRequired(true)
    ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        const text = interaction.options.getString("text");
        figlet.text(text, function (err, data) {
            if (msg.length > 2000) return interaction.reply({ embeds: [
                new EmbedBuilder()
                .setAuthor({ name: `Error! ❌`, iconURL: `${client.user.avatarURL()}`})
                .setDescription("Please enter text less than 2000 characters!")
                .setColor("#083c6c")
            ], ephemeral: true})
            if (err) {
                return interaction.reply({ embeds: [
                    new EmbedBuilder()
                    .setAuthor({ name: `Error! ❌`, iconURL: `${client.user.avatarURL()}`})
                    .setDescription("There was an error running the command, try again later.")
                    .setColor("#083c6c")
                ], ephemeral: true})
            }
    
            // client.embed({
            //     title: '💬・Ascii',
            //     desc: `\`\`\` ${data} \`\`\``,
            //     type: 'editreply',
            // }, interaction);

            return interaction.reply({ embeds: [
                new EmbedBuilder()
                .setAuthor({ name: `Ascii! 💬`, iconURL: `${client.user.avatarURL()}`})
                .setDescription(`\`\`\` ${data} \`\`\``)
                .setColor("#083c6c")
            ], ephemeral: true})
        })
    }
}