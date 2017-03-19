module.exports = class Eval {
  constructor(client) {
    this.client = client;
    this.name = "eval";
    this.info = "Evals arbitrary JavaScript code.";
    this.args = "";
  }

  async run(message, args) {
    var a = new Date();
    //var arg = message.content.split(" ").slice(1).join(' ')
    if(message.author.id === "153244623219851266" || message.author.id === "116293018742554625") {

      try {

        message.channel.sendEmbed({
        color: 0x32CD32,
        description: `\`OUTPUT\`\n\`\`\`js\n${eval(args)}\n\`\`\``,
        footer: {text: `Operation completed in ${new Date() - a} ms.`}
      })
    } catch(e) {
      message.channel.sendEmbed({
      color: 0x8B0000,
      description: `\`ERROR\`\n\`\`\`js\n${e}\n\`\`\``,
      footer: {text: `Operation completed in ${new Date() - a} ms.`}
    })
  }
    }

}
}
