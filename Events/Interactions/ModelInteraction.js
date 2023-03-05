const {
    Client,
    ModalSubmitInteraction,
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    name: "interactionCreate",
    /**
     * @param {Client} client
     * @param {ModalSubmitInteraction} interaction
     */
  
    async execute(interaction, client) {
      try {
        if (!interaction.isModalSubmit()) return;
        const Modal = client.modals.get(interaction.customId);
  
        if (!Modal)
          return interaction.reply({
            embeds: [
              new EmbedBuilder().setColor("Red").setDescription("Missing Modal"),
            ],
            ephemeral: true,
          });
  
        if (
          Modal.permission &&
          !interaction.member.permissions.has(Modal.permission)
        )
          return interaction.reply({
            embeds: [
              new EmbedBuilder()
                .setColor("RED")
                .setDescription(
                  "🚫Missing Permission🚫\n<:invalid:1063006286104502323> You do not have the required permission"
                ),
            ],
            ephemeral: true,
          });
  
        if (
          Modal.ownerOnly &&
          interaction.member.id !== interaction.guild.ownerId
        )
          return interaction.reply({
            embeds: [
              new EmbedBuilder()
                .setColor("BLUE")
                .setDescription(
                  " Your are not the Server Owner <:serverowner:1063004426119413791>"
                ),
            ],
            ephemeral: true,
          });
        let dev;
        if (Modal.developers === true)
          dev = interaction.user.id !== "922231264919031838";
        if (dev)
          return interaction.reply({
            embeds: [
              new EmbedBuilder()
                .setColor("BLUE")
                .setThumbnail(
                  "https://cdn.discordapp.com/attachments/1063004547267690547/1063004841670098945/6587-early-verified-bot-developer-a.gif"
                )
                .setDescription(
                  "<:Developer:1063004003190984734> Your are not the **Developer**"
                ),
            ],
            ephemeral: true,
          });
  
        Modal.execute(interaction, client);
      } catch (err) {
        console.log(err);
      }
    },
  };
  