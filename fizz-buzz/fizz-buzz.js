function fizzBuzz(n) {
  let res = '';
  if (n % 3 === 0) res += 'fizz';
  if (n % 5 === 0) res += 'buzz';
  return res || n;
}

module.exports = fizzBuzz;
