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
  let next = ''
  for (let colIndex = 0; colIndex < prev.length; colIndex += 1) {
    const neighbors = prev[colIndex - 1] + prev[colIndex + 1]
    if (isLive(prev[colIndex]) && countLive(neighbors) === 2) {
      next += '*'
    } else {
      next += '.'
    }
  }
  return next
}

module.exports = { nextGeneration }
