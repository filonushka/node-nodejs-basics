import * as fs from "fs/promises";
import * as path from "path";

const rename = async () => {
  const dir = "src/fs/files";
  const sourceFileName = path.join(dir, "wrongFilename.txt");
  const destinationFileName = path.join(dir, "properFilename.md");

  try {
    await fs.access(sourceFileName);
    await fs.access(destinationFileName);

    throw new Error("FS operation failed: Destination file already exists");
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await fs.rename(sourceFileName, destinationFileName);
        console.log("File renamed successfully.");
      } catch (error) {
        throw new Error("FS operation failed: " + error.message);
      }
    } else {
      throw new Error("FS operation failed: " + error.message);
    }
  }
};

rename();
