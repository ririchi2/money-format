import fs from "fs"

// console.log("para este archivo has tenido un ingreso de 300€")

const rosFilePath = process.argv[2]
const result = fs.readFileSync(rosFilePath, "utf8")

const splitLines = str => str.split(/\r?\n/);

console.log(splitLines[1])

fs.writeFileSync(
    "./src/testing-3/report.txt",
    `Tus ventas totales han sido 300€`,
    )
