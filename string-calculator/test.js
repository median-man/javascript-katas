const should = require('chai').should()
const { add } = require('./string-calculator')

describe('string-calculator: add', () => {
  const addShouldReturnGiven = (expected, input) => {
    it(`should return ${expected} given "${input.replace('\n', '\\n')}"`, () => {
      add(input).should.equal(expected)
    })
  }

  describe('basic tests', () => {
    it('should exist', () => {
      should.exist(add)
    })

    addShouldReturnGiven(0, '')
    addShouldReturnGiven(1, '1')
    addShouldReturnGiven(2, '1,1')
    addShouldReturnGiven(4, '1\n2,1')
  })

  describe('one character custom delimiter', () => {
    addShouldReturnGiven(4, '//,\n1,2,1')
    addShouldReturnGiven(4, '//#\n1#2#1')
    addShouldReturnGiven(4, '//+\n1+2+1')
  })

  describe('negative numbers', () => {
    it.skip('should throw with "Negatives not allowed: -1", given "-1"', () => {
      should.throw(() => add('-1'), 'Negatives not allowed: -1')
    })
  })
})
