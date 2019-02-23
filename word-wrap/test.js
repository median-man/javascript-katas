require('chai').should()

const { wrap } = require('./wrap')

describe('word-wrap kata', () => {
  describe('wrap', () => {
    describe('degenerate tests', () => {
      it('should return an empty string', () => {
        wrap('', 1).should.equal('')
      })

      it('should not wrap', () => {
        wrap('galaxy far, far away', 20).should.equal('galaxy far, far away')
      })
    })

    describe('single word tests', () => {
      it('should wrap once', () => {
        wrap('galaxy', 5).should.equal('galax\ny')
      })

      it('should wrap twice', () => {
        wrap('galaxy', 2).should.equal('ga\nla\nxy')
      })
    })
  })
})
