/* eslint-disable */
function statement(customer, movies) {
  let totalAmount = 0
  let frequentRenterPoints = 0
  let result = `Rental Record for ${customer.name}\n`

  for (let rental of customer.rentals) {
    const thisAmount = amountFor(rental)

    frequentRenterPoints += frequentRenterPointsFor(rental)

    //print figures for this rental
    result += `\t${movieFor(rental).title}\t${thisAmount}\n`
    totalAmount += thisAmount
  }
  // add footer lines
  result += `Amount owed is ${totalAmount}\n`
  result += `You earned ${frequentRenterPoints} frequent renter points\n`

  return result

  function movieFor(rental) {
    return movies[rental.movieID]
  }

  function amountFor(rental) {
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

  function frequentRenterPointsFor(rental) {
    const isNewMovie = movieFor(rental).code === 'new'
    const isRentedMinimumDays = rental.days > 2
    return isNewMovie && isRentedMinimumDays ? 2 : 1
  }
}

module.exports = { statement }
