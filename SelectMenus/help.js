const { EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  id: "help",
  developer: true,
  permission: PermissionFlagsBits.Administrator,
  /**
   * 
   * @param {ChatInputCommandInteraction} interaction 
   */
  async execute(interaction, client) {

    const embed = new EmbedBuilder()
    .setAuthor({ name: `Help! 📃 `, iconURL: `${client.user.avatarURL()}`})
    .setDescription(`Below is the commands for ${interaction.values[0].replace('help-','')}`)
    .setColor("#083c6c")

    const commands = client.commands;

    const addFields = async () => {
        for ( const cmd of commands){
            console.log(cmd.category)
            // console.log(interaction.values[0].replace('help-', ''))
            if(cmd.category == interaction.values[0].replace('help-','')){
                const cmds = await client.application.commands.fetch();
                const cmdid = cmds.find(c => c.name == cmd.data.name).id;
                embed.addFields({ name: `</${cmd.data.name}:${cmdid}>`, value: `${cmd.data.description}`});
            }
        }
    }
    await addFields();
    interaction.update({ embeds: [embed] });
  },
};
