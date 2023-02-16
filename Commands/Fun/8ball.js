const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const responses = require("../../Utility/8ballreplies.json")

module.exports = {
    category: "Fun",
    data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("Get an 8ball response to your query")
    .addStringOption((option) => option
    .setName("query")
    .setDescription("The query that you need an answer to.")
    .setRequired(true)
    ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        const query = interaction.options.getString("query");
        const keys = Object.keys(responses)
        const randIndex = Math.floor(Math.random() * keys.length);
        const randkey = keys[randIndex];
        const name = responses[randkey];

        let emoji = "🟢"

        if(name == "yes"){ emoji = "🟢"}
        else if(name == "maybe"){ emoji = "🟡"}
        else if(name == "no"){ emoji = "🔴"}

        interaction.reply({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: `8 Ball || ${emoji}`, iconURL: `${client.user.avatarURL()}`})
            .addFields(
                { name: `${query}`, value: "```" + randkey + "```"}
            )
            .setColor("#083c6c")
        ]})
    }
}