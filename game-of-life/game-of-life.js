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
  const nextCellChar = getNextCell(previousGrid, 0, 0)
  nextGrid.setCellAt(0, 0, nextCellChar)
  return nextGrid.toString()
}

class Grid {
  constructor (str) {
    this.rows = str.split('\n').map(row => row.split(''))
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
    return [
      this.charAt(row, col + 1),
      this.charAt(row + 1, col),
      this.charAt(row + 1, col + 1)
    ].filter(char => char === LIVE_CHAR).length
  }
}

function getNextCell (previousGen, row, col) {
  if (previousGen.neighborCountForCellAt(row, col) === 3) {
    return LIVE_CHAR
  }
  return DEAD_CHAR
}

module.exports = { nextGeneration }
