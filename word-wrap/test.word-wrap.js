/* eslint prefer-arrow-callback: 0, func-names: 0 */
const { assert } = require('chai');
const wordWrap = require('./word-wrap.js');

describe('wordWrap', function () {
  it('is a function', function () {
    assert.isFunction(wordWrap);
  });

  describe('degenerate cases', function () {
    it('returns an empty string when passed text is falsey', function () {
      assert.equal(wordWrap(), '', 'when text undefined');
      assert.equal(wordWrap(null, 5), '', 'when text is null');
    });

    it('returns the text when the text is shorter than columns', function () {
      assert.equal(wordWrap('dune', 7), 'dune');
    });

    it('returns an empty string when columns is falsey', function () {
      assert.equal(wordWrap('spice'), '');
    });

    it('returns an empty string when columns is less than 0', function () {
      assert.equal(wordWrap('spice', -1), '');
    });
  });

  describe('when passed a single word', function () {
    it('wraps the word when column is less than the length of the word', function () {
      assert.equal(wordWrap('fremen', 5), 'freme\nn');
    });

    it('wraps the word multiple times', function () {
      assert.equal(wordWrap('arrakis', 3), 'arr\naki\ns');
    });
  });

  describe('when passed two or more words', function () {
    it('wraps at the word boundry', function () {
      assert.equal(wordWrap('paul dune', 5), 'paul\ndune');
    });

    it('wraps at first word when it fits on a line', function () {
      assert.equal(wordWrap('paul atreides', 10), 'paul\natreides');
    });

    it('wraps after multiple words when they fit on a line', function () {
      assert.equal(wordWrap('i must not fear', 8), 'i must\nnot fear');
    });
  });
});

