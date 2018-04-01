/* eslint prefer-arrow-callback: "off", func-names: "off" */
const { assert } = require('chai');
const wordWrap = require('./word-wrap');

describe('Word Wrap', () => {
  it('01 is a function', function () {
    assert.isFunction(wordWrap);
  });

  it('02 returns an empty string when no parameters are passed in', function () {
    const result = wordWrap();
    assert.isEmpty(result, 'is empty string');
  });

  it('03 returns the string unchanged when the length is equal to the columns', function () {
    const result = wordWrap('Tyrion', 6);
    const expected = 'Tyrion';
    assert.equal(result, expected, 'returns text unchanged');
  });

  it('04 returns an empty string if columns is falsey', function () {
    const result = wordWrap('A Lannister always pays his debts.');
    assert.isEmpty(result, 'is empty string');
  });

  it('05 returns two lines when passed ("John Snow", 6)', function () {
    const result = wordWrap('John Snow', 6);
    const expected = 2;
    const lineCount = result.split('\n').length;
    assert.equal(lineCount, expected, 'returns 2 lines');
  });

  it('06 the first line contains "John" when passed ("John Snow", 6)', function () {
    const result = wordWrap('John Snow', 6);
    const firstLine = result.split('\n')[0];
    const expected = 'John';
    assert.equal(firstLine, expected, 'first line is "John"');
  });

  it('07 the second line contains "Snow" when passed ("John Snow", 6)', function () {
    const result = wordWrap('John Snow', 6);
    const line2 = result.split('\n')[1];
    const expected = 'Snow';
    assert.equal(line2, expected, 'first line is "John"');
  });

  it('08 the first line contains "John" when passed ("John Snow", 3)', function () {
    const result = wordWrap('John Snow', 3);
    const firstLine = result.split('\n')[0];
    const expected = 'John';
    assert.equal(firstLine, expected, 'first line is "John"');
  });

  it('09 When passed ("A Lannister always pays his debts.", 10)', function () {
    const result = wordWrap('A Lannister always pays his debts.', 10);
    const expected = 'A\nLannister\nalways\npays his\ndebts.';
    assert.equal(result, expected);
  });
});
