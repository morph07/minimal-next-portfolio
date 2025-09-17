import fs from 'fs';
import path from 'path';

// This script generates a TypeScript file exporting the screenshots array for AthLife project
const screenshotsDir = path.join(__dirname, '../public/projects/athlife/screenshots');
const outputPath = path.join(__dirname, '../config/athlifeScreenshots.ts');

const imgArr = fs.readdirSync(screenshotsDir)
  .filter(file => /\.(png|jpe?g|webp)$/i.test(file))
  .map(file => `/projects/athlife/screenshots/${file}`);

const fileContent = `// This file is auto-generated. Do not edit manually.
export const athlifeScreenshots = ${JSON.stringify(imgArr, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent);
console.log('athlifeScreenshots.ts generated successfully.');
