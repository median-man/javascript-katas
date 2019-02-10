require('chai').should()

const { wrap } = require('./word-wrap')

describe('word-wrap kata', () => {
  describe('degenerate tests', () => {
    it('should return empty string given "" and 1', () => {
      wrap('', 1).should.equal('')
    })
  })
})
