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
  return sum(throwNegatives(filterNumbersOver1000(parseNumbersFromCsv(csv))))
}

function parseNumbersFromCsv (csv) {
  return csv.split(/[,\n]/).map(Number.parseFloat)
}

function filterNumbersOver1000 (numbers) {
  return numbers.filter(num => num <= 1000)
}

function throwNegatives (numbers) {
  const negatives = numbers.filter(num => num < 0)
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(', ')}`)
  }
  return numbers
}

function sum (numbers) {
  return numbers.reduce((acc, num) => acc + num, 0)
}

module.exports = { add }
