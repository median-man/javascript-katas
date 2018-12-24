function generate (n) {
  const primes = []

  if (n > 1) {
    if (n % 2 === 0) {
      primes.push(2)
      n /= 2
    }
    if (n > 1) {
      primes.push(n)
    }
  }
  return primes
}

module.exports = { generate }
