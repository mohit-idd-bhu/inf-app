import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(),"data", "data.json");

async function writeUserData(users) {
    try {
      await fs.writeFile(filePath, JSON.stringify(users));
    } catch (error) {
      console.error("Error writing user data", error);
    }
}

module.exports=writeUserData;