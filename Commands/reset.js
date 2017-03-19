module.exports = class Reset {
    constructor(client) {
        this.client = client;
        this.name = "reset";
        this.info = "Resets a user's bits. (Requires **Discord Mod**.)";
        this.args = "";
    }

    async run(message, args) {
        let role = message.guild.roles.find("name", "Discord Mod")
        var a = new Date();
        //var arg = message.content.split(" ").slice(1).join(' ')
        if (message.author.id === "153244623219851266" || message.member.roles.has(role.id)) {
            //message.channel.send(`Soon:tm:`)
            let mem = message.guild.member(message.mentions.users.first())
            let id = mem.id
            //console.log(mem, id)
            let data = await this.client.data.load()
            data.users[id] = {
                bits: 100
            }
            await this.client.data.save(data)
            message.channel.send(`Set ${mem} back to 100 bits!`)
        } else {
            message.channel.send(`No permissions!`)
        }
    }
}
