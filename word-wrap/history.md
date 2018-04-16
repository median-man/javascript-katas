# Word Wrap Kata
* [Fourth](#fourth-time)
* [Third](#third-time)
* [Second](#second-time)
* [First](#first-time)

## Fourth Time
This took me just under an hour to complete this time.

### Code
```javascript
function wordWrap(text, columns) {
  if (!text || !columns || columns < 0) return '';

  const textFitsOnOneLine = text.length <= columns;
  if (textFitsOnOneLine) return text;

  let endLineAt = text.lastIndexOf(' ', columns);
  let nextLineAt = columns;
  const hasSpace = endLineAt > -1;
  if (hasSpace) {
    nextLineAt = endLineAt + 1;
  } else {
    endLineAt = columns;
  }
  return `${text.substr(0, endLineAt)}\n${wordWrap(text.substr(nextLineAt), columns)}`;
}
```

## Third Time
<!-- [Commit ...](https://github.com/median-man/javascript-katas/commit/) -->

This kata went quickly. I did the third practice on the following day. It took less than an hour from start to finish. I did not look up any code. I nearly let a bug get by me. I didn't add a test case for `columns <= 0` until the end of the kata.

### Code
```javascript
function wordWrap(text, columns = 0) {
  if (!text || columns <= 0) return '';
  if (text.length <= columns) return text;

  let wrapAt = text.lastIndexOf(' ', columns);
  if (wrapAt === -1) wrapAt = columns;

  const firstLine = text.substr(0, wrapAt);
  const remaining = wordWrap(text.substr(wrapAt).trim(), columns);
  return `${firstLine}\n${remaining}`;
}

module.exports = wordWrap;
```

### Tests
```javascript
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
```

## Second Time
[Commit 4f04521be4ab67a8367a5f1a3c8a42c10d141502](https://github.com/median-man/javascript-katas/commit/4f04521be4ab67a8367a5f1a3c8a42c10d141502)

My second attempt at solving the Word Wrap Kata went far, far faster than the first. After the first, I read a blog post on the word wrap algorithm and then immediately began working on the kata from scratch. I still got a little stuck transitioning to line breaks one subsequent spaces. But I worked through it relatively quickly. I'm surprised at how different the code I wrote looks even after refactoring. Although, the algorithm still has the same basic recursion.

### Code
```javascript
function wordWrap(text, columns) {
  const noColumns = !columns;
  if (noColumns) return '';

  const textLengthIsOk = (text.length <= columns);
  if (textLengthIsOk) return text;

  const lastSpace = text.lastIndexOf(' ', columns);
  const wrapAt = (lastSpace === -1 ? columns : lastSpace);

  const firstLine = text.substr(0, wrapAt);
  const remainingLines = wordWrap(text.substr(wrapAt).trim(), columns);
  return `${firstLine}\n${remainingLines}`;
}

module.exports = wordWrap;
```

### Tests
```javascript
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
```

## First Time
[Commit 9900688af7b336efc1c6f7cab20a171d59325ef1](https://github.com/median-man/javascript-katas/commit/9900688af7b336efc1c6f7cab20a171d59325ef1)

My first attempt at solving the Word Wrap Kata went okay. I wanted to do it cold without any Google cheating aside from a few lookups for Javascript String and Array methods as wells as getting reacquainted with using and configuring the Mocha/Chai test suite and assertion libraries.

```javascript
function wordWrap(text = '', columns) {
  const noColumns = !columns;
  if (noColumns) return '';
  if (isTextOk(text, columns)) return text;

  const nextLine = getNextLine(text, columns);
  const remainingText = text.substr(nextLine.length).trim();
  return `${nextLine}\n${wordWrap(remainingText, columns)}`;
}

function isTextOk(text, columns) {
  return text.length <= columns;
}

function getNextLine(text, columns) {
  const words = text.split(' ');
  let nextLine = words.shift();
  while (isNextWordShortEnough(nextLine, words[0], columns)) {
    nextLine += ` ${words.shift()}`;
  }
  return nextLine;
}

function isNextWordShortEnough(line, nextWord = '', columns) {
  const maxLength = columns - (nextWord.length + 1);
  return line.length <= maxLength;
}

module.exports = wordWrap;
```
[Back to Top](#word-wrap-kata)