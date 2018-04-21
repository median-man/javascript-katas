function nextGen(previousGen) {
  const rows = previousGen.split(/\n/g);
  return rows.map(getNewRow).join('\n');
}

function getNewRow(row, rowIndex, rows) {
  return row.split('')
    .map((cell, col) => getNewCell(rowIndex, col, rows))
    .join('');
}

function getNewCell(row, col, rows) {
  const deadCell = '.';
  const liveCell = '*';
  const liveNeighbors = countLiveNeighbors(rows, { row, col });
  switch (liveNeighbors) {
    case 2:
      return rows[row][col];
    case 3:
      return liveCell;
    default:
      return deadCell;
  }
}

function countLiveNeighbors(rows, pos) {
  const liveCells = getNeighborCells(rows, pos).match(/\*/g);
  return liveCells ? liveCells.length : 0;
}

function getNeighborCells(rows, { row, col }) {
  const neighborCells = rows[row][col - 1] +
    rows[row][col + 1] +
    getTopNeighbors(row, col, rows) +
    getBottomNeighbors(row, col, rows);
  return neighborCells;
}

function getTopNeighbors(row, col, rows) {
  const rowTop = rows[row - 1];
  return rowTop ? getNeighborsFromRow(rowTop, col) : '';
}

function getBottomNeighbors(row, col, rows) {
  const rowBottom = rows[row + 1];
  return rowBottom ? getNeighborsFromRow(rowBottom, col) : '';
}

function getNeighborsFromRow(row, col) {
  return row[col] + row[col + 1] + row[col - 1];
}

module.exports = { nextGen };
