const should = require('chai').should()
const { createBowlingGame } = require('./bowling-game')

describe('BowlingGame', () => {
  let game

  beforeEach(() => {
    game = createBowlingGame()
  })

  const rollMany  = (count, pins) => {
    for (let i = 0; i < count; i += 1) {
      game.roll(pins)
    }
  }

  it('gutter game score should be 0', () => {
    rollMany(20, 0)
    game.score().should.equal(0)
  })

  it('score should be 20 when all ones are rolled', () => {
    rollMany(20, 1)
    game.score().should.equal(20)
  })

  const rollSpare = () => rollMany(2, 5)

  it('should calculate score when one spare is rolled', () => {
    rollSpare()
    game.roll(3)
    rollMany(17, 0)
    game.score().should.equal(16)
  })
})
