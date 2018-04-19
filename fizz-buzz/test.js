const { expect } = require('chai');
const fizzBuzz = require('./fizz-buzz.js');

describe('fizzBuzz', () => {
  it('is a function', () => {
    expect(fizzBuzz).to.be.a('function');
  });

  it('1 returns 1', () => expect(fizzBuzz(1)).to.equal(1));

  it('2 returns 2', () => expect(fizzBuzz(2)).to.equal(2));

  it('3 returns 3', () => expect(fizzBuzz(3)).to.equal('fizz'));

  it('6 returns 6', () => expect(fizzBuzz(6)).to.equal('fizz'));

  it('5 returns 5', () => expect(fizzBuzz(5)).to.equal('buzz'));

  it('15 returns 15', () => expect(fizzBuzz(15)).to.equal('fizzbuzz'));
});
