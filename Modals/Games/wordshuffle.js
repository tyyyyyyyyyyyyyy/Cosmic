module.exports = {
    id: "wordshuffle",
    developers: false, //true
    ownerOnly: false, //true
    Permission: "SEND_MESSAGES",
    async execute(interaction, client) {

        const InputText = interaction.fields.getTextInputValue("wordguess"); //Text Input Id

        interaction.reply(`Inputed Text : ${InputText}`)
       
          }
        }