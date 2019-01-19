const LIVE_CHAR = '*'
const DEAD_CHAR = '.'

function nextGeneration (previousGen) {
  if (!previousGen) {
    return ''
  }
  if (previousGen.length === 1) {
    return DEAD_CHAR
  }
  const nextGrid = new Grid(previousGen)
  const previousGrid = new Grid(previousGen)
  for (let rowIndex = 0; rowIndex < previousGrid.rowCount(); rowIndex += 1) {
    updateRow(rowIndex, previousGrid, nextGrid)
  }
  return nextGrid.toString()
}

function updateRow (rowIndex, previousGrid, nextGrid) {
  for (
    let colIndex = 0;
    previousGrid.hasCellAt(rowIndex, colIndex);
    colIndex += 1
  ) {
    const nextCellChar = getNextCell(previousGrid, rowIndex, colIndex)
    nextGrid.setCellAt(rowIndex, colIndex, nextCellChar)
  }
}

class Grid {
  constructor (str) {
    this.rows = str.split('\n').map(row => row.split(''))
  }

  rowCount () {
    return this.rows.length
  }

  hasCellAt (row, column) {
    if (!this.rows[row]) return false
    return !!this.rows[row][column]
  }

  setCellAt (row, col, char) {
    this.rows[row][col] = char
  }

  charAt (row, column) {
    return this.rows[row][column]
  }

  toString () {
    return this.rows.map(row => row.join('')).join('\n')
  }

  neighborCountForCellAt (row, col) {
    const adjacentCells = [this.charAt(row, col - 1), this.charAt(row, col + 1)]
    if (this.rows[row + 1]) {
      adjacentCells.push(this.charAt(row + 1, col))
      adjacentCells.push(this.charAt(row + 1, col + 1))
    }

    return adjacentCells.filter(char => char === LIVE_CHAR).length
  }
}

function getNextCell (previousGen, row, col) {
  const countOfNeighbors = previousGen.neighborCountForCellAt(row, col)

  // if (countOfNeighbors === 3) {
  //   return LIVE_CHAR
  // }

  if (countOfNeighbors < 2) {
    return DEAD_CHAR
  }

  return previousGen.charAt(row, col)
}

module.exports = { nextGeneration }
