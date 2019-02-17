function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  return s.substr(0, cols) + '\n' + s.substr(cols)
}

module.exports = { wrap }
