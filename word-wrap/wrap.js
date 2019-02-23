function wrap (s, cols) {
  let rest = s
  let result = ''

  while (rest.length > cols) {
    if (rest[cols - 1] === ' ') {
      lineBreak(cols - 1)
    } else {
      lineBreak(cols)
    }
  }
  result += rest
  return result

  function lineBreak (breakAt) {
    result += rest.substr(0, breakAt) + '\n'
    rest = rest.substr(cols)
  }
}
exports.wrap = wrap
