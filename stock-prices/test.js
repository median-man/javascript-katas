/* eslint-disable */

require('chai').should()

const { findOptimalBuySellPrices } = require('./stock-prices')

describe('Stock Prices Kata', () => {
  describe('findOptimalBuySellPrices', () => {
    it('should return [] given an empty array', () => {
      findOptimalBuySellPrices([]).should.eql([])
    })

    it('should return [1, 2] given [1, 2]', () => {
      findOptimalBuySellPrices([1, 2]).should.eql([1, 2])
    })
  })
})
