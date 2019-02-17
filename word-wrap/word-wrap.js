function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  const boundaryAt = s.lastIndexOf(' ', cols)
  let breakAt = boundaryAt
  let gap = 1
  if (boundaryAt === -1) {
    breakAt = cols
    gap = 0 // no space to skip
  }
  return s.substr(0, breakAt) + '\n' + wrap(s.substr(breakAt + gap), cols)
}

module.exports = { wrap }
