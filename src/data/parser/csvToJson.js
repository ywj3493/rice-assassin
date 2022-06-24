const csvToJson = require('convert-csv-to-json')
const path = require('path')

const inDir = "src/data/csv/"
const outDir = "src/data/json/"
const inFileNames = ["themeCategory.csv", "largeCategory.csv", "mediumCategory.csv"]
const outFileNames = ["themeCategory.json", "largeCategory.json", "mediumCategory.json"]

for (let i=0; i<inFileNames.length; i++) {
  const inFileName = path.resolve(inDir, inFileNames[i]);
  const outFileName = path.resolve(outDir, outFileNames[i]);
  csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(inFileName, outFileName);
}