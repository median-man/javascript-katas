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
      it('should split a single word', () => {
        wrap('galaxy', 5).should.equal('galax\ny')
      })
    })
  })
})
