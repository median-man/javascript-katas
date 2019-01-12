require('chai').should()

const { nextGeneration } = require('./game-of-life')

describe('game-of-life kata', () => {
  describe('nextGeneration', () => {
    describe('1x1 grid', () => {
      it('should return dead cell when given a dead cell', () => {
        nextGeneration('.').should.equal('.')
      })
    })
  })
})
