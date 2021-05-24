
cooldown: 8,
  description: "**all commands Pinky**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(``)
    .setTitle(`Pinkt Is One`)
    .setDescription(`


 [ Link Bot ]() · [ Server Support ]()

List of all commands
• ────── emoji_102 ────── •
☢◢User Commands
+invite - +ping 
+stats - +support
+hosting - +docs
+howtohost - +djs

• ────── RAES ────── •
☢◢Music Commands
+addprevious - +addsimilar 
+autoplay - +join
+jump - +loob 
+loobqueue - +lyrics
+move - +moveme 
+nowplaying - +pause
+play(p) - +playlist
+playsc - +play skip 
+queue - +radio
+search - +shuffle 
+stop - +volume 
────── Sixo ────── •
+8ball - +delete
+fact - +joke
+kiss - +meme
+rip - +shit
+say - +purge
• ────── RAES ────── •
+addbotchat - +adddj
+prefix - +removebotchat 
+reset - settings - +setup 
+toggledjoinly - +toggleplaymssnge

• ────── emoji_97 ────── •
☢◢Moderator Commands
+avatar - +botinfo - +help
+invite - +ping - +reactions
+serverinfo - +stats - +userinfo 
+uptime - +ban - +kick 
+embed - +slawmode
+unmute - +mute
+unwarn - +warn - +warnings 

• ────── FILTER────── •
☢◢Owner Commands
+bassboost - +cleareq 
+clearfilter - +equalizer 
• ────── emoji_107 ────── •
☢◢Links
Invite
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};









/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
