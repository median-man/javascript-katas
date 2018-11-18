function isPrime (int) {
  if (int < 2) return false
  if (int === 2) return true
  if (int % 2 === 0) return false
  const limit = Math.sqrt(int)
  for (let divisor = 3; divisor <= limit; divisor += 2) {
    if (int % divisor === 0) return false
  }
  return true
}

module.exports = isPrime
