function createBowlingGame () {
  const rolls = []
  let currentRoll = 0

  const isSpare = frameIndex => rolls[frameIndex] + rolls[frameIndex + 1] === 10

  return {
    roll: pins => {
      rolls[currentRoll] = pins
      currentRoll += 1
    },
    score: () => {
      let score = 0
      let frameIndex = 0
      for (let frame = 0; frame < 10; frame += 1) {
        if (isSpare(frameIndex)) {
          score += 10 + rolls[frameIndex + 2]
          frameIndex += 2
        } else {
          score += rolls[frameIndex] + rolls[frameIndex + 1]
          frameIndex += 2
        }
      }
      return score
    }
  }
}

module.exports = { createBowlingGame }
