module.exports = class send {
    constructor(client) {
        this.client = client;
        this.name = "send";
        this.info = "Announces a Plexius:tm: update!";
        this.args = "";
    }

    async run(message, args) {
        let role = message.guild.roles.find("name", "Discord Owner")
        if (message.author.id === "153244623219851266" || message.member.roles.has(role.id)) {
          message.delete()
          this.client.channels.get('292820125625614346').sendEmbed({
            title: `New Plexius Announcement`,
            description: args,
            color: 0xFF7A49,
            url: `https://mineplex.com`,
            author: {name: `${message.author.username}#${message.author.discriminator}`, icon_url: message.author.avatarURL}
          })
          message.channel.sendMessage(`:ok_hand:`)
        } else {
            message.channel.send(`No permissions!`)
        }
    }
}
