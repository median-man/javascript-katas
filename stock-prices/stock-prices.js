function buySellPriceForPrices (prices) {
  if (!Array.isArray(prices)) {
    throw new Error(`Expected prices to be an array, but got: ${prices}`)
  }

  const priceNumbers = prices.map(Number.parseFloat)

  if (Number.isNaN(priceNumbers[0]) || priceNumbers[0] <= 0) {
    throw new Error('All prices must be numbers greater than 0')
  }
  return []
}

module.exports = { buySellPriceForPrices }
