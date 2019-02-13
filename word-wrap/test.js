const { wrap } = require('./word-wrap')

describe('word-wrap kata', () => {
  describe('wrap', () => {
    describe('degenerate tests', () => {
      it('should return empty string given an empty string', () => {
        wrap('', 1).should.equal('')
      })

      it('should not wrap given string with length < cols', () => {
        wrap('galaxy', 7).should.equal('galaxy')
      })
    })

    describe('split word tests', () => {
      it('should split a word with length greater than cols', () => {
        wrap('galaxy', 5).should.equal('galax\ny')
      })
    })
  })
})
