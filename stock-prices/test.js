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

  it('should throw when array contains non-numeric value', () => {
    const test = () => buySellPriceForPrices(['hi'])
    should.throw(test)
  })

  it('should throw when array contains a value <= 0', () => {
    const test = () => buySellPriceForPrices([0])
    should.throw(test, 'All prices must be numbers greater than 0')
  })
})
