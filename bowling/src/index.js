function createBowlingGame () {
  const rolls = []
  let currentRoll = 0

  const isSpare = rollIndex => rolls[rollIndex] + rolls[rollIndex + 1] === 10
  const isStrike = rollIndex => rolls[rollIndex] === 10

  const strikeBonus = rollIndex => rolls[rollIndex + 1] + rolls[rollIndex + 2]
  const spareBonus = rollIndex => rolls[rollIndex + 2]
  const frameSum = rollIndex => rolls[rollIndex] + rolls[rollIndex + 1]

  return {
    roll: pins => {
      rolls[currentRoll] = pins
      currentRoll += 1
    },
    score: () => {
      let score = 0
      let rollIndex = 0
      for (let frame = 0; frame < 10; frame += 1) {
        if (isStrike(rollIndex)) {
          score += 10 + strikeBonus(rollIndex)
          rollIndex += 1
        } else if (isSpare(rollIndex)) {
          score += 10 + spareBonus(rollIndex)
          rollIndex += 2
        } else {
          score += frameSum(rollIndex)
          rollIndex += 2
        }
      }
      return score
    }
  }
}

module.exports = { createBowlingGame }
