function getBuySellPrices (numbers) {
  let max = 0
  let min = numbers[0]
  let maxPositiveDiff = 0
  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] - min > maxPositiveDiff) {
      max = numbers[i]
      maxPositiveDiff = numbers[i] - min
    }
    if (numbers[i] < min) {
      min = numbers[i]
    }
  }
  return [min, max]
}

module.exports = { getBuySellPrices }
