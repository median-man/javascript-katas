function nextGeneration (previousGen) {
  if (!previousGen) {
    return ''
  }
  if (previousGen.length === 1) {
    return '.'
  }
  return previousGen
}

module.exports = { nextGeneration }
