function wrap (s, cols) {
  let rest = s
  let result = ''
  while (rest.length > cols) {
    let line = ''
    const boundaryAt = rest.lastIndexOf(' ', cols)
    if (boundaryAt > -1) {
      line = rest.substr(0, boundaryAt)
      rest = rest.substr(boundaryAt + 1)
    } else {
      line = rest.substr(0, cols)
      rest = rest.substr(cols)
    }
    result += line + '\n'
  }
  return result + rest
}

module.exports = { wrap }
