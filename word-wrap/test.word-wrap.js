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
});
