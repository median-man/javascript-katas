function wrap (s, columns) {
  if (s.length <= columns) {
    return s
  }
  let result = s.substr(0, columns)
  let rest = s.substr(columns)
  if (rest.length <= columns) {
    result += '\n' + rest
    return result
  }
  result += '\n' + rest.substr(0, columns)
  rest = rest.substr(columns)
  result += '\n' + rest
  return result
  // return s.substr(0, columns) + '\n' + s.substr(columns)
}

module.exports = { wrap }
