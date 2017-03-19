module.exports = class givebits {
    constructor(client) {
        this.client = client;
        this.name = "givebits";
        this.info = "Send another user some bits! Usage: `@user <bit amount>`";
        this.args = "";
    }

    async run(message, args) {
        if(!args) return message.channel.sendMessage("**Usage**: `?givebits @user <bit amount>`")
        var arg = args.split(" ").slice(1)
        let data = await this.client.data.load();
        let mem = message.guild.member(message.mentions.users.first())
        if (arg[0].includes('-')) return message.channel.sendMessage(`No negative numbers!`)
        if(data.users[message.author.id].bits < arg[0]) return message.channel.sendMessage(`**You do not have enough bits!**`)
        data.users[message.author.id].bits -= parseInt(arg[0])
        data.users[mem.id].bits += parseInt(arg[0])
        this.client.data.save(data);
        message.channel.sendMessage(`${message.author}**, successfully sent ${arg[0]} <:bit:292703565217136640> to ${mem} ! Make sure to say thank you <3**`)
    }
}
