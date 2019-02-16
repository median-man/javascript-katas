require('chai').should()

const { wrap } = require('./word-wrap')

describe('word-wrap kata', () => {
  describe('wrap', () => {
    describe('degenerate tests', () => {
      it('should return an empty string given an empty string', () => {
        wrap('', 1).should.equal('')
      })

      it('should not wrap given string shorter than cols', () => {
        wrap('galaxy far, far away', 21).should.equal('galaxy far, far away')
      })
    })

    describe('single word tests', () => {
      it('should split word once', () => {
        wrap('galaxy', 5).should.equal('galax\ny')
      })

      it('should split word multiple times', () => {
        wrap('galaxy', 2).should.equal('ga\nla\nxy')
      })
    })

    describe('word boundary tests', () => {
      it('should split when cols is at a boundary', () => {
        wrap('galaxy far', 7).should.equal('galaxy\nfar')
      })

      it('should split when cols is after a boundary', () => {
        wrap('galaxy far', 8).should.equal('galaxy\nfar')
      })

      it('should split on multiple boundaries', () => {
        wrap('far, far away', 6).should.equal('far,\nfar\naway')
      })
    })
  })
})
