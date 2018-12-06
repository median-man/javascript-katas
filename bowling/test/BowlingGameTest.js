/*
Game
roll(pins: int)
score(): int // sum of scores from each fram

Frame
- score(): int // sum of rolls. spare or strike score depends on next frame
- rolls // 1 or 2

TenthFrame
- rolls // 2 or 3

Roll
- pins: int
*/
const should = require('chai').should()
const { createBowlingGame } = require('../src')

describe('BowlingGame', () => {
  let game
  beforeEach(() => {
    game = createBowlingGame()
  })

  const rollMany = (rollCount, pins) => {
    for (let i = 0; i < rollCount; i += 1) {
      game.roll(pins)
    }
  }

  it('score() should return 0 for a gutter game', () => {
    rollMany(20, 0)
    game.score().should.equal(0)
  })

  it('score() should return 20 when all rolls are 1', () => {
    rollMany(20, 1)
    game.score().should.equal(20)
  })

  it('should score a spare', () => {
    rollSpare()
    game.roll(3)
    rollMany(17, 0)
    game.score().should.equal(16)
  })

  it('should score a strike', () => {
    rollStrike()
    game.roll(3)
    game.roll(4)
    rollMany(16, 0)
    game.score().should.equal(24)
  })

  it('should score all strikes', () => {
    rollMany(12, 10)
    game.score().should.equal(300)
  })

  function rollStrike () {
    game.roll(10)
  }

  function rollSpare () {
    rollMany(2, 5)
  }
})
