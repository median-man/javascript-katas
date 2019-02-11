function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  let rest = s
  let result = ''
  while (rest.length > cols) {
    if (rest[cols - 1] === ' ') {
      const line = rest.substr(0, cols - 1)
      rest = rest.substr(cols)
      result += line + '\n'
    } else {
      const line = rest.substr(0, cols)
      rest = rest.substr(cols)
      result += line + '\n'
    }
  }
  result += rest
  return result
}

module.exports = { wrap }
