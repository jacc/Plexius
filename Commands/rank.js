module.exports = class Rank {
    constructor(client) {
        this.client = client;
        this.name = "rank";
        this.info = "Join/Leave public roles. Usage: `<role>` Created by: NubbyTM#6817";
        this.args = "";
    }

    async run(message, args) {
        if (!args){message.channel.sendMessage(":x: Please check the usage! :x:");}
        var arg = args.split(" ").slice(1)
        let queen = message.guild.roles.find("name", "Queen");
        let trash = message.guild.roles.find("name", "Trash");
        let noob = message.guild.roles.find("name", "Noob");
           if (arg[0]=="queen"){
             if (message.member.hasRole(queen.id)){
                message.member.removeRole(queen.id);
             } else {
                message.member.addRole(queen.id);
             }
           } else if (arg[0]=="trash"){
             if (message.member.hasRole(trash.id)){
                message.member.removeRole(trash.id);
             } else {
                message.member.addRole(trash.id);
             }
           } else if (arg[0]=="noob"){
             if (message.member.hasRole(noob.id)){
                message.member.removeRole(noob.id);
             } else {
                message.member.addRole(noob.id);
             }
           }
           message.channel.sendMessage(":white_check_mark: Added/removed " + arg[0] + " :white_check_mark:");
    }
}
