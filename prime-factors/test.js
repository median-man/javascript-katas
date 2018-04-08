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
