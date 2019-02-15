function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  const LINE_BREAK = '\n'
  const breakAt = s.lastIndexOf(' ', cols)
  if (breakAt > -1) {
    return s.substr(0, breakAt) + LINE_BREAK + wrap(s.substr(breakAt + 1), cols)
  }
  return s.substr(0, cols) + LINE_BREAK + wrap(s.substr(cols), cols)
}

module.exports = { wrap }
