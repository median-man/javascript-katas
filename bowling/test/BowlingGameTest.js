const should = require('chai').should()
const { createBowlingGame } = require('../src')

describe('BowlingGame', () => {
  describe('score', () => {
    let game
    beforeEach(() => {
      game = createBowlingGame()
    })

    const rollMany = (rolls, pins) => {
      for (let i = 0; i < rolls; i += 1) {
        game.roll(pins)
      }
    }

    it('should return 0 for a gutter game', () => {
      rollMany(20, 0)
      game.score().should.equal(0)
    })

    it('should return 20 when all rolls are for 1', () => {
      rollMany(20, 1)
      game.score().should.equal(20)
    })

    it('should score a spare', () => {
      game.roll(5)
      game.roll(5)
      game.roll(3) // spare
      rollMany(17, 0)
      game.score().should.equal(16)
    })
  })
})
