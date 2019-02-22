require('chai').should()

const { wrap } = require('./wrap')

describe('word-wrap kata', () => {
  describe('wrap', () => {
    describe('degenerate tests', () => {
      it('should return empty string', () => {
        wrap('', 1).should.equal('')
        wrap(1, '').should.equal('')
      })
    })
  })
})
