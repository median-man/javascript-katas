require('chai').should()

const { wrap } = require('./word-wrap')

describe('word-wrap kata', () => {
  describe('wrap', () => {
    describe('degenerate tests', () => {
      it('should return an empty string given s == "" and cols = 1', () => {
        wrap('', 1).should.equal('')
      })

      it('should return one line give s is shorter than cols', () => {
        wrap('galaxy', 10).should.equal('galaxy')
      })
    })
    describe('split word tests', () => {
      it('should split a word in two', () => {
        wrap('galaxy', 3).should.equal('gal\naxy')
      })
    })
  })
})
