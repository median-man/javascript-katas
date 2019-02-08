function statement (customer, movies) {
  return renderPlainText(customer, movies)

  function renderPlainText (customer, movies) {
    let result = `Rental Record for ${customer.name}\n`
    for (let r of customer.rentals) {
      result += `\t${movieFor(r).title}\t${amountFor(r)}\n`
    }
    result += `Amount owed is ${totalAmount()}\n`
    result += `You earned ${frequentRenterPoints()} frequent renter points\n`
    return result
  }

  function totalAmount () {
    return customer.rentals.reduce(
      (result, rental) => result + amountFor(rental),
      0
    )
  }

  function frequentRenterPoints () {
    return customer.rentals.reduce(
      (result, rental) => result + frequentRenterPointsFor(rental),
      0
    )
  }

  function frequentRenterPointsFor (rental) {
    return movieFor(rental).code === 'new' && rental.days > 2 ? 2 : 1
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
