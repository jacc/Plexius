const Discord = require('discord.js')
module.exports = class GitHub {
    constructor(client) {
        this.client = client;
        this.name = "github";
        this.info = "Command group.";
        this.args = "<pull>";
    }

    async run(message, args) {
        if (args == '') return message.channel.sendMessage("Check out my GitHub repo here!\nhttps://github.com/jaacks/plexius")
        if (args.includes('pull')) {
            if (message.author.id != "116293018742554625" && message.author.id != "153244623219851266") return message.channel.sendMessage(`:warning: Failed to **pull** from **GitHub**, reason: \`Invalid permissions to execute command.\`.`);

            message.channel.sendMessage(`:ok_hand: **Pulling from git...**`);

            const p = require('child_process');
            p.exec(`cd ${process.cwd()}\ngit pull https://github.com/jaacks/plexius.git`, function(err, stdout, stderror) {
                if (err) return message.channel.sendMessage(`**Update Error**: ${err}`);

                message.channel.sendMessage("`STDOUT`\n```\n" + stdout == '' ? 'Nothing.' : stdout + "\n```\n\n`STDERROR`\n```\n" + stderror == '' ? 'Nothing.' : stderror + "\n```").then(m => {
                    m.channel.sendMessage(`Restarting! :wave:`)
                    require('child_process').exec('pm2 restart plexius')
                })

            });
        }
    }
}
