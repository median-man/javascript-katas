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

  let result = ''
  const LINE_BREAK = '\n'
  result += line + LINE_BREAK + rest
  return result
}

function isNotBoundaryAt (index, str) {
  return str[index] !== ' '
}

module.exports = { wrap }
