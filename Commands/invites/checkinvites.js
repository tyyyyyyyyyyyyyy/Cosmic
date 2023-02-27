const { promisify } = require('util');
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
    category: "invites",
    data: new SlashCommandBuilder()
    .setName("checkinvites")
    .setDescription("Generate a custom invite for your friends to join!")
    .addUserOption(option => option
        .setName("target")
        .setDescription("User you want to check!")
    ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client){
        const target = interaction.options.getUser("target") || interaction.user;
        try{
            const invites = interaction.guild.invites.fetch().then((invs) => {
                var userInviteCount = 0
                invs.forEach(invite => {
                    if(invite.inviterId == target.id) {
                        userInviteCount += invite.uses;
                    }
                })
                interaction.reply({ embeds: [
                    new EmbedBuilder()
                    .setAuthor({ name:  `${target.username}'s Invites! 📩`, iconURL: `${client.user.avatarURL()}`})
                    .setDescription(`${target.username} has currently got **${userInviteCount}** Invites!`)
                    .setColor("#083c6c")
                ], ephemeral: true});
            })
        } catch (error) {
            interaction.reply({ embeds: [
                new EmbedBuilder()
                .setAuthor({ name:  `Error! ❌`, iconURL: `${client.user.avatarURL()}`})
                .setDescription(`I have noted the bot developer on this issue!`)
                .setColor("#083c6c")
            ], ephemeral: true})
        }
        // try { 
        //     // const inviteChannel = interaction.guild.channels.cache.get("1072233062471045282");
        //     interaction.guild.channels.cache.forEach(channel => {
        //         const inviteChannel = interaction.guild.channels.cache.get(`${channel.id}`);
        //         inviteChannel.fetchInvites().then((invites) => {
        //             var userInviteCount = 0
        //             invites.forEach(element => {
        //                 if (element.inviterId == target.id){
        //                     userInviteCount += element.uses;
        //                 }
        //             });
        //             interaction.reply({ embeds: [
        //                 new EmbedBuilder()
        //                 .setAuthor({ name:  `${target.username}'s Invites! 📩`, iconURL: `${client.user.avatarURL()}`})
        //                 .setDescription(`${target.username} has currently got **${userInviteCount}** Invites!`)
        //                 .setColor("#083c6c")
        //             ], ephemeral: true});
        //         })
        //     })
        // } catch (error) {
        //     console.log(error)
        //     interaction.reply("something went wrong")
        // }
    }
}