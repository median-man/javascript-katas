const { expect } = require('chai');
const primeFactors = require('./prime-factors.js');

describe('primeFactors()', () => {
  it('should be a function', () => {
    expect(primeFactors).to.be.a('function');
  });

  it('should return []', () => {
    expect(primeFactors(1)).to.eql([]);
  });

  it('should return [2]', () => {
    expect(primeFactors(2)).to.eql([2]);
  });

  it('should return [2, 2]', () => {
    expect(primeFactors(4)).to.eql([2, 2]);
  });

  it('should return [3]', () => {
    expect(primeFactors(3)).to.eql([3]);
  });

  it('should return [2, 7, 7, 547]', () => {
    expect(primeFactors(2 * 7 * 7 * 547)).to.eql([2, 7, 7, 547]);
  });
});
