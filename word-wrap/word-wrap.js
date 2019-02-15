function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  const LINE_BREAK = '\n'
  if (isBoundary(s[cols - 1])) {
    return s.substr(0, cols - 1) + LINE_BREAK + wrap(s.substr(cols), cols)
  }
  return s.substr(0, cols) + LINE_BREAK + wrap(s.substr(cols), cols)
}
function isBoundary (char) {
  return char === ' '
}

module.exports = { wrap }
