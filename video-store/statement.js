function statement (customer, movies) {
  let result = `Rental Record for ${customer.name}\n`
  for (let r of customer.rentals) {
    result += `\t${movieFor(r).title}\t${amountFor(r)}\n`
  }
  result += `Amount owed is ${totalAmount()}\n`
  result += `You earned ${frequentRenterPoints()} frequent renter points\n`

  return result

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

  function frequentRenterPointsFor (r) {
    return movieFor(r).code === 'new' && r.days > 2 ? 2 : 1
  }

  function amountFor (r) {
    let result = 0
    switch (movieFor(r).code) {
      case 'regular':
        result = 2
        if (r.days > 2) {
          result += (r.days - 2) * 1.5
        }
        return result
      case 'new':
        result = r.days * 3
        return result
      case 'childrens':
        result = 1.5
        if (r.days > 3) {
          result += (r.days - 3) * 1.5
        }
        return result
      default:
        return result
    }
  }

  function movieFor (r) {
    return movies[r.movieID]
  }
}

module.exports = { statement }
