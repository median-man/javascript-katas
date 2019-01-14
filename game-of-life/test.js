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
  })
})
