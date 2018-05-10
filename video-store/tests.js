const { expect } = require('chai');
const { statement } = require('./statement');

describe('statement()', () => {
  function testStatement(customer, movies, expected) {
    const actual = statement(customer, movies);
    expect(actual).to.equal(expected);
  }
  describe('when two regular movies are rented with one overdue', () => {
    it('should return text for a bill', () => {
      const expected =
      'Rental Record for john\n' +
      '\tRan\t3.5\n' +
      '\tTrois Couleurs: Bleu\t2\n' +
      'Amount owed is 5.5\n' +
      'You earned 2 frequent renter points\n';
      const customer = {
        name: 'john',
        rentals: [
          { movieID: 'F001', days: 3 },
          { movieID: 'F002', days: 1 },
        ],
      };
      const movies = {
        F001: { title: 'Ran', code: 'regular' },
        F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
      };
      testStatement(customer, movies, expected);
    });
  });

  describe('when two children\'s movies are rented and one is overdue', () => {
    it('should return the text for a bill', () => {
      const expected =
        'Rental Record for mary\n' +
        '\tPlay\t1.5\n' +
        '\tDude\t3\n' +
        'Amount owed is 4.5\n' +
        'You earned 2 frequent renter points\n';
      const customer = {
        name: 'mary',
        rentals: [
          { movieID: 'F001', days: 1 },
          { movieID: 'F002', days: 4 },
        ],
      };
      const movies = {
        F001: { title: 'Play', code: 'childrens' },
        F002: { title: 'Dude', code: 'childrens' },
      };
      testStatement(customer, movies, expected);
    });
  });

  describe('when one new movie is rented', () => {
    it('should return the text for a bill', () => {
      const expected =
        'Rental Record for mary\n' +
        '\tPlay\t3\n' +
        'Amount owed is 3\n' +
        'You earned 1 frequent renter points\n';
      const customer = {
        name: 'mary',
        rentals: [
          { movieID: 'F001', days: 1 },
        ],
      };
      const movies = {
        F001: { title: 'Play', code: 'new' },
      };
      testStatement(customer, movies, expected);
    });
  });
});
