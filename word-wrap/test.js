const should = require('chai').should()

const { wrap } = require('./word-wrap')

describe('word-wrap kata', () => {
  describe('wrap', () => {
    describe('degenerate cases', () => {
      it('should throw when first argument is not a string', () => {
        should.throw(() => wrap(0))
      })
    })

    describe('no line breaks', () => {
      it('should return an empty string given an empty string', () => {
        wrap('', 1).should.equal('')
      })

      it('should return a single line when line length <= columns', () => {
        const s = 'A long time ago in a galaxy far, far away....'
        wrap(s, 45).should.equal(s)
      })

      it('should return a single line when given a single word with length > columns', () => {
        const s = 'galaxy'
        wrap(s, 3).should.equal(s)
      })
    })

    describe('two words', () => {
      const INPUT = 'long time'
      const EXPECTED = 'long\ntime'

      it('should split when columns is equal to word length', () => {
        wrap(INPUT, 4).should.equal(EXPECTED)
      })

      it('should split when columns is equal to index of a space boundary', () => {
        wrap(INPUT, 5).should.equal(EXPECTED)
      })

      it('should split when columns fall in second word', () => {
        wrap(INPUT, 6).should.equal(EXPECTED)
      })
    })

    describe('three words', () => {
      // const INPUT = 'long time'
      // const EXPECTED = 'long\ntime'

      it('should split when columns is equal to length of first two words', () => {
        wrap('long time ago', 4).should.equal('long\ntime\nago')
      })

      // it('should split when columns is equal to index of a space boundary', () => {
      //   wrap(INPUT, 5).should.equal(EXPECTED)
      // })

      // it('should split when columns fall in second word', () => {
      //   wrap(INPUT, 6).should.equal(EXPECTED)
      // })
    })
  })
})
