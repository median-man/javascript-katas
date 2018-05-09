/* eslint-disable */
function statement(customer, movies) {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;
  for (let r of customer.rentals) {
    const thisAmount = amountFor(r);
    frequentRenterPoints += frequentRenterPointsFor(r);

    //print figures for this rental
    result += `\t${movieFor(r).title}\t${thisAmount}\n` ;
    totalAmount += thisAmount;
  }
  // add footer lines
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;

  function movieFor(rental) {
    return movies[rental.movieID];
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
    const isNewMovie = movieFor(r).code === "new";
    const qualifiesForNewReleaseBonus = isNewMovie && r.days >= newReleaseBonusDays;
    return qualifiesForNewReleaseBonus ? 2 : 1;
  }
}

module.exports = { statement };