# Word Wrap

This kata is based upon (this blog
post)[http://thecleancoder.blogspot.com/2010/10/craftsman-62-dark-path.html].

Create a function named `wrap` that takes two arguments: a string and a column
number. The function should return a string with line breaks inserted so that no
line is longer than the given column number. Lines should break at word
boundaries.

## Example:

Input:

```
'A long time ago in a galaxy far, far away....'
```

Result of `wrap(input, 10)`:

```
'A long\ntime ago\nin a\ngalaxy\nfar, far\naway....'
```

## Note

Practice with and without recursion as some languages (JavaScript) offer no
optimization for recursive calls and this function has potentially unbounded
input.
