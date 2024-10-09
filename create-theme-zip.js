import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

const themePath = path.join(process.cwd(), 'kway-ai-theme');
const outputPath = path.join(process.cwd(), 'public', 'kway-ai-theme.zip');

const zip = new JSZip();

function addFolderToZip(folderPath, zipFolder) {
  const files = fs.readdirSync(folderPath);
  
  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isFile()) {
      const fileContent = fs.readFileSync(filePath);
      zipFolder.file(file, fileContent);
    } else if (stats.isDirectory()) {
      const subFolder = zipFolder.folder(file);
      addFolderToZip(filePath, subFolder);
    }
  });
}

addFolderToZip(themePath, zip);

zip.generateAsync({ type: 'nodebuffer' })
  .then((content) => {
    fs.writeFileSync(outputPath, content);
    console.log('WordPress theme zip created successfully!');
  })
  .catch((err) => {
    console.error('Error creating zip:', err);
  });