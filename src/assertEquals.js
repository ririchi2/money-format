export function assertEquals(expected, actual) {
    if (actual === expected) {
      console.log("Todo ok")
    } else {
      console.log(`Esperaba ${expected} pero me dieron ${actual}`)
    }
  }