require('chai').should()

const { generate } = require('./primeFactors')

describe('prime factors kata', () => {
  describe('generate', () => {
    it('should return prime factors for 1', () => {
      generate(1).should.eql([])
    })

    it('should return prime factors for 2', () => {
      generate(2).should.eql([2])
    })

    it('should return prime factors for 3', () => {
      generate(3).should.eql([3])
    })

    it('should return prime factors for 4', () => {
      generate(4).should.eql([2, 2])
    })
  })
})
