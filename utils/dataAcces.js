const fs = require("fs").promises;

async function getData() {
    try {
        const data =  await fs.readFile("./data/calculation.json", "utf8");
        return JSON.parse(data);
    } catch (error) {
        const errorMessage = error.message.replace(/"/g, '');
        return res.status(500).json({ message: errorMessage });
    }
  }


module.exports = getData;
