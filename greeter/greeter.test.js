const should = require('chai').should()

const { createGreeter } = require('./greeter')

describe('greeter', () => {
  it('should exist', () => {
    should.exist(createGreeter())
  })

  describe('greet', () => {
    let greeter
    let date

    beforeEach(() => {
      date = new Date()
      date.setHours(12)
      greeter = createGreeter(date)
    })

    it('should exist', () => {
      should.exist(greeter.greet)
    })

    it('should return "Hello, <name>"', () => {
      greeter.greet('Kate').should.equal('Hello, Kate')
      greeter.greet('John').should.equal('Hello, John')
    })

    it('should trim name input', () => {
      greeter.greet(' Kate ').should.equal('Hello, Kate')
    })

    it('should capitalize the first letter of the name', () => {
      greeter.greet('kate').should.equal('Hello, Kate')
    })

    it('should say "Good morning" where the time is [6:00 AM, 12:00 PM)', () => {
      date.setHours(6)
      const greeter = createGreeter(date)
      greeter.greet('Kate').should.equal('Good morning, Kate')
    })

    it('should say "Good evening" where the time is [6:00 PM, 10:00 PM)', () => {
      date.setHours(18)
      const greeter = createGreeter(date)
      greeter.greet('Kate').should.equal('Good evening, Kate')
    })

    it('should say "Good night" where the time is [10:00 PM, 6:00 AM)', () => {
      date.setHours(22)
      let greeter = createGreeter(date)
      greeter.greet('Kate').should.equal('Good night, Kate')

      date.setHours(5)
      greeter = createGreeter(date)
      greeter.greet('Kate').should.equal('Good night, Kate', '5:00 AM failed')
    })

    it('should log the greeting', () => {
      let isLogCalled = false
      const log = msg => {
        isLogCalled = true
        msg.should.equal('Hello, Kate')
      }
      const greeter = createGreeter(date, log)
      greeter.greet('Kate')
      isLogCalled.should.equal(true, 'log was not called')
    })
  })
})
