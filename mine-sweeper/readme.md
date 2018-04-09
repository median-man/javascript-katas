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
### References
MinesweeperKata. *Coding Dojo.* Retrieved April 09, 2018, from http://codingdojo.org/kata/Minesweeper/

[coding-dojo]: [http://codingdojo.org/kata/Minesweeper/]