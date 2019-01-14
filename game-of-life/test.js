require('chai').should()

const { nextGeneration } = require('./game-of-life')

describe('game-of-life kata', () => {
  describe('nextGeneration', () => {
    it('should return empty string given undefined', () => {
      nextGeneration().should.equal('')
    })

    it('should return dead cell given "."', () => {
      nextGeneration('.').should.equal('.')
    })

    it('should return all dead cells given all dead cells', () => {
      const allDead = [
        '*..',
        '...',
        '...'
      ].join('\n')
      nextGeneration(allDead).should.equal(allDead)
    })

    it.skip('should return dead cells for cells with no live neighbors', () => {
      const previous = [
        '*..',
        '...',
        '...'
      ].join('\n')
      const expected = [
        '...',
        '...',
        '...'
      ].join('\n')
      nextGeneration(previous).should.equal(expected)
    })
  })
})
