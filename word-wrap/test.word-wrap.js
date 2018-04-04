/* eslint prefer-arrow-callback: 0 */
const { assert } = require('chai');
const wordWrap = require('./word-wrap');

describe('wordWrap', function describeWordWrap() {
  it('is a function', function wordWrapIsAFunc() {
    assert.isFunction(wordWrap);
  });

  it('returns "" when text is undefined', function textIsUndefined() {
    assert.equal(wordWrap(), '');
  });

  it('returns one line when text length is less than columns', function testOneLine() {
    assert.equal(wordWrap('duck hunt', 9), 'duck hunt', 'wordWrap("duck hunt", 9)');
  });

  it('returns "" when columns is undefined', function colmunsIsUndefined() {
    assert.equal(wordWrap('zelda'), '');
  });

  it('returns a string when text is a number', function textIsNumber() {
    assert.strictEqual(wordWrap(7, 5), '7', 'wordWrap(7, 5)');
  });

  it('splits a word on two lines', function testWordOnTwoLines() {
    assert.equal(wordWrap('tetris', 3), 'tet\nris');
  });

  it('splits two words at the word boundary', function testTwoWordsAtBoundry() {
    assert.equal(wordWrap('donkey kong', 6), 'donkey\nkong', "wordWrap('donkey kong', 6)");
  });

  it('splits two words when columns is after the boundary', function testTwoWordsAfter() {
    const actual = wordWrap('donkey kong', 7);
    const expected = 'donkey\nkong';
    const msg = "wordWrap('donkey kong', 7)";
    assert.equal(actual, expected, msg);
  });

  it('splits multiple words', function testMultipleWords() {
    const actual = wordWrap('legend of zelda', 6);
    const expected = 'legend\nof\nzelda';
    const msg = "wordWrap('legend of zelda', 6)";
    assert.equal(actual, expected, msg);
  });
});
