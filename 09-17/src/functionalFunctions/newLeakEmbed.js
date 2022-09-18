// IMPORTS ...
const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require('discord.js');


module.exports = async function newLeakEmbed(client, interaction, targetChannel, attachment = '', role1 = 'nobody', role2 = '', role3 = '', leakName, dateOfLeak, altLeakNames = '', price = 'FREE', notes = '') {
console.log('Running New Leak Embed');
const sendEmbed = EmbedBuilder.from({
  title: `New Leak! - ${leakName}`,
  description: altLeakNames.length ? `Alternative Names : ${altLeakNames}` : '',
  color: '1146986',
  footer: {
      text: "999 Till the WRLD Blows"
  },
  fields: [
      {
          name: "Date Leaked : ",
          value: `${dateOfLeak}`,
          inline: true
      },
      {
          name: "Price of Leak : ",
          value: `${price}`,
          inline: true
      }, // since variable price is never empty
      {
          name: "Alert",
          value: `${role1} ${role2} ${role3}`
      },
  ],
  thumbnail: {
      url: 'https://c.tenor.com/GmbAUxO4-48AAAAC/juice-wrld.gif',
  }
}).setTimestamp();


console.log(`sendEmbed.fields`, sendEmbed.fields);
if (notes.length) {
  // basically we insert fields here
  sendEmbed.fields = Object.assign(sendEmbed.fields,{
    name: "Additional Notes : ",
    value: `${notes}`,
    inline: false
  });
}

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
  files: [...(attachment.length ? [{ attachment }] : [])] // spread an empty if it's nothing so we end up with an empty array
}
console.log(`completeEmbed.fields`, completeEmbed.fields);
console.log(`completeEmbed.embeds.fields`, completeEmbed.embeds.fields);

console.log(`bout to return completeEmbed line 65 of newLeakEmbed.js`);
// await interaction.followUp(completeEmbed);
return completeEmbed

console.log('after embed');
}
