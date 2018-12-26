function generate (n) {
  const primes = []

  for (let candidate = 2; n > 1; candidate += 1) {
    for (; n % candidate === 0; n /= candidate) {
      primes.push(candidate)
    }
  }
  return primes
}

module.exports = { generate }
