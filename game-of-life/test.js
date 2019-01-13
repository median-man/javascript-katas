require('chai').should()

const { nextGeneration } = require('./game-of-life')

describe('game-of-life kata', () => {
  describe('nextGeneration', () => {
    describe('1x1 grid', () => {
      it('should return dead cell when given a dead cell', () => {
        nextGeneration('.').should.equal('.')
      })
    })

    describe('1x2 grid', () => {
      it('should return ".." given "..', () => {
        nextGeneration('..').should.equal('..')
      })

      it('should return ".." given "*.', () => {
        nextGeneration('*.').should.equal('..')
      })
    })

    describe('1x3 grid', () => {
      it('should return ".*." given "***"', () => {
        nextGeneration('***').should.equal('.*.')
      })

      it('should return "..." given "*.*"', () => {
        nextGeneration('*.*').should.equal('...')
      })
    })

    describe('2x1 grid', () => {
      it('should return ".\\n." given ".\\n."', () => {
        nextGeneration('.\n.').should.equal('.\n.')
      })
    })

    describe('3x1 grid', () => {
      it('should return ".\\n*\\n." given "*\\n*\\n*"', () => {
        nextGeneration('*\n*\n*').should.equal('.\n*\n.')
      })
    })
  })
})
