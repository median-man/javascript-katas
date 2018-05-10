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

function htmlStatement(customerData, movies) {
  const customer = new Customer(customerData, movies);
  let result = `<h1>Rental Record for <em>${customer.name}</em></h1>\n` +
    '<table>\n';
  for (const r of customer.rentals) {
    result += `<tr><td>${r.movie.title}</td><td>${r.amount}</td></tr>\n`;
  }
  result += '</table>\n' +
    `<p>Amount owed is <em>${customer.amount}</em></p>\n` +
    `<p>You earned <em>${customer.frequentRenterPoints}</em> frequent renter points</p>\n`;
  return result;
}

module.exports = { statement, htmlStatement };
