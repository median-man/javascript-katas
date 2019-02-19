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
  })
})
