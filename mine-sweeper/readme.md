# Mine Sweeper
Create a mine sweeper game. The game shows a number in a square which indicates how many mines are adjacent to that square. Mines are represented by "*". This kata is based on [MinesweeperKata][coding-dojo] from *Coding Dojo*.

Example:
```
Field:    Numbers:
*...      *211
..*.      12*1
....      0233
..**      01**
```

Write a function which takes in a string containing an arbitrary number of mine fields. The first line of each field will contain two integers n and m that are each greater than 0 and less than or equal to 100. n indicates the number of lines and m indicates the number of columns for the field that follows. Safe cells are represented by "." and mines are represented by "*". The first line with "0 0" represents the end of input.

## Acceptance Test
Input:
```
4 4
*...
....
.*..
....
3 5
**...
.....
.*...
0 0
```
Output:
```
Field #1:
*100
2210
1*10
1110

Field #2:
**100
33200
1*100
```

## First Solution
*Completed 4/14/18*  
I didn't finish this in one sitting. This exercise lead me to spend a great deal of time improving my familiarity with the RegExp constructor for Javascript. If I were to start this kata again immediately, I would begin by solving for one 1x1 field, followed by multiple 1x1 fields. Then I would progress for a single 2x2 field with a single mine around the perimeter for each possible position of the mine. Then, develop a solution for all possible inputs.


### References
MinesweeperKata. *Coding Dojo.* Retrieved April 09, 2018, from http://codingdojo.org/kata/Minesweeper/

[coding-dojo]: [http://codingdojo.org/kata/Minesweeper/]