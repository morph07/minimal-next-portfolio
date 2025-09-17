const fs = require('fs');
const path = require('path');

// This script scans all folders in /public/projects/ and generates a screenshots.js file
// with an object containing arrays of screenshots per project.

const projectsDir = path.join(__dirname, '../public/projects');
const outputPath = path.join(__dirname, '../config/screenshots.js');

const screenshots = {};

fs.readdirSync(projectsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .forEach(dirent => {
    const projectName = dirent.name;
    const screenshotsDir = path.join(projectsDir, projectName, 'screenshots');
    if (fs.existsSync(screenshotsDir)) {
      const imgArr = fs.readdirSync(screenshotsDir)
        .filter(file => /\.(png|jpe?g|webp)$/i.test(file))
        .map(file => `/projects/${projectName}/screenshots/${file}`);
      screenshots[projectName] = imgArr;
    }
  });

const fileContent = `// This file is auto-generated. Do not edit manually.\nexports.screenshots = ${JSON.stringify(screenshots, null, 2)};\n`;

fs.writeFileSync(outputPath, fileContent);
console.log('screenshots.js generated successfully.');
