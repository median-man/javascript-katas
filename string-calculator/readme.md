# String Calculator

Create a function that takes a string containing 0 or more numbers and returns
their sum.

- It should throw "negatives not allowed" on a negative number.
- It ignores numbers > 1000.
- The function should handle new lines. (\n)
- ',' is the default delimiter.
- Treats white space as a delimiter.
- It should support different delimiters.
- The first line should begin with `//` to indicate delimiters.
- The format for delimiters is `//[delimiter1]\n` for one delimiter.
- The format for multiple delimiters is `//[delimiter 1][delimiter2]\n`.
- Delimiters may have a length >= 1.

```
add('1,2') ==> 3
add('1001,2') ==> 2
add('2 1') ==> 3
add('1\n2') ==> 3
add('//[--][/]\n2--1/3') ==> 6
add('2 -1') throws "negatives not allowed"
```
