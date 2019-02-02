require('chai').should()

const { statement } = require('./statment')

describe('video store kata', () => {
  describe('statement', () => {
    it('master test prints statement', () => {
      const customer = {
        name: 'john',
        rentals: [{ movieID: 'F001', days: 3 }, { movieID: 'F002', days: 1 }]
      }

      const movies = {
        F001: { title: 'Ran', code: 'regular' },
        F002: { title: 'Trois Couleurs: Bleu', code: 'regular' }
        // etc
      }

      const expectedStatment = [
        'Rental Record for john',
        '\tRan\t3.5',
        '\tTrois Couleurs: Bleu\t2',
        'Amount owed is 5.5',
        'You earned 2 frequent renter points',
        ''
      ].join('\n')

      statement(customer, movies).should.equal(expectedStatment)
    })
  })
})
