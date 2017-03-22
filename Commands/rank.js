module.exports = class RankCommand {
    constructor(client) {
        this.client = client;
        this.name = "rank";
        this.info = "Join/Leave public roles. Usage: `<role>`";
        this.args = "";
    }

    async run(message, args) {
        let queen = message.guild.roles.find("name", "Queen");
        let trash = message.guild.roles.find("name", "Trash");
        let noob = message.guild.roles.find("name", "Noob");
        if (!args){
           message.channel.sendMessage(":x: Please check the usage! :x:");
        } else {
           if (args[0].toLowerCase() == "queen"){
             if (message.member.hasRole(queen.id)){
                message.member.removeRole(queen.id);
             } else {
                message.member.addRole(queen.id);
             }
           } else if (args[0].toLowerCase() == "trash"){
             if (message.member.hasRole(trash.id)){
                message.member.removeRole(trash.id);
             } else {
                message.member.addRole(trash.id);
             }
           } else if (args[0].toLowerCase() == "noob"){
             if (message.member.hasRole(noob.id)){
                message.member.removeRole(noob.id);
             } else {
                message.member.addRole(noob.id);
             }
           }
           message.channel.sendMessge(":white_check_mark: Added/removed " + args[0] + " :white_check_mark:");
        }
    }
}
