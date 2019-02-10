require('chai').should()

const { wrap } = require('./word-wrap')

describe('word-wrap kata', () => {
  describe('does not wrap', () => {
    it('should return empty string given "" and 1', () => {
      wrap('', 1).should.equal('')
    })

    it('should not wrap when string length >= than columns', () => {
      wrap('galaxy', 6).should.equal('galaxy', 'length is equal')
      wrap('galaxy', 7).should.equal('galaxy', 'length is greater')
    })
  })

  describe('two lines', () => {
    it('should wrap words longer than columns', () => {
      wrap('galaxy', 5).should.equal('galax\ny')
    })
  })
})
