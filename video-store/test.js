const should = require('chai').should()

const { statement } = require('./statement')

describe('video store kata', () => {
  describe('statement', () => {
    const rentals = [
      { movieID: 'F001', days: 3 },
      { movieID: 'F003', days: 3 },
      { movieID: 'F002', days: 1 },
      { movieID: 'F004', days: 2 },
      { movieID: 'F005', days: 4 }
    ]
    const customer = {
      name: 'john',
      rentals
    }
    const movies = {
      F001: { title: 'Ran', code: 'regular' },
      F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
      F003: { title: 'Child movie', code: 'childrens' },
      F004: { title: 'New Movie', code: 'new' },
      F005: { title: 'Regular Movie 5', code: 'regular' }
    }

    it('should return a rental statement', () => {
      const expectedStatement = [
        'Rental Record for john',
        '\tRan\t3.5',
        '\tChild movie\t1.5',
        '\tTrois Couleurs: Bleu\t2',
        '\tNew Movie\t6',
        '\tRegular Movie 5\t5',
        'Amount owed is 18',
        'You earned 5 frequent renter points\n'
      ].join('\n')

      statement(customer, movies).should.equal(expectedStatement)
    })

    it('should throw when format is not valid', () => {
      const expectedErrorMessage = 'Unknown statement format "cookie"'

      should.throw(
        () => statement(customer, movies, 'cookie'),
        expectedErrorMessage
      )
    })
  })
})
