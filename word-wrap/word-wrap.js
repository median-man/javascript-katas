function wrap (s, cols) {
  let rest = s
  let result = ''
  while (rest.length > cols) {
    let gap = 0
    if (rest[cols - 1] === ' ') {
      gap = 1
    }
    result += rest.substr(0, cols - gap) + '\n'
    rest = rest.substr(cols)
  }
  result += rest
  return result
}

module.exports = { wrap }
