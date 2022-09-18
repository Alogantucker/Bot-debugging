// IMPORTS ...
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');


module.exports = async function newStudioSessionLeakEmbed(client, interaction, targetChannel, attachment = '', role1 = 'nobody', role2 = '', role3 = '', leakName, dateOfLeak, altLeakNames = '', price = 'FREE', notes = ''){
  console.log('Running New Studio SessionLeak Embed');
  let description= '';
  let completeEmbed;
  if (altLeakNames !== '') {
    description = `Alternative Names : ${altLeakNames}`
  } else {
    description = 'unknown';
  }
      let embed;
      if (notes !== '') {
        embed = new EmbedBuilder()
        .setTitle(`New Studio Session Leak - ${leakName}`)
        .setColor(`Burple`)
        .setDescription(`${description}`).setThumbnail(`https://c.tenor.com/GmbAUxO4-48AAAAC/juice-wrld.gif`)
        .addFields(
          {name: "Date Leaked : ", value: `${dateOfLeak}`, inline: true },
          {name: "Additional Notes : ", value: `${notes}`, inline: false },
          {name: "Alert", value: `${role1} ${role2} ${role3}`})
        .setFooter({text: `999 Till the WRLD Blows`})
        .setTimestamp();
        console.log('embed configured');
      } else if (notes === ''){
        embed = new EmbedBuilder()
        .setTitle(`New Studio Session Leak - ${leakName}`)
        .setColor(`Burple`)
        .setDescription(`${description}`).setThumbnail(`https://c.tenor.com/GmbAUxO4-48AAAAC/juice-wrld.gif`)
        .addFields(
          {name: "Date Leaked : ", value: `${dateOfLeak}`, inline: true },
          {name: "Price of Leak : ", value: `${price}`, inline: true },
          {name: "Alert", value: `${role1} ${role2} ${role3}`})
        .setFooter({text: `999 Till the WRLD Blows`})
        .setTimestamp();
        console.log('embed configured');
      }
       else {
        embed = new EmbedBuilder()
        .setTitle(`An Error Has Occured`)
        .setColor(`Burple`)
        .setDescription(`Try Again`)
        .addFields(
          {name: "Date Leaked : ", value: `???`, inline: true },
          {name: "Price of Leak : ", value: `???`, inline: true },
          {name: "Additional Notes : ", value: `???`, inline: false },
          {name: "Alert", value: `???`})
        .setFooter({text: `999 Till the WRLD Blows`})
        .setTimestamp();
        console.log('embed configured');
      }


      if (attachment === '') {
        completeEmbed = { content: `Are you sure you want to send to channel: ${targetChannel} ?`,embeds: [embed], ephemeral: true, components: [new ActionRowBuilder().setComponents(
        	new ButtonBuilder().setCustomId('sendAnnouncement').setLabel('Send Announcement').setStyle(ButtonStyle.Danger)

        )]};
      } else {
        completeEmbed = { content: `Are you sure you want to send to channel: ${targetChannel} ?`,embeds: [embed], files: [attachment], ephemeral: true, components: [new ActionRowBuilder().setComponents(
        	new ButtonBuilder().setCustomId('sendAnnouncement').setLabel('Send Announcement').setStyle(ButtonStyle.Danger)

        )]};
      }

      interaction.editReply(completeEmbed)
      return completeEmbed;

     // interaction.editReply({ embeds: [embed], components: [new ActionRowBuilder().setComponents(
     // 	new ButtonBuilder().setCustomId('leak').setLabel('New Leak').setStyle(ButtonStyle.Danger)
     // 	new ButtonBuilder().setCustomId('ogfile').setLabel('New OG File Leak').setStyle(ButtonStyle.Danger)
     // 	new ButtonBuilder().setCustomId('studiosession').setLabel('New Studio Sessions').setStyle(ButtonStyle.Danger)
     // )] })

   console.log('after embed');
  }
