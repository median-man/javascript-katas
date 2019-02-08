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
  for (let r of data.rentals) {
    result += `\t${r.title}\t${r.amount}\n`
  }
  result += `Amount owed is ${data.totalAmount}\n`
  result += `You earned ${data.frequentRenterPoints} frequent renter points\n`
  return result
}

module.exports = { renderPlainText, renderHtml }
