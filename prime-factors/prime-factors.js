function primeFactors(num) {
  if (num < 2) return [];

  const result = [];
  let quotient = num;

  for (let divisor = 2; divisor < num; divisor += 1) {
    while (quotient > divisor && quotient % divisor === 0) {
      result.push(divisor);
      quotient /= divisor;
    }
  }
  result.push(quotient);

  return result;
}

module.exports = primeFactors;
