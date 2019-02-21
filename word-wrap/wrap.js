function wrap (s, cols) {
  if (s.length > cols) {
    let rest = s
    let result = ''
    while (rest.length > cols) {
      result += rest.substr(0, cols) + '\n'
      rest = rest.substr(cols)
    }
    result += rest
    return result
  }
  return s
}
exports.wrap = wrap
