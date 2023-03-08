const { loadCommands } = require("../../Handlers/commandHandler");
const { loadButtons } = require('../../Handlers/buttonHandler');
const accountSid = 'AC8345b5763f622a2bc5e72e76418685b1';
const authToken = '5a9686923e0ac6e5f97865b521ba3a28';
const twilioclient = require('twilio')(accountSid, authToken);
module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log("Client is now ready!");
        client.user.setActivity("with tyyy#1022's code!")
        loadCommands(client);
        loadButtons(client);
        // twilioclient.messages
        // .create({
        //     body: 'Your bot is now online!',
        //     from: '+447723192621',
        //     to: '+447368429662'
        // })
        // .then(message => console.log(message.sid))
    }
}