function wrap (s, cols) {
  let rest = s
  let result = ''
  while (rest.length > cols) {
    if (rest[cols - 1] === ' ') {
      result += rest.substr(0, cols - 1) + '\n'
    } else {
      result += rest.substr(0, cols) + '\n'
    }
    rest = rest.substr(cols)
  }
  result += rest
  return result
}

module.exports = { wrap }
