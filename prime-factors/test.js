require('chai').should()

const { generate } = require('./primeFactors')

describe('Prim Factors Kata', () => {
  describe('generate', () => {
    it('should generate primes for 1', () => {
      generate(1).should.eql([])
    })

    it('should generate primes for 2', () => {
      generate(2).should.eql([2])
    })

    it('should generate primes for 3', () => {
      generate(3).should.eql([3])
    })

    it('should generate primes for 4', () => {
      generate(4).should.eql([2, 2])
    })

    it('should generate primes for 6', () => {
      generate(6).should.eql([2, 3])
    })

    it('should generate primes for 8', () => {
      generate(8).should.eql([2, 2, 2])
    })

    it('should generate primes for 9', () => {
      generate(9).should.eql([3, 3])
    })
  })
})
