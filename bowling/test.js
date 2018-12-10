require('chai').should()
const { createBowlingGame } = require('./bowling-game')

describe('bowling game', () => {
  it('score should return 0 for a gutter game', () => {
    const game = createBowlingGame()
    for (let i = 0; i < 20; i += 1) {
      game.roll(0)
    }
    game.score().should.equal(0)
  })
})
