function add (string) {
  if (string.length === 0) return 0
  return toCommaDelimited(string)
    .split(',')
    .map(toValidNumber)
    .filter(num => num <= 1000)
    .reduce((sum, num) => sum + num, 0)
}

function toCommaDelimited (string) {
  if (hasCustomDelimiters(string)) return formatFromCustomDelimiters(string)
  return string.replace(/\s/g, ',')
}

function hasCustomDelimiters (string) {
  return string.slice(0, 2) === '//'
}

function formatFromCustomDelimiters (string) {
  const withoutFirstLine = string.slice(string.indexOf('\n'))
  const commaDelimited = customDelimiters(string).reduce(
    (result, delimiter) => result.replace(delimiter, ','),
    withoutFirstLine
  )
  return commaDelimited
}

function customDelimiters (string) {
  return string
    .match(/\[.+?\]/g)
    .map(delimiter => delimiter.replace(/(\[|\])/g, ''))
}

function toValidNumber (s) {
  const num = Number.parseFloat(s)
  if (s < 0) throw new Error('Negative numbers not allowed.')
  return num
}

module.exports = { add }
