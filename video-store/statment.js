function statement (customer, movies) {
  let totalAmount = 0
  let frequentRenterPoints = 0
  let result = `Rental Record for ${customer.name}\n`
  for (let r of customer.rentals) {
    let thisAmount = amountFor(r)

    // add frequent renter points
    frequentRenterPoints++
    // add bonus for a two day new release rental
    if (movieFor(r).code === 'new' && r.days > 2) frequentRenterPoints++

    // print figures for this rental
    result += `\t${movieFor(r).title}\t${thisAmount}\n`
    totalAmount += thisAmount
  }
  // add footer lines
  result += `Amount owed is ${totalAmount}\n`
  result += `You earned ${frequentRenterPoints} frequent renter points\n`

  return result

  function movieFor (r) {
    return movies[r.movieID]
  }

  function amountFor (r) {
    let amount = 0

    // determine amount for each movie
    switch (movieFor(r).code) {
      case 'regular':
        amount = 2
        if (r.days > 2) {
          amount += (r.days - 2) * 1.5
        }
        break
      case 'new':
        amount = r.days * 3
        break
      case 'childrens':
        amount = 1.5
        if (r.days > 3) {
          amount += (r.days - 3) * 1.5
        }
        break
    }
    return amount
  }
}

module.exports = { statement }
