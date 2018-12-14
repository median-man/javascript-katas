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

  it('should score a gutter game', () => {
    rollMany(20, 0)
    game.score().should.equal(0)
  })

  it('should score all ones rolled', () => {
    rollMany(20, 1)
    game.score().should.equal(20)
  })

  it.skip('should score one spare', () => {
    game.roll(5)
    game.roll(5) // spare rolled
    game.roll(3)
    rollMany(17, 0)
    game.score().should.equal(16)
  })
})
