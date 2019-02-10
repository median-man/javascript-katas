function wrap (s, columns) {
  if (typeof s !== 'string') {
    throw new Error(`Expected a string but got: ${typeof s}`)
  }
  if (s.length <= columns) {
    return s
  }
  return s.substr(0, columns) + '\n' + s.substr(columns + 1)
}

module.exports = { wrap }
