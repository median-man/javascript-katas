function createBowlingGame () {
  const rolls = []
  return {
    roll: pins => rolls.push(pins),
    score: () => {
      let score = 0
      let i = 0
      for (let frame = 0; frame < 10; frame += 1) {
        if (rolls[i] + rolls[i + 1] === 10) {
          score += 10 + rolls[i + 2] // spare
          i += 2
        } else {
          score += rolls[i] + rolls[i + 1]
          i += 2
        }
      }
      return score
    }
  }
}

module.exports = { createBowlingGame }
