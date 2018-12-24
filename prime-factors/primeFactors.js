function generate (n) {
  const primes = []

  let factor = 2
  while (n > 1) {
    for (; n % factor === 0; n /= factor) {
      primes.push(factor)
    }
    factor += 1
  }
  return primes
}

module.exports = { generate }
