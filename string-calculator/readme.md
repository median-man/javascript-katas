# String Calculator

Create a function that takes a string containing 0 or more numbers and returns
their sum. Should support optional custom delimiters declared in the first line
of the string.

Requirements:

- should return 0 for empty string
- should return sum of one or more comma separated numbers
- should treat new lines as a delimiter. `add('2\n1,1') == 4`
- should support different delimiters defined in the first line

```
input:
  //-
  1-1-3

output: 4
```

- should use ',' as the default delimiter when no custom delimiter is defined.
  (e.g. `add('1,1,1') == 3`)
- should throw an error "Negatives not allowed: <negatives found>". (e.g.
  `add('-1,-2)` throws "Negatives not allowed: -1, -2")
- should ignore numbers greater than 1000. `add('2,1002') == 2`
- should support delimiters of any length. `add('//[###]\n1###1###2) == 4`
- should support multiple delimiters. `add('//[--][+]\n1+1--2) == 4`

This exercise is inspired by
[String Calculator](http://osherove.com/tdd-kata-1/) from osherove.com.
