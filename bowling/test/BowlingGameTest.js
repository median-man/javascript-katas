const { expect } = require('chai');
const { createBowlingGame } = require('../src');

describe('bowling game', () => {
  let game;
  beforeEach(() => {
    game = createBowlingGame();
  });

  const rollMany = (rolls, pins) => {
    for (let i = 0; i < rolls; i += 1) {
      game.roll(pins);
    }
  };

  describe('when no pins are knocked down', () => {
    it('score() should return 0', () => {
      rollMany(20, 0);
      expect(game.score()).to.equal(0);
    });
  });

  describe('when every roll knocks 1 pin down', () => {
    it('score() should return 20', () => {
      rollMany(20, 1);
      expect(game.score()).to.equal(20);
    });
  });

  describe('when one spare is scored', () => {
    const rollSpare = () => rollMany(2, 5);

    it('score() should return 16', () => {
      rollSpare();
      game.roll(3);
      rollMany(17, 0);
      expect(game.score()).to.equal(16);
    });
  });

  describe('when one strike is scored', () => {
    const rollStrike = () => game.roll(10);

    it('score() should return 24', () => {
      rollStrike();
      game.roll(3);
      game.roll(4);
      rollMany(16, 0);
      expect(game.score()).to.equal(24);
    });
  });

  describe('when a perfect game is scored', () => {
    it('score() should return 300', () => {
      rollMany(12, 10);
      expect(game.score()).to.equal(300);
    });
  });
});
