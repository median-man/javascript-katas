function wrap (s, columns) {
  if (s.length <= columns) {
    return s
  }
  return s.substr(0, columns) + '\n' + s.substr(columns)
}

module.exports = { wrap }
