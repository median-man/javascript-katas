function statement (customer, movies) {
  let totalAmount = 0
  let frequentRenterPoints = 0
  let result = `Rental Record for ${customer.name}\n`
  for (let r of customer.rentals) {
    result += `\t${movieFor(r).title}\t${amountFor(r)}\n`
  }
  for (let r of customer.rentals) {
    totalAmount += amountFor(r)
  }
  for (let r of customer.rentals) {
    frequentRenterPoints += frequentRenterPointsFor(r)
  }
  // add footer lines
  result += `Amount owed is ${totalAmount}\n`
  result += `You earned ${frequentRenterPoints} frequent renter points\n`

  return result

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
