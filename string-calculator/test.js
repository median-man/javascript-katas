const should = require('chai').should()
const { add } = require('./string-calculator')

describe('string-calculator.add', () => {
  it('should exist', () => {
    should.exist(add)
  })

  describe('basic csv', () => {
    const shouldReturnGivenTest = (expected, input) =>
      it(`should return ${expected} given "${input}"`, () => {
        add(input).should.equal(expected)
      })

    shouldReturnGivenTest(0, '')
    shouldReturnGivenTest(1, '1')
    shouldReturnGivenTest(3, '1,2')
    shouldReturnGivenTest(6, '1,2\n3')
  })

  describe('custom separator', () => {
    it(' "//,\\n1,2,3" should return 6', () => {
      add('//,\n1,2,3').should.equal(6)
    })

    xit(' "//#\\n1#2#3" should return 6', () => {
      add('//#\n1#2#3').should.equal(6)
    })
  })
})
