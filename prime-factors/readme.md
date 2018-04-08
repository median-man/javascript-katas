# Prime Factors
Write a function that takes a whole number greater than 0 and returns an array of its prime factors.
```
primeFactors(1) ==> []
primeFactors(2) ==> [2]
primeFactors(10) ==> [2, 5]
primeFactors(9) ==> [3, 3]
```

## First Attempt
Tests:
```
/* eslint func-names: off, prefer-arrow-callback: off */
const { assert } = require('chai');
const primeFactors = require('./prime-factors.js');

describe('primeFactors', function () {
  it('is a function', function () {
    assert.isFunction(primeFactors, 'primeFactors');
  });

  primeFactorsOfNumShouldReturn(1, []);
  primeFactorsOfNumShouldReturn(2, [2]);
  primeFactorsOfNumShouldReturn(3, [3]);
  primeFactorsOfNumShouldReturn(4, [2, 2]);
  primeFactorsOfNumShouldReturn(8, [2, 2, 2]);
  primeFactorsOfNumShouldReturn(9, [3, 3]);
  primeFactorsOfNumShouldReturn(2 * 2 * 3 * 5 * 11 * 17, [2, 2, 3, 5, 11, 17]);

  function primeFactorsOfNumShouldReturn(num, expected) {
    it(`returns [${expected.join()}] when num is ${num}`, function () {
      assert.deepEqual(primeFactors(num), expected);
    });
  }
});
```
Solution:
```
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
```