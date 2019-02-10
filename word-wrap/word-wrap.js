function wrap (s, columns) {
  if (s.length <= columns) {
    return s
  }

  let result = ''
  let rest = s
  while (rest.length > columns) {
    const spaceAt = rest.lastIndexOf(' ', columns)
    if (spaceAt === -1) {
      result += rest.substr(0, columns)
      rest = rest.substr(columns)
    } else {
      result += rest.substr(0, spaceAt)
      rest = rest.substr(spaceAt + 1)
    }
    result += '\n'
  }
  result += rest
  return result
}

module.exports = { wrap }
