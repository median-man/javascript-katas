const should = require('chai').should()

const { add } = require('./string-calculator')

describe('string-calculator.add', () => {
  it('should exist', () => {
    should.exist(add)
  })

  it('should return 0 when given an empty string', () => {
    add('').should.equal(0)
  })

  it('should return the number when passed only one number', () => {
    add('1').should.equal(1)
  })

  it('should throw with "Negative numbers not allowed: -1."', () => {
    should.throw(() => add('-1'), 'Negative numbers not allowed: -1.')
  })

  it('should add two numbers', () => {
    add('1,1').should.equal(2)
  })

  it('should treat white space as a delimiter', () => {
    add('1 1').should.equal(2)
  })

  it('should accept a custom delimiter definition', () => {
    add('//[,]\n1,1').should.equal(2, 'custom delimiter: ,')
    add('//[-]\n1-1').should.equal(2, 'custom delimiter: -')
  })

  it('should accept custom delimiters with more than one character', () => {
    add('//[--]\n1--1').should.equal(2, 'custom delimiter: --')
    add('//[//]\n1//1').should.equal(2, 'custom delimiter: //')
  })

  it('should accept multiple custom delimiters', () => {
    add('//[--][#]\n1--1#1').should.equal(3, 'custom delimiters: -- and #')
  })
})
