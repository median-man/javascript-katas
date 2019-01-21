const should = require('chai').should()

const { buySellPriceForPrices } = require('./stock-prices')

describe('Stock Prices Kata', () => {
  it('should throw with "Expected prices to be an array but got:..."', () => {
    const expectedErrorMessage = pricesStr =>
      `Expected prices to be an array, but got: ${pricesStr}`
    should.throw(
      () => buySellPriceForPrices(),
      expectedErrorMessage('undefined')
    )

    should.throw(
      () => buySellPriceForPrices('hello'),
      expectedErrorMessage('hello')
    )
  })
})
