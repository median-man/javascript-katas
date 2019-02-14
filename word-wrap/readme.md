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

Since the maximum allowable size of the input is unknown, do not use recursion
for JavaScript solutions.
