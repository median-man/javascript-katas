require('chai').should()

const { getBuySellPrices } = require('./stock-prices')

describe('Stock Prices Kata', () => {
  describe('getBuySellPrices', () => {
    it('should return [1, 2] given prices = 1, 2', () => {
      getBuySellPrices([1, 2]).should.eql([1, 2])
    })
  })
})
