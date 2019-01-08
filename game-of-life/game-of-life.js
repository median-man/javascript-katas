const LIVE_CHAR = '*'
const DEAD_CHAR = '.'

function liveNeighborCellCount (rows, rowIndex, columnIndex) {
  const row = rows[rowIndex]
  const liveCharMatcher = new RegExp('\\' + LIVE_CHAR, 'g')
  const neighborCells =
    rows[rowIndex - 1].substr(columnIndex - 1, 3) +
    row[columnIndex - 1] +
    row[columnIndex + 1] +
    rows[rowIndex + 1].substr(columnIndex - 1, 3)
  const liveCells = neighborCells.match(liveCharMatcher)
  return liveCells ? liveCells.length : 0
}

function getNextCellChar (currentChar, liveNeighborCount) {
  if (liveNeighborCount < 2 || liveNeighborCount > 3) {
    return DEAD_CHAR
  }
  if (liveNeighborCount === 3) {
    return LIVE_CHAR
  }
  return currentChar
}

function nextGeneration (prevGenStr) {
  const prevGenRows = prevGenStr.split('\n')
  const nextGenRows = prevGenStr.split('\n')
  let columnIndex = 1
  let rowIndex = 1
  let liveCellCount = liveNeighborCellCount(prevGenRows, rowIndex, columnIndex)
  let nextCellChar = getNextCellChar(
    prevGenRows[rowIndex][columnIndex],
    liveCellCount
  )
  nextGenRows[rowIndex] =
    nextGenRows[rowIndex][0] + nextCellChar + nextGenRows[rowIndex][2]

  // columnIndex = 0
  // liveCellCount = liveNeighborCellCount(prevGenRows, rowIndex, columnIndex)

  return nextGenRows.join('\n')
}

module.exports = { nextGeneration }
