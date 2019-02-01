function statement (customer, movies, format = 'text') {
  const formatDispatch = {
    text: textStatement,
    html: htmlStatement
  }

  if (formatDispatch[format]) {
    return formatDispatch[format](customer, movies)
  }

  throw new Error(`Unknown statement format "${format}"`)
}

function textStatement (customer, movies) {
  let result = `Rental Record for ${customer.name}\n`
  for (let rental of customer.rentals) {
    result += `\t${movieFor(rental, movies).title}\t${amountFor(
      rental,
      movies
    )}\n`
  }
  // add footer lines
  result += `Amount owed is ${totalAmount(customer, movies)}\n`
  result += `You earned ${frequentRenterPoints(customer, movies)} frequent renter points\n`
  return result
}

function htmlStatement (customer, movies) {
  let result = `<h1>Rental Record for <em>${customer.name}</em></h1>\n`
  result += '<table>\n'
  for (let rental of customer.rentals) {
    result += `<tr>`
    result += `<td>${movieFor(rental, movies).title}</td>`
    result += `<td>${amountFor(rental, movies)}</td>`
    result += `</tr>\n`
  }
  result += '</table>\n'
  result += `<p>Amount owed is <em>${totalAmount(
    customer,
    movies
  )}</em></p>\n`
  result += `<p>You earned <em>${frequentRenterPoints(customer, movies)}</em> frequent renter points</p>\n`
  return result
}

function movieFor (rental, movies) {
  return movies[rental.movieID]
}

function amountFor (rental, movies) {
  const charges = {
    regular: { days: 2, minCharge: 2, perDayCharge: 1.5 },
    new: { days: 1, minCharge: 3, perDayCharge: 3 },
    childrens: { days: 3, minCharge: 1.5, perDayCharge: 1.5 }
  }

  const { code } = movieFor(rental, movies)
  const extraDays = rental.days - charges[code].days

  const { minCharge, perDayCharge } = charges[code]
  const extraDaysCharge = extraDays > 0 ? extraDays * perDayCharge : 0
  return minCharge + extraDaysCharge
}

function totalAmount (customer, movies) {
  return customer.rentals
    .map(rental => amountFor(rental, movies))
    .reduce((a, b) => a + b, 0)
}

function frequentRenterPoints (customer, movies) {
  return customer.rentals
    .map(rental => frequentRenterPointsFor(rental, movies))
    .reduce((a, b) => a + b, 0)
}

function frequentRenterPointsFor (rental, movies) {
  const isNewMovie = movieFor(rental, movies).code === 'new'
  const isRentedMinimumDays = rental.days > 2
  return isNewMovie && isRentedMinimumDays ? 2 : 1
}

module.exports = { statement }
