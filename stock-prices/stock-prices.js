function buySellPrices (prices) {
  if (doNotBuy(prices)) {
    return []
  }
  return prices
}

function doNotBuy (prices) {
  return notEnoughPrices(prices) || noPositiveMarginPossible(prices)
}

function notEnoughPrices (prices) {
  return prices.length < 2
}

function noPositiveMarginPossible (prices) {
  return prices[0] > prices[1]
}

module.exports = { buySellPrices }
