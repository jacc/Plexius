module.exports = class help {
  constructor(client) {
    this.client = client;
    this.name = "help";
    this.info = "Views commands.";
    this.args = "";
  }

  pad(str, l) {
      return str + ' '.repeat(l - str.length + 1);
  }

  async run(message, args) {
    let final = "";
    this.client.commands.forEach(value => {
      final += `\`?${this.pad(new value().name, 10)}\`: ${new value().info}\n`
    })

    message.channel.sendEmbed({
      description: final,
      color: 0xFF7A49,
      title: `Plexius's Commands`
    })
  }
}
