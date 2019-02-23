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
  })
})
