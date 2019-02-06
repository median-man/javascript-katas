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
      statement.renderPlainText(customer, movies).should.eql(expectedStatement)
    })
    it('should return an html statement', () => {
      let expectedStatement = '<h1>Rental Record for <em>john</em></h1>\n'
      expectedStatement += '<table>\n'
      expectedStatement += '  <tr><th>Title</th><th>Days</th><th>Amount</th></tr>\n'
      expectedStatement += '  <tr><td>A New Hope</td><td>2</td><td>2</td></tr>\n'
      expectedStatement += '  <tr><td>The Empire Strikes Back</td><td>3</td><td>9</td></tr>\n'
      expectedStatement += '  <tr><td>Return of the Jedi</td><td>4</td><td>3</td></tr>\n'
      expectedStatement += '</table>\n'
      expectedStatement += '<p>Amount owed is <em>14</em></p>\n'
      expectedStatement += '<p>You earned <em>4</em> frequent renter points</p>\n'
      statement.renderHtml(customer, movies).should.eql(expectedStatement)
    })
  })
})
