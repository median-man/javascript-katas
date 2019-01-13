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

function nextGeneration (prev) {
  const prevRows = prev.split('\n')
  const nextRows = []
  nextRows.push([])
  for (let colIndex = 0; colIndex < prevRows[0].length; colIndex += 1) {
    const neighbors = prevRows[0][colIndex - 1] + prevRows[0][colIndex + 1]
    if (isLive(prevRows[0][colIndex]) && countLive(neighbors) === 2) {
      nextRows[0] += '*'
    } else {
      nextRows[0] += '.'
    }
  }
  return nextRows.join('\n')
}

module.exports = { nextGeneration }
