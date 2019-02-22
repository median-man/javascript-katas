require('chai').should()

const { wrap } = require('./wrap')

describe('word-wrap kata', () => {
  describe('wrap', () => {
    describe('degenerate tests', () => {
      it('should return empty string', () => {
        wrap('', 1).should.equal('')
      })

      it('should return a single line', () => {
        wrap('galaxy far, far away', 20).should.equal('galaxy far, far away')
      })
    })

    describe('single word tests', () => {
      it('should split once', () => {
        wrap('galaxy', 5).should.equal('galax\ny')
      })

      it('should split twice', () => {
        wrap('galaxy', 2).should.equal('ga\nla\nxy')
      })
    })

    describe('word boundary tests', () => {
      it('should split when cols at space', () => {
        wrap('galaxy far', 7).should.equal('galaxy\nfar')
      })

      it('should split when cols is after space', () => {
        wrap('galaxy far', 8).should.equal('galaxy\nfar')
      })
    })
  })
})
