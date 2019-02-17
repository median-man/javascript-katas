function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  let gap = 1
  if (s[cols] !== ' ') {
    gap = 0
  }
  const boundaryAt = s.lastIndexOf(' ')
  let breakAt = boundaryAt > -1 ? boundaryAt : cols
  return s.substr(0, breakAt) + '\n' + wrap(s.substr(cols + gap), cols)
}

module.exports = { wrap }
