function wrap (s, columns) {
  if (typeof s !== 'string') {
    throw new Error(`Expected a string but got: ${typeof s}`)
  }
  if (s.length <= columns) {
    return s
  }
  const LINE_BREAK = '\n'
  return s.substr(0, columns) + LINE_BREAK + s.substr(columns + 1)
}

module.exports = { wrap }
