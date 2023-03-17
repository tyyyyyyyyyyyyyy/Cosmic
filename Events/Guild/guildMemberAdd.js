const { loadCommands } = require("../../Handlers/commandHandler");
const { loadButtons } = require('../../Handlers/buttonHandler');
const { profileImage} = require("discord-arts")
const { AttachmentBuilder } = require("discord.js")

module.exports = {
    name: "guildMemberAdd",
    once: true,
    async execute(member, client) {
        const buffer = await profileImage(`${member.user.id}`, {
            customTag: 'Just joined!',
            customBackground: 'https://media.discordapp.net/attachments/1072233090530942986/1086004239815430154/out-of-focus-computer-code-in-green-color-on-a-digital-screen_4nc5ji3ux_thumbnail-1080_01.png?width=550&height=309',
            borderColor: ['#142d19'],
            presenceStatus: 'dnd'
        });
        
        const attachment = new AttachmentBuilder(buffer)

        member.guild.channels.cache.get("1072233075200765953").send({ files: [attachment] })
    }
}