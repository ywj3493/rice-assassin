const csvToJson = require('convert-csv-to-json')
const path = require('path')
const fs = require('fs')

const inDir = "src/data/csv/"
const outDir = "src/data/json/"
const inFileNames = ["themeCategory.csv", "largeCategory.csv", "mediumCategory.csv", "smallCategory.csv"]
const outFileNames = ["themeCategory.json", "largeCategory.json", "mediumCategory.json", "smallCategory.json"]

if (!fs.existsSync(outDir)) {
  console.log("Creating directory: " + outDir)
  fs.mkdirSync(outDir)
}

for (let i=0; i<inFileNames.length; i++) {
  console.log("Converting " + inDir + inFileNames[i] + " to " + outDir + outFileNames[i])
  const inFileName = path.resolve(inDir, inFileNames[i]);
  const outFileName = path.resolve(outDir, outFileNames[i]);
  csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(inFileName, outFileName);
}