// sayuri-optimizer v18.r170922
// src: https://sourceb.in/JuIkDAryU7
// config: code(js), flag: auto | withComments, ignoreSource: allComments
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
// lib discordjs@14.x.x

/** @interface inferOnlyExport(newLeakEmbed)
interface Config {
    client: Client,
    interaction: MessageInteraction,
    targetChannel: TextChannel | ThreadChannel,
    attachment: string,
    role1?: string,
    role2?: string,
    role3?: string,
    leakName: string,
    altLeakNames?: string,
    dateOfLeak: string,
    price?: string,
    notes: string,
}
*/

module.exports = async function newLeakEmbed({ // infer @interface Config
    client,
    interaction,
    targetChannel,
    attachment = '',
    role1 = 'nobody',
    role2 = '',
    role3 = '',
    leakName,
    dateOfLeak,
    altLeakNames = '',
    price = 'FREE',
    notes = ''
}/*: Config */){
    const sendEmbed = EmbedBuilder.from({
        title: `New Leak! - ${leakName}`
        description: altLeakNames.length ? `Alternative Names : ${altLeakNames}` : 'unknown'
        color: 'Burple',
        footer: {
            text: "999 Till the WRLD Blows"
        },
        fields: {
            {name: "Date Leaked : ", value: `${dateOfLeak}`, inline: true },
            {name: "Price of Leak : ", value: `${price}`, inline: true }, // since variable price is never empty
            {name: "Alert", value: `${role1} ${role2} ${role3}`})
        },
        thumbnail: "https://c.tenor.com/GmbAUxO4-48AAAAC/juice-wrld.gif"
    }).setTimestamp();

    if (notes.length)
        // basically we insert fields here
        completeEmbed.fields.splice(1, 0, {name: "Additional Notes : ", value: `${notes}`, inline: false });

    const completeEmbed = {
        content: `Are you sure you want to send to channel: ${targetChannel} ?`,
        embeds: [sendEmbed],
        ephemeral: true,
        components: [
            ActionRowBuilder.from({
                components: [
                    ButtonBuilder.from({
                        customId: 'sendAnnouncement',
                        label: 'Send Announcement',
                        style: ButtonStyle.Danger
                    })
                ]
            })
        ],
        files: [attachment.length ? attachment : ...[]] // spread an empty if it's nothing so we end up with an empty array
    }
    await interaction.editReply(completeEmbed);
    return completeEmbed
}
