function add(str) {
  const delimiters = getDelimiters(str);
  const numbers = str
    .split(delimiters)
    .map(parseFloat)
    .filter(number => number < 1001);
  const hasNegative = numbers.some(num => num < 0);
  if (hasNegative) throw new Error('negatives not allowed');
  return numbers.reduce(sum, 0);
}

function getDelimiters(str) {
  const defaultDelimiters = /,|\s/;
  const delimiterMatcher = /\/\/(\[.+\])+\n/;

  let delimiters = str.match(delimiterMatcher);
  if (delimiters) {
    delimiters = getCustomDelimiterRe(delimiters);
  } else {
    delimiters = defaultDelimiters;
  }

  return delimiters;
}

function getCustomDelimiterRe(delimiters) {
  const [, delimiterStr] = delimiters;
  let reStr = delimiterStr.match(/[^[\]]/g, '').join('|');
  reStr += '|\\s';
  return new RegExp(reStr, 'g');
}

function sum(x, y) {
  return x + y;
}

module.exports = add;
