/* eslint-disable */

require('chai').should()

const { findOptimalBuySellPrices } = require('./stock-prices')

describe('Stock Prices Kata', () => {
  describe('findOptimalBuySellPrices', () => {
    it('should return [] given an empty array', () => {
      findOptimalBuySellPrices([]).should.eql([])
    })
  })
})
