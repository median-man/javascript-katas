function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  return s.substr(0, cols) + lineBreak() + wrap(s.substr(cols), cols)
}

function lineBreak () {
  return '\n'
}

module.exports = { wrap }
