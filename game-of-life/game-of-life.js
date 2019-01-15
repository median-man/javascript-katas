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

  neighborsOfCellAt (row, col) {
    return [this.charAt(row, col + 1), this.charAt(row + 1, col)]
  }

  toString () {
    return this.rows.map(row => row.join('')).join('\n')
  }
}

function getNextCell (previousGen, row, col) {
  const countLiveNeighbors = countLive(
    previousGen.neighborsOfCellAt(row, col)
  )
  if (countLiveNeighbors > 1) {
    return '*'
  }
  return '.'
}

function countLive (cells) {
  return cells.filter(char => char === '*').length
}

module.exports = { nextGeneration }
