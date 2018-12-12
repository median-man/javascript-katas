require('chai').should()
const { createBowlingGame } = require('./bowling-game')

describe('bowling game', () => {
  let game

  beforeEach(() => {
    game = createBowlingGame()
  })

  const rollMany = (n, pins) => {
    for (let i = 0; i < n; i += 1) {
      game.roll(pins)
    }
  }

  it('score should return 0 for a gutter game', () => {
    rollMany(20, 0)
    game.score().should.equal(0)
  })

  it('score should return 20 when all ones are rolled', () => {
    rollMany(20, 1)
    game.score().should.equal(20)
  })

  const rollSpare = () => {
    game.roll(5)
    game.roll(5)
  }

  it('should score one spare', () => {
    rollSpare()
    game.roll(3)
    rollMany(17, 0)
    game.score().should.equal(16)
  })
})
