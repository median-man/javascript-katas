const { expect } = require('chai')
const { createBowlingGame } = require('../src')

describe('BowlingGame', () => {
  let game
  beforeEach(() => {
    game = createBowlingGame()
  })

  function rollMany (rollCount, pins) {
    for (let int = 0; int < rollCount; int += 1) {
      game.roll(pins)
    }
  }

  describe('when no points are scored (gutter game)', () => {
    it('score() should return 0', () => {
      rollMany(20, 0)
      expect(game.score()).to.equal(0)
    })
  })

  describe('when 1 point is scored on every roll', () => {
    it('score() should return 20', () => {
      rollMany(20, 1)
      expect(game.score()).to.equal(20)
    })
  })

  const rollSpare = () => rollMany(2, 5)
  describe('when a spare is scored', () => {
    it('score() should return 16', () => {
      rollSpare()
      game.roll(3)
      rollMany(17, 0)
      expect(game.score()).to.equal(16)
    })
  })

  const rollStrike = () => game.roll(10)
  describe('when a strike is scored', () => {
    it('score() should return 24', () => {
      rollStrike()
      game.roll(3)
      game.roll(4)
      rollMany(16, 0)
      expect(game.score()).to.equal(24)
    })
  })

  describe('when a perfect game is scored (all strikes)', () => {
    it('score() should return 300', () => {
      rollMany(12, 10)
      expect(game.score()).to.equal(300)
    })
  })
})
