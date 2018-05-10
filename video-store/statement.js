/* eslint-disable */
const Customer = require('./Customer');
function statement(customerData, movies) {
  const customer = new Customer(customerData, movies);
  let result = `Rental Record for ${customer.name}\n`;
  for (const r of customer.rentals) {
    result += `\t${r.movie.title}\t${r.amount}\n`;
  }
  result += `Amount owed is ${customer.amount}\n`;
  result += `You earned ${customer.frequentRenterPoints} frequent renter points\n`;
  return result;
}

module.exports = { statement };
