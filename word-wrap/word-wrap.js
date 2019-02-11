function wrap (s, cols) {
  if (s.length <= cols) {
    return s
  }
  let rest = s
  let result = ''
  while (rest.length > cols) {
    const line = rest.substr(0, cols)
    rest = rest.substr(cols)
    result += line + '\n'
  }
  result += rest
  return result
}

module.exports = { wrap }
