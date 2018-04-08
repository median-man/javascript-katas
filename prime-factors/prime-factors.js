function primeFactors(n) {
  const factors = [];
  let remainder = n;
  let max = Math.sqrt(remainder);
  for (let divisor = 2; divisor <= max; divisor += 1) {
    while (remainder % divisor === 0) {
      factors.push(divisor);
      remainder /= divisor;
      max = Math.sqrt(remainder);
    }
  }
  if (remainder > 1) factors.push(remainder);
  return factors;
}

module.exports = primeFactors;
