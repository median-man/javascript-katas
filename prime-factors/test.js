const { expect } = require('chai')
const primeFactors = require('./primeFactors')

describe('primeFactors()', () => {
  const testPrimeFactors = (input, expected) => {
    const msg = `should return [${expected.join()}] when n = ${input}`
    const expectation = () => expect(primeFactors(input)).to.deep.equal(expected)
    it(msg, expectation)
  }

  testPrimeFactors(1, [])
  testPrimeFactors(2, [2])
  testPrimeFactors(3, [3])
  testPrimeFactors(4, [2, 2])
  testPrimeFactors(5, [5])
  testPrimeFactors(6, [2, 3])
  testPrimeFactors(8, [2, 2, 2])
  testPrimeFactors(9, [3, 3])
  testPrimeFactors(2 * 2 * 3 * 3 * 5 * 7 * 13, [2, 2, 3, 3, 5, 7, 13])
})
