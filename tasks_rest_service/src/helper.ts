import fs from "fs";

export function readJsonFile<T>(filePath: string): T {
  try {
    const fullPath = `${__dirname}/${filePath}`;
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    return JSON.parse(fileContent) as T;
  } catch (error) {
    console.error(`Error reading JSON file: ${error}`);
    throw error;
  }
}

export function writeJsonFile<T>(filePath: string, data: T) {
  try {
    const fullPath = `${__dirname}/${filePath}`;
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Error writing JSON file: ${error}`);
    throw error;
  }
}
