const { expect } = require('chai');
const primeFactors = require('./prime-factors.js');

describe('primeFactors', () => {
  it('is a function', () => {
    expect(primeFactors).to.be.a('function');
  });

  testPrimeFactors([], 0);
  testPrimeFactors([2], 2);
  testPrimeFactors([2, 2], 4);
  testPrimeFactors([2, 3], 6);
  testPrimeFactors([5, 5], 25);
  testPrimeFactors([2, 3, 7], 2 * 3 * 7);
  testPrimeFactors([317], 317);
  testPrimeFactors([17, 113, 317], 17 * 113 * 317);

  function testPrimeFactors(expected, input) {
    it(`returns [${expected}] when number is ${input}`, () => {
      expect(primeFactors(input)).to.deep.equal(expected);
    });
  }
});
