module.exports = class leaderboard {
    constructor(client) {
        this.client = client;
        this.name = "leaderboard";
        this.info = "Views how many bits you have.";
        this.args = "";
    }

    async run(message, args) {
        var arr = [];
        let data = await this.client.data.load();
        var data3 = Object.keys(data.users).map(u => [u, data.users[u].bits]).sort((a,b)=>b[1]-a[1]).slice(0,10)
        //require('util').inspect(data3);
        //data2.sort((a,b)=>a-b).reverse().slice(0,10)
        //console.log(data2)

        // data3.map(u => {
        //   `${this.client.users.get(u[0][0]).username}#${this.client.users.get(u[0][0]).discriminator}: ${u[0][1]} <:bit:292703565217136640>`
        // })

        message.channel.sendEmbed({
          description: `${this.client.users.get(data3[0][0]).username}#${this.client.users.get(data3[0][0]).discriminator}: ${data3[0][1]} <:bit:292703565217136640>\n${this.client.users.get(data3[1][0]).username}#${this.client.users.get(data3[1][0]).discriminator}: ${data3[1][1]} <:bit:292703565217136640>\n${this.client.users.get(data3[2][0]).username}#${this.client.users.get(data3[2][0]).discriminator}: ${data3[2][1]} <:bit:292703565217136640>\n${this.client.users.get(data3[3][0]).username}#${this.client.users.get(data3[3][0]).discriminator}: ${data3[3][1]} <:bit:292703565217136640>\n${this.client.users.get(data3[4][0]).username}#${this.client.users.get(data3[4][0]).discriminator}: ${data3[4][1]} <:bit:292703565217136640>`,
          color: 0xB37CF4,
          title: `${message.guild}'s Bit Leaderboard`,
          url: `https://mineplex.com`,
          footer: {text: `Generated at ${new Date().toUTCString()}`, icon_url: this.client.user.avatarURL}
        })
    }
}
