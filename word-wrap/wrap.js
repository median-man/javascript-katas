function wrap (s, cols) {
  let rest = s
  let result = ''
  while (rest.length > cols) {
    const boundaryAt = rest.lastIndexOf(' ')
    if (isBoundaryFound(boundaryAt)) {
      wrapNextLineAt(boundaryAt, 1)
    } else {
      wrapNextLineAt(cols, 0)
    }
  }
  result += rest
  return result

  function isBoundaryFound (boundaryAt) {
    return boundaryAt > -1
  }

  function wrapNextLineAt (wrapAt, skip) {
    result += rest.substr(0, wrapAt) + '\n'
    rest = rest.substr(wrapAt + skip)
  }
}
exports.wrap = wrap
