function wrap (s, cols) {
  let rest = s
  let result = ''
  while (rest.length > cols) {
    const boundaryAt = rest.lastIndexOf(' ', cols)
    if (boundaryAt > -1) {
      breakLine(boundaryAt, 1)
    } else {
      breakLine(cols, 0)
    }
  }
  return result + rest

  function breakLine (breakAt, gap) {
    result += rest.substr(0, breakAt) + '\n'
    rest = rest.substr(breakAt + gap)
  }
}

module.exports = { wrap }
