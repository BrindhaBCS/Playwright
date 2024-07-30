import fs from 'fs';
import path from 'path';

export function getUniqueFilename(folderPath: string): string {
  const files = fs.readdirSync(folderPath);
  const imageFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.png'));

  let sequenceNumber = 1;
  if (imageFiles.length > 0) {
    // Find the highest sequence number among existing image files
    const highestSequenceNumber = imageFiles.reduce((highest, file) => {
      const match = file.match(/screenshot_(\d+)-(\d+)\.png/);
      if (match) {
        const number = parseInt(match[1]);
        return number > highest ? number : highest;
      }
      return highest;
    }, 0);
    sequenceNumber = highestSequenceNumber + 1;
  }

  const now = new Date();
  const timestamp = now.toISOString().replace(/[-:]/g, "").replace("T", "-").replace("Z", "");
  const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
  return `screenshot_${sequenceNumber}-${timestamp}-${milliseconds}.png`;
}
