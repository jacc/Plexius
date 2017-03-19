const fs = require('fs');
const config = require('../config.json')
const allowed = {}
const Chalk  = require('chalk')

module.exports = class Events {
    constructor(client) {
        this.client = client;
    }

    ready() {
        this.log('Ready!');
        this.client.user.setGame(`?help | us.mineplex.com`);
        const commands = fs.readdirSync(`./Commands/`);
        for (const command in commands) {

            const mod = new(require(`../Commands/${commands[command]}`))(this.client);
            this.log(`Loaded ${mod.name}.`, "cmd")
            this.client.commands.set(mod.name, require(`../Commands/${commands[command]}`))
        }
    }

    async message(message) {

      if(message.author.bot) return;
        let data = await this.client.data.load();
        if(!data.users[message.author.id]) {
          data.users[message.author.id] = {
            bits: 100
          }
          await this.client.data.save(data);
          message.channel.sendMessage(`${message.author}, I've noticed that you didn't have a Bit profile. I've gone ahead and added 100 <:bit:292703565217136640> to your account. Enjoy!`)
          this.log(`${message.author.username}#${message.author.discriminator} (${message.author.id}) | Bit profile created.`, "db")
        }

        let bitNumb = Math.floor(Math.random() * 11)
        data.users[message.author.id].bits += bitNumb
        await this.client.data.save(data);
        //this.log(`${message.author.username}#${message.author.discriminator} (${message.author.id}) | Bit amount updated to ${data.users[message.author.id].bits} bits.`, "db")

        // if(!allowed[message.author.id]) return;
        //
        // if(allowed[message.author.id] == true) {
        //   let bitNumb = Math.floor(Math.random() * 11)
        //   data.users[message.author.id].bits += bitNumb
        //   await this.client.data.save(data);
        //   allowed[message.author.id] = false;
        //   setTimeout(() => {
        //     allowed[message.author.id] = true;
        //     console.log(`${message.author.id} has been set to allowed.`)
        //   }, 60000);
        //   console.log(`${message.author.id} has been set to unallowed.`)
        // }



        if (message.content.startsWith(config.prefix)) {
          //console.log(allowed)
            // console.log('starts with prefix')
            let command = message.content.substr(config.prefix.length).split(" ")[0];
            let args = message.content.substr(config.prefix.length + command.length + 1)
            // console.log(command, args)
            if (this.client.commands.get(command)) {
                try {
                    await new(this.client.commands.get(command))(this.client).run(message, args);
                } catch (e) {
                    console.error(e);
                }
            }
        }
    }
    log(text, type) {
      if(!type) console.log(`${Chalk.bgGreen(new Date().toUTCString())} ${text}`);
      if(type == 'warn') console.log(`${Chalk.bgYellow(new Date().toUTCString())} ${text}`);
      if(type == 'error') console.log(`${Chalk.bgRed(new Date().toUTCString())} ${text}`);
      if(type == 'cmd') console.log(`${Chalk.bgBlue(new Date().toUTCString())} ${text}`);
      if(type == 'db') console.log(`${Chalk.bgMagenta(new Date().toUTCString())} ${text}`);
    }
}
