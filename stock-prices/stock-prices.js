function buySellPrices (prices) {
  if (prices.length < 2) {
    return []
  }
  if (prices[0] > prices[1]) {
    return []
  }
  return prices
}

module.exports = { buySellPrices }
