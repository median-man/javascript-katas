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
