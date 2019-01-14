function getNextCell (previousGen, rowIndex, colIndex) {
  return '.'
}

function nextGeneration (previousGen) {
  if (!previousGen) {
    return ''
  }
  if (previousGen.length === 1) {
    return '.'
  }
  const nextGrid = previousGen.split('\n').map(row => row.split(''))
  const previousGrid = previousGen.split('\n').map(row => row.split(''))
  const nextCellChar = getNextCell(previousGrid, 0, 0)
  nextGrid[0][0] = nextCellChar
  return nextGrid.map(row => row.join('')).join('\n')
}

module.exports = { nextGeneration }
