function primeFactors(num) {
  const factors = [];
  let remainder = num;
  let divisor = 2;
  while (remainder > 1) {
    while (remainder % divisor === 0) {
      factors.push(divisor);
      remainder /= divisor;
    }
    divisor += 1;
  }
  return factors;
}

module.exports = primeFactors;
