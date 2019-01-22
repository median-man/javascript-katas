function getBuySellPrices (numbers) {
  let max = 0
  let min = numbers[0]
  let maxPositiveDiff = 0
  for (let i = 1; i < numbers.length; i += 1) {
    const diff = numbers[i] - min
    if (diff > maxPositiveDiff) {
      max = numbers[i]
      maxPositiveDiff = diff
    }
    if (numbers[i] < min) {
      min = numbers[i]
    }
  }
  return [min, max]
}

module.exports = { getBuySellPrices }
