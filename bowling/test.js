require('chai').should()
const { createBowlingGame } = require('./bowling-game')

describe('bowling game', () => {
  it('should score a gutter game', () => {
    const game = createBowlingGame()
    for (let i = 0; i < 20; i += 1) {
      game.roll(0)
    }
    game.score().should.equal(0)
  })

  it('should score all ones rolled', () => {
    const game = createBowlingGame()
    for (let i = 0; i < 20; i += 1) {
      game.roll(1)
    }
    game.score().should.equal(20)
  })
})
