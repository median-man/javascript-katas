function wrap (s, cols) {
  let rest = s
  let result = ''

  while (rest.length > cols) {
    if (rest.lastIndexOf(' ') > -1) {
      lineBreak(rest.lastIndexOf(' '), 1)
    } else {
      lineBreak(cols, 0)
    }
  }
  result += rest
  return result

  function lineBreak (breakAt, skip) {
    result += rest.substr(0, breakAt) + '\n'
    rest = rest.substr(breakAt + skip)
  }
}
exports.wrap = wrap
