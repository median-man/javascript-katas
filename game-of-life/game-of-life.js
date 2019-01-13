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
    if (
      isLive(prevRows[rowIndex][colIndex]) &&
      liveNeighborCount(prevRows, rowIndex, colIndex) === 2
    ) {
      result += '*'
    } else {
      result += '.'
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
  let result =
    prevRows[rowIndex][colIndex - 1] + prevRows[rowIndex][colIndex + 1]

  result += getNeighborRow(prevRows[rowIndex - 1], colIndex)
  result += getNeighborRow(prevRows[rowIndex + 1], colIndex)

  return [
    getNeighborRow(prevRows[rowIndex - 1], colIndex),
    prevRows[rowIndex][colIndex - 1] + prevRows[rowIndex][colIndex + 1],
    getNeighborRow(prevRows[rowIndex + 1], colIndex)
  ].join('')
}

function getNeighborRow (row, colIndex) {
  return row ? row[colIndex] : ''
}

module.exports = { nextGeneration }
