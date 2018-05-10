/* eslint no-underscore-dangle: off */
const Rental = require('./Rental');

module.exports = class Customer {
  constructor(data, movies) {
    this._data = data;
    this._movies = movies;
  }

  get name() { return this._data.name; }
  get rentals() { return this._data.rentals.map(rental => new Rental(rental, this._movies)); }
  get amount() {
    return this.rentals
      .reduce((total, rental) => total + rental.amount, 0);
  }
  get frequentRenterPoints() {
    return this.rentals
      .reduce((total, rental) => total + rental.frequentRenterPoints, 0);
  }
};
