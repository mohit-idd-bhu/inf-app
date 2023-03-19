import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(),"data", "data.json");

async function readUserData() {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading user data", error);
    return [];
  }
}

module.exports=readUserData;