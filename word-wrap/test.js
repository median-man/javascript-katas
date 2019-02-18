require('chai').should()

const { wrap } = require('./wrap')

describe('word-wrap kata', () => {
  describe('wrap', () => {
    describe('degenerate tests', () => {
      it('should return an empty string', () => {
        wrap('', 1).should.equal('')
      })

      it('should not wrap string given cols > length', () => {
        wrap('galaxy far, far away', 21).should.equal('galaxy far, far away')
      })
    })

    describe('single word tests', () => {
      it('should split word', () => {
        wrap('galaxy', 5).should.equal('galax\ny')
      })

      it('should split word twice', () => {
        wrap('galaxy', 2).should.equal('ga\nla\nxy')
      })
    })

    describe('word boundary tests', () => {
      it.skip('should split when cols is on word boundary', () => {
        wrap('galaxy far', 7).should.equal('galaxy\nfar')
      })

      // it('should ...', () => {})
    })
  })
})
