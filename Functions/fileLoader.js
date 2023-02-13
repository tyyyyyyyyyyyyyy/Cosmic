const { glob } = require("glob");
const { dirname } = require("path");
const { promisify } = require("util");
const proGlob = promisify(glob);

async function loadFiles(dirName){
    const Files = await proGlob(`${process.cwd().replace(/\\/g, "/")}/${dirname}/**/.js`);
    Files.forEach((file) => delete require.cash[require.resolve(file)]);
    return Files;
};

module.exports = { loadFiles }
