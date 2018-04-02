/* eslint func-names: 0, prefer-arrow-callback: 0 */
const { assert } = require('chai');
const wordWrap = require('./word-wrap');

describe('wordWrap', function () {
  it('is a function', function () {
    assert.isFunction(wordWrap);
  });

  it('returns "" when text is ""', function () {
    assert.equal(wordWrap(''), '', 'returns an empty string');
  });

  it('returns "hodor" when passed "hodor", 5', function () {
    assert.equal(wordWrap('hodor', 5), 'hodor', 'returns hodor');
  });

  it('returns "" when passed "hodor" and columns is falsey', function () {
    assert.equal(wordWrap('hodor', 0), '', 'returns empty string');
  });

  it('splits one word', function () {
    assert.equal(wordWrap('hodor', 4), 'hodo\nr');
  });

  it('splits one word multiple times', function () {
    assert.equal(wordWrap('hodor', 2), 'ho\ndo\nr');
  });

  it('splits on first space', function () {
    assert.equal(wordWrap('hodor hodor', 7), 'hodor\nhodor');
  });

  it('splits on second space', function () {
    assert.equal(wordWrap('hodor hodor hodor', 11), 'hodor hodor\nhodor');
  });

  it('splits on multiple spaces', function () {
    assert.equal(wordWrap('hodor hodor hodor', 8), 'hodor\nhodor\nhodor');
  });
});
