function wrap (s, cols) {
  let rest = s
  let result = ''
  while (restIsLongerThanCols()) {
    const boundaryAt = rest.lastIndexOf(' ', cols)
    if (boundaryAt > -1) {
      breakLine(boundaryAt, 1)
    } else {
      breakLine(cols, 0)
    }
  }
  result += rest
  return result

  function restIsLongerThanCols () {
    return rest.length > cols
  }
  function breakLine (breakAt, gap) {
    result += rest.substr(0, breakAt) + '\n'
    rest = rest.substr(breakAt + gap)
  }
}

module.exports = { wrap }
