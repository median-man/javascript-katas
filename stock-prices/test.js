require('chai').should()

const { getBuySellPrices } = require('./stock-prices')

describe('Stock Prices Kata', () => {
  describe('getBuySellPrices', () => {
    it('should return [1,2] given prices 1, 2', () => {
      getBuySellPrices([1, 2]).should.eql([1, 2])
    })

    it('should return [1, 3] given prices 1, 3', () => {
      getBuySellPrices([1, 3]).should.eql([1, 3])
    })

    it('should return [1, 3] given prices 1, 2, 3', () => {
      getBuySellPrices([1, 2, 3]).should.eql([1, 3])
    })

    it('should return [1, 3] given prices 2, 1, 3', () => {
      getBuySellPrices([2, 1, 3]).should.eql([1, 3])
    })

    it('should return [1, 2] given prices 3, 1, 2', () => {
      getBuySellPrices([3, 1, 2]).should.eql([1, 2])
    })

    it('should return [2, 4] given prices 2, 3, 4, 1', () => {
      getBuySellPrices([2, 3, 4, 1]).should.eql([2, 4])
    })

    it('should return [2, 5] given prices 2, 5, 4, 1', () => {
      getBuySellPrices([2, 5, 4, 1]).should.eql([2, 5])
    })

    it('should return [48.29, 105.53] given prices 55.39 109.23 48.29 81.59 105.53 94.45 12.24', () => {
      getBuySellPrices([
        55.39,
        109.23,
        48.29,
        81.59,
        105.53,
        94.45,
        12.24
      ]).should.eql([48.29, 105.53])
    })
  })
})
