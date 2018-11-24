const should = require('chai').should()
const { add } = require('./string-calculator')

describe('string-calculator', () => {
  it('should exist', () => should.exist(add))

  it('should return 0 when given an empty string', () => {
    add('').should.equal(0)
  })

  it('should return 1', () => {
    add('1').should.equal(1)
  })

  it('should throw with "Negative numbers not allowed: -1.', () => {
    should.throw(() => add('-1'), 'Negative numbers not allowed: -1.')
  })

  it('should add two numbers comma separated numbers', () => {
    add('1,1').should.equal(2)
  })

  it('should ignore numbers > 1000', () => {
    add('1,1001').should.equal(1)
  })

  it('should treat white space as a delimiter', () => {
    add('1 1').should.equal(2, 'single space')
    add('1\t1').should.equal(2, 'tab')
  })

  it('should handle a custom delimiter', () => {
    let input = '//[-]\n1-1'
    add(input).should.equal(2, 'delimiter: -')

    input = '//[=]\n1=1'
    add(input).should.equal(2, 'delimiter: =')
  })

  it('should support custom delimiter with multiple characters', () => {
    let input = '//[--]\n1--1'
    add(input).should.equal(2, 'delimiter: --')
  })
})
