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
  })
})
