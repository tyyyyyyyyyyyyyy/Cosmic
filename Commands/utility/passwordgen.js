const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const generator = require('generate-password');

module.exports = {
    category: "utility",
    data: new SlashCommandBuilder()
    .setName("pwdgen")
    .setDescription("Generate a secure password.")
    .addIntegerOption(option => 
        option.setName("length")
        .setDescription("The length of the password")
        .setRequired(true))
    .addBooleanOption(option => 
        option.setName("numbers")
        .setDescription("Whether or not to have numbers in the password")
        .setRequired(true))
    .addBooleanOption(option => 
        option.setName('symbols')
        .setDescription("whether or not to have symbols in the password")
        .setRequired(true)),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        const length = interaction.options.getInteger("length");
        const symbols = interaction.options.getBoolean("symbols");
        const numbers = interaction.options.getBoolean("numbers");

        const password = generator.generate({
            length: length,
            symbols: symbols,
            numbers: numbers
        });

        interaction.reply({ embeds: [
            new EmbedBuilder()
            .setAuthor({ name: "Secure Password! 🔒", iconURL: `${client.user.avatarURL()}`})
            .setDescription("Below is your secure password!\n```" + password + "```")
            .addFields(
                {name: "Password Info:", value:`**Length:** ${length}\n**Symbols?** ${symbols}\n**Numbers?** ${numbers}`}
            )
            .setColor("#083c6c")
        ]})
    }
}