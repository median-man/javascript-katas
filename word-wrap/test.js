const should = require('chai').should()

const { wrap } = require('./word-wrap')

describe('word-wrap kata', () => {
  describe('wrap', () => {
    it('should throw when first argument is not a string', () => {
      should.throw(() => wrap(0))
    })

    it('should return an empty string given an empty string', () => {
      wrap('', 1).should.equal('')
    })

    it('should return a single line when line length <= columns', () => {
      wrap('A long time ago in a galaxy far, far away....', 45).should.equal(
        'A long time ago in a galaxy far, far away....'
      )
    })
  })
})
