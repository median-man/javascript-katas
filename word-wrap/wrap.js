function wrap (s, cols) {
  let rest = s
  let result = ''
  while (rest.length > cols) {
    const boundaryAt = rest.indexOf(' ')
    if (restHasBoundary(boundaryAt)) {
      addLineBreakAt(boundaryAt, 1)
    } else {
      addLineBreakAt(cols, 0)
    }
  }
  result += rest
  return result

  function restHasBoundary (boundaryAt) {
    return boundaryAt > -1
  }

  function addLineBreakAt (index, gap) {
    result += rest.substr(0, index) + '\n'
    rest = rest.substr(index + gap)
  }
}
exports.wrap = wrap
