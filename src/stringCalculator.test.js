import { stringCalculator } from "./stringCalculator"

describe('stringCalculator', () => {
    it('returns zero if given an empty string', () => {
        const result = stringCalculator('');

        expect(result).toEqual(0)
    })

    it('returns the main number if given only one', () => {
        expect(stringCalculator('1')).toEqual(1)
        expect(stringCalculator('2')).toEqual(2)
    })

    it('returns the sum of both numbers', () => {
        expect(stringCalculator('1,2')).toEqual(3)
        expect(stringCalculator('2,3')).toEqual(5)
    })

    it('returns the sum of an unknown amount of numbers', () => {
        expect(stringCalculator('1,2,3')).toEqual(6)
    })

    it('handles newlines insted of commas', () => {
        expect(stringCalculator('1\n2,3')).toEqual(6)
    })
})