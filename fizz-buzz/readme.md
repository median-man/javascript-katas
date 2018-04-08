# Fizz Buzz
Develop a function that accepts a number as input:
* Returns 'fizz' if 3 is a factor of the number.
* Returns 'buzz' if 5 is a factor of the number.
* Returns 'fizzbuzz' if 15 is a factor of the number.
* Returns the number if none of the other statements apply.
```javascript
fizzBuzz(1)  // 1
fizzBuzz(9)  // 'fizz'
fizzBuzz(10) // 'buzz'
fizzBuzz(30) // 'fizzbuzz'
```

## First Solution
```javascript
function fizzBuzz(n) {
  let result = '';
  if (n % 3 === 0) result += 'fizz';
  if (n % 5 === 0) result += 'buzz';
  return result || n;
}

// Tests
describe('fizzBuzz', function () {
  it('is a function', function () {
    assert.isFunction(fizzBuzz);
  });
  it('fizzBuzz(1) returns 1', function () {
    assert.equal(fizzBuzz(1), 1);
  });
  it('fizzBuzz(2) returns 2', function () {
    assert.equal(fizzBuzz(2), 2);
  });
  it('fizzBuzz(3) returns "fizz"', function () {
    assert.equal(fizzBuzz(3), 'fizz');
  });
  it('fizzBuzz(6) returns "fizz"', function () {
    assert.equal(fizzBuzz(6), 'fizz');
  });
  it('fizzBuzz(5) returns "buzz"', function () {
    assert.equal(fizzBuzz(5), 'buzz');
  });
  it('fizzBuzz(15) returns "fizzbuzz"', function () {
    assert.equal(fizzBuzz(15), 'fizzbuzz');
  });
});
```
