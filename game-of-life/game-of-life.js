function nextGeneration (previousGen) {
  if (!previousGen) {
    return ''
  }
  return '.'
}

module.exports = { nextGeneration }
