module.exports = {
    name: 'interactionCreate',
  
    async execute (interaction, client) {
      if (!interaction.isButton()) return
      const buttonCustomId = interaction.customId.split('_')
      const Button = client.buttons.get(buttonCustomId[0])
      if (!Button) return
  
      Button.execute(interaction, client, buttonCustomId.slice(1))
    }
  }