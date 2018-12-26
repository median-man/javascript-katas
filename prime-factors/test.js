require('chai').should()

const { generate } = require('./primeFactors')

describe('prime factors kata', () => {
  describe('generate', () => {
    it('should return no factors for 1', () => {
      generate(1).should.eql([])
    })

    it('should return factors for 2', () => {
      generate(2).should.eql([2])
    })

    it('should return factors for 3', () => {
      generate(3).should.eql([3])
    })

    it('should return factors for 4', () => {
      generate(4).should.eql([2, 2])
    })

    it('should return factors for 6', () => {
      generate(6).should.eql([2, 3])
    })

    it('should return factors for 8', () => {
      generate(8).should.eql([2, 2, 2])
    })

    it('should return factors for 9', () => {
      generate(9).should.eql([3, 3])
    })
  })
})
