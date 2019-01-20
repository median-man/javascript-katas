require('chai').should()

const { buySellPrices } = require('./stock-prices.js')

describe('Stock Prices Kata', () => {
  describe('buySellPrices', () => {
    it('should return empty array given []', () => {
      buySellPrices([]).should.eql([])
    })

    it('should return [1, 2] given [1, 2]', () => {
      buySellPrices([1, 2]).should.eql([1, 2])
    })
  })
})
