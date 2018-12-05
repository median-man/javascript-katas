const should = require('chai').should()
const { add } = require('./string-calculator')

describe('string-calculator.add', () => {
  it('should exist', () => {
    should.exist(add)
  })

  const shouldReturnGivenTest = (expected, input, skip = false) => {
    const fn = skip ? it.skip : it
    return fn(
      `should return ${expected} given "${input.replace(/\n/g, '\\n')}"`,
      () => {
        add(input).should.equal(expected)
      }
    )
  }

  describe('basic csv', () => {
    shouldReturnGivenTest(0, '')
    shouldReturnGivenTest(1, '1')
    shouldReturnGivenTest(3, '1,2')
    shouldReturnGivenTest(6, '1,2\n3')
  })

  describe('custom separator', () => {
    shouldReturnGivenTest(6, '//,\n1,2,3')
    shouldReturnGivenTest(6, '//#\n1#2#3')

    // checks a special regexp character for the separator
    shouldReturnGivenTest(6, '//+\n1+2+3')
  })

  describe('negative values', () => {
    it('should throw with "Negatives not allowed: -1"', () => {
      should.throw(() => add('-1'), 'Negatives not allowed: -1')
    })
    it('should throw with "Negatives not allowed: -1,-3"', () => {
      should.throw(() => add('-1,-3'), 'Negatives not allowed: -1,-3')
    })
  })

  describe('ignore numbers', () => {
    shouldReturnGivenTest(1, '//+\n1+1001')
    shouldReturnGivenTest(1001, '//+\n1+1000')
  })

  describe('extended separators', () => {
    shouldReturnGivenTest(6, '//[--]\n1--2--3', true)
  })
})
