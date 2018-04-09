# Javascript Katas
This is a repository of katas for practicing Javascript. After reading [this blog post][clean-coder-blog], I was inspired to start creating and practicing code katas in a manner after that described in the post.

>"When faced with a problem you do no understand, do any part of it you do understand, then look at it again." - Robert A. Heinlein, _The Moon is a Harsh Mistress_

## Word Wrap
My first Javascript kata. Inspired by [this blog post][clean-coder-blog].

Write a function that takes two arguments--a string and a column number. The function returns a string with line breaks inserted so that no line is longer than the column number. Lines should break at word boundaries.

## Prime Factors
Write a function that takes a whole number greater than 0 and returns an array of its prime factors.

## Fizz Buzz
Develop a function that accepts a number as input:
* Returns 'fizz' if 3 is a factor of the number.
* Returns 'buzz' if 5 is a factor of the number.
* Returns 'fizzbuzz' if 15 is a factor of the number.
* Returns the number if none of the other statements apply.

## String Calculator
Create a function that takes a string containing 0 or more numbers and returns their sum.

## Game of Life
This Kata is about calculating the next generation of Conway’s game of life, given any starting position. See [Wikipedia: Conway's Game of Life][game-of-life] for background.

You start with a two dimensional grid of cells, where each cell is either alive or dead. In this version of the problem, the grid is finite, and no life can exist off the edges. When calculating the next generation of the grid, follow these rules:
1. Any live cell with fewer than two live neighbors dies, as if caused by under-population.
2. Any live cell with more than three live neighbors dies, as if by overcrowding.
3. Any live cell with two or three live neighbors lives on to the next generation.
4. Any dead cell with exactly three live neighbors becomes a live cell.

Write a program that can accept an arbitrary grid of cells as a string, and will output a similar grid showing the next generation. Use "." for dead cells and "*" for live cells.

## Mine Sweeper
Create a mine sweeper game. The game shows a number in a square which indicates how many mines are adjacent to that square. Mines are represented by "*". This kata is based on [MinesweeperKata][minesweeper] from *Coding Dojo*.

Write a function which takes in a string containing an arbitrary number of mine fields. Output should be a string with the hint numbers solved for each mine field.

<!-- References -->
[clean-coder-blog]: http://thecleancoder.blogspot.com/2010/10/craftsman-62-dark-path.html
[game-of-life]: http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life 
[minesweeper]: [http://codingdojo.org/kata/Minesweeper/]