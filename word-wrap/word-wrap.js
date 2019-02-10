function wrap (s, columns) {
  if (s.length <= columns) {
    return s
  }
  let result = s.substr(0, columns)
  let rest = s.substr(columns)
  while (rest.length) {
    result += '\n' + rest.substr(0, columns)
    rest = rest.substr(columns)
  }
  return result
}

module.exports = { wrap }
