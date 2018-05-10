/* eslint-disable */
function statement(customer, movies) {
    let result = `Rental Record for ${customer.name}\n`;
    for (const r of customer.rentals) {
      result += `\t${movieFor(r).title}\t${amountFor(r)}\n`;
    }
    result += `Amount owed is ${totalAmount()}\n`;
    result += `You earned ${totalFrequentRenterPoints()} frequent renter points\n`;
    return result;

  function movieFor(rental) {
    return movies[rental.movieID];
  }

  function totalAmount() {
    return customer.rentals
      .reduce((total, rental) => total + amountFor(rental), 0);
  }

  function totalFrequentRenterPoints() {
    return customer.rentals
      .map(rental => frequentRenterPointsFor(rental))
      .reduce((total, points) => total + points, 0);
  }

  function amountFor(rental) {
    const lateFee = 1.5;
    const { code } = movieFor(rental);
    if (code === 'new') {
      return rental.days * 3;
    }
    if (code === 'childrens') {
      return 1.5 + overdueAmount(rental.days, 3);
    }
    return 2 + overdueAmount(rental.days, 2);

    function overdueAmount(days, maxDays) {
      const isOverdue = days > maxDays;
      if (isOverdue) {
        return (days - maxDays) * lateFee;
      }
      return 0;
    }
  }

  function frequentRenterPointsFor(r) {
    const newReleaseBonusDays = 3;
    const isNewMovie = movieFor(r).code === 'new';
    const qualifiesForNewReleaseBonus = isNewMovie && r.days >= newReleaseBonusDays;
    return qualifiesForNewReleaseBonus ? 2 : 1;
  }
}

module.exports = { statement };
