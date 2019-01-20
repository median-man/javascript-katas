function buySellPrices (prices) {
  let bestMargin = 0
  let bestBuyPrice = 0
  let bestSellPrice = 0
  for (let x = 0; x < prices.length - 1; x += 1) {
    const buyPrice = prices[x]
    let bestMarginForBuy = 0
    let bestSellPriceForBuy = 0
    for (let y = x + 1; y < prices.length; y += 1) {
      const sellPrice = prices[y]
      const margin = sellPrice - buyPrice
      if (margin > bestMarginForBuy) {
        bestMarginForBuy = margin
        bestSellPriceForBuy = sellPrice
      }
    }
    if (bestMarginForBuy > bestMargin) {
      bestBuyPrice = buyPrice
      bestSellPrice = bestSellPriceForBuy
      bestMargin = bestMarginForBuy
    }
  }

  return bestBuyPrice ? [bestBuyPrice, bestSellPrice] : []
}

module.exports = { buySellPrices }
