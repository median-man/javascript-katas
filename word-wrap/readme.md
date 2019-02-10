# Word Wrap

This kata is based upon
[this blog post](http://thecleancoder.blogspot.com/2010/10/craftsman-62-dark-path.html).

Create a function named `wrap` that takes two arguments: a string and a column
number. The function should return a string with line breaks inserted so that no
line is longer than the given column number. Lines should break at word
boundaries. Wrap should break a word only if the word has a length that is
longer than the given columns. Treat punctuation marks as part of the adjacent
word.

## Example:

Input:

```
'A long time ago in a galaxy far, far away....'
```

Result of `wrap(input, 7)`:

```
'A long\ntime\nago in\na\ngalaxy\nfar,\nfar\naway...\n.'
```
