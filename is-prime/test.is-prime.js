/* eslint prefer-arrow-callback: 0, func-names: 0 */
const { assert } = require('chai')
const isPrime = require('./is-prime.js')

describe('isPrime', function () {
  it('is a function', function () {
    assert.isFunction(isPrime)
  })

  it('returns true when number is 2', function () {
    assert.isTrue(isPrime(2))
  })

  it('returns false when number is less than 2', function () {
    assert.isFalse(isPrime(1))
  })

  it('returns false when 2 is a factor of the number and the number is not 2', function () {
    assert.isFalse(isPrime(4))
  })

  it('returns false when 3 is a factor of the number', function () {
    assert.isFalse(isPrime(9))
  })

  it('returns false when 5 is a factor of the number', function () {
    assert.isFalse(isPrime(25))
  })
})
