const createStatementData = require('./createStatementData')

module.exports.statement = function statement (customer, movies) {
  const data = createStatementData(customer, movies)
  let result = `Rental Record for ${data.name}\n`
  result += createRentalLines()
  result += `Amount owed is ${data.totalAmount}\n`
  result += `You earned ${data.totalFrequentRenterPoints} frequent renter points\n`
  return result

  function createRentalLines () {
    return data.rentals
      .map(rental => `\t${rental.title}\t${rental.amount}\n`)
      .join('')
  }
}

module.exports.htmlStatement = function htmlStatement (customer, movies) {
  const data = createStatementData(customer, movies)
  let result = `<h1>Rental Record for <em>${data.name}</em></h1>\n`
  result += '<table>\n'
  result += createRentalLines()
  result += '</table>\n'
  result += `<p>Amount owed is <em>${data.totalAmount}</em></p>\n`
  result += `<p>You earned <em>${data.totalFrequentRenterPoints}</em> frequent renter points</p>\n`
  return result

  function createRentalLines () {
    return data.rentals
      .map(rental => `<tr><td>${rental.title}</td><td>${rental.amount}</td></tr>\n`)
      .join('')
  }
}
