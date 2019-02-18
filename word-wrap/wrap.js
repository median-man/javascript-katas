function wrap (s, cols) {
  if (s.length > cols) {
    return s.substr(0, cols) + lineBreak() + wrap(s.substr(cols), cols)
  }
  return s
}

function lineBreak () {
  return '\n'
}

module.exports = { wrap }
