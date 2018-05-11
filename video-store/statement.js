module.exports.statement = function statement(customer, movies) {
  const data = createStatementData(customer, movies);
  let result = `Rental Record for ${data.name}\n`;
  result += createRentalLines();
  result += `Amount owed is ${data.totalAmount}\n`;
  result += `You earned ${data.totalFrequentRenterPoints} frequent renter points\n`;
  return result;

  function createRentalLines() {
    return data.rentals
      .map(rental => `\t${rental.title}\t${rental.amount}\n`)
      .join('');
  }
};

module.exports.htmlStatement = function htmlStatement(customer, movies) {
  const data = createStatementData(customer, movies);
  let result = `<h1>Rental Record for <em>${data.name}</em></h1>\n`;
  result += '<table>\n';
  result += createRentalLines();
  result += '</table>\n';
  result += `<p>Amount owed is <em>${data.totalAmount}</em></p>\n`;
  result += `<p>You earned <em>${data.totalFrequentRenterPoints}</em> frequent renter points</p>\n`;
  return result;

  function createRentalLines() {
    return data.rentals
      .map(rental => `<tr><td>${rental.title}</td><td>${rental.amount}</td></tr>\n`)
      .join('');
  }
};

function createStatementData(customer, movies) {
  const thisData = Object.assign({}, customer);
  thisData.rentals = customer.rentals.map(rentalData => createRental(rentalData));
  thisData.totalAmount = totalAmount();
  thisData.totalFrequentRenterPoints = totalFrequentRenterPoints();
  return thisData;

  function createRental(rentalData) {
    const thisRental = Object.assign({}, rentalData);
    thisRental.title = movieFor(rentalData).title;
    thisRental.amount = amountFor(thisRental);
    return thisRental;
  }

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
