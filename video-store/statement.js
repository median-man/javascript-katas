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
  let result = `<h1>Rental Record for <em>${data.name}</em></h1>\n`
  result += '<table>\n'
  result += '<tr><td>Title</td><td>Days</td><td>Amount</td></tr>\n'
  for (let r of data.rentals) {
    result += `<tr>${createElement('td', r.title)}${createElement(
      'td',
      r.days
    )}${createElement('td', r.amount)}</tr>\n`
  }
  result += '</table>\n'
  result += `<p>Amount owed is <em>${data.totalAmount}</em></p>\n`
  result += `<p>You earned <em>${
    data.frequentRenterPoints
  }</em> frequent renter points</p>\n`
  return result

  function createElement (tag, content) {
    return `<${tag}>${content}</${tag}>`
  }
}

module.exports = { renderPlainText, renderHtml }
