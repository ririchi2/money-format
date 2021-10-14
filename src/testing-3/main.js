import fs from "fs"

// console.log("para este archivo has tenido un ingreso de 300€")

const rosFilePath = process.argv[2]
const result = fs.readFileSync(rosFilePath, "utf8")

const splitLines = result.split(/\r?\n/);

const productList = splitLines.map(function(element) {
    const x = element.split(",")
    
    const product = {
        name: x[0],
        price: x[1],
        quantity: x[2],
        totalPrice: (x[1] * x[2]),
    }

    return product
})


const priceList = productList.map(element => {
    let sum = 0;

    sum += element.totalPrice

    return sum
})

console.log(priceList)

fs.writeFileSync(
    "./src/testing-3/report.txt",
    `Tus ventas totales han sido ${priceList.reduce((a, b) => a + b, 0)}€`,
    )
