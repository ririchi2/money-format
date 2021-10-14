import { CsvParser } from "./CsvParser.js";

export class StoreCalculator {
    sumMoney(priceList) {
        // console.log(priceList)
        let sum = 0;
        priceList.forEach(element => {
            sum = sum + element.totalPrice
        });

        return sum;
    }
}

