function statement (customer, movies) {
  let result = `Rental Record for ${customer.name}\n`

  let frequentRenterPoints = 0
  for (let r of customer.rentals) {
    frequentRenterPoints += frequentRenterPointsFor(r)
  }

  for (let r of customer.rentals) {
    // print figures for this rental
    result += `\t${movieFor(r).title}\t${amountFor(r)}\n`
  }

  // add footer lines
  result += `Amount owed is ${totalAmount()}\n`
  result += `You earned ${frequentRenterPoints} frequent renter points\n`

  return result

  function totalAmount () {
    let result
    for (let r of customer.rentals) {
      result += amountFor(r)
    }
    return result
  }

  function movieFor (rental) {
    return movies[rental.movieID]
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
        throw new Error(`Invalid movie code: ${movieFor(rental).code}`)
    }
  }

  function frequentRenterPointsFor (rental) {
    return movieFor(rental).code === 'new' && rental.days > 2 ? 2 : 1
  }
}

module.exports = { statement }
