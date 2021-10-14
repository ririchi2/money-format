import fs from "fs"

export class StoreFile {
    getFile() {
        const rosFilePath = process.argv[2]
        const file = fs.readFileSync(rosFilePath, "utf8")
        
        return file
    }
}