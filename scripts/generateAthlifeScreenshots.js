const fs = require('fs');
const path = require('path');

// This script generates a JavaScript file exporting the screenshots array for AthLife project
const screenshotsDir = path.join(__dirname, '../public/projects/athlife/screenshots');
const outputPath = path.join(__dirname, '../config/athlifeScreenshots.js');

const imgArr = fs.readdirSync(screenshotsDir)
  .filter(file => /\.(png|jpe?g|webp)$/i.test(file))
  .map(file => `/projects/athlife/screenshots/${file}`);

const fileContent = `// This file is auto-generated. Do not edit manually.\nexports.athlifeScreenshots = ${JSON.stringify(imgArr, null, 2)};\n`;

fs.writeFileSync(outputPath, fileContent);
console.log('athlifeScreenshots.js generated successfully.');
