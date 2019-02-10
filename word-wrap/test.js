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

  describe('no spaces', () => {
    it('should split a single word in two', () => {
      wrap('galaxy', 5).should.equal('galax\ny')
    })

    it('should split a single word in three', () => {
      wrap('galaxy', 2).should.equal('ga\nla\nxy')
    })
  })

  describe('one space', () => {
    it('should split when columns is at space', () => {
      wrap('far far', 4).should.equal('far\nfar')
    })

    it.skip('should split when columns is after space', () => {
      wrap('far far', 5).should.equal('far\nfar')
    })
  })
})
