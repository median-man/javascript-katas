function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  const boundaryAt = s.lastIndexOf(' ', cols)
  const isBoundaryFound = boundaryAt > -1
  if (isBoundaryFound) {
    return wrapLineAt(boundaryAt, 1)
  }
  return wrapLineAt(cols, 0)

  function wrapLineAt (breakAt, gap) {
    return s.substr(0, breakAt) + '\n' + wrap(s.substr(breakAt + gap), cols)
  }
}
exports.wrap = wrap
