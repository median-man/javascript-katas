function add (s) {
  if (!s) return 0
  return split(s)
    .map(n => validate(Number.parseFloat(n)))
    .reduce((sum, num) => num + sum, 0)
}

function split (s) {
  let toCalculate = s
  const hasCustomDelimiter = /^\/\//.test(s)
  if (hasCustomDelimiter) {
    toCalculate = toCommaSeparated(s)
  }
  return toCalculate.split(/[,\s]/g)
}

function toCommaSeparated (s) {
  const delimiters = s.slice(2, s.indexOf('\n')).match(/[^[\]]+/g)
  const toCalculate = s.slice(s.indexOf('\n') + 1)
  return delimiters.reduce(
    (result, delimiter) => result.replace(delimiter, ','),
    toCalculate
  )
}

function validate (number) {
  if (number < 0) throw new Error(`Negative numbers not allowed: ${number}.`)
  return number
}

module.exports = { add }
