require('chai').should()

const customer = require('./customer')
const movies = require('./movies')
const { statement } = require('./statement')

describe('video store kata', () => {
  describe('statement', () => {
    it('should return a plain text statement', () => {
      let expectedStatement = 'Rental Record for john\n'
      expectedStatement += '\tA New Hope\t2\n'
      expectedStatement += '\tThe Empire Strikes Back\t9\n'
      expectedStatement += '\tReturn of the Jedi\t3\n'
      expectedStatement += 'Amount owed is 14\n'
      expectedStatement += 'You earned 4 frequent renter points\n'
      statement(customer, movies).should.eql(expectedStatement)
    })
  })
})
