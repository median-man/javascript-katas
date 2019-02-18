function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  const boundaryAt = s.lastIndexOf(wordBoundary())
  if (boundaryAt > -1) {
    return (
      s.substr(0, boundaryAt) +
      lineBreak() +
      wrap(s.substr(boundaryAt + 1), cols)
    )
  }
  return s.substr(0, cols) + lineBreak() + wrap(s.substr(cols), cols)
}

function wordBoundary () {
  return ' '
}

function lineBreak () {
  return '\n'
}

module.exports = { wrap }
