function renderPlainText (customer, movies) {
  const data = newFunction()
  let result = `Rental Record for ${customer.name}\n`
  for (let r of data.rentals) {
    result += `\t${r.title}\t${r.amount}\n`
  }
  result += `Amount owed is ${data.totalAmount}\n`
  result += `You earned ${
    data.frequentRenterPoints
  } frequent renter points\n`

  return result

  function newFunction () {
    return {
      totalAmount: totalAmount(),
      frequentRenterPoints: frequentRenterPoints(),
      rentals: customer.rentals.map(r => ({
        title: movieFor(r).title,
        amount: amountFor(r)
      }))
    }
  }

  function frequentRenterPoints () {
    return customer.rentals
      .map(frequentRenterPointsFor)
      .reduce((a, b) => a + b, 0)
  }

  function totalAmount () {
    return customer.rentals.map(amountFor).reduce((a, b) => a + b, 0)
  }

  function frequentRenterPointsFor (r) {
    return movieFor(r).code === 'new' && r.days > 2 ? 2 : 1
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

module.exports = { statement: { renderPlainText } }
