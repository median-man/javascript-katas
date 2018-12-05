RegExp.escape = function (s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

const sum = (x, y) => x + y
const parseCsv = str => str.split(/[,\n]/)

const toCsv = ({ separator, values }) => {
  const re = new RegExp(RegExp.escape(separator), 'g')
  return values.replace(re, ',')
}
const parseInputStr = s => ({
  separator: s.charAt(2),
  values: s.slice(s.indexOf('\n') + 1)
})

const validateNumbers = nums => {
  const negativeNums = nums.filter(n => n < 0)
  if (negativeNums.length) {
    throw new Error(`Negatives not allowed: ${negativeNums.join(',')}`)
  }
  return nums
}

function add (s) {
  const values = s[0] === '/' ? toCsv(parseInputStr(s)) : s
  if (values.length === 0) return 0
  const numbers = parseCsv(values).map(Number.parseFloat)
  return validateNumbers(numbers)
    .filter(num => num <= 1000)
    .reduce(sum)
}

module.exports = { add }
