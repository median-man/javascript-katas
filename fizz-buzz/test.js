/* eslint func-names: off, prefer-arrow-callback: off */
const { assert } = require('chai');
const fizzBuzz = require('./fizz-buzz.js');

describe('fizzBuzz', function () {
  it('is a function', function () {
    assert.isFunction(fizzBuzz);
  });
  it('fizzBuzz(1) returns 1', function () {
    assert.equal(fizzBuzz(1), 1);
  });
  it('fizzBuzz(2) returns 2', function () {
    assert.equal(fizzBuzz(2), 2);
  });
  it('fizzBuzz(3) returns "fizz"', function () {
    assert.equal(fizzBuzz(3), 'fizz');
  });
  it('fizzBuzz(6) returns "fizz"', function () {
    assert.equal(fizzBuzz(6), 'fizz');
  });
  it('fizzBuzz(5) returns "buzz"', function () {
    assert.equal(fizzBuzz(5), 'buzz');
  });
  it('fizzBuzz(15) returns "fizzbuzz"', function () {
    assert.equal(fizzBuzz(15), 'fizzbuzz');
  });
});
