# Data Munging
This kata is taken from [CodeKata.com][ck]. The [Data Munging Kata][ck-data-munging] has 3 parts. Be sure not to read ahead, solving each part without keeping the next part in mind.

## Part 1
Using the weather data in `weather.dat`, write a program to output the number of the day from the first column, for the day that has the smallest difference of the maximum and minimum temperatures. The max and min temperatures are found in the second and third columns respectively.
### Example case:
```
weather.dat:
Dy MxT   MnT   AvT

 1  88    59    74
 2  79    63    71

output: 2
```

## Part 2
Using the data in `football.dat`, write a program to print the name of the team with the smallest difference in 'for' and 'against' goals. Goals 'for' and 'against' are in the columns labeled 'F' and 'A' respectively.

### Example case:
```
football.dat:
       Team            P     W    L   D    F      A     Pts
    1. Arsenal         38    26   9   3    50  -  30    87
    2. Liverpool       38    24   8   6    80  -  20    80

output: 'Arsenal'
```

## Part 3
Factor out common code from the two programs.

<!-- links -->
[ck]: http://codekata.com/
[ck-data-munging]: http://codekata.com/kata/kata04-data-munging/