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

# First Solution
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

// Tests
describe('add', function () {
  it('is a function', function () {
    expect(add).to.be.a('function');
  });
  it('add("") returns 0', function () {
    const result = add('');
    expect(result).to.equal(0);
  });
  it('add("1") returns 1', function () {
    const result = add('1');
    expect(result).to.equal(1);
  });
  it('add("2") returns 2', function () {
    const result = add('2');
    expect(result).to.equal(2);
  });
  it('add("1,1") returns 2', function () {
    const result = add('1,1');
    expect(result).to.equal(2);
  });
  it('add("-1") throws error with message of "negatives not allowed"', function () {
    const shouldThrow = () => add('-1');
    expect(shouldThrow).to.throw('negatives not allowed');
  });
  describe('for numbers > 1000', function () {
    it('add("1001") returns 0', function () {
      const result = add('1001');
      expect(result).to.equal(0);
    });
    it('add("5,1,1001,12") returns 0', function () {
      const result = add('5,1,1001,12');
      expect(result).to.equal(18);
    });
  });
  describe('handles white space including new lines', function () {
    it('add("1 1") returns 2', function () {
      const result = add('1 1');
      expect(result).to.equal(2);
    });
    it('add("1\\n1") returns 2', function () {
      const result = add('1\n1');
      expect(result).to.equal(2);
    });
  });
  describe('supports various delimiters', function () {
    it('add("//[-]\\n1-1") returns 2', function () {
      const result = add('//[-]\n1-1');
      expect(result).to.equal(2);
    });
    it('add("//[--]\\n1--1") returns 2', function () {
      const result = add('//[--]\n1--1');
      expect(result).to.equal(2);
    });
    it('add("//[_]\\n1_1") returns 2', function () {
      const result = add('//[_]\n1_1');
      expect(result).to.equal(2);
    });
    it('add("//[_][-]\\n1_1-1") returns 3', function () {
      const result = add('//[_][-]\n1_1-1');
      expect(result).to.equal(3);
    });
    it('add("//[/][--]\\n1-1005\\n/1/3\\n1000") returns 3', function () {
      const result = add('//[/][--]\n1-1005\n/1/3\n1000');
      expect(result).to.equal(1005);
    });
  });
});
```