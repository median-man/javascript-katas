const isFactor = (factor, num) => (num % factor === 0);

module.exports = function primeFactors(num) {
  const factors = [];
  let multiple = num;
  for (let factor = 2; factor <= num; factor += 1) {
    while (isFactor(factor, multiple)) {
      factors.push(factor);
      multiple /= factor;
    }
  }
  return factors;
};
