function wrap (s, cols) {
  let rest = s
  let result = ''
  if (rest.length > cols) {
    result += rest.substr(0, cols) + '\n'
    rest = rest.substr(cols)
  }
  result += rest
  return result
}
exports.wrap = wrap
