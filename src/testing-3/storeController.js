import fs from "fs"
import { CsvParser } from "./CsvParser.js"
import { StoreCalculator} from "./StoreCalculator.js"
import { StoreFile } from "./StoreFile.js"

export class StoreController {
  getListMoney() {
    const fileClass = new StoreFile
    const file = fileClass.getFile()
    const listClass = new CsvParser
    const list = listClass.parseFile(file)
    const totalmoneyClass = new StoreCalculator
    const totalmoney = totalmoneyClass.sumMoney(list)

    console.log(totalmoney)
  }

  








    // async getTotal() {
    //     const file = fs.readFileSync(rosFilePath, "utf8")
    
    //     try {
    //       const money = this.fileService.fileParser.parseFile(file)
    //       console.log(`money: ${money}`)
    //     } catch (error) {
    //       console.error(error.message)
    //     }
    //   }
}
