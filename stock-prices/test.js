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
      buyPrice.value().should.equal(expectedValues[0], 'buyPrice')
      sellPrice.value().should.equal(expectedValues[1], 'sellPrice')
    }

    it('should return prices for 1 and 3 given Price[] for 1, 2, 3', () => {
      const prices = createPriceArr([1, 2, 3])
      testExpectedPrices([1, 3], buySellPrices(prices))
    })

    it('should return prices for 1 and 3 given Price[] for 2, 1, 3', () => {
      const prices = createPriceArr([2, 1, 3])
      testExpectedPrices([1, 3], buySellPrices(prices))
    })

    it('should return prices for 2 and 3 given Price[] for 2, 3, 1', () => {
      const prices = createPriceArr([2, 3, 1])
      testExpectedPrices([2, 3], buySellPrices(prices))
    })

    it('should return prices for 2 and 3 given Price[] for 2, 3, 1', () => {
      const prices = createPriceArr([2, 3, 1])
      testExpectedPrices([2, 3], buySellPrices(prices))
    })

    it('should return prices for 3 and 2 given Price[] for 3, 2, 1', () => {
      const prices = createPriceArr([3, 2, 1])
      testExpectedPrices([3, 2], buySellPrices(prices))
    })

    it('should throw if there are fewer than 2 prices', () => {
      const prices = createPriceArr([1])
      should.throw(
        () => buySellPrices(prices),
        '`prices` must have at least two elements.'
      )
    })

    it('should throw if prices is not an array', () => {
      should.throw(
        () => buySellPrices(),
        `Expected an array but got: ${undefined}`
      )
    })
  })
})
