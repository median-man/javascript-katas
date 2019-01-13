function isLive (char) {
  return char === '*'
}

function countLive (str) {
  let count = 0
  for (let i = 0; i < str.length; i += 1) {
    count += isLive(str[i]) ? 1 : 0
  }
  return count
}

function nextRow (prevRows, rowIndex) {
  let nextRow = ''
  for (let colIndex = 0; colIndex < prevRows[rowIndex].length; colIndex += 1) {
    const neighbors =
      prevRows[rowIndex][colIndex - 1] + prevRows[rowIndex][colIndex + 1]
    if (isLive(prevRows[rowIndex][colIndex]) && countLive(neighbors) === 2) {
      nextRow += '*'
    } else {
      nextRow += '.'
    }
  }
  return nextRow
}

function nextGeneration (prev) {
  const prevRows = prev.split('\n')
  const nextRows = []
  nextRows.push([])
  for (let rowIndex = 0; rowIndex < prevRows.length; rowIndex += 1) {
    nextRows[rowIndex] = nextRow(prevRows, rowIndex)
  }

  return nextRows.join('\n')
}

module.exports = { nextGeneration }
