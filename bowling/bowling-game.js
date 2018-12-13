function createBowlingGame () {
  const rolls = []

  const isSpare = frameIndex => rolls[frameIndex] + rolls[frameIndex + 1] === 10
  const isStrike = frameIndex => rolls[frameIndex] === 10

  const sumOfRollsInFrame = frameIndex => rolls[frameIndex] + rolls[frameIndex + 1]
  const spareBonus = frameIndex => rolls[frameIndex + 2]

  return {
    roll: pins => {
      rolls.push(pins)
    },
    score: () => {
      let score = 0
      let frameIndex = 0
      for (let frame = 0; frame < 10; frame += 1) {
        if (isStrike(frameIndex)) {
          score += 10 + sumOfRollsInFrame(frameIndex + 1)
          frameIndex += 1
        } else if (isSpare(frameIndex)) {
          score += 10 + spareBonus(frameIndex)
          frameIndex += 2
        } else {
          score += sumOfRollsInFrame(frameIndex)
          frameIndex += 2
        }
      }
      return score
    }
  }
}

module.exports = { createBowlingGame }
