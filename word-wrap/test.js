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

    describe.skip('single word tests', () => {
      it('should split word once', () => {
        wrap('galaxy', 5).should.equal('galax\ny')
      })
    })
  })
})
