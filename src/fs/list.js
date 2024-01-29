import * as fs from "fs/promises";

const list = async () => {
  const folderPath = "src/fs/files";

  try {
    await fs.access(folderPath);
    const files = await fs.readdir(folderPath);

    const filesArr = [];
    files.forEach((file) => {
      filesArr.push(file);
    });
    console.log("List of filenames: ", filesArr);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed: Folder not found");
    } else {
      throw new Error("FS operation failed: " + error.message);
    }
  }
};

await list();
