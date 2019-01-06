const DEAD_CELL = '.'
const LIVE_CELL = '*'
const ROW_SEPARATOR = '\n'

function nextGrid (startGrid) {
  const rows = startGrid.split(ROW_SEPARATOR)
  const newRows = []
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    newRows[rowIndex] = updateRow(rows, rowIndex)
  }
  return newRows.join(ROW_SEPARATOR)
}

function updateRow (rows, rowIndex) {
  let row = ''
  for (let colIndex = 0; colIndex < rows[rowIndex].length; colIndex += 1) {
    row += updateCell(rows, rowIndex, colIndex)
  }
  return row
}

function updateCell (rows, rowIndex, colIndex) {
  const neighbors = getNeighbors(rows, rowIndex, colIndex)
  const liveNeighborCount = countLiveCells(neighbors)
  if (liveNeighborCount < 2 || liveNeighborCount > 3) {
    return DEAD_CELL
  }
  if (liveNeighborCount === 3) {
    return LIVE_CELL
  }
  return rows[rowIndex][colIndex]
}

function getNeighbors (rows, rowIndex, colIndex) {
  let neighbors = ''

  const cellValue = (row, c) => row[c] || ''

  const addNeighborsFromRow = row => {
    for (let colOffset = -1; colOffset < 2; colOffset += 1) {
      neighbors += cellValue(row, colIndex + colOffset)
    }
  }

  const rowAbove = rows[rowIndex - 1]
  if (rowAbove) {
    addNeighborsFromRow(rowAbove)
  }

  const rowBelow = rows[rowIndex + 1]
  if (rowBelow) {
    addNeighborsFromRow(rowBelow)
  }
  return (
    neighbors +
    cellValue(rows[rowIndex], colIndex - 1) +
    cellValue(rows[rowIndex], colIndex + 1)
  )
}

function countLiveCells (str) {
  const re = new RegExp('\\' + LIVE_CELL, 'g')
  return allDeadCells(str) ? 0 : str.match(re).length
}

function allDeadCells (str) {
  return str.indexOf(LIVE_CELL) === -1
}

module.exports = { nextGrid }
