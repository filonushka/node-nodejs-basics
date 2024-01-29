import * as fs from "fs/promises";
import * as path from "path";

const copy = async () => {
  const sourceFolderPath = path.join("src/fs", "files");
  const destinationFolderPath = path.join("src/fs", "files_copy");

  try {
    await fs.mkdir(destinationFolderPath);

    const files = await fs.readdir(sourceFolderPath);

    for (const file of files) {
      const sourceFilePath = path.join(sourceFolderPath, file);
      const destinationFilePath = path.join(destinationFolderPath, file);

      await fs.copyFile(sourceFilePath, destinationFilePath);
    }

    console.log("Folder copied successfully: files to files_copy");
  } catch (copyErr) {
    console.error("Error copying folder:", copyErr.message);
  }
};

copy();
