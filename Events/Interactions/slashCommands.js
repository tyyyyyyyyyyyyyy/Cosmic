const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {              
    name: "interactionCreate",
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        if(!interaction.isChatInputCommand()) return;
        if(interaction.isAnySelectMenu()) return;

        const command = client.commands.get(interaction.command.name);
        if(!command) return interaction.reply({ content: "This command is outdated!", ephemeral: true });

        if(command.developer && interaction.user.id !== "922231264919031838"){
            return interaction.reply({ content: "This command is only available to developers!", ephemeral: true })
        };

        command.execute(interaction, client)
    }
}