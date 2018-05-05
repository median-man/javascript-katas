const { expect } = require('chai');
const createBowlingGame = require('../src');

describe('BowlingGame', () => {
  let game;
  beforeEach(() => {
    game = createBowlingGame();
  });

  const rollMany = (rollCount, pins) => {
    for (let roll = 0; roll < rollCount; roll += 1) {
      game.roll(pins);
    }
  };

  describe('a gutterGame', () => {
    it('score() should be 0', () => {
      rollMany(20, 0);
      expect(game.score()).to.equal(0);
    });
  });

  describe('when every roll scores one pin', () => {
    it('score() should be 20', () => {
      rollMany(20, 1);
      expect(game.score()).to.equal(20);
    });
  });


  describe('when there is one spare', () => {
    const rollSpare = () => {
      game.roll(5);
      game.roll(5);
    };

    it('score() should be 16', () => {
      rollSpare();
      game.roll(3);
      rollMany(17, 0);
      expect(game.score()).to.equal(16);
    });
  });

  describe('when there is one strike', () => {
    const rollStrike = () => {
      game.roll(10);
    };

    it('score() should be 24', () => {
      rollStrike();
      game.roll(3);
      game.roll(4);
      rollMany(16, 0);
      expect(game.score()).to.equal(24);
    });
  });

  describe('a perfect game', () => {
    it('score should be 300', () => {
      rollMany(12, 10);
      expect(game.score()).to.equal(300);
    });
  });
});
