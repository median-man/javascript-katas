/* eslint-disable */
function statement(customerData, movies) {
  const customer = createCustomer(customerData, movies);
  let result = `Rental Record for ${customer.name()}\n`;
  for (const r of customer.rentals()) {
    result += `\t${r.movie().title}\t${r.amount()}\n`;
  }
  result += `Amount owed is ${customer.amount()}\n`;
  result += `You earned ${customer.frequentRenterPoints()} frequent renter points\n`;
  return result;
}

function createCustomer(data, movies) {
  return {
    name: () => data.name,
    rentals,
    amount,
    frequentRenterPoints,
  }

  function rentals() {
    return data.rentals.map(rentalData => createRental(rentalData, movies));
  }

  function amount() {
    return rentals()
      .reduce((total, rental) => total + rental.amount(), 0);
  }

  function frequentRenterPoints() {
    return rentals()
      .reduce((total, rental) => total + rental.frequentRenterPoints(), 0);
  }
}

function createRental(data, movies) {
  return {
    days: () => data.days,
    movieID: () => data.movieID,
    movie,
    amount,
    frequentRenterPoints,
  };

  function movie() {
    return movies[data.movieID];
  }

  function amount() {
    const lateFee = 1.5;
    const { code } = movie();
    if (code === 'new') {
      return data.days * 3;
    }
    if (code === 'childrens') {
      return 1.5 + overdueAmount(data.days, 3);
    }
    return 2 + overdueAmount(data.days, 2);

    function overdueAmount(days, maxDays) {
      const isOverdue = days > maxDays;
      if (isOverdue) {
        return (days - maxDays) * lateFee;
      }
      return 0;
    }
  }

  function frequentRenterPoints() {
    const newReleaseBonusDays = 3;
    const isNewMovie = movie().code === 'new';
    const qualifiesForNewReleaseBonus = isNewMovie && data.days >= newReleaseBonusDays;
    return qualifiesForNewReleaseBonus ? 2 : 1;
  }
}

module.exports = { statement };
