function wrap (s, cols) {
  let rest = s
  let result = ''
  while (rest.length > cols) {
    let gap = 1
    let breakAt = rest.lastIndexOf(' ', cols)
    if (breakAt === -1) {
      gap = 0
      breakAt = cols
    }
    result += rest.substr(0, breakAt) + '\n'
    rest = rest.substr(breakAt + gap)
  }
  result += rest
  return result
}

module.exports = { wrap }
