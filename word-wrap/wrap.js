function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  if (s.lastIndexOf(' ') > -1) {
    return s.substr(0, s.lastIndexOf(' ')) + lineBreak() + wrap(s.substr(s.lastIndexOf(' ') + 1), cols)
  }
  if (s[cols - 1] === ' ') {
    return s.substr(0, cols - 1) + lineBreak() + wrap(s.substr(cols), cols)
  }
  return s.substr(0, cols) + lineBreak() + wrap(s.substr(cols), cols)
}

function lineBreak () {
  return '\n'
}

module.exports = { wrap }
