const should = require('chai').should()
const { createGreeter } = require('./greeter')

describe('greeter', () => {
  it('should exist', () => {
    const greeter = createGreeter()
    should.exist(greeter)
  })
  describe('name format', () => {
    let greeter
    beforeEach(() => {
      const date = new Date()
      date.setHours(12)
      greeter = createGreeter(date)
    })

    const shouldReturnGiven = (returns, given, context) => {
      it(`should return "${returns}"`, () => {
        greeter.greet(given).should.equal(returns, context)
      })
    }

    shouldReturnGiven('Hello, John', 'John')
    shouldReturnGiven('Hello, Shelly', 'Shelly')
    shouldReturnGiven('Hello, Shelly', 'shelly', 'capitalize first letter')
    shouldReturnGiven('Hello, Shelly', ' Shelly ', 'trim white space')
  })

  describe('greeting', () => {
    let date
    beforeEach(() => {
      date = new Date()
    })

    it('should be "Good morning" when the time is 6:00 AM', () => {
      date.setHours(6)
      const greeter = createGreeter(date)
      greeter.greet('Shelly').should.equal('Good morning, Shelly')
    })

    it('should be "Good morning" when the time is 11:00 AM', () => {
      date.setHours(11)
      const greeter = createGreeter(date)
      greeter.greet('Shelly').should.equal('Good morning, Shelly')
    })

    it('should be "Good evening" when the time is 6:00 PM', () => {
      date.setHours(18)
      const greeter = createGreeter(date)
      greeter.greet('Shelly').should.equal('Good evening, Shelly')
    })

    it('should be "Hello" when the time is 5:00 PM', () => {
      date.setHours(17)
      const greeter = createGreeter(date)
      greeter.greet('Shelly').should.equal('Hello, Shelly')
    })

    it('should be "Good night" when the time is 10:00 PM', () => {
      date.setHours(22)
      const greeter = createGreeter(date)
      greeter.greet('Shelly').should.equal('Good night, Shelly')
    })

    it('should be "Good night" when the time is 12:00 AM', () => {
      date.setHours(0)
      const greeter = createGreeter(date)
      greeter.greet('Shelly').should.equal('Good night, Shelly')
    })

    it('should be "Good night" when the time is 5:00 AM', () => {
      date.setHours(5)
      const greeter = createGreeter(date)
      greeter.greet('Shelly').should.equal('Good night, Shelly')
    })
  })

  describe('logging', () => {
    it('should call logger.log with greeting', () => {
      const date = new Date()
      date.setHours(12)
      let logCalled = false
      const mockLogger = {
        log: (greeting) => {
          logCalled = true
          should.exist(greeting, 'no args passed to logger.log')
          greeting.should.equal('Hello, Shelly')
        }
      }
      const greeter = createGreeter(date, mockLogger)
      greeter.greet('Shelly')
      logCalled.should.be.true // eslint-disable-line
    })
  })
})
