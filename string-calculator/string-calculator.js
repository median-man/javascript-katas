// Returns string with special regexp characters escaped
RegExp.escape = function (s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

function add (str) {
  if (!str) return 0
  return sumCsv(toCsv(str))
}

// returns only csv. remove first line if it starts with "/".
function toCsv (str) {
  const hasCustomDelim = str[0] === '/'

  if (!hasCustomDelim) return str

  let delims = []

  const hasNoBrackets = str[2] !== '[' // e.g. str starts with "//-"
  if (hasNoBrackets) {
    delims.push(str[2])
  } else {
    const startOfDelim = 3 // starts after "//["
    delims = str.slice(startOfDelim, str.lastIndexOf(']')).split('][')
  }

  // replace all delims with commas and return the resulting csv.
  // returned value does not include first line containing delims.
  return delims.reduce((csv, d) => {
    return csv.replace(new RegExp(RegExp.escape(d), 'g'), ',')
  }, values(str))
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
