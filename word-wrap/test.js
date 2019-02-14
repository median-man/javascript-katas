require('chai').should()

const { wrap } = require('./word-wrap')

describe('word-wrap kata', () => {
  describe('wrap', () => {
    describe('degenerate tests', () => {
      it('should return empty string given an empty string', () => {
        wrap('', 1).should.equal('')
      })

      it('should not split a string shorter than given cols', () => {
        wrap('galaxy far, far', 16).should.equal('galaxy far, far')
      })
    })

    describe('single word tests', () => {
      it('should split a single word once', () => {
        wrap('galaxy', 5).should.equal('galax\ny')
      })

      it('should split a single word multiple times', () => {
        wrap('galaxy', 2).should.equal('ga\nla\nxy')
      })
    })

    describe('two word tests', () => {
      it('should split when cols is at word boundary', () => {
        wrap('far, far', 5).should.equal('far,\nfar')
      })

      it('should split when cols is after word boundary', () => {
        wrap('far, far', 6).should.equal('far,\nfar')
      })

      it('should split when cols is before word boundary', () => {
        wrap('far, far', 4).should.equal('far,\nfar')
      })

      it('should split words when cols is shorter than word', () => {
        wrap('far, far', 2).should.equal('fa\nr,\nfa\nr')
      })
    })
  })
})
