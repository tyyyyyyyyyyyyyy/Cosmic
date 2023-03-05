const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, Client } = require("discord.js");
const { loadCommands } = require("../../Handlers/commandHandler");
const { loadEvents } = require("../../Handlers/eventHandler");
const { loadButtons } = require("../../Handlers/buttonHandler");

module.exports= {
    category: "Developer",
    developer: true,
    data: new SlashCommandBuilder()
    .setName("eval")
    .setDescription("Evaluate JS code.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption(option => option
        .setName("code")
        .setDescription("The code you want to evaluate")
        .setRequired(true)
    ),
    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client){
        const code = interaction.options.getString("code");

        const clean = text => {
            if (typeof (text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
        }

        try {
            if(code.startsWith("console.log")) {
                return interaction.reply({ embeds: [
                    new EmbedBuilder()
                    .setAuthor({ name: `Evaluated Code! 👩‍💻`, iconURL: `${client.user.avatarURL()}`})
                    .addFields(
                        {
                            name: `Code Sent:`, value: `\`\`\`js\n${code}\n\`\`\``
                        },
                        {
                            name: "Output:", value: `\`\`\`js\nconsole.log does not work with eval\n\`\`\``
                        }
                    )
                    .setColor("#083c6c")
                    .setFooter("Reminder, this command is only JS.")
                ]})
            }
            const evaled = eval(code);
            const cleaned = await clean(evaled);
            const embed = new EmbedBuilder()
            .setAuthor({ name: `Evaluated Code! 👩‍💻`, iconURL: `${client.user.avatarURL()}`})
            .addFields(
                {
                    name: `Code Sent:`, value: `\`\`\`js\n${code}\n\`\`\``
                },
                {
                    name: "Output:", value: `\`\`\`js\n${cleaned}\n\`\`\``
                }
            )
            .setColor("#083c6c")
            .setFooter("Reminder, this command is only JS.")
            interaction.reply({ embeds: [embed], ephemeral: true})
        } catch (error) {
            const embed = new EmbedBuilder()
            .setAuthor({ name: `Evaluated Code! 👩‍💻`, iconURL: `${client.user.avatarURL()}`})
            .addFields(
                {
                    name: `Code Sent:`, value: `\`\`\`js\n${code}\n\`\`\``
                },
                {
                    name: "Output:", value: `\`ERROR\` \`\`\`xl\n${error}\n\`\`\``
                }
            )
            .setColor("#083c6c")
            .setFooter("Reminder, this command is only JS.")
            interaction.reply({ embeds: [embed], ephemeral: true})
        }
    }
}