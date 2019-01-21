function getBuySellPrices (prices) {
  let maxMargin = 0
  let finalSellPrice = 0
  let buyPrice = prices[0]
  for (let i = 1; i < prices.length; i += 1) {
    const margin = prices[i] - buyPrice
    if (margin > maxMargin) {
      maxMargin = margin
      finalSellPrice = prices[i]
    }
    if (prices[i] < buyPrice) {
      buyPrice = prices[i]
    }
  }
  return [finalSellPrice - maxMargin, finalSellPrice]
}

module.exports = { getBuySellPrices }
