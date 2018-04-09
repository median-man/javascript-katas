## Game of Life
This Kata is about calculating the next generation of Conway’s game of life, given any starting position. See [Wikipedia: Conway's Game of Life][game-of-life] for background.

You start with a two dimensional grid of cells, where each cell is either alive or dead. In this version of the problem, the grid is finite, and no life can exist off the edges. When calculating the next generation of the grid, follow these rules:
1. Any live cell with fewer than two live neighbors dies, as if caused by under-population.
2. Any live cell with more than three live neighbors dies, as if by overcrowding.
3. Any live cell with two or three live neighbors lives on to the next generation.
4. Any dead cell with exactly three live neighbors becomes a live cell.

Write a program that can accept an arbitrary grid of cells as a string, and will output a similar grid showing the next generation. Use "." for dead cells and "*" for live cells.

Example:
```
Input:     Output:
.......    .......
...*...    .......
.......    ..**...
..**...    ..**...
..*....    ..**...
```

## First Solution
```javascript
function nextGen(gridStr) {
  const grid = gridStr.split('\n');
  if (grid.length < 2) return gridStr.replace(/\*/g, '.');

  const next = [];
  while (next.length < grid.length) {
    next.push(nextRow(next.length, grid));
  }
  return next.join('\n');
}

function nextRow(index, grid) {
  const row = [];
  for (let col = 0; col < grid[index].length; col += 1) {
    const allNeighbors = getNeighbors(index, col, grid);
    const liveNeighbors = countLive(allNeighbors);

    const isDead = liveNeighbors > 3 || liveNeighbors < 2;
    const isAlive = liveNeighbors === 3;
    if (isDead) {
      row.push('.');
    } else if (isAlive) {
      row.push('*');
    } else {
      row.push(grid[index][col]);
    }
  }
  return row.join('');
}

function getNeighbors(row, col, grid) {
  let neighbors = '';
  neighbors += getNeighbor(grid[row], col - 1);
  neighbors += getNeighbor(grid[row], col + 1);

  const isNotFirstRow = row > 0;
  if (isNotFirstRow) {
    neighbors += getNeighborsFromRow(grid[row - 1], col);
  }

  const isNotLastRow = row < grid.length - 1;
  if (isNotLastRow) {
    neighbors += getNeighborsFromRow(grid[row + 1], col);
  }
  return neighbors;
}

function getNeighbor(row, col) {
  return row[col] || '';
}

function getNeighborsFromRow(row, col) {
  let neighbors = '';
  for (let shift = -1; shift <= 1; shift += 1) {
    neighbors += getNeighbor(row, col + shift);
  }
  return neighbors;
}

function countLive(str) {
  const liveCells = str.match(/\*/g);
  return liveCells ? liveCells.length : 0;
}
```