function wrap (s, cols) {
  if (s.length > cols) {
    return s.substr(0, cols) + '\n' + s.substr(cols)
  }
  return s
}
exports.wrap = wrap
