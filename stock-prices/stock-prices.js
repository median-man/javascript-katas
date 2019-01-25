class Price {
  constructor (value) {
    this._value = value
  }
  value () {
    return this._value
  }
}

function greaterPrice (priceA, priceB) {
  return priceA.value() > priceB.value() ? priceA : priceB
}

function lesserPrice (priceA, priceB) {
  return priceA.value() < priceB.value() ? priceA : priceB
}

function buySellPrices (prices) {
  let sellPrice = prices[1]
  let buyPrice = prices[0]
  for (let i = 1; i < prices.length; i += 1) {
    sellPrice = greaterPrice(sellPrice, prices[i])
    buyPrice = lesserPrice(buyPrice, prices[i])
  }
  return [buyPrice, sellPrice]
}

module.exports = { buySellPrices, Price }
