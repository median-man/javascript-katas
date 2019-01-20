require('chai').should()

const { buySellPrices } = require('./stock-prices.js')

describe('Stock Prices Kata', () => {
  describe('buySellPrices', () => {
    it('should return empty array given []', () => {
      buySellPrices([]).should.eql([])
    })
  })
})
