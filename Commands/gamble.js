var allowed = {}

module.exports = class gamble {
    constructor(client) {
        this.client = client;
        this.name = "gamble";
        this.info = "Gamble some money. Modes: `flip <heads / <tails> <amount>`";
        this.args = "";
    }

    async run(message, args) {
        // console.log(allowed)
        setTimeout(() => {
            allowed[message.author.id] = true;
        }, 3600000);
        this.client.events.log(`${message.author.id} is now allowed to bet.`, `db`)
        let arg = args.split(" ")
        if (arg[0] == 'flip') {
            if (arg[1] == 'heads') {
                let data = await this.client.data.load()
                //message.channel.send(`Soon:tm:`)
                if (data.users[message.author.id].bits < arg[2]) return message.channel.sendMessage(`You do not have enough bits!`)
                if (allowed[message.author.id] == false) return message.channel.sendMessage("**Please allow 1 hour in between bets.**")
                if (arg[2].includes('-')) return message.channel.sendMessage(`No negative numbers!`)
                message.channel.sendMessage(`${message.author} has bet ${arg[2]} <:bit:292703565217136640> on heads!`).then(m => {
                    let chance = Math.random()

                    if (chance > .5) {
                        m.edit(`${message.author} **has won ${arg[2] * 2} <:bit:292703565217136640>!**`)
                        let numb = arg[2] * 2
                        data.users[message.author.id].bits += parseInt(numb)
                        this.client.data.save(data)
                        allowed[message.author.id] = false
                        this.client.events.log(`${message.author.id} is now not allowed to bet.`, `db`)
                    }
                    if (chance < .5) {
                        m.edit(`${message.author} **has lost ${arg[2]} <:bit:292703565217136640>!**`)
                        let numb = arg[2]
                        data.users[message.author.id].bits -= parseInt(numb)
                        this.client.data.save(data)
                        allowed[message.author.id] = false
                        this.client.events.log(`${message.author.id} is now not allowed to bet.`, `db`)
                    }
                })
            }
            if (arg[1] == 'tails') {
                let data = await this.client.data.load()
                //message.channel.send(`Soon:tm:`)

                if (data.users[message.author.id].bits < arg[2]) return message.channel.sendMessage(`You do not have enough bits!`)
                message.channel.sendMessage(`${message.author} has bet ${arg[2]} <:bit:292703565217136640> on tails!`).then(m => {
                    let chance = Math.random()

                    if (chance > .5) {
                        m.edit(`${message.author} **has won ${arg[2] * 2} <:bit:292703565217136640>!**`)
                        let numb = arg[2] * 2
                        data.users[message.author.id].bits += parseInt(numb)
                        this.client.data.save(data)
                        allowed[message.author.id] = false
                        this.client.events.log(`${message.author.id} is now not allowed to bet.`, `db`)
                    }
                    if (chance < .5) {
                        m.edit(`${message.author} **has lost ${arg[2]} <:bit:292703565217136640>!**`)
                        let numb = arg[2]
                        data.users[message.author.id].bits -= parseInt(numb)
                        this.client.data.save(data)
                        allowed[message.author.id] = false
                        this.client.events.log(`${message.author.id} is now not allowed to bet.`, `db`)
                    }
                })
            }
        }

    }

}
