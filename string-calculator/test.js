const should = require('chai').should()
const { add } = require('./string-calculator')

describe('string-calculator.add', () => {
  describe('basic cases', () => {
    it('should exist', () => {
      should.exist(add)
    })

    it('should return 0 when given an empty string', () => {
      add('').should.equal(0)
    })

    it('should return sum for a single number', () => {
      add('1').should.equal(1)
    })

    it('should return sum for two numbers', () => {
      add('1,2').should.equal(3)
    })

    it('should treat new lines as a separator', () => {
      add('1\n2\n3,4').should.equal(10)
    })
  })

  describe('custom delimiters', () => {
    const testDelimiter = delimiter => {
      it(`should handle custom delimiter: "${delimiter}"`, () => {
        add(`//${delimiter}\n1${delimiter}2${delimiter}3`).should.equal(6)
      })
    }
    testDelimiter(',')
    testDelimiter('#')
    testDelimiter('+')
  })

  describe('custom delimiters with brackets', () => {
    it('should support custom delim. defined with "//[-]"', () => {
      add('//[-]\n1-2-3').should.equal(6)
    })

    it('should support custom delim. defined with "//[#-]"', () => {
      add('//[#-]\n1#-2#-3').should.equal(6)
    })

    it('should support custom delim. defined with "//[+$]"', () => {
      add('//[+$]\n1+$2+$3').should.equal(6)
    })

    it('should support multiple custom delimiters', () => {
      add('//[-+][$=]\n1$=2-+3').should.equal(6)
    })
  })

  describe('negative numbers', () => {
    const testNegatives = str => {
      it(`should throw with "Negative numbers not allowed: ${str}"`, () => {
        const expectedMessage = `Negative numbers not allowed: ${str}`
        should.throw(() => add(`${str}`), expectedMessage)
      })
    }
    testNegatives('-1')
    testNegatives('-2')
    testNegatives('-3,-4')
  })

  describe('range filter', () => {
    it('should ignore numbers > 1000', () => {
      add('2,3,1001').should.equal(5)
    })
  })
})
