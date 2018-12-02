const should = require('chai').should()
const Greeter = require('./greeter')

describe('greeter', () => {
  it('should exist', () => {
    should.exist(new Greeter())
  })
  describe('greet', () => {
    describe('formats name', () => {
      let greeter
      beforeEach(() => {
        greeter = new Greeter()
      })

      it('should return "Hello, John" given "John"', () => {
        greeter.greet('John').should.equal('Hello, John')
      })

      it('should return "Hello, Bob" given "Bob"', () => {
        greeter.greet('Bob').should.equal('Hello, Bob')
      })

      it('should trim white space', () => {
        greeter.greet(' Bob ').should.equal('Hello, Bob')
      })

      it('should capitalize the first letter', () => {
        greeter.greet(' bob ').should.equal('Hello, Bob')
      })
    })

    describe('salutation', () => {
      const getGreeter = hours => {
        const date = new Date()
        date.setHours(hours)
        return new Greeter(date)
      }

      it('should say good morning for hours 6 to 11', () => {
        const greeter = getGreeter(6)
        greeter.greet('bob').should.equal('Good morning, Bob', '6 AM')
      })

      it('should say good hello for hours 12 to 17', () => {
        const greeter = getGreeter(12)
        greeter.greet('bob').should.equal('Hello, Bob', '12 PM')
      })

      it('should say good good evening for hours 18 to 21', () => {
        const greeter = getGreeter(18)
        greeter.greet('bob').should.equal('Good evening, Bob', '6 PM')
      })
    })
  })
})
