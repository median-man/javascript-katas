require('chai').should()

const { statement } = require('./statment')

describe('video store kata', () => {
  describe('statement', () => {
    it('should print statement with movies', () => {
      const movies = {
        F001: { title: 'A New Hope', code: 'regular' },
        F002: { title: 'The Empire Strikes Back', code: 'regular' },
        F003: { title: 'Return of the Jedi', code: 'regular' }
      }
      const customer = {
        name: 'john',
        rentals: [
          { movieID: 'F001', days: 1 },
          { movieID: 'F002', days: 1 },
          { movieID: 'F003', days: 1 }
        ]
      }
      const expectedStatement = [
        'Rental Record for john',
        '\tA New Hope\t2',
        '\tThe Empire Strikes Back\t2',
        '\tReturn of the Jedi\t2',
        'Amount owed is 6',
        'You earned 3 frequent renter points',
        ''
      ].join('\n')
      statement(customer, movies).should.equal(expectedStatement)
    })

    it('should print statement with new, regular, and childrens codes', () => {
      const movies = {
        F001: { title: 'A New Hope', code: 'regular' },
        F002: { title: 'The Empire Strikes Back', code: 'childrens' },
        F003: { title: 'Return of the Jedi', code: 'new' }
      }
      const customer = {
        name: 'john',
        rentals: [
          { movieID: 'F001', days: 1 },
          { movieID: 'F002', days: 1 },
          { movieID: 'F003', days: 1 }
        ]
      }
      const expectedStatement = [
        'Rental Record for john',
        '\tA New Hope\t2',
        '\tThe Empire Strikes Back\t1.5',
        '\tReturn of the Jedi\t3',
        'Amount owed is 6.5',
        'You earned 3 frequent renter points',
        ''
      ].join('\n')
      statement(customer, movies).should.equal(expectedStatement)
    })

    it('should print statement where days exceeds minimum for code', () => {
      const movies = {
        F001: { title: 'A New Hope', code: 'regular' },
        F002: { title: 'The Empire Strikes Back', code: 'childrens' }
      }
      const customer = {
        name: 'john',
        rentals: [{ movieID: 'F001', days: 3 }, { movieID: 'F002', days: 4 }]
      }
      const expectedStatement = [
        'Rental Record for john',
        '\tA New Hope\t3.5',
        '\tThe Empire Strikes Back\t3',
        'Amount owed is 6.5',
        'You earned 2 frequent renter points',
        ''
      ].join('\n')
      statement(customer, movies).should.equal(expectedStatement)
    })

    it('should print statement with bonus points for new rental', () => {
      const movies = {
        F003: { title: 'Return of the Jedi', code: 'new' }
      }
      const customer = {
        name: 'john',
        rentals: [{ movieID: 'F003', days: 3 }]
      }
      const expectedStatement = [
        'Rental Record for john',
        '\tReturn of the Jedi\t9',
        'Amount owed is 9',
        'You earned 2 frequent renter points',
        ''
      ].join('\n')
      statement(customer, movies).should.equal(expectedStatement)
    })
  })
})
