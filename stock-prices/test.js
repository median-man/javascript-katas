/*
  with "No Primitives" constraint (http://kata-log.rocks/no-primitives)
*/
const should = require('chai').should()

const { buySellPrices, Price } = require('./stock-prices')

describe('Stock Prices Kata', () => {
  describe('buySellPrices', () => {
    it('should return two Price objects', () => {
      const buyPrice = new Price(1)
      const sellPrice = new Price(2)
      buySellPrices([buyPrice, sellPrice]).should.eql([buyPrice, sellPrice])
    })

    const createPriceArr = values => values.map(value => new Price(value))

    const testExpectedPrices = (expectedValues, actual) => {
      const [buyPrice, sellPrice] = actual
      buyPrice.value().should.equal(expectedValues[0])
      sellPrice.value().should.equal(expectedValues[1])
    }
    it('should return prices for 1 and 3 given Price[] for 1, 2, 3', () => {
      const prices = createPriceArr([1, 2, 3])
      testExpectedPrices([1, 3], buySellPrices(prices))
    })

    it('should return prices for 1 and 3 given Price[] for 2, 1, 3', () => {
      const prices = createPriceArr([2, 1, 3])
      testExpectedPrices([1, 3], buySellPrices(prices))
    })
  })
})
