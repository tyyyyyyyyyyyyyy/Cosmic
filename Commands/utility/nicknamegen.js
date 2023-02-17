const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, time } = require('discord.js');
const {RandomNicknameGenerator, DATA_SETS} = require('random-nickname-generator');

module.exports = {
    category: "utility",
    data: new SlashCommandBuilder()
    .setName("nicknamegen")
    .setDescription("Generate a nickname!")
    .addStringOption(option => 
        option.setName("seperator")
        .setDescription("The seperator between words. Example: The_Silly_Sausage")
        .setRequired(true)
        .setMaxLength(1))
    .addBooleanOption(option => 
        option.setName("hash")
        .setDescription("Generate a random string of letters and numbers.")
        .setRequired(true))
    .addBooleanOption(option => 
        option.setName('timestamp')
        .setDescription("Add the timestamp to the end of the name.")
        .setRequired(true)),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        const hash = interaction.options.getBoolean("hash");
        const timestamp = interaction.options.getBoolean("timestamp");
        const separator = interaction.options.getString("seperator")

        const nickname = RandomNicknameGenerator.generate({
            structure: [
                DATA_SETS.ANIMALS,
                DATA_SETS.ADJECTIVES,
            ],
            separator: `${separator}`,
            randomHash: hash,
            timeStamp: timestamp
        })

        interaction.reply({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: "Nickname! 💬", iconURL: `${client.user.avatarURL()}`})
            .setDescription("Below is your new name!!\n```" + nickname + "```")
            .setColor("#083c6c")
        ]})
    }
}