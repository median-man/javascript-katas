function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  const boundaryAt = s.lastIndexOf(' ', cols)
  const isBoundaryFound = boundaryAt > -1
  if (isBoundaryFound) {
    return s.substr(0, boundaryAt) + '\n' + wrap(s.substr(boundaryAt + 1), cols)
  }
  return s.substr(0, cols) + '\n' + wrap(s.substr(cols), cols)
}
exports.wrap = wrap
