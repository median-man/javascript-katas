function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  const LINE_BREAK = '\n'
  return s.substr(0, cols) + LINE_BREAK + wrap(s.substr(cols), cols)
}

module.exports = { wrap }
