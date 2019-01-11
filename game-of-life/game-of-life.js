const LIVE_CHAR = '*'
const DEAD_CHAR = '.'

function liveNeighborCellCount (rows, rowIndex, columnIndex) {
  const liveCharMatcher = new RegExp('\\' + LIVE_CHAR, 'g')

  let neighborChars = ''

  const getCell = (row, col) => (rows[row] ? rows[row][col] || '' : '')

  const getColumn = index => {
    let column = ''
    for (let rowOffset = -1; rowOffset < 2; rowOffset += 1) {
      column += getCell(rowIndex + rowOffset, index)
    }
    return column
  }

  const leftCol = columnIndex - 1
  if (leftCol > -1) {
    neighborChars += getColumn(leftCol)
  }

  const rightCol = columnIndex + 1
  if (rightCol < rows[rowIndex].length) {
    neighborChars += getColumn(rightCol)
  }

  neighborChars +=
    getCell(rowIndex - 1, columnIndex) + getCell(rowIndex + 1, columnIndex)

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

  const updateCell = (rowIndex, columnIndex) => {
    const liveCellCount = liveNeighborCellCount(
      prevGenRows,
      rowIndex,
      columnIndex
    )
    const nextCellChar = getNextCellChar(
      prevGenRows[rowIndex][columnIndex],
      liveCellCount
    )
    nextGenRows[rowIndex] =
      nextGenRows[rowIndex].substr(0, columnIndex) +
      nextCellChar +
      nextGenRows[rowIndex].substr(columnIndex + 1)
  }

  const updateRow = rowIndex => {
    for (let columnIndex = 0; columnIndex < 3; columnIndex += 1) {
      updateCell(rowIndex, columnIndex)
    }
  }

  for (let rowIndex = 0; rowIndex < prevGenRows.length; rowIndex += 1) {
    updateRow(rowIndex)
  }
  return nextGenRows.join('\n')
}

module.exports = { nextGeneration }
