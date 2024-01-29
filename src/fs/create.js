import * as fs from "fs/promises";
import * as path from "path";

const create = async () => {
  const filePath = path.join("src/fs/files", "fresh.txt");

  try {
    await fs.access(filePath);

    throw new Error("FS operation failed: File already exists");
  } catch (err) {
    if (err.code === "ENOENT") {
      try {
        await fs.writeFile(filePath, "I am fresh and young");
        console.log("File created successfully: fresh.txt");
      } catch (writeErr) {
        console.error("Error writing to file:", writeErr.message);
      }
    } else {
      console.error("Error accessing file:", err.message);
    }
  }
};

create();
