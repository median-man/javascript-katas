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
  })
})
