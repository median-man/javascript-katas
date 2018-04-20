# String Calculator
Create a function that takes a string containing 0 or more numbers and returns their sum.
* It should throw "negatives not allowed" on a negative number.
* It ignores numbers > 1000.
* The function should handle new lines. (\n)
* ',' is the default delimiter.
* Treats white space as a delimiter.
* It should support different delimiters.
* The first line should begin with `//` to indicate delimiters.
* The format for delimiters is `//[delimiter1]\n` for one delimiter.
* The format for multiple delimiters is `//[delimiter 1][delimiter2]\n`.
* Delimiters may have a length >= 1.
```
add('1,2') ==> 3
add('1001,2') ==> 2
add('2 1') ==> 3
add('1\n2') ==> 3
add('//[--][/]\n2--1/3') ==> 6
add('2 -1') throws "negatives not allowed"
```

## Second Solution
Only some slight differences from first solution. Tests turned out quite different.

```javascript
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
```

## First Solution
```javascript
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
```