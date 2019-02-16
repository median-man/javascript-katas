require('chai').should()

const { wrap } = require('./word-wrap')

describe('word-wrap kata', () => {
  describe('wrap', () => {
    describe('degenerate tests', () => {
      it('should return an empty string given an empty string', () => {
        wrap('', 1).should.equal('')
      })

      // it('should return an empty string given an empty string', () => {
      //   wrap('', 1).should.equal('')
      // })
    })
  })
})
