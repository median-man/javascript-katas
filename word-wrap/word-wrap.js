function wrap (s) {
  if (typeof s !== 'string') {
    throw new Error(`Expected a string but got: ${typeof s}`)
  }
  return s
}

module.exports = { wrap }
