/* eslint func-names: off, prefer-arrow-callback: off */
const { expect } = require('chai');
const add = require('./string-calculator.js');

describe('add', function () {
  it('is a function', function () {
    expect(add).to.be.a('function');
  });
  it('add("") returns 0', function () {
    const result = add('');
    expect(result).to.equal(0);
  });
  it('add("1") returns 1', function () {
    const result = add('1');
    expect(result).to.equal(1);
  });
  it('add("2") returns 2', function () {
    const result = add('2');
    expect(result).to.equal(2);
  });
  it('add("1,1") returns 2', function () {
    const result = add('1,1');
    expect(result).to.equal(2);
  });
  it('add("-1") throws error with message of "negatives not allowed"', function () {
    const shouldThrow = () => add('-1');
    expect(shouldThrow).to.throw('negatives not allowed');
  });
  describe('for numbers > 1000', function () {
    it('add("1001") returns 0', function () {
      const result = add('1001');
      expect(result).to.equal(0);
    });
    it('add("5,1,1001,12") returns 0', function () {
      const result = add('5,1,1001,12');
      expect(result).to.equal(18);
    });
  });
  describe('handles white space including new lines', function () {
    it('add("1 1") returns 2', function () {
      const result = add('1 1');
      expect(result).to.equal(2);
    });
    it('add("1\\n1") returns 2', function () {
      const result = add('1\n1');
      expect(result).to.equal(2);
    });
  });
  describe('supports various delimiters', function () {
    it('add("//[-]\\n1-1") returns 2', function () {
      const result = add('//[-]\n1-1');
      expect(result).to.equal(2);
    });
    it('add("//[--]\\n1--1") returns 2', function () {
      const result = add('//[--]\n1--1');
      expect(result).to.equal(2);
    });
    it('add("//[_]\\n1_1") returns 2', function () {
      const result = add('//[_]\n1_1');
      expect(result).to.equal(2);
    });
    it('add("//[_][-]\\n1_1-1") returns 3', function () {
      const result = add('//[_][-]\n1_1-1');
      expect(result).to.equal(3);
    });
    it('add("//[/][--]\\n1-1005\\n/1/3\\n1000") returns 3', function () {
      const result = add('//[/][--]\n1-1005\n/1/3\n1000');
      expect(result).to.equal(1005);
    });
  });
});
