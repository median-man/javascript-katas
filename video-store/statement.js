/* eslint-disable */
function totalFrequentRenterPoints(customer, movies) {
  return customer.rentals
    .map(rental => frequentRenterPointsFor(rental, movies))
    .reduce((total, points) => total + points, 0);
}

function totalAmount(customer, movies) {
  return customer.rentals
    .reduce((total, rental) => total + amountFor(rental, movies), 0);
}

function movieFor(rental, movies) {
  return movies[rental.movieID];
}

function amountFor(rental, movies) {
  const lateFee = 1.5;
  const { code } = movieFor(rental, movies);
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

function frequentRenterPointsFor(r, movies) {
  const newReleaseBonusDays = 3;
  const isNewMovie = movieFor(r, movies).code === 'new';
  const qualifiesForNewReleaseBonus = isNewMovie && r.days >= newReleaseBonusDays;
  return qualifiesForNewReleaseBonus ? 2 : 1;
}

function statement(customer, movies, format = 'text') {
  const dispatchTable = {
    'text': textStatement,
    'html': htmlStatement,
  };
  if (!dispatchTable[format]) {
    throw new Error(`"${format}" is not a valid statement format.`);
  }
  return dispatchTable[format](customer, movies);  
}

function textStatement(customer, movies) {
  let result = `Rental Record for ${customer.name}\n`;
  for (const r of customer.rentals) {
    result += `\t${movieFor(r, movies).title}\t${amountFor(r, movies)}\n`;
  }
  result += `Amount owed is ${totalAmount(customer, movies)}\n`;
  result += `You earned ${totalFrequentRenterPoints(customer, movies)} frequent renter points\n`;
  return result;
}

function htmlStatement(customer, movies) {
  const amount = () => totalAmount(customer, movies);
  const frequentRenterPoints = () => totalFrequentRenterPoints(customer, movies);
  const movie = rental => movieFor(rental, movies);
  const rentalAmount = rental => amountFor(rental, movies);
  let result = `<h1>Rental Record for <em>${customer.name}</em></h1>\n` +
    '<table>\n';
  for (const r of customer.rentals) {
    result += `<tr><td>${movie(r).title}</td><td>${rentalAmount(r)}</td></tr>\n`;
  }
  result += '</table>\n' +
    `<p>Amount owed is <em>${amount()}</em></p>\n` +
    `<p>You earned <em>${frequentRenterPoints()}</em> frequent renter points</p>\n`;
  return result;
} 

module.exports = { statement, htmlStatement };
