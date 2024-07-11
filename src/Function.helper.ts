import * as fs from "fs";
import * as path from "path";
import * as folderPath  from "../src/variable.constant";

function deleteImageFiles(folderPath: string): void {
    const files: string[] = fs.readdirSync(folderPath);
    files.forEach(file => {
        const filePath: string = path.join(folderPath, file);
        if (fs.statSync(filePath).isFile() && (file.endsWith('.jpg') || file.endsWith('.png'))) {
            fs.unlinkSync(filePath);
            console.log("Deleted file:", filePath);
        }
    });
}

export { deleteImageFiles };