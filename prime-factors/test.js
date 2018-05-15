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

  it('should return [3] when n = 3', () => {
    testPrimeFactors(3, [3]);
  });

  it('should return [2, 2] when n = 4', () => {
    testPrimeFactors(4, [2, 2]);
  });

  it('should return [2, 3] when n = 6', () => {
    testPrimeFactors(6, [2, 3]);
  });

  it('should return [2, 2, 2] when n = 8', () => {
    testPrimeFactors(8, [2, 2, 2]);
  });

  it('should return [3, 3] when n = 9', () => {
    testPrimeFactors(9, [3, 3]);
  });
});
