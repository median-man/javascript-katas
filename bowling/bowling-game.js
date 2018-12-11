function createBowlingGame () {
  let score = 0
  const rolls = []

  return {
    roll: pins => {
      rolls.push(pins)
      return (score += pins)
    },
    score: () => {
      let score = 0
      for (let i = 0; i < rolls.length; i += 1) {
        score += rolls[i]
      }
      return score
    }
  }
}

module.exports = { createBowlingGame }
