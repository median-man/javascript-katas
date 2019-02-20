const { wrap } = require('./wrap')

require('chai').should()

describe('word-wrap kata', () => {
  describe('wrap', () => {
    describe('degenerate tests', () => {
      it('should return empty string', () => {
        wrap('', 1).should.equal('')
      })

      it('should one line', () => {
        wrap('galaxy far, far away', 29).should.equal('galaxy far, far away')
      })
    })

    describe('single word tests', () => {
      it('should split word once', () => {
        wrap('galaxy', 5).should.equal('galax\ny')
      })

      it.skip('should ...', () => {})
    })
  })
})
