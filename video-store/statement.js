function statement (customer, movies) {
  let totalAmount = 0
  let frequentRenterPoints = 0
  let result = `Rental Record for ${customer.name}\n`
  for (let r of customer.rentals) {
    frequentRenterPoints += frequentRenterPointsFor(r)
    result += `\t${movieFor(r).title}\t${amountFor(r)}\n`
    totalAmount += amountFor(r)
  }
  // add footer lines
  result += `Amount owed is ${totalAmount}\n`
  result += `You earned ${frequentRenterPoints} frequent renter points\n`

  return result

  function frequentRenterPointsFor (r) {
    let thisFrequentRenterPoints = 1
    // add bonus for a two day new release rental
    if (movieFor(r).code === 'new' && r.days > 2) thisFrequentRenterPoints++
    return thisFrequentRenterPoints
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

module.exports = { statement }
