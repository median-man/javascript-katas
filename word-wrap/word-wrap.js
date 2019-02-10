function wrap (s, columns) {
  if (s.length <= columns) {
    return s
  }

  let result = ''
  let rest = s
  while (rest.length > columns) {
    let spaceAt = rest.lastIndexOf(' ')
    let line = ''
    if (spaceAt === -1) {
      line = rest.substr(0, columns)
      rest = rest.substr(columns)
    } else {
      line = rest.substr(0, spaceAt)
      rest = rest.substr(spaceAt + 1)
    }
    result += line + '\n'
  }
  result += rest
  return result
}

module.exports = { wrap }
