module.exports = class Ping {
  constructor(client) {
    this.client = client;
    this.name = "ping";
    this.info = "Checks the bots status.";
    this.args = "";
  }

  async run(message, args) {
    var a = new Date()
    message.channel.sendMessage('Pong!').then(m => {
      m.edit(`Pong! \`${new Date() - a}ms\` `)
    })
  }
}
