function add (str) {
  if (!str) return 0

  return pipe(
    str,
    getCSV,
    parseCsv,
    validate, // throws on invalid nums
    rangeFilter,
    sumArr
  )
}

function pipe (input, ...funcs) {
  return funcs.reduce((acc, func) => func(acc), input)
}

function getCSV (str) {
  const noCustomDelimiter = str.charAt(0) !== '/'
  if (noCustomDelimiter) return str

  const delimStart = 2 // first char after "//"
  const endOfFirstLine = str.indexOf('\n')
  let delimiters = [str.charAt(delimStart)]

  const hasBrackets = str.charAt(delimStart) === '['
  if (hasBrackets) {
    delimiters = str.slice(delimStart + 1, endOfFirstLine - 1).split('][')
  }

  const values = str.slice(endOfFirstLine + 1)
  return regExps(delimiters).reduce((acc, re) => acc.replace(re, ','), values)
}

// escapes regexp special characters (e.g. "$" gets escaped)
function regExps (strings) {
  return strings.map(escapeRegExp).map(delim => new RegExp(delim, 'g'))
}

function escapeRegExp (text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

function parseCsv (csv) {
  return getCSV(csv)
    .split(/[,\n]/)
    .map(Number.parseFloat)
}

function validate (numbers) {
  const negatives = numbers.filter(num => num < 0)
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`)
  }
  return numbers
}

function rangeFilter (numbers) {
  return numbers.filter(num => num <= 1000)
}

function sumArr (numbers) {
  return numbers.reduce((sum, num) => sum + num, 0)
}

module.exports = { add }
