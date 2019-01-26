class Price {
  constructor (value) {
    this._value = value
  }
  value () {
    return this._value
  }
}

function buySellPrices (prices) {
  if (!Array.isArray(prices)) {
    throw new Error(`Expected an array but got: ${prices}`)
  }

  if (prices.length < 2) {
    throw new Error('`prices` must have at least two elements.')
  }

  let sellValue = prices[1].value()
  let buyValue = prices[0].value()
  let margin = sellValue - buyValue

  for (let i = 1; i < prices.length; i += 1) {
    const currentValue = prices[i].value()
    const isGreaterMargin = currentValue - buyValue > margin

    if (isGreaterMargin) {
      sellValue = currentValue
      margin = sellValue - buyValue
    }
    if (currentValue < buyValue) {
      buyValue = currentValue
    }
  }

  return [new Price(sellValue - margin), new Price(sellValue)]
}

module.exports = { buySellPrices, Price }
