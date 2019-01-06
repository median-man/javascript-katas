const LIVE_CELL_CHAR = '*'
const DEAD_CELL_CHAR = '.'

function createCell (char) {
  const isLive = () => char === LIVE_CELL_CHAR
  return {
    toString: () => (isLive() ? LIVE_CELL_CHAR : DEAD_CELL_CHAR),
    isLive
  }
}

class Grid {
  constructor (str) {
    this.rows = str.split('\n').map(rowStr => rowStr.split('').map(createCell))
  }

  toString () {
    return this.rows
      .map(row => row.map(cell => cell.toString()).join(''))
      .join('\n')
  }

  setCellAt (char, rowIndex, colIndex) {
    this.rows[rowIndex][colIndex] = createCell(char)
  }

  countLiveNeighborsForCellAt (rowIndex, colIndex) {
    let neighborCells = []

    const addNeighbor = cell => {
      if (cell) {
        neighborCells.push(cell)
      }
    }

    const leftCell = this.getCellAt(rowIndex, colIndex - 1)
    const rightCell = this.getCellAt(rowIndex, colIndex + 1)
    addNeighbor(leftCell)
    addNeighbor(rightCell)

    for (let offset = -1; offset <= 1; offset += 1) {
      const cellAbove = this.getCellAt(rowIndex - 1, colIndex + offset)
      const cellBelow = this.getCellAt(rowIndex + 1, colIndex + offset)
      addNeighbor(cellAbove)
      addNeighbor(cellBelow)
    }
    return neighborCells.filter(cell => cell.isLive()).length
  }

  getCellAt (rowIndex, colIndex) {
    return this.rows[rowIndex] ? this.rows[rowIndex][colIndex] : null
  }
}

function nextGrid (startGridStr) {
  const nextGrid = new Grid(startGridStr)
  const startGrid = new Grid(startGridStr)

  const setNextCell = (row, col) => {
    const countOfLiveNeighbors = startGrid.countLiveNeighborsForCellAt(row, col)
    if (countOfLiveNeighbors === 3) {
      nextGrid.setCellAt(LIVE_CELL_CHAR, row, col)
    }
    if (countOfLiveNeighbors > 3 || countOfLiveNeighbors < 2) {
      nextGrid.setCellAt(DEAD_CELL_CHAR, row, col)
    }
  }

  for (let row = 0; row < startGrid.rows.length; row += 1) {
    for (let col = 0; col < startGrid.rows[row].length; col += 1) {
      setNextCell(row, col)
    }
  }

  return nextGrid.toString()
}

module.exports = { nextGrid }
