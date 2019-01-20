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

    it('should return [] given [1]', () => {
      buySellPrices([1]).should.eql([])
    })

    it('should return [] given [2, 1]', () => {
      buySellPrices([2, 1]).should.eql([])
    })
  })
})
