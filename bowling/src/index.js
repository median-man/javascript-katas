/* eslint func-names: off */
function createBowlingGame() {
  const rolls = [];

  const roll = (pins) => {
    rolls.push(pins);
  };

  const isStrike = frameIndex => rolls[frameIndex] === 10;
  const strikeBonus = frameIndex => rolls[frameIndex + 1] + rolls[frameIndex + 2];
  const isSpare = frameIndex => rolls[frameIndex] + rolls[frameIndex + 1] === 10;
  const spareBonus = frameIndex => rolls[frameIndex + 2];
  const sumOfBallsInFrame = frameIndex => rolls[frameIndex] + rolls[frameIndex + 1];

  const score = () => {
    let points = 0;
    let frameIndex = 0;

    for (let frame = 0; frame < 10; frame += 1) {
      if (isStrike(frameIndex)) {
        points += 10 + strikeBonus(frameIndex);
        frameIndex += 1;
      } else if (isSpare(frameIndex)) {
        points += 10 + spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        points += sumOfBallsInFrame(frameIndex);
        frameIndex += 2;
      }
    }

    return points;
  };

  return { roll, score };
}
module.exports = createBowlingGame;
