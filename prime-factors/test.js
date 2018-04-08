/* eslint func-names: off, prefer-arrow-callback: off */
const { assert } = require('chai');
const primeFactors = require('./prime-factors.js');

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
