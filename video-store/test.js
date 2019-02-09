require('chai').should()

const customer = require('./customer')
const movies = require('./movies')
const statement = require('./statement')

describe('video store kata', () => {
  describe('statement', () => {
    it('should render plain text statement', () => {
      let expectedString = 'Rental Record for john\n'
      expectedString += '\tA New Hope\t2\n'
      expectedString += '\tThe Empire Strikes Back\t9\n'
      expectedString += '\tReturn of the Jedi\t3\n'
      expectedString += 'Amount owed is 14\n'
      expectedString += 'You earned 4 frequent renter points\n'
      statement.renderPlainText(customer, movies).should.equal(expectedString)
    })

    it('should render html statement', () => {
      let expectedString = '<h1>Rental Record for <em>john</em></h1>\n'
      expectedString += '<table>\n'
      expectedString += '<tr><td>Title</td><td>Days</td><td>Amount</td></tr>\n'
      expectedString += '<tr><td>A New Hope</td><td>2</td><td>2</td></tr>\n'
      expectedString += '<tr><td>The Empire Strikes Back</td><td>3</td><td>9</td></tr>\n'
      expectedString += '<tr><td>Return of the Jedi</td><td>4</td><td>3</td></tr>\n'
      expectedString += '</table>\n'
      expectedString += '<p>Amount owed is <em>14</em></p>\n'
      expectedString += '<p>You earned <em>4</em> frequent renter points</p>\n'
      statement.renderHtml(customer, movies).should.equal(expectedString)
    })
  })
})
