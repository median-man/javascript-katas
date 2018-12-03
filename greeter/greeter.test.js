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

      it('should say hello for hours 12 to 17', () => {
        const greeter = getGreeter(12)
        greeter.greet('bob').should.equal('Hello, Bob', '12 PM')
      })

      it('should say good good evening for hours 18 to 21', () => {
        const greeter = getGreeter(18)
        greeter.greet('bob').should.equal('Good evening, Bob', '6 PM')
      })

      it('should say good night starting at hour 22 and greater', () => {
        const greeter = getGreeter(22)
        greeter.greet('bob').should.equal('Good night, Bob', '10 PM')
      })

      it('should say good night for hours 0 to 5', () => {
        const greeter = getGreeter(5)
        greeter.greet('bob').should.equal('Good night, Bob', '5 AM')
      })
    })

    describe('logging', () => {
      it('should log the greeting each time greet is called', () => {
        let loggerCalled = false
        const logger = {
          log: greeting => {
            loggerCalled = true
            should.exist(greeting, 'expected logger.log to be called with one argument')
            greeting.should.equal('Hello, Bob', 'logger.log called with')
          }
        }
        const greeter = new Greeter(null, logger)
        greeter.greet('Bob')
        loggerCalled.should.equal(true, 'expected logger.log to be called')
      })
    })
  })
})
