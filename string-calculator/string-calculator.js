// Returns string with special regexp characters escaped
RegExp.escape = function (s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

function add (str) {
  if (!str) return 0
  return sumCsv(toCsv(str))
}

function toCsv (str) {
  const hasCustomDelim = str[0] === '/'
  if (!hasCustomDelim) return str
  const delim = str[2]
  return values(str).replace(new RegExp(RegExp.escape(delim), 'g'), ',')
}

function values (str) {
  return str.slice(str.indexOf('\n') + 1)
}

function sumCsv (csv) {
  return csv
    .split(/[,\n]/)
    .map(Number.parseFloat)
    .reduce((sum, num) => sum + num, 0)
}

module.exports = { add }
