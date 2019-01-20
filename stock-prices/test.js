require('chai').should()

const { findOptimalBuySellPrices } = require('./stock-prices')

describe('Stock Prices Kata', () => {
  describe('findOptimalBuySellPrices', () => {
    it('should return null given an empty array', () => {
      findOptimalBuySellPrices([]).should.be
    })
  })
})
