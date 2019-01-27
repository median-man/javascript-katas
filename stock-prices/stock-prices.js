function buySellPrices (prices) {
  const errorMessage = validatePrices(prices)
  if (errorMessage) {
    throw new Error(errorMessage)
  }

  let [buyPrice, sellPrice] = prices
  let greatestMargin = sellPrice - buyPrice

  for (let i = 1; i < prices.length; i += 1) {
    const margin = prices[i] - buyPrice
    if (margin > greatestMargin) {
      sellPrice = prices[i]
      greatestMargin = margin
    } else if (prices[i] < buyPrice) {
      buyPrice = prices[i]
    }
  }
  return [sellPrice - greatestMargin, sellPrice]
}

function validatePrices (prices) {
  if (!Array.isArray(prices)) {
    return 'Expected an array.'
  }

  if (prices.length < 2) {
    return 'Expected at least 2 prices.'
  }

  const nanIndex = prices
    .map(price => Number.parseFloat(price))
    .findIndex(value => Number.isNaN(value))

  if (nanIndex > -1) {
    return `Expected a number but got: ${prices[nanIndex]}.`
  }

  return ''
}

module.exports = { buySellPrices }
