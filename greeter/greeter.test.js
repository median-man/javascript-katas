const should = require('chai').should()
const { createGreeter } = require('./greeter')

const quietLogger = {
  log: () => {}
}

describe('createGreeter', () => {
  it('should return an object', () => createGreeter().should.be.an('object'))
})

describe('greeter.greet', () => {

  it('should exist', () => {
    should.exist(createGreeter(new Date(), quietLogger).greet)
  })

  it('should say good morning when the time is 6:00 AM', () => {
    const date = new Date('2018-01-01 06:00')
    createGreeter(date, quietLogger)
      .greet('kate')
      .should.equal('Good morning, Kate')
  })

  it('should say good morning when the time is 11:59', () => {
    const date = new Date('2018-01-01 11:59')
    createGreeter(date, quietLogger)
      .greet('kate')
      .should.equal('Good morning, Kate')
  })

  it('should say good evening when the time is 18:00', () => {
    const date = new Date('2018-01-01 18:00')
    createGreeter(date, quietLogger)
      .greet('kate')
      .should.equal('Good evening, Kate')
  })

  it('should say good night when the time is 22:00', () => {
    const date = new Date('2018-01-01 22:00')
    createGreeter(date, quietLogger)
      .greet('kate')
      .should.equal('Good night, Kate')
  })

  it('should say good night when the time is 00:00', () => {
    const date = new Date('2018-01-01 01:00')
    createGreeter(date, quietLogger)
      .greet('kate')
      .should.equal('Good night, Kate')
  })

  it('should log to console when called', () => {
    const date = new Date('2018-01-01 12:00')
    let logCalledWith = []
    const logger = {
      log: (...args) => {
        logCalledWith = args
      }
    }

    createGreeter(date, logger).greet('Kate')

    logCalledWith.should.have.length.greaterThan(0, 'logger.log was not called')
    logCalledWith[0].should.equal('Hello, Kate')
  })

  describe('when time is "12:01"', () => {
    let greeter

    beforeEach(() => {
      greeter = createGreeter(new Date('2018-01-01 12:00'), quietLogger)
    })

    it('should return "Hello, John"', () =>
      greeter.greet('John').should.equal('Hello, John'))

    it('should return "Hello, Kate"', () =>
      greeter.greet('Kate').should.equal('Hello, Kate'))

    it('should trim white space', () =>
      greeter.greet(' Kate ').should.equal('Hello, Kate'))

    it('should capitalize the first letter of the name', () =>
      greeter.greet(' kate ').should.equal('Hello, Kate'))
  })
})
