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

    const chosenCategory = interaction.values[0].replace('help-', '');
    console.log(chosenCategory)
    const commandsToAdd = []
    commands.forEach(element => {
      if(element.category == chosenCategory){
        commandsToAdd.push({ name: element.data.name, description: element.data.description, developer: element.developer })
      }
    });
    for( const command of commandsToAdd) {
      const cmds = await client.application.commands.fetch();
      const cmdid = cmds.find(c => c.name = command.name);
      embed.addFields({
        name: `</${command.name}:${cmdid.id}> ${(command.developer) ? "👩‍💻"  : "🟢"}` ,
        value: command.description
      })
      // embed.addFields({
      //   name: `**/${cmd.name}** ${(cmd.developer) ? "👩‍💻"  : "🟢"}` ,
      //   value: cmd.description
      // })
    }
    interaction.update({ embeds: [embed] });
  },
};
