function buySellPrices (prices) {
  if (prices.length === 1) throw new Error('Prices must have at least two elements.')
  let sell = prices[1]
  let buy = prices[0]
  let maxDiff = sell - buy
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] - buy > maxDiff) {
      sell = prices[i]
      maxDiff = prices[i] - buy
    } else if (prices[i] < buy) {
      buy = prices[i]
    }
  }
  return [sell - maxDiff, sell]
}

module.exports = { buySellPrices }
