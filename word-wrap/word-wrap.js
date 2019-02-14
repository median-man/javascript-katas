function wrap (s, cols) {
  let rest = s
  let result = ''
  while (rest.length > cols) {
    if (rest.lastIndexOf(' ', cols) > -1) {
      result += rest.substr(0, rest.lastIndexOf(' ', cols)) + '\n'
      rest = rest.substr(rest.lastIndexOf(' ', cols) + 1)
    } else {
      result += rest.substr(0, cols) + '\n'
      rest = rest.substr(cols)
    }
  }
  result += rest
  return result
}

module.exports = { wrap }
