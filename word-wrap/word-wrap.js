function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  const boundaryAt = s.lastIndexOf(' ', cols)
  let breakAt = boundaryAt
  let skipSpace = 1
  if (boundaryAt === -1) {
    breakAt = cols
    skipSpace = 0
  }
  return s.substr(0, breakAt) + '\n' + wrap(s.substr(breakAt + skipSpace), cols)
}

module.exports = { wrap }
