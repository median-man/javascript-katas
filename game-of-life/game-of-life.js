const LIVE_CHAR = '*'
const DEAD_CHAR = '.'

function nextGeneration (prevGenStr) {
  const liveCharMatcher = new RegExp('\\' + LIVE_CHAR, 'g')
  const liveCells = prevGenStr.match(liveCharMatcher)
  const liveCellCount = liveCells ? liveCells.length : 0
  let nextGenStr = prevGenStr
  if (liveCellCount < 3 || liveCellCount > 4) {
    nextGenStr = prevGenStr.replace(liveCharMatcher, DEAD_CHAR)
  }
  if (liveCellCount === 3) {
    nextGenStr = nextGenStr.substr(0, 5) + LIVE_CHAR + nextGenStr.substr(6)
  }
  return nextGenStr
}

module.exports = { nextGeneration }
