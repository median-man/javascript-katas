module.exports = function primeFactors (n) {
  const factors = []
  let remainder = n
  for (let divisor = 2; remainder > 1; divisor += 1) {
    for (; remainder % divisor === 0; remainder /= divisor) {
      factors.push(divisor)
    }
  }
  return factors
}
