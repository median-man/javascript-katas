const should = require('chai').should()

const { createGreeter } = require('./greeter')

describe('greeter', () => {
  it('should exist', () => {
    should.exist(createGreeter, 'createGreeter factory function exists')
    should.exist(createGreeter(), 'creates greeter object')
  })

  describe('name formating', () => {
    it('should return "Hello, John" when input is "John"', () => {
      createGreeter()
        .greet('John')
        .should.equal('Hello, John')
    })

    it('should return "Hello, Sue" when input is "Sue"', () => {
      createGreeter()
        .greet('Sue')
        .should.equal('Hello, Sue')
    })

    it('should trim white space', () => {
      createGreeter()
        .greet(' Sue ')
        .should.equal('Hello, Sue')
    })

    it('should capitalize the first letter', () => {
      createGreeter()
        .greet('sue')
        .should.equal('Hello, Sue')
    })

    it('should capitalize the first letter and trim', () => {
      createGreeter()
        .greet(' sue ')
        .should.equal('Hello, Sue')
    })
  })

  describe('salutation', () => {
    it('should say "Good morning" from 6 AM until 12 PM', () => {
      const date = new Date()
      const test = (hour, context) => {
        date.setHours(hour)
        createGreeter(date)
          .greet('Sue')
          .should.equal('Good morning, Sue', context)
      }
      test(6, '6 AM')
      test(11, '11 AM')
    })

    it('should say "Good evening" from 6 PM until 10 PM', () => {
      const date = new Date()
      const test = (hour, context) => {
        date.setHours(hour)
        createGreeter(date)
          .greet('Sue')
          .should.equal('Good evening, Sue', context)
      }
      test(18, '6 PM')
      test(21, '9 PM')
    })

    it('should say "Good night" from 10 PM until 6 AM', () => {
      const date = new Date()
      const test = (hour, context) => {
        date.setHours(hour)
        createGreeter(date)
          .greet('Sue')
          .should.equal('Good night, Sue', context)
      }
      test(22, '10 PM')
      test(5, '5 AM')
    })
  })
})
