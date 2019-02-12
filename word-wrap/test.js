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

      it('should split a word into multiple lines', () => {
        wrap('galaxy', 2).should.equal('ga\nla\nxy')
      })
    })

    describe('wrap two words', () => {
      it('should split when columns is at word boundary', () => {
        wrap('far far', 4).should.equal('far\nfar')
      })

      it('should split when columns is after word boundary', () => {
        wrap('far far', 5).should.equal('far\nfar')
      })
    })
  })
})
