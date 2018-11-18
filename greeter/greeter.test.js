const should = require('chai').should()
const { createGreeter } = require('./greeter')

describe('createGreeter', () => {
  it('should exist', () => should.exist(createGreeter))

  describe('greeter.greet', () => {
    let greeter
    let logger

    beforeEach(() => {
      logger = { log: () => {} }
      setGreeterHour(12)
    })

    function setGreeterHour (hour) {
      const date = new Date()
      date.setHours(hour)
      greeter = createGreeter(date, logger)
    }

    it('should exist', () => should.exist(createGreeter().greet))

    it('should return "Hello, John"', () => {
      greeter.greet('John').should.equal('Hello, John')
    })

    it('should return "Hello, Kate"', () => {
      greeter.greet('Kate').should.equal('Hello, Kate')
    })

    it('should trim whitespace', () => {
      greeter.greet(' Kate ').should.equal('Hello, Kate')
    })

    it('should capitalize the first letter of name', () => {
      greeter.greet('kate').should.equal('Hello, Kate')
    })

    it('should return "Good morning, Kate" at 6:00 AM', () => {
      setGreeterHour(6)
      greeter.greet('kate').should.equal('Good morning, Kate')
    })

    it('should return "Good morning, Kate" at 11:00 AM', () => {
      setGreeterHour(11)
      greeter.greet('kate').should.equal('Good morning, Kate')
    })

    it('should return "Good evening, Kate" at 6:00 PM', () => {
      setGreeterHour(18)
      greeter.greet('kate').should.equal('Good evening, Kate')
    })

    it('should return "Good night, Kate" at 10:00 PM', () => {
      setGreeterHour(22)
      greeter.greet('kate').should.equal('Good night, Kate')
    })

    it('should return "Good night, Kate" at 05:00 AM', () => {
      setGreeterHour(5)
      greeter.greet('kate').should.equal('Good night, Kate')
    })

    it('should call logger.log with greeting', () => {
      let logCalledWith = []
      logger.log = (...args) => { logCalledWith = args }
      greeter.greet('kate')
      logCalledWith[0].should.equal('Hello, Kate')
    })
  })
})
