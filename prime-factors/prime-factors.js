module.exports = function primeFactors(n) {
  const primes = [];
  let remainder = n;

  for (let candidate = 2; remainder > 1; candidate += 1) {
    for (;remainder % candidate === 0; remainder /= candidate) {
      primes.push(candidate);
    }
  }

  return primes;
};
