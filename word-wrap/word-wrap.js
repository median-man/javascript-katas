function wrap (s, columns) {
  if (typeof s !== 'string') {
    throw new Error(`Expected a string but got: ${typeof s}`)
  }
  if (s.length <= columns) {
    return s
  }
  let breakAt = columns
  while (isNotBoundaryAt(breakAt, s) && breakAt > 0) {
    breakAt -= 1
  }

  const line = s.substr(0, breakAt)
  const rest = s.substr(breakAt + 1)

  const LINE_BREAK = '\n'
  return line + LINE_BREAK + rest
}

function isNotBoundaryAt (index, str) {
  return str[index] !== ' '
}

module.exports = { wrap }
