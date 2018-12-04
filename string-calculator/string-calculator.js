const sum = (x, y) => x + y
const parseCsv = str => str.split(/[,\n]/)
const parseInputStr = s => ({
  values: s.slice(s.indexOf('\n') + 1)
})

function add (s) {
  const values = (s[0] === '/') ? parseInputStr(s).values : s
  if (values.length === 0) return 0
  return parseCsv(values)
    .map(Number.parseFloat)
    .reduce(sum)
}

module.exports = { add }
