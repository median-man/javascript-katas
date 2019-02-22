function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  return s.substr(0, cols) + '\n' + wrap(s.substr(cols), cols)
}
exports.wrap = wrap
