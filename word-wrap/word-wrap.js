function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  let gap = 1
  if (s[cols] !== ' ') {
    gap = 0
  }
  return s.substr(0, cols) + '\n' + wrap(s.substr(cols + gap), cols)
}

module.exports = { wrap }
