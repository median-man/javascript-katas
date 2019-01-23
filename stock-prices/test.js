require('chai').should()

const StockPrices = require('./stock-prices')

describe('Stock Prices Kata', () => {
  describe('StockPrices', () => {
    const testCase = (prices, expectedBuy, expectedSell) => {
      return describe(`prices = [${prices.join(', ')}]`, () => {
        let stockPrices

        beforeEach(() => {
          stockPrices = new StockPrices(prices)
        })

        it(`should return ${expectedBuy} and for buyPrice`, () =>
          stockPrices.buyPrice().should.equal(expectedBuy))

        it(`should return ${expectedSell} for sellPrice`, () =>
          stockPrices.sellPrice().should.equal(expectedSell))
      })
    }
    describe('two prices', () => {
      testCase([1, 2], 1, 2)
      testCase([2, 3], 2, 3)
    })

    describe('three prices', () => {
      testCase([1, 2, 3], 1, 3)
      testCase([2, 1, 3], 1, 3)
      testCase([2, 3, 1], 2, 3)
    })
  })
})
