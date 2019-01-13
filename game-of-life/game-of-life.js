function nextGeneration (prev) {
  const prevRows = prev.split('\n')
  const nextRows = []
  nextRows.push([])
  for (let rowIndex = 0; rowIndex < prevRows.length; rowIndex += 1) {
    nextRows[rowIndex] = nextRow(prevRows, rowIndex)
  }

  return nextRows.join('\n')
}

function nextRow (prevRows, rowIndex) {
  let result = ''
  for (let colIndex = 0; colIndex < prevRows[rowIndex].length; colIndex += 1) {
    const liveNeighborCellCount = liveNeighborCount(
      prevRows,
      rowIndex,
      colIndex
    )
    if (liveNeighborCellCount < 2) {
      result += '.'
    } else if (liveNeighborCellCount < 3) {
      result += prevRows[rowIndex][colIndex]
    } else {
      result += '*'
    }
  }
  return result
}

function isLive (char) {
  return char === '*'
}

function liveNeighborCount (prevRows, rowIndex, colIndex) {
  return countLive(neighbors(prevRows, rowIndex, colIndex))
}

function countLive (str) {
  let count = 0
  for (let i = 0; i < str.length; i += 1) {
    count += isLive(str[i]) ? 1 : 0
  }
  return count
}

function neighbors (prevRows, rowIndex, colIndex) {
  return [
    getNeighborRow(prevRows[rowIndex - 1], colIndex),
    prevRows[rowIndex][colIndex - 1] + prevRows[rowIndex][colIndex + 1],
    getNeighborRow(prevRows[rowIndex + 1], colIndex)
  ].join('')
}

function getNeighborRow (row, colIndex) {
  let result = ''
  if (row) {
    for (let i = -1; i < 2; i += 1) {
      result += row[colIndex + i] || ''
    }
  }
  return result
}

module.exports = { nextGeneration }
