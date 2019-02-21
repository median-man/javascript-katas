function wrap (s, cols) {
  let rest = s
  let result = ''
  while (rest.length > cols) {
    if (rest.lastIndexOf(' ') > -1) {
      wrapNextLineAt(rest.lastIndexOf(' '), 1)
    } else {
      wrapNextLineAt(cols, 0)
    }
  }
  result += rest
  return result

  function wrapNextLineAt (wrapAt, skip) {
    result += rest.substr(0, wrapAt) + '\n'
    rest = rest.substr(wrapAt + skip)
  }
}
exports.wrap = wrap
