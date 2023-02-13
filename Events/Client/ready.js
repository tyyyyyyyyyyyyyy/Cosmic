const { loadCommands } = require("../../Handlers/commandHandler");
module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log("Client is now ready!");
        client.user.setActivity("with tyyy#1022's code!")
        loadCommands(client);
    }
}