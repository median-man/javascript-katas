class StockPrices {
  constructor (prices) {
    this._buyPrice = prices[0]
    this._sellPrice = prices[1]

    for (let i = 1; i < prices.length; i += 1) {
      if (prices[i] > this._sellPrice) {
        this._sellPrice = prices[i]
      }
      if (prices[i] < this._buyPrice) {
        this._buyPrice = prices[i]
      }
    }
  }

  buyPrice () {
    return this._buyPrice
  }
  sellPrice () {
    return this._sellPrice
  }
}

module.exports = StockPrices
