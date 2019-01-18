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
  for (let colIndex = 0; previousGrid.hasCellAt(0, colIndex); colIndex += 1) {
    const nextCellChar = getNextCell(previousGrid, 0, colIndex)
    nextGrid.setCellAt(0, colIndex, nextCellChar)
  }
  for (let colIndex = 0; previousGrid.hasCellAt(1, colIndex); colIndex += 1) {
    const nextCellChar = getNextCell(previousGrid, 1, colIndex)
    nextGrid.setCellAt(1, colIndex, nextCellChar)
  }
  return nextGrid.toString()
}

class Grid {
  constructor (str) {
    this.rows = str.split('\n').map(row => row.split(''))
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
    const adjacentCells = [this.charAt(row, col + 1)]

    if (this.rows[row + 1]) {
      adjacentCells.push(this.charAt(row + 1, col))
      adjacentCells.push(this.charAt(row + 1, col + 1))
    }

    return adjacentCells.filter(char => char === LIVE_CHAR).length
  }
}

function getNextCell (previousGen, row, col) {
  if (previousGen.neighborCountForCellAt(row, col) === 3) {
    return LIVE_CHAR
  }
  return DEAD_CHAR
}

module.exports = { nextGeneration }
