function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  if (s[cols] !== ' ') {
    return s.substr(0, cols) + '\n' + wrap(s.substr(cols), cols)
  }
  return s.substr(0, cols) + '\n' + wrap(s.substr(cols + 1), cols)
}

module.exports = { wrap }
