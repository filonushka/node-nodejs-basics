import * as fs from "fs/promises";
import * as path from "path";

const remove = async () => {
  const dir = "src/fs/files";
  const fileToRemove = path.join(dir, "fileToRemove.txt");

  try {
    await fs.access(fileToRemove);

    await fs.unlink(fileToRemove);
    console.log("File deleted successfully.");
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed: File not found");
    } else {
      throw new Error("FS operation failed: " + error.message);
    }
  }
};

await remove();
