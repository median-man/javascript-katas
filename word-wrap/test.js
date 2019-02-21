const { wrap } = require('./wrap')

require('chai').should()
describe('word-wrap kata', () => {
  describe('wrap', () => {
    describe('degenerate tests', () => {
      it('should return an empty string', () => {
        wrap('', 1).should.equal('')
      })
    })
  })
})
