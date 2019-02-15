require('chai').should()

const { wrap } = require('./word-wrap')

describe('word-wrap kata', () => {
  describe('wrap', () => {
    describe('degenerate tests', () => {
      it('should return empty string given an empty string', () => {
        wrap('', 1).should.equal('')
      })

      it('should not wrap given cols is >= string length', () => {
        wrap('galaxy', 6).should.equal('galaxy')
      })
    })
  })
})
