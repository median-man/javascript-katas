function wrap (s, cols) {
  let result = ''
  let rest = s
  if (s.length > cols) {
    result += s.substr(0, cols) + '\n'
    rest = s.substr(cols)
  }
  result += rest
  return result
}

exports.wrap = wrap
