function wrap (s, cols) {
  let rest = s
  let result = ''
  while (rest.length > cols) {
    if (rest[cols - 1] === ' ') {
      result += rest.substr(0, cols - 1) + '\n'
      rest = rest.substr(cols)
    } else if (rest.indexOf(' ') > -1) {
      result += rest.substr(0, rest.indexOf(' ')) + '\n'
      rest = rest.substr(rest.indexOf(' ') + 1)
    } else {
      result += rest.substr(0, cols) + '\n'
      rest = rest.substr(cols)
    }
  }
  result += rest
  return result
}
exports.wrap = wrap
