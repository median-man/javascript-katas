module.exports = function primeFactors(n) {
  const primes = [];
  let remainder = n;
  if (n > 1) {
    while (remainder % 2 === 0) {
      primes.push(2);
      remainder /= 2;
    }
    if (remainder > 1) {
      primes.push(remainder);
    }
  }
  return primes;
};
