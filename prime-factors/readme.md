# Prime Factors
Write a function that takes a whole number greater than 0 and returns an array of its prime factors.
```
primeFactors(1) ==> []
primeFactors(2) ==> [2]
primeFactors(10) ==> [2, 5]
primeFactors(9) ==> [3, 3]
```

## Second Solution
This time I came up with a slightly different solution. Not sure which is better in terms of performance. This solutions reduces the number of outer loops in some cases at the expense of a square root calculation for each factor. I believe the first solution to be slightly more readable.

Solution:
```
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
```
Tests:
```
describe('primeFactors', function () {
  it('is a function', function () {
    assert.isFunction(primeFactors);
  });
  it('primeFactors(1) returns []', function () {
    assert.deepEqual(primeFactors(1), []);
  });
  it('primeFactors(2) returns [2]', function () {
    assert.deepEqual(primeFactors(2), [2]);
  });
  it('primeFactors(4) returns [2, 2]', function () {
    assert.deepEqual(primeFactors(4), [2, 2]);
  });
  it('primeFactors(8) returns [2, 2, 2]', function () {
    assert.deepEqual(primeFactors(8), [2, 2, 2]);
  });
  it('primeFactors(9) returns [3, 3]', function () {
    assert.deepEqual(primeFactors(9), [3, 3]);
  });
  it('primeFactors(25) returns [5, 5]', function () {
    assert.deepEqual(primeFactors(25), [5, 5]);
  });
  it('returns [19, 317]', function () {
    assert.deepEqual(primeFactors(19 * 317), [19, 317]);
  });
});
```


## First Solution
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