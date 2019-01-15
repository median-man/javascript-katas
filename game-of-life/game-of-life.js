function nextGeneration (previousGen) {
  if (!previousGen) {
    return ''
  }
  if (previousGen.length === 1) {
    return '.'
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
}

function getNextCell (previousGen, row, col) {
  return '.'
}

module.exports = { nextGeneration }
