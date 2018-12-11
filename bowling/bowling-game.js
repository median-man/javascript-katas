function createBowlingGame () {
  const rolls = []

  function score () {
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

  function isSpare (frameIndex) {
    return rolls[frameIndex] + rolls[frameIndex + 1] === 10
  }
  return {
    roll: pins => {
      rolls.push(pins)
    },
    score
  }
}

module.exports = { createBowlingGame }
