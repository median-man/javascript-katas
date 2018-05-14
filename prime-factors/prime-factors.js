module.exports = function primeFactors(n) {
  const primes = [];
  let remainder = n;
  let candidate = 2;
  while (remainder > 1) {
    while (remainder % candidate === 0) {
      primes.push(candidate);
      remainder /= candidate;
    }
    candidate += 1;
  }
  if (remainder > 1) {
    primes.push(remainder);
  }
  return primes;
};
