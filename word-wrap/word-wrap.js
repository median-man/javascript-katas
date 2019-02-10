function wrap (s, columns) {
  if (typeof s !== 'string') {
    throw new Error(`Expected a string but got: ${typeof s}`)
  }
  if (s.length <= columns) {
    return s
  }

  const LINE_BREAK = '\n'
  let { line, rest } = splitString(s, columns)
  let result = line
  while (rest.length > columns) {
    const splitResult = splitString(rest, columns)
    line = splitResult.line
    rest = splitResult.rest
    result += LINE_BREAK + line
  }
  result += LINE_BREAK + rest

  return result
}

function isNotBoundaryAt (index, str) {
  return str[index] !== ' '
}

function splitString (s, columns) {
  let breakAt = columns
  while (isNotBoundaryAt(breakAt, s) && breakAt > 0) {
    breakAt -= 1
  }
  const line = s.substr(0, breakAt)
  const rest = s.substr(breakAt + 1)

  return { line, rest }
}
module.exports = { wrap }
