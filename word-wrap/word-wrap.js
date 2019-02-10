function wrap (s, columns) {
  if (s.length <= columns) {
    return s
  }

  let result = ''
  let rest = s
  while (rest.length > columns) {
    let breakAt = columns
    if (s[columns - 1] === ' ') {
      breakAt -= 1
    }
    const line = rest.substr(0, breakAt)
    rest = rest.substr(columns)
    result += line + '\n'
  }
  result += rest
  return result
}

module.exports = { wrap }
