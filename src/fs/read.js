import * as fs from "fs/promises";
import * as path from "path";

const read = async () => {
  const dir = "src/fs/files";
  const fileToRead = path.join(dir, "fileToRead.txt");
  console.log(fileToRead);

  try {
    await fs.access(fileToRead);

    const fileContent = await fs.readFile(fileToRead, "utf-8");

    console.log("File content: ", fileContent);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed: File not found");
    } else {
      throw new Error("FS operation failed: " + error.message);
    }
  }
};

await read();
