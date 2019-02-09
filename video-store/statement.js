const { createStatementData } = require('./statement-data')

function renderPlainText (customer, movies) {
  const data = createStatementData(customer, movies)
  let result = `Rental Record for ${data.name}\n`
  for (let r of data.rentals) {
    result += `\t${r.title}\t${r.amount}\n`
  }
  result += `Amount owed is ${data.totalAmount}\n`
  result += `You earned ${data.frequentRenterPoints} frequent renter points\n`
  return result
}

function renderHtml (customer, movies) {
  const data = createStatementData(customer, movies)
  let result = `${renderHeading()}\n`
  result += '<table>\n'
  result += `${renderRow(['Title', 'Days', 'Amount'])}\n`
  for (let r of data.rentals) {
    result += `${renderRow([r.title, r.days, r.amount])}\n`
  }
  result += '</table>\n'
  result += `<p>Amount owed is <em>${data.totalAmount}</em></p>\n`
  result += `<p>You earned <em>${
    data.frequentRenterPoints
  }</em> frequent renter points</p>\n`
  return result

  function renderHeading () {
    const content = `Rental Record for ${createElement('em', data.name)}`
    return createElement('h1', content)
  }

  function renderRow (values) {
    const cells = values.map(value => createElement('td', value)).join('')
    return `${createElement('tr', cells)}`
  }

  function createElement (tag, content) {
    return `<${tag}>${content}</${tag}>`
  }
}

module.exports = { renderPlainText, renderHtml }
