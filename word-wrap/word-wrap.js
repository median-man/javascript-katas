function wrap (s, cols) {
  if (s.length > cols) {
    const LINE_BREAK = '\n'
    return s.substr(0, cols) + LINE_BREAK + wrap(s.substr(cols), cols)
  }
  return s
}

module.exports = { wrap }
