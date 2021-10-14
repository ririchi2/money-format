// 1. mostrar números del 1 al 100
// 2. reemplazar múltiplos de 3 por "fizz"
// 3. reemplazar múltiplos de 5 por "buzz"
// 4. reemplazar múltiplos de 3 y 5 por "fizzbuzz"

import { assertEquals } from "./assertEquals.js"

function computeFizzBuzz() {
    const numbers = []

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            numbers.push("fizzbuzz")
        } else if (i % 3 === 0) {
            numbers.push("fizz")
        } else if(i % 5 === 0) {
            numbers.push("buzz");
        } else {
            numbers.push(i)
        }
    }

    return numbers
}

const result = computeFizzBuzz()

assertEquals(result[2], "fizz")
assertEquals(result[4], "buzz")
assertEquals(result[14], "fizzbuzz")