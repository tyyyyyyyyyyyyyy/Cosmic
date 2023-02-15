const { loadCommands } = require("../../Handlers/commandHandler");
const { loadButtons } = require('../../Handlers/buttonHandler');
module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log("Client is now ready!");
        client.user.setActivity("with tyyy#1022's code!")
        loadCommands(client);
        loadButtons(client);
    }
}