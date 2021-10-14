import { database } from "./database.js"

// database.findUserById(10).then((user) => {
//     console.log(user)
// })

class UserController {
    getUserMoney() {
        console.log(process.argv)
    }
}

new UserController().getUserMoney()