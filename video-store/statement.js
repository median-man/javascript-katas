function statement (customer, movies, format = 'text') {
  const formatDispatch = {
    text: textStatement,
    html: htmlStatement
  }

  if (formatDispatch[format]) {
    return formatDispatch[format]()
  }

  throw new Error(`Unknown statement format "${format}"`)

  function textStatement () {
    let result = `Rental Record for ${customer.name}\n`
    for (let rental of customer.rentals) {
      result += `\t${movieFor(rental).title}\t${amountFor(rental)}\n`
    }
    // add footer lines
    result += `Amount owed is ${totalAmount()}\n`
    result += `You earned ${frequentRenterPoints()} frequent renter points\n`
    return result
  }

  function htmlStatement () {
    let result = `<h1>Rental Record for <em>${customer.name}</em></h1>\n`
    result += '<table>\n'
    for (let rental of customer.rentals) {
      result += `<tr>`
      result += `<td>${movieFor(rental).title}</td>`
      result += `<td>${amountFor(rental)}</td>`
      result += `</tr>\n`
    }
    result += '</table>\n'
    result += `<p>Amount owed is <em>${totalAmount()}</em></p>\n`
    result += `<p>You earned <em>${frequentRenterPoints()}</em> frequent renter points</p>\n`
    return result
  }

  function totalAmount () {
    return customer.rentals
      .map(rental => amountFor(rental))
      .reduce((a, b) => a + b, 0)
  }

  function frequentRenterPoints () {
    return customer.rentals
      .map(rental => frequentRenterPointsFor(rental))
      .reduce((a, b) => a + b, 0)
  }

  function movieFor (rental) {
    return movies[rental.movieID]
  }

  function amountFor (rental) {
    const charges = {
      regular: { days: 2, minCharge: 2, perDayCharge: 1.5 },
      new: { days: 1, minCharge: 3, perDayCharge: 3 },
      childrens: { days: 3, minCharge: 1.5, perDayCharge: 1.5 }
    }

    const { code } = movieFor(rental)
    const extraDays = rental.days - charges[code].days

    const { minCharge, perDayCharge } = charges[code]
    const extraDaysCharge = extraDays > 0 ? extraDays * perDayCharge : 0
    return minCharge + extraDaysCharge
  }

  function frequentRenterPointsFor (rental) {
    const isNewMovie = movieFor(rental).code === 'new'
    const isRentedMinimumDays = rental.days > 2
    return isNewMovie && isRentedMinimumDays ? 2 : 1
  }
}

module.exports = { statement }
