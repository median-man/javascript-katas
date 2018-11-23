const should = require('chai').should()
const { add } = require('./string-calculator')

describe('add', () => {
  it('should exist', () => {
    should.exist(add)
  })

  it('should return 0 when argument is an empty string', () => {
    add('').should.equal(0)
  })

  it('should return a number', () => {
    add('1').should.equal(1)
  })

  it('should add two numbers', () => {
    add('1,1').should.equal(2)
  })

  it('should ignore numbers > 1000', () => {
    add('1001,1').should.equal(1)
  })

  it('should throw with "Negative numbers not allowed."', () => {
    should.throw(() => add('-1'), /negative numbers not allowed/i)
  })

  it('should treat new lines "\\n" as a delimiter', () => {
    add('1\n1').should.equal(2)
  })

  it('should treat white space as a delimiter', () => {
    add('1 1').should.equal(2, 'single space')
    add('1  1').should.equal(2, 'double space')
    add('1\t1').should.equal(2, 'tab')
  })

  it('should accept a custom delimiter', () => {
    add('//[-]\n1-1').should.equal(2)
    add('//[-]\n1-2').should.equal(3)
  })

  it('should accept delimiters with more than 1 character', () => {
    add('//[--]\n1--2').should.equal(3)
  })

  it('should accept multiple custom delimiters', () => {
    add('//[-][+]\n1+2').should.equal(3, 'delimiters: - and +')
  })
})
