function wrap (s, columns) {
  if (typeof s !== 'string') {
    throw new Error(`Expected a string but got: ${typeof s}`)
  }
  if (s.length <= columns) {
    return s
  }
  const LINE_BREAK = '\n'
  if (s[columns] === ' ') {
    return s.substr(0, columns) + LINE_BREAK + s.substr(columns + 1)
  }
  if (s[columns - 1] === ' ') {
    return s.substr(0, columns - 1) + LINE_BREAK + s.substr(columns)
  }
}

module.exports = { wrap }
