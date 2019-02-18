function wrap (s, cols) {
  if (s.length > cols) {
    return s.substr(0, cols) + lineBreak() + s.substr(cols)
  }
  return s
}

function lineBreak () {
  return '\n'
}

module.exports = { wrap }
