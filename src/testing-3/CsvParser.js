import { StoreFile } from "./StoreFile.js";

export class CsvParser {
    parseFile(file) {
        const splitLines = file.split(/\r?\n/);
    
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
    
        return productList
    }
}

