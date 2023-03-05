async function loadModals(client) {
    const Ascii = require("ascii-table");
    const Table = new Ascii("Modals");
    const { loadFiles } = require('../Functions/fileLoader')
    const Files = await loadFiles("Modals");
  
  
    Files.forEach((file) => {
      const ModalFile = require(file);
      if (!ModalFile.id) return;
      client.modals.set(ModalFile.id, ModalFile);
      Table.setHeading("Modals list", "Status");
      Table.addRow(
        `${ModalFile.id || "There are no models in my collection"}`,
        "       🟢"
      );
    });
    console.log(Table.toString());
  }
  module.exports = { loadModals };
  
  