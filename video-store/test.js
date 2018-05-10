const { expect } = require('chai');
const { statement } = require('./statement');

describe('statement()', () => {
  function testTextStatement(customer, movies, expected) {
    const actual = statement(customer, movies);
    expect(actual).to.equal(expected);
  }
  const testCases = [
    {
      id: '0',
      customer: {
        name: 'john',
        rentals: [
          { movieID: 'F001', days: 3 },
          { movieID: 'F002', days: 1 },
        ],
      },
      movies: {
        F001: { title: 'Ran', code: 'regular' },
        F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
      },
    },
    {
      id: '1',
      customer: {
        name: 'mary',
        rentals: [
          { movieID: 'F001', days: 1 },
          { movieID: 'F002', days: 4 },
        ],
      },
      movies: {
        F001: { title: 'Play', code: 'childrens' },
        F002: { title: 'Dude', code: 'childrens' },
      },
    },
    {
      id: '2',
      customer: {
        name: 'mary',
        rentals: [
          { movieID: 'F001', days: 1 },
        ],
      },
      movies: {
        F001: { title: 'Play', code: 'new' },
      },
    },
  ];

  describe('when two regular movies are rented with one overdue', () => {
    it('should return text statement for test case 0', () => {
      const expected =
      'Rental Record for john\n' +
      '\tRan\t3.5\n' +
      '\tTrois Couleurs: Bleu\t2\n' +
      'Amount owed is 5.5\n' +
      'You earned 2 frequent renter points\n';
      const { customer, movies } = testCases[0];
      testTextStatement(customer, movies, expected);
    });
  });

  describe('when two children\'s movies are rented and one is overdue', () => {
    it('should return the text statemtn for test case 1', () => {
      const expected =
        'Rental Record for mary\n' +
        '\tPlay\t1.5\n' +
        '\tDude\t3\n' +
        'Amount owed is 4.5\n' +
        'You earned 2 frequent renter points\n';
      const { customer, movies } = testCases[1];
      testTextStatement(customer, movies, expected);
    });
  });

  describe('when one new movie is rented', () => {
    it('should return the text statement for test case 2', () => {
      const expected =
        'Rental Record for mary\n' +
        '\tPlay\t3\n' +
        'Amount owed is 3\n' +
        'You earned 1 frequent renter points\n';
      const { customer, movies } = testCases[2];
      testTextStatement(customer, movies, expected);
    });
  });

  describe.skip('when format is not valid', () => {
    it('should throw an error', () => {
      const { customer, movies } = testCases[0];
      const format = 'invalid';
      const expectedMsg = '"invalid" is not a valid statement format.';
      const shouldThrow = () => statement(customer, movies, format);
      expect(shouldThrow).to.throw(expectedMsg);
    });
  });

  describe.skip('when format is html', () => {
    it('should return html rental statement for case 0', () => {
      const expected =
        '<h1>Rental Record for <em>john</em></h1>\n' +
        '<table>\n' +
        '<tr><td>Ran</td><td>3.5</td></tr>\n' +
        '<tr><td>Trois Couleurs: Bleu</td><td>2</td></tr>\n' +
        '</table>\n' +
        '<p>Amount owed is <em>5.5</em></p>\n' +
        '<p>You earned <em>2</em> frequent renter points</p>\n';
      const { customer, movies } = testCases[0];
      const format = 'html';
      expect(statement(customer, movies, format)).to.equal(expected);
    });
  });
});
