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

module.exports = nextGen;
