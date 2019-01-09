const LIVE_CHAR = '*'
const DEAD_CHAR = '.'

function liveNeighborCellCount (rows, rowIndex, columnIndex) {
  const liveCharMatcher = new RegExp('\\' + LIVE_CHAR, 'g')

  const leftCol = columnIndex - 1
  let neighborChars = ''
  if (leftCol > -1) {
    neighborChars += rows[rowIndex - 1][leftCol]
    neighborChars += rows[rowIndex][leftCol]
    neighborChars += rows[rowIndex + 1][leftCol]
  }

  const rightCol = columnIndex + 1
  if (rightCol < rows[rowIndex].length) {
    neighborChars += rows[rowIndex - 1][rightCol]
    neighborChars += rows[rowIndex][rightCol]
    neighborChars += rows[rowIndex + 1][rightCol]
  }
  neighborChars +=
    rows[rowIndex - 1][columnIndex] + rows[rowIndex + 1][columnIndex]

  const liveCells = neighborChars.match(liveCharMatcher)
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

  columnIndex = 0
  liveCellCount = liveNeighborCellCount(prevGenRows, rowIndex, columnIndex)
  nextCellChar = getNextCellChar(
    prevGenRows[rowIndex][columnIndex],
    liveNeighborCellCount(prevGenRows, rowIndex, columnIndex)
  )
  nextGenRows[rowIndex] =
    nextCellChar + nextGenRows[rowIndex][1] + nextGenRows[rowIndex][2]

  columnIndex = 2
  liveCellCount = liveNeighborCellCount(prevGenRows, rowIndex, columnIndex)
  nextCellChar = getNextCellChar(
    prevGenRows[rowIndex][columnIndex],
    liveNeighborCellCount(prevGenRows, rowIndex, columnIndex)
  )
  nextGenRows[rowIndex] =
    nextGenRows[rowIndex][0] + nextGenRows[rowIndex][1] + nextCellChar

  return nextGenRows.join('\n')
}

module.exports = { nextGeneration }
