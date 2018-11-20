const should = require('chai').should()
const { createGreeter } = require('./greeter')

describe('greeter', () => {
  it('should exist', () => {
    should.exist(createGreeter())
  })

  describe('greet', () => {
    let greet
    let date

    beforeEach(() => {
      date = new Date()
      date.setHours(12)
      greet = createGreeter(date).greet
    })

    it('should exist', () => {
      greet.should.be.a('function')
    })

    it('should return "Hello, Jack', () => {
      greet('Jack').should.equal('Hello, Jack')
    })

    it('should return "Hello, Jill', () => {
      greet('Jill').should.equal('Hello, Jill')
    })

    it('should trim name input', () => {
      greet(' Jill ').should.equal('Hello, Jill')
    })

    it('should capitalize name', () => {
      greet('jill').should.equal('Hello, Jill')
    })

    it('should return "Good morning, Jill when the time is 11:00 AM', () => {
      date.setHours(11)
      greet = createGreeter(date).greet
      greet('Jill').should.equal('Good morning, Jill')
    })

    it('should return "Good night Jill when the time is 5:00 AM', () => {
      date.setHours(5)
      greet = createGreeter(date).greet
      greet('Jill').should.equal('Good night, Jill')
    })

    it('should return "Good evening Jill when the time is 6:00 PM', () => {
      date.setHours(18)
      greet = createGreeter(date).greet
      greet('Jill').should.equal('Good evening, Jill')
    })

    it('should return "Good night Jill when the time is 10:00 PM', () => {
      date.setHours(22)
      greet = createGreeter(date).greet
      greet('Jill').should.equal('Good night, Jill')
    })

    it('should call logger.log with "Hello, Jill"', () => {
      function createLogger () {
        let logCalledWith = ''
        let logWasCalled = false

        const log = msg => {
          logWasCalled = true
          logCalledWith = msg
        }

        return {
          log,
          logCalledWith: () => logCalledWith,
          logWasCalled: () => logWasCalled
        }
      }

      const logger = createLogger()
      greet = createGreeter(date, logger).greet
      greet('Jill')

      if (logger.logWasCalled()) {
        should.exist(
          logger.logCalledWith(),
          'logger.log was called without a message'
        )
        return logger.logCalledWith().should.equal('Hello, Jill')
      }
      throw new Error('logger.log was not called')
    })
  })
})
