function statement (customer, movies) {
  let result = `Rental Record for ${customer.name}\n`
  for (let r of customer.rentals) {
    result += `\t${movieFor(r).title}\t${amountFor(r)}\n`
  }
  result += `Amount owed is ${totalAmount()}\n`
  result += `You earned ${frequentRenterPoints()} frequent renter points\n`

  return result

  function frequentRenterPoints () {
    let frequentRenterPoints = 0
    for (let r of customer.rentals) {
      frequentRenterPoints += frequentRenterPointsFor(r)
    }
    return frequentRenterPoints
  }

  function totalAmount () {
    return customer.rentals.map(amountFor).reduce((a, b) => a + b, 0)
  }

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
