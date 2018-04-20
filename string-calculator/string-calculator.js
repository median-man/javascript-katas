function add(s) {
  const maxNum = 1000;
  const nums = parseNumbers(s).filter(num => num <= maxNum);
  if (nums.some(num => num < 0)) throw new Error('negatives not allowed');
  return nums.reduce((sum, num) => sum + num, 0);
}

function parseNumbers(s) {
  let delimiters = /,|\s/g;
  let stringToParse = s;
  const hasCustomDelimiters = /^\/\//.test(s);
  if (hasCustomDelimiters) {
    [delimiters, stringToParse] = parseDelimiters(s);
  }
  return stringToParse.split(delimiters).map(num => parseFloat(num));
}

function parseDelimiters(s) {
  let firstLine = s.split('\n')[0];
  const stringToParse = s.replace(firstLine, '');
  firstLine = firstLine.replace('//', '');
  const customDelims = firstLine.match(/[^[\]]+/g).join('|');
  return [
    new RegExp(customDelims),
    stringToParse,
  ];
}

module.exports = add;
