# Word Wrap Kata
My first Javascript kata. Inspired by [this blog post][clean-coder-blog].

### Primary Form
Write a function that takes two arguments--a string and a column number. The function returns a string with line breaks inserted so that no line is longer than the column number. Lines should break at word boundaries.

### 2nd Form
Meet the requirements for first form using a few conditionals as possible. Conditionals include if statements, switch cases, short-circuit evaluation (ex. `let x = false || ''`), and the conditional operator.

## Contents
[First Attempt](#first-attempt)

## Second Attempt
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

## First Attempt
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