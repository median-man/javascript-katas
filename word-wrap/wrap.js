function wrap (s, cols) {
  let rest = s
  let result = ''

  while (rest.length > cols) {
    const spaceAt = rest.lastIndexOf(' ', cols)
    if (isSpaceFound(spaceAt)) {
      lineBreak(spaceAt, 1)
    } else {
      lineBreak(cols, 0)
    }
  }
  result += rest
  return result

  function isSpaceFound (spaceAt) {
    return spaceAt > -1
  }

  function lineBreak (breakAt, skip) {
    result += rest.substr(0, breakAt) + '\n'
    rest = rest.substr(breakAt + skip)
  }
}
exports.wrap = wrap
