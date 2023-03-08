const {ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const responses = require("../../Utility/8ballreplies.json")

module.exports = {
    category: "Guilds",
    data: new SlashCommandBuilder().setName("userinfo").setDescription("Get a count of the members in the server!").addUserOption(option => option.setName("user").setDescription("User you want to get info on!")),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction, client) {

        const flags = {
            ActiveDeveloper: "👨‍💻・Active Developer",
            BugHunterLevel1: "🐛・Discord Bug Hunter",
            BugHunterLevel2: "🐛・Discord Bug Hunter",
            CertifiedModerator: "👮‍♂️・Certified Moderator",
            HypeSquadOnlineHouse1: "🏠・House Bravery Member",
            HypeSquadOnlineHouse2: "🏠・House Brilliance Member",
            HypeSquadOnlineHouse3: "🏠・House Balance Member",
            HypeSquadEvents: "🏠・HypeSquad Events",
            PremiumEarlySupporter: "👑・Early Supporter",
            Partner: "👑・Partner",
            Quarantined: "🔒・Quarantined", // Not sure if this is still a thing
            Spammer: "🔒・Spammer", // Not sure if this one works
            Staff: "👨‍💼・Discord Staff",
            TeamPseudoUser: "👨‍💼・Discord Team",
            VerifiedBot: "🤖・Verified Bot",
            VerifiedDeveloper: "👨‍💻・(early)Verified Bot Developer"
        }

        const target = interaction.options.getUser('user') || interaction.user;
        const member = await interaction.guild.members.fetch(target.id);
        const userFlags = member.user.flags ? member.user.flags.toArray() : [];
        const roles = member.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).slice(0, -1);

        interaction.reply({
            embeds: [new EmbedBuilder().setAuthor(
                    {name: `${
                            member.user.username
                        }'s info 📘`, iconURL: `${
                            client.user.avatarURL()
                        }`}
                ).addFields(
                    {
                        name: "Username",
                        value: `${
                            member.user.username
                        }`,
                        inline: true
                    },
                    {
                        name: "Discriminator",
                        value: `${
                            member.user.discriminator
                        }`,
                        inline: true
                    },
                    {
                        name: "Nickname",
                        value: `${
                            member.nickname || 'No nickname'
                        }`,
                        inline: true
                    },
                    {
                        name: "Id",
                        value: `${
                            member.user.id
                        }`,
                        inline: true
                    },
                    {
                        name: "Flags",
                        value: `${
                            userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'
                        }`,
                        inline: true
                    },
                    {
                        name: "Discord joined at",
                        value: `<t:${
                            Math.round(member.user.createdTimestamp / 1000)
                        }>`,
                        inline: true
                    },
                    {
                        name: "Server joined at",
                        value: `<t:${
                            Math.round(member.joinedAt / 1000)
                        }>`,
                        inline: true
                    },
                    {
                        name: `Roles [${
                            roles.length
                        }]`,
                        value: `${
                            roles.length ? roles.join(', ') : 'None'
                        }`,
                        inline: false
                    }
                ).setColor("#083c6c")
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setImage(member.user.bannerURL({ size: 1024 }))]
        })
    }
}
