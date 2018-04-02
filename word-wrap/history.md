# Word Wrap Kata

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