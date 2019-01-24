const should = require('chai').should()

const { buySellPrices } = require('./stock-prices')

describe('Stock Prices Kata', () => {
  describe('buySellPrices', () => {
    const test = (input, expected) => {
      const inputStr = `[${input.join(', ')}]`
      const expectedStr = `[${expected.join(', ')}]`
      const message = `should return ${inputStr} given ${expectedStr}`
      it(message, () => buySellPrices(input).should.eql(expected))
    }

    test([1, 2], [1, 2])
    test([1, 3], [1, 3])
    test([1, 2, 3], [1, 3])
    test([1, 2, 3], [1, 3])
    test([2, 1, 3], [1, 3])
    test([2, 3, 1], [2, 3])
    test([3, 2, 1], [3, 2])

    it('should throw given one price', () => {
      should.throw(() => buySellPrices([1]), 'Prices must have at least two elements.')
    })
  })
})
