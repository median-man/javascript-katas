const { expect } = require('chai')
const add = require('./string-calculator.js')

describe('add', () => {
  it('is a function', () => expect(add).to.be.a('function'))

  describe('when custom delimeters are not used', () => {
    expectInputToReturn('1,1', 2)
    expectInputToReturn('1,2', 3)
    expectInputToReturn('2 1', 3)
    expectInputToReturn('1\n2', 3)
    expectInputToReturn('1,1,1', 3)
  })

  function expectInputToReturn (input, expected) {
    const msg = `"${input.replace('\n', '\\n')}" returns ${expected}`
    it(msg, () => expect(add(input)).to.equal(expected))
  }

  describe('when custom delimeters are used', () => {
    expectInputToReturn('//[a]\n1a1a1', 3)
    expectInputToReturn('//[aa]\n1aa1aa1', 3)
    expectInputToReturn('//[--][a]\n1--1a1', 3)
    expectInputToReturn('//[--][/]\n2--1/3', 6)
  })

  describe('when an argument is negative', () => {
    it('throws "negatives not allowed" when first agrument is negative', () => {
      expect(() => add('2, -1')).to.throw('negatives not allowed')
    })
  })

  describe('ignores numbers > 1000', () => {
    expectInputToReturn('1001,2', 2)
  })
})
