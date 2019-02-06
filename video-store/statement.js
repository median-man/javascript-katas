function renderPlainText (customer, movies) {
  const data = statementData(customer, movies)
  let result = `Rental Record for ${customer.name}\n`
  for (let r of data.rentals) {
    result += `\t${r.title}\t${r.amount}\n`
  }
  result += `Amount owed is ${data.totalAmount}\n`
  result += `You earned ${data.frequentRenterPoints} frequent renter points\n`

  return result
}

function renderHtml (customer, movies) {
  const data = statementData(customer, movies)
  let result = `<h1>Rental Record for <em>${customer.name}</em></h1>\n`
  result += '<table>\n'
  result += '  <tr><th>Title</th><th>Days</th><th>Amount</th></tr>\n'
  result += rentalLines()
  result += `</table>\n`
  result += `<p>Amount owed is <em>${data.totalAmount}</em></p>\n`
  result += `<p>You earned <em>${
    data.frequentRenterPoints
  }</em> frequent renter points</p>\n`

  return result

  function rentalLines () {
    return data.rentals.reduce(
      (lines, rental) =>
        `${lines}  <tr><td>${rental.title}</td><td>${rental.days}</td><td>${
          rental.amount
        }</td></tr>\n`, ''
    )
  }
}

function statementData (customer, movies) {
  return {
    totalAmount: totalAmount(),
    frequentRenterPoints: frequentRenterPoints(),
    rentals: customer.rentals.map(r => ({
      title: movieFor(r).title,
      amount: amountFor(r),
      days: r.days
    }))
  }

  function frequentRenterPoints () {
    return customer.rentals
      .map(frequentRenterPointsFor)
      .reduce((a, b) => a + b, 0)
  }

  function totalAmount () {
    return customer.rentals.map(amountFor).reduce((a, b) => a + b, 0)
  }

  function frequentRenterPointsFor (r) {
    return movieFor(r).code === 'new' && r.days > 2 ? 2 : 1
  }

  function amountFor (rental) {
    let result = 0
    switch (movieFor(rental).code) {
      case 'regular':
        result = 2
        if (rental.days > 2) {
          result += (rental.days - 2) * 1.5
        }
        return result
      case 'new':
        result = rental.days * 3
        return result
      case 'childrens':
        result = 1.5
        if (rental.days > 3) {
          result += (rental.days - 3) * 1.5
        }
        return result
      default:
        return result
    }
  }

  function movieFor (rental) {
    return movies[rental.movieID]
  }
}

module.exports = { statement: { renderPlainText, renderHtml } }
