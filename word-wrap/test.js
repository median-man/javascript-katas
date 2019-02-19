require('chai').should()

const { wrap } = require('./wrap')

describe('word-wrap kata', () => {
  describe('wrap', () => {
    describe('degenerate tests', () => {
      it('should return an empty string', () => {
        wrap('', 1).should.equal('')
      })

      it('should not wrap given cols > string length', () => {
        wrap('galaxy far, far away', 21).should.equal('galaxy far, far away')
      })
    })

    describe('single word tests', () => {
      it('should return two lines', () => {
        wrap('galaxy', 5).should.equal('galax\ny')
      })

      it('should return three lines', () => {
        wrap('galaxy', 2).should.equal('ga\nla\nxy')
      })
    })

    describe('word boundary tests', () => {
      it('should split on space when cols is at space', () => {
        wrap('galaxy far', 7).should.equal('galaxy\nfar')
      })

      it('should ...', () => {})
    })
  })
})
