function wrap (s, cols) {
  let rest = s
  let result = ''
  while (rest.length > cols) {
    let line = ''
    if (rest[cols - 1] === ' ') {
      line = rest.substr(0, cols - 1)
    } else {
      line = rest.substr(0, cols)
    }
    rest = rest.substr(cols)
    result += line + '\n'
  }
  return result + rest
}

module.exports = { wrap }
