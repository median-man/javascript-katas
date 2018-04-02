#Is Prime
Define a function `isPrime()` that takes one integer argument and returns `true` or `false` depending on if the integer is a prime.

**Example**
```
isPrime(5)
=> true
```
**Assumptions**
* input is an integer
* input may be negative, zero, or positive

## First
This kata did not take long to complete. (Maybe 30-40 minutes? I'm not entirely sure.) I jumped straight in to this kata without researching popular algorithms. My initial idea was based on my prior knowledge that a composite number will always have a factor less than or equal two the square root of the composite.

After completing the kata and writing up the revisions, I did some reading about primality testing algorithms. The algorithm I came up with could have been easily optimized a step further by checking for a factor of 3. Then divisors from 5 while stepping an interval of 6 while the divisor is less than the square root of the number being checked. (Known as [6k ± 1 optimization][wikipedia].)

My tests lead me to produce this solution at first:
```javascript
function isPrime(int) {
  if (int < 2) return false;
  if (int === 2) return true;
  for (let divisor = 2; divisor <= Math.sqrt(int); divisor += 1) {
    if (int % divisor === 0) return false;
  }
  return true;
}

module.exports = isPrime;
```
Tests:
```javascript
/* eslint prefer-arrow-callback: 0, func-names: 0 */
const { assert } = require('chai');
const isPrime = require('./is-prime.js');

describe('isPrime', function () {
  it('is a function', function () {
    assert.isFunction(isPrime);
  });

  it('returns true when number is 2', function () {
    assert.isTrue(isPrime(2));
  });

  it('returns false when number is less than 2', function () {
    assert.isFalse(isPrime(1));
  });

  it('returns false when 2 is a factor of the number and the number is not 2', function () {
    assert.isFalse(isPrime(4));
  });

  it('returns false when 3 is a factor of the number', function () {
    assert.isFalse(isPrime(9));
  });

  it('returns false when 5 is a factor of the number', function () {
    assert.isFalse(isPrime(25));
  });
});
```

After taking a short break to get a cup of coffee, I realized one tiny change could produce a significant performance gain for large numbers:
```javascript
function isPrime(int) {
  if (int < 2) return false;
  if (int === 2) return true;

  // one line for better performance on large numbers
  if (int % 2 === 0) return false;

  // only check odd numbers
  for (let divisor = 3; divisor <= Math.sqrt(int); divisor += 2) {
    if (int % divisor === 0) return false;
  }
  return true;
}

module.exports = isPrime;
```

Results prior to change (fastest of several runs):
```
isPrime(104729) => true
call 100x total - 4.977ms
```
Results after change (slowest of several runs):
```
isPrime(104729) => true
call 100x total - 3.344ms
```

In the process of adding the naive tests to this document, I realized the function could be futher optimized by calling `Math.sqrt(int)` only once.
```javascript
function isPrime(int) {
  if (int < 2) return false;
  if (int === 2) return true;
  if (int % 2 === 0) return false;

  // only call Math.sqrt once
  const limit = Math.sqrt(int);
  for (let divisor = 3; divisor <= limit; divisor += 2) {
    if (int % divisor === 0) return false;
  }
  return true;
}

module.exports = isPrime;
```
Results after change (slowest of several):
```
isPrime(104729) => true
call 100x total: 2.719ms
```

[wikipedia]: https://en.wikipedia.org/wiki/Primality_test