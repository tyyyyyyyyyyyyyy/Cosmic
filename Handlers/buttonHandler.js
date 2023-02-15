const { loadFiles } = require("../Functions/fileLoader");

async function loadButtons (client) {
  const ascii = require("ascii-table");
  const table = new ascii().setHeading("Buttons", "Status");

  await client.buttons.clear();

  const Files = await loadFiles("Buttons");

  console.log('Buttons Loaded')

  Files.forEach((file) => {
    const button = require(file);
    client.buttons.set(button.id, button);

    table.addRow(button.id, "✔");
  });

  return console.log(table.toString(), "\nCommands Loaded!")
}
module.exports = { loadButtons }

  // const fs = require('fs')

  // const buttonsFolder = fs.readdirSync('../Buttons')

  // for (const folder of buttonsFolder) {
  //   const buttonFiles = fs.readdirSync(`../Buttons/${folder}`).filter((file) => file.endsWith('.js'))

  //   for (const file of buttonFiles) {
  //     const buttonFile = require(`../Buttons/${folder}/${file}`)
  //     if (!buttonFile.id) return

  //     client.buttons.set(buttonFile.id, buttonFile)
  //   }
  // }