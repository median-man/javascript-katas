function getBuySellPrices (numbers) {
  let max = 0
  let min = numbers[0]
  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > max) {
      max = numbers[i]
    }
  }
  return [min, max]
}

module.exports = { getBuySellPrices }
