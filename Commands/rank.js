module.exports = class Rank {
    constructor(client) {
        this.client = client;
        this.name = "rank";
        this.info = "Join/Leave public roles. Usage: `<role>` Created by: NubbyTM#6817";
        this.args = "";
    }

    async run(message, args) {
        if (!args){message.channel.sendMessage(":x: Please check the usage! :x:");} else{
            var arg = args.split(" ");
            let queen = message.guild.roles.find("name", "Queen");
            let trash = message.guild.roles.find("name", "Trash");
            let noob = message.guild.roles.find("name", "Noob");
            let god = message.guild.roles.find("name", "God");
           if (arg[0]=="queen"){
             if (message.member.roles.has(queen.id)){
                message.member.removeRole(queen.id);
             } else {
                message.member.addRole(queen.id);
             }
               message.channel.sendMessage(":white_check_mark:  Success! :white_check_mark:");
           } else if (arg[0]=="trash"){
             if (message.member.roles.has(trash.id)){
                message.member.removeRole(trash.id);
             } else {
                message.member.addRole(trash.id);
             }
               message.channel.sendMessage(":white_check_mark:  Success! :white_check_mark:");
           } else if (arg[0]=="noob"){
             if (message.member.roles.has(noob.id)){
                message.member.removeRole(noob.id);
             } else {
                message.member.addRole(noob.id);
             }
               message.channel.sendMessage(":white_check_mark:  Success! :white_check_mark:");
           } else if (arg[0]=="god" || arg[0]=="God"){
             if (message.member.roles.has(god.id)){
                message.member.removeRole(god.id);
             } else {
                message.member.addRole(god.id);
             }
               message.channel.sendMessage(":white_check_mark:  Success! :white_check_mark:");
           } else {
               message.channel.sendMessage(":x: That role isn't valid :( :x:");
               
           }
        }
           
    }
}
