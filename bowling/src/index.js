function createBowlingGame() {
  const rolls = [];

  const isStrike = frameIndex => rolls[frameIndex] === 10;
  const strikeBonus = frameIndex => rolls[frameIndex + 1] + rolls[frameIndex + 2];

  const isSpare = frameIndex => rolls[frameIndex] + rolls[frameIndex + 1] === 10;
  const spareBonus = frameIndex => rolls[frameIndex + 2];

  const sumOfRollsInFrame = frameIndex => rolls[frameIndex] + rolls[frameIndex + 1];

  return {
    roll(pins) {
      rolls.push(pins);
    },

    score() {
      const allPins = 10;
      const frameCount = 10;

      let score = 0;
      let frameIndex = 0;

      for (let frame = 0; frame < frameCount; frame += 1) {
        if (isStrike(frameIndex)) {
          score += allPins + strikeBonus(frameIndex);
          frameIndex += 1;
        } else if (isSpare(frameIndex)) {
          score += allPins + spareBonus(frameIndex);
          frameIndex += 2;
        } else {
          score += sumOfRollsInFrame(frameIndex);
          frameIndex += 2;
        }
      }
      return score;
    },
  };
}

module.exports = { createBowlingGame };
