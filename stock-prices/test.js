require('chai').should()

const { getBuySellPrices } = require('./stock-prices')

describe('Stock Prices Kata', () => {
  describe('getBuySellPrices', () => {
    const createTest = (givenPrcies, expected) =>
      it(`should return ${JSON.stringify(
        expected
      )} given prices = ${JSON.stringify(givenPrcies)}`, () => {
        getBuySellPrices(givenPrcies).should.eql(expected)
      })

    createTest([1, 2], [1, 2])
    createTest([1, 3], [1, 3])
    createTest([1, 2, 3], [1, 3])
    createTest([2, 1, 3], [1, 3])
    createTest([4, 3, 1, 2], [1, 2])
    createTest([3, 6, 1, 2], [3, 6])

    it('should pass acceptance example', () => {
      const prices = [55.39, 109.23, 48.29, 81.59, 105.53, 94.45, 12.24]
      getBuySellPrices(prices).should.eql([48.29, 105.53])
    })
  })
})
