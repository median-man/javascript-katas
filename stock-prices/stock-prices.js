function buySellPriceForPrices (prices) {
  if (!Array.isArray(prices)) {
    throw new Error(`Expected prices to be an array, but got: ${prices}`)
  }
  return []
}

module.exports = { buySellPriceForPrices }
