require('chai').should()

const customer = require('./customer')
const movies = require('./movies')
const { statement } = require('./statement')

describe('video store kata', () => {
  describe('statement', () => {
    it('should render plain text statement', () => {
      let expectedString = 'Rental Record for john\n'
      expectedString += '\tA New Hope\t2\n'
      expectedString += '\tThe Empire Strikes Back\t9\n'
      expectedString += '\tReturn of the Jedi\t3\n'
      expectedString += 'Amount owed is 14\n'
      expectedString += 'You earned 4 frequent renter points\n'
      statement(customer, movies).should.equal(expectedString)
    })
  })
})
