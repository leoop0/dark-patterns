const fs = require("fs");
const path = require("path");

const CONTENT_DIR = path.join(__dirname, "src/pages");
const OUTPUT_FILE = path.join(__dirname, "src/contentIndex.json");

const extractContent = (filePath, targetClass) => {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    console.log(`Reading file: ${filePath}`);

    const divRegex = new RegExp(
      `<div[^>]*className\\s*=\\s*["'](?:[^"']*\\s)?${targetClass}(?:\\s[^"']*)?["'][^>]*>([\\s\\S]*?)<\\/div>`,
      "g"
    );
    const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/;

    let extractedContent = "";
    let matchCount = 0;

    // Extract content from h1
    const h1Match = content.match(h1Regex);
    if (h1Match) {
      extractedContent += `H1: ${h1Match[1].replace(/<[^>]*>/g, "").trim()} `;
    }

    // Extract content from target divs
    let match;
    while ((match = divRegex.exec(content)) !== null) {
      matchCount++;
      extractedContent += `${match[1].replace(/<[^>]*>/g, "").trim()} `;
    }

    console.log(`Found ${matchCount} matching div(s) with class "${targetClass}"`);
    console.log(`Extracted content: ${extractedContent.substring(0, 100)}...`);

    return extractedContent.trim();
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error.message}`);
    return "";
  }
};

const getAllFiles = (dirPath, arrayOfFiles = []) => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, arrayOfFiles);
    } else if (file.endsWith(".jsx")) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
};

const fileToRoute = {
  "Home/Home.jsx": "/",
  "Def/Def.jsx": "/definition-identification",
  "Vul/Vul.jsx": "/vulnerabilites-psychologiques",
  "Study/Study.jsx": "/etude-cas-exemples",
  "Law/Law.jsx": "/defis-ethiques",
  "Soluce/Soluce.jsx": "/pistes-solutions",
  "Conc/Conc.jsx": "/conclusion",
};

const indexContent = (targetClass) => {
  try {
    const files = getAllFiles(CONTENT_DIR);
    console.log(`Found ${files.length} JSX files`);

    const index = files.map((file) => {
      const relativePath = path.relative(CONTENT_DIR, file);
      return {
        file: relativePath,
        route: fileToRoute[relativePath] || "/",
        content: extractContent(file, targetClass),
      };
    });

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2));
    console.log(`Index written to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error(`Error in indexContent: ${error.message}`);
  }
};

const targetClass = "section";
indexContent(targetClass);
