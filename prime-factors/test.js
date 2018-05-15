const { expect } = require('chai');
const primeFactors = require('./prime-factors');

describe('primeFactors()', () => {
  const testPrimeFactors = (input, expected) =>
    expect(primeFactors(input)).to.deep.equal(expected);

  it('should return [] when n = 1', () => {
    testPrimeFactors(1, []);
  });

  it('should return [2] when n = 2', () => {
    testPrimeFactors(2, [2]);
  });
});
