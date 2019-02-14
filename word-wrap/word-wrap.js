function wrap (s, cols) {
  let rest = s
  let result = ''
  while (rest.length > cols) {
    const boundaryAt = rest.lastIndexOf(' ', cols)
    if (boundaryAt > -1) {
      result += rest.substr(0, boundaryAt) + '\n'
      rest = rest.substr(boundaryAt + 1)
    } else {
      result += rest.substr(0, cols) + '\n'
      rest = rest.substr(cols)
    }
  }
  result += rest
  return result
}

module.exports = { wrap }
