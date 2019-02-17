require('chai').should()

const { wrap } = require('./word-wrap')

describe('word-wrap kata', () => {
  describe('wrap', () => {
    describe('degenerate tests', () => {
      it('should return an empty string', () => {
        wrap('', 1).should.equal('')
      })

      it('should return single line', () => {
        wrap('galaxy far, far away', 21).should.equal('galaxy far, far away')
      })
    })

    describe('single word tests', () => {
      it('should split word', () => {
        wrap('galaxy', 5).should.equal('galax\ny')
      })

      it('should split word twice', () => {
        wrap('galaxy', 2).should.equal('ga\nla\nxy')
      })
    })
  })
})
