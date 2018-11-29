const should = require('chai').should()
const { add } = require('./string-calculator')

describe('string-calculator: add', () => {
  const addShouldReturnGiven = (expected, input) => {
    it(`should return ${expected} given "${input.replace(
      '\n',
      '\\n'
    )}"`, () => {
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
    function shouldThrowWith (input, message) {
      it(`should throw with "${message}", given "${input}"`, () => {
        should.throw(() => add(input), message)
      })
    }

    shouldThrowWith('-1', 'Negatives not allowed: -1')
    shouldThrowWith('-2', 'Negatives not allowed: -2')
    shouldThrowWith('-1,-2', 'Negatives not allowed: -1, -2')
  })

  describe('range: 0 to 1000 inclusive', () => {
    addShouldReturnGiven(1, '1,1001')
  })

  describe('extended custom delimiters', () => {
    addShouldReturnGiven(4, '//[-]\n1-2-1')
    addShouldReturnGiven(4, '//[-#]\n1-#2-#1')
    addShouldReturnGiven(4, '//[-][#]\n1#2-1')
  })
})
