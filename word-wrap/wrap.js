function wrap (s, cols) {
  let result = ''
  let rest = s
  while (rest.length > cols) {
    if (rest[cols - 1] === ' ') {
      result += rest.substr(0, cols - 1) + '\n'
      rest = rest.substr(cols)
    } else {
      result += rest.substr(0, cols) + '\n'
      rest = rest.substr(cols)
    }
  }
  result += rest
  return result
}

exports.wrap = wrap
