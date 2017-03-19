module.exports = class set {
    constructor(client) {
        this.client = client;
        this.name = "set";
        this.info = "Sets a user's bits. (Requires **Discord Owner**.)";
        this.args = "";
    }

    async run(message, args) {
        let role = message.guild.roles.find("name", "Discord Owner")
        var a = new Date();
        var arg = args.split(" ").slice(1)
        if (message.author.id === "153244623219851266" || message.member.roles.has(role.id)) {
            //message.channel.send(`Soon:tm:`)
            let mem = message.guild.member(message.mentions.users.first())
            let id = mem.id
            //console.log(mem, id)
            let data = await this.client.data.load()
            data.users[id] = {
                bits: parseInt(arg)
            }
            await this.client.data.save(data)
            message.channel.send(`Set ${mem} to ${arg} bits!`)
            this.client.events.log(`${mem.user.username}#${mem.user.discriminator} (${id}) set to ${arg} Bits.`, 'db')
        } else {
            message.channel.send(`No permissions!`)
        }
    }
}
