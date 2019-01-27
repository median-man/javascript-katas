const should = require('chai').should()

const { buySellPrices } = require('./stock-prices')

describe('Stock Prices Kata', () => {
  describe('buySellPrices', () => {
    it('should throw if prices is not an array', () => {
      should.throw(() => buySellPrices(), 'Expected an array.')
    })

    it('should throw if prices has fewer than 2 elements', () => {
      const prices = [1]
      should.throw(() => buySellPrices(prices), 'Expected at least 2 prices.')
    })

    it('should throw if prices contains a non-number', () => {
      const prices = [1, 'a']
      should.throw(() => buySellPrices(prices), 'Expected a number but got: a.')
    })

    const renderArray = arr => `[${arr.join(', ')}]`
    const testMessage = (expected, prices) => {
      return `should return ${renderArray(
        expected
      )} given prices is ${renderArray(prices)}`
    }

    const tests = [
      { expected: [1, 2], prices: [1, 2] },
      { expected: [1, 3], prices: [1, 3] },
      { expected: [1, 3], prices: [1, 2, 3] },
      { expected: [1, 3], prices: [2, 1, 3] },
      { expected: [2, 3], prices: [2, 3, 1] }
    ]

    tests.forEach(({ expected, prices }) =>
      it(testMessage(expected, prices), () =>
        buySellPrices(prices).should.eql(expected)
      )
    )
  })
})
