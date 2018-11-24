function add (s) {
  const MAX_NUM = 1000
  return split(s)
    .map(toValidNumber)
    .filter(n => n <= MAX_NUM)
    .reduce(sum2, 0)
}

function split (s) {
  const hasCustomDelimiters = s.slice(0, 2) === '//'
  if (hasCustomDelimiters) return toCSV(s).split(',')
  return s.split(/[,\s]/g)
}

// Returns string with custom delimiters defined in the first row
// replaced with commas in the body. The body is everything after
// the first row. Example first row: "//[--][=]\n"
// E.g. "//[-]\n1-1" returns "1,1"
function toCSV (s) {
  const endOfFirstLine = s.indexOf('\n')
  const firstLine = s.slice(endOfFirstLine)
  const body = s.slice(endOfFirstLine + 1)
  const delimiters = firstLine
    .slice(2, endOfFirstLine)
    .split('[')
    .map(removeLastCharacter)
  return delimiters.reduce(
    (input, delimiter) => input.replace(delimiter, ','),
    body
  )
}

function removeLastCharacter (s) {
  return s.slice(0, s.length - 1)
}

function toValidNumber (s) {
  const n = Number.parseFloat(s)
  if (n < 0) throw new Error(`Negative numbers not allowed: ${n}.`)
  return n || 0
}

function sum2 (x, y) {
  return x + y
}

module.exports = { add }
