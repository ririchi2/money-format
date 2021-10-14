/**
 * 
 * @param {*} numbers 
 * @returns 
 */
export function stringCalculator(numbers) {
    if (numbers === '') {
        return 0;
    }

    if (numbers.length === 1) {
        return parseInt(numbers);
    }

    if (numbers.length > 2) {
        let arr = numbers.replace(/\n/g, ',')
        let arr2 = arr.split(',').map(element => parseInt(element));
        let sum = 0;

        arr2.forEach(element => {
            sum = sum + element
        });

        return sum;
    }
}

/**
 * 
 * @param {number[]} numbers 
 * @returns {number}
 */