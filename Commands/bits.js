module.exports = class bits {
    constructor(client) {
        this.client = client;
        this.name = "bits";
        this.info = "Views how many bits you have.";
        this.args = "";
    }

    async run(message, args) {
        let data = await this.client.data.load();
        if (message.mentions.users.size === 1) {
            let kickMember = message.guild.member(message.mentions.users.first())
            let id = kickMember.id
            message.channel.sendEmbed({
                description: `${kickMember} has a total of ${data.users[id].bits} <:bit:292703565217136640>`,
                color: 0xB37CF4
            })
        } else {
            message.channel.sendEmbed({
                description: `You have a total of ${data.users[message.author.id].bits} <:bit:292703565217136640>`,
                color: 0xB37CF4
            })
        }


    }
}
